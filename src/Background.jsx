import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Restored from the previously deployed particle and wireframe scene.
export default function Background() {
  const host = useRef(null);

  useEffect(() => {
    const element = host.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000);
    camera.position.z = 22;
    let renderer;
    let fallbackContext;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      // Keep the same scene visible when graphics acceleration is unavailable.
      const canvas = document.createElement('canvas');
      fallbackContext = canvas.getContext('2d');
      renderer = {
        domElement: canvas,
        setPixelRatio() {},
        setSize(width, height) { canvas.width = width; canvas.height = height; },
        render() {},
        dispose() {},
      };
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    element.appendChild(renderer.domElement);
    const positions = new Float32Array(90);
    const velocities = new Float32Array(90);
    const bounds = [18, 12, 9];
    for (let i = 0; i < 90; i++) {
      positions[i] = (Math.random() - 0.5) * bounds[i % 3] * 2;
      velocities[i] = (Math.random() - 0.5) * 0.006 * (i % 3 === 2 ? 0.5 : 1);
    }
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(pointGeometry, new THREE.PointsMaterial({ size: 0.14, color: '#38bdf8', transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    scene.add(points);
    const lines = new Float32Array(80 * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(lines, 3));
    const connections = new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({ color: '#38bdf8', transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false }));
    scene.add(connections);
    const shapes = [
      [new THREE.IcosahedronGeometry(3.2, 0), [-14, 6, -16], '#38bdf8', 0.12],
      [new THREE.OctahedronGeometry(2.6, 0), [13, -5, -14], '#818cf8', 0.1],
      [new THREE.TetrahedronGeometry(3.4, 0), [9, 9, -18], '#38bdf8', 0.09],
      [new THREE.IcosahedronGeometry(2.2, 1), [-12, -8, -15], '#818cf8', 0.1],
      [new THREE.DodecahedronGeometry(2.8, 0), [2, -10, -20], '#38bdf8', 0.08],
    ].map(([geometry, position, color, opacity]) => {
      const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity, depthWrite: false }));
      mesh.position.set(...position);
      scene.add(mesh);
      return mesh;
    });
    const pointer = { x: 0, y: 0 };
    const edges = shapes.map(mesh => new THREE.EdgesGeometry(mesh.geometry));
    const project = (x, y, z, matrix) => {
      const point = new THREE.Vector3(x, y, z);
      if (matrix) point.applyMatrix4(matrix);
      point.project(camera);
      return [(point.x + 1) * innerWidth / 2, (1 - point.y) * innerHeight / 2];
    };
    const drawFallback = count => {
      const ctx = fallbackContext;
      if (!ctx) return;
      camera.updateMatrixWorld();
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.strokeStyle = '#38bdf8';
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        ctx.moveTo(...project(...lines.subarray(i * 6, i * 6 + 3)));
        ctx.lineTo(...project(...lines.subarray(i * 6 + 3, i * 6 + 6)));
      }
      ctx.stroke();
      ctx.fillStyle = '#38bdf8';
      ctx.globalAlpha = 0.95;
      for (let i = 0; i < 30; i++) {
        const [x, y] = project(...positions.subarray(i * 3, i * 3 + 3));
        ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
      }
      shapes.forEach((mesh, i) => {
        mesh.updateMatrixWorld();
        const vertices = edges[i].attributes.position.array;
        ctx.strokeStyle = '#' + mesh.material.color.getHexString();
        ctx.globalAlpha = mesh.material.opacity;
        ctx.beginPath();
        for (let j = 0; j < vertices.length; j += 6) {
          ctx.moveTo(...project(...vertices.subarray(j, j + 3), mesh.matrixWorld));
          ctx.lineTo(...project(...vertices.subarray(j + 3, j + 6), mesh.matrixWorld));
        }
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    };
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const move = event => { pointer.x = event.clientX / innerWidth * 2 - 1; pointer.y = 1 - event.clientY / innerHeight * 2; };
    const resize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    const start = performance.now();
    let frame;
    const render = () => {
      const elapsed = (performance.now() - start) / 1000;
      if (!motion.matches) {
        for (let i = 0; i < 90; i++) {
          positions[i] += velocities[i];
          if (Math.abs(positions[i]) > bounds[i % 3]) velocities[i] *= -1;
        }
        shapes.forEach((mesh, i) => {
          mesh.rotation.set(elapsed * (0.07 + i * 0.018) * (i % 2 === 0 ? 1 : -1), elapsed * (0.05 + i * 0.013), elapsed * 0.03 * (i % 3 === 0 ? 1 : -0.6));
        });
        camera.position.x += (pointer.x * 2.2 - camera.position.x) * 0.025;
        camera.position.y += (pointer.y * 1.6 - camera.position.y) * 0.025;
      }
      pointGeometry.attributes.position.needsUpdate = true;
      let count = 0;
      outer: for (let i = 0; i < 30; i++) for (let j = i + 1; j < 30; j++) {
        if (count >= 80) break outer;
        const distance = [0, 1, 2].reduce((sum, axis) => sum + (positions[i * 3 + axis] - positions[j * 3 + axis]) ** 2, 0);
        if (distance < 7.5 ** 2) {
          lines.set(positions.subarray(i * 3, i * 3 + 3), count * 6);
          lines.set(positions.subarray(j * 3, j * 3 + 3), count * 6 + 3);
          count++;
        }
      }
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, count * 2);
      renderer.render(scene, camera);
      drawFallback(count);
      frame = requestAnimationFrame(render);
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('resize', resize);
    render();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('resize', resize);
      [points, connections, ...shapes].forEach(object => { object.geometry.dispose(); object.material.dispose(); });
      edges.forEach(geometry => geometry.dispose());
      renderer.dispose();
      element.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={host} aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}
