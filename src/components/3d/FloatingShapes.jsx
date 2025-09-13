import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useTheme } from '../../context/ThemeContext';

const FloatingShape = ({ position, shape, color, speed = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  const { scale } = useSpring({
    scale: [1, 1, 1],
    from: { scale: [0, 0, 0] },
    config: { tension: 200, friction: 50 }
  });

  const ShapeComponent = shape === 'sphere' ? Sphere : shape === 'box' ? Box : Torus;

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <animated.mesh ref={meshRef} position={position} scale={scale}>
        <ShapeComponent args={shape === 'torus' ? [1, 0.3, 16, 32] : [1, 1, 1]}>
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.7}
            roughness={0.4}
            metalness={0.6}
          />
        </ShapeComponent>
      </animated.mesh>
    </Float>
  );
};

const Scene = () => {
  const { isDark } = useTheme();
  
  const shapes = useMemo(() => [
    { position: [-8, 4, -5], shape: 'sphere', color: isDark ? '#059669' : '#10b981', speed: 0.8 },
    { position: [8, -3, -8], shape: 'box', color: isDark ? '#1e3a8a' : '#3b82f6', speed: 1.2 },
    { position: [0, 6, -10], shape: 'torus', color: isDark ? '#f59e0b' : '#fbbf24', speed: 0.6 },
    { position: [-5, -5, -6], shape: 'sphere', color: isDark ? '#8b5cf6' : '#a855f7', speed: 1.0 },
    { position: [6, 3, -12], shape: 'box', color: isDark ? '#0891b2' : '#06b6d4', speed: 0.9 },
  ], [isDark]);

  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 1} />
      <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.4 : 0.6} color={isDark ? '#059669' : '#3b82f6'} />
      
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  );
};

const FloatingShapes = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;