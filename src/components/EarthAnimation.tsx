import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const EarthAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const cloudRef = useRef<THREE.Mesh | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const updateSize = () => {
      const size = Math.min(window.innerWidth * 0.8, 400);
      renderer.setSize(size, size);
      renderer.setPixelRatio(window.devicePixelRatio);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    updateSize();
    if (mountRef.current) {
      mountRef.current.innerHTML = "";
      mountRef.current.appendChild(renderer.domElement);
    }

    // --- Load textures
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth_daymap.jpg");
    const normalMap = textureLoader.load("/earth_normal.jpg");
    const specularMap = textureLoader.load("/earth_specular.jpg");
    const cloudTexture = textureLoader.load("/earth_cloud.png");

    // --- Earth
    const earthGeometry = new THREE.SphereGeometry(1, 50, 50);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      normalMap: normalMap,
      specularMap: specularMap,
      shininess: 30,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthRef.current = earth;

    // --- Clouds
    const cloudGeometry = new THREE.SphereGeometry(1.01, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    cloudRef.current = clouds;

    // --- Group
    const group = new THREE.Group();
    group.add(earth);
    group.add(clouds);
    groupRef.current = group;
    scene.add(group);

    // --- Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    camera.position.z = 3;

    // ✅ Marker Algeria (pulsing + shader halo)
    const markerGeometry = new THREE.SphereGeometry(0.03, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);

    const radius = 1.01;
    const lat = (36.5 * Math.PI) / 180;
    const lon = (-3 * Math.PI) / 180;

    marker.position.set(
      radius * Math.cos(lat) * Math.cos(lon),
      radius * Math.sin(lat),
      radius * Math.cos(lat) * Math.sin(lon)
    );

    // 🔥 Halo avec ShaderMaterial
    const haloMaterial = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        color: { value: new THREE.Color(0xff0000) },
        time: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec2 vUv;
        void main() {
          float dist = length(vUv - 0.5);
          float intensity = smoothstep(0.5, 0.0, dist);
          float pulse = 0.6 + 0.4 * sin(time * 2.0);
          gl_FragColor = vec4(color, intensity * pulse);
        }
      `,
    });

    const haloGeometry = new THREE.PlaneGeometry(0.8, 0.8);
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = -Math.PI / 4;
    marker.add(halo);

    earth.add(marker);

     
    // --- OrbitControls (rotation interactive)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true; // ✅ comme demandé
    controls.rotateSpeed = 0.2;

    // --- Animate
    const animate = () => {
      requestAnimationFrame(animate);

      if (earthRef.current) earthRef.current.rotation.y += 0.0015;
      if (cloudRef.current) cloudRef.current.rotation.y += 0.002;

      // Marker pulse
      const scale = 1 + Math.sin(Date.now() * 0.005) * 0.3;
      marker.scale.set(scale, scale, scale);

      // Update halo time
      haloMaterial.uniforms.time.value = Date.now() * 0.001;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize
    const handleResize = () => updateSize();
    window.addEventListener("resize", handleResize);

    // --- Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="flex items-center justify-center"
      style={{ width: "100%", height: "400px" }}
    />
  );
};
