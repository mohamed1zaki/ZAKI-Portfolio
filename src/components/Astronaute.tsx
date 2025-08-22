import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function AstronautModel({ scale }: { scale: number }) {
  const { scene } = useGLTF("/models/Astronaute.glb");
  const ref = useRef<THREE.Object3D>(null);

  // ✅ Rotation initiale vers la droite
  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = Math.PI / 4; // ~45° à droite
    }
  }, []);

  // ✅ Animation de la tête avec le scroll (axe X)
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const scroll = window.scrollY;
      const maxRotation = 0.2; // ~17°
      ref.current.rotation.x = Math.min(scroll / 1000, maxRotation);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <primitive ref={ref} object={scene} scale={scale} position={[0, -1, 0]} />;
}
useGLTF.preload("/models/Astronaute.glb");

export const Astronaut: React.FC = () => {
  const [scale, setScale] = useState<number>(0.6);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 240, h: 240 });
  const [leftPx, setLeftPx] = useState<number>(50);
  const [baseTopPx, setBaseTopPx] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  const THRESHOLD = 600; // ✅ commence à descendre après 600px
  const MAX_ADDITIONAL_OFFSET = 200; // descente max

  // ✅ Resize dynamique
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (vw < 640) {
        setScale(0.25);
        setSize({ w: 150, h: 150 });
        setLeftPx(10);
      } else if (vw < 768) {
        setScale(0.3);
        setSize({ w: 180, h: 180 });
        setLeftPx(15);
      } else if (vw < 1024) {
        setScale(0.4);
        setSize({ w: 200, h: 200 });
        setLeftPx(20);
      } else if (vw < 1200) {
        setScale(0.55);
        setSize({ w: 220, h: 220 });
        setLeftPx(30);
      } else {
        setScale(0.7);
        setSize({ w: 240, h: 240 });
        setLeftPx(50);
      }

      // Position initiale : centre écran + 300px
      const centerPlus300 = vh / 2 + 230;
      const currentH =
        vw < 640 ? 150 : vw < 768 ? 180 : vw < 1024 ? 200 : vw < 1200 ? 220 : 240;
      const computedBaseTop = centerPlus300 - currentH / 2;

      setBaseTopPx(Math.max(10, computedBaseTop));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Animation verticale (descente après 600px)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scroll = window.scrollY;
        if (scroll <= THRESHOLD) {
          setOffset(0);
          ticking = false;
          return;
        }

        const effective = scroll - THRESHOLD;
        const raw = effective * 0.15; // facteur de descente
        const clamped = Math.min(raw, MAX_ADDITIONAL_OFFSET);

        const vh = window.innerHeight;
        const maxTopAllowed = vh - size.h - 10;
        const desiredTop = baseTopPx + clamped;
        const allowedOffset = Math.max(0, maxTopAllowed - baseTopPx);
        const finalOffset = Math.min(clamped, allowedOffset);

        setOffset(finalOffset);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [baseTopPx, size.h]);

  const topPx = Math.round(baseTopPx + offset);

  return (
    <div
      className="fixed z-50 hidden lg:block"
      style={{
        left: `${leftPx}px`,
        top: `${topPx}px`,
        width: `${size.w}px`,
        height: `${size.h}px`,
      }}
    >
      <Canvas camera={{ position: [0, 1.2, 3], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <AstronautModel scale={scale} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
      </Canvas>
    </div>
  );
};
