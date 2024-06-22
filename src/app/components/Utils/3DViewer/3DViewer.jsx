import s from './3DViewer.module.css';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function Viewer(props) {
  const { fileUrl } = props;
  const canvasRef = useRef(null);
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    if (!fileUrl) return;

    const canvas = canvasRef.current;
    canvas.width = 300;
    canvas.height = 200;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x919191);

    const camera = new THREE.PerspectiveCamera(70, canvas.width / canvas.height, 1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    const loader = new OBJLoader();

    loader.load(
      fileUrl,
      (object) => {
        scene.add(object);
      },
      (progress) => {
        setProgressBar(parseInt((progress.loaded / progress.total) * 100) + '%');
      },
      (error) => {
        console.error('Error al cargar el archivo .obj', error);
      }
    );

    camera.position.z = 5;
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, .2);
    scene.add(ambientLight);

    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0
    };

    canvas.addEventListener('mousedown', (event) => {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
    });

    canvas.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        scene.rotation.y += deltaX * 0.01;
        scene.rotation.x += deltaY * 0.01;
        previousMousePosition = {
          x: event.clientX,
          y: event.clientY
        };
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDragging = false;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, [fileUrl]);

  return (
    <div className={s.container}>
      <div className={s.container}>
        <canvas ref={canvasRef} />
        <span className={s.loaderContainer} style={{ width: progressBar }}></span>
      </div>
    </div>
  );
}
