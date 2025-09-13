import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, useTexture } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useTheme } from '../../context/ThemeContext';

const Icon3D = ({ position, icon, color, text, onClick, isActive }) => {
  const meshRef = useRef();
  const textRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const { scale, positionSpring } = useSpring({
    scale: isActive ? [1.2, 1.2, 1.2] : [1, 1, 1],
    positionSpring: position,
    config: { tension: 300, friction: 40 }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <animated.group 
        position={positionSpring}
        scale={scale}
        onClick={onClick}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        {/* Icon Background */}
        <animated.mesh ref={meshRef}>
          <cylinderGeometry args={[2, 2, 0.5, 32]} />
          <meshStandardMaterial 
            color={color}
            transparent
            opacity={0.9}
            roughness={0.2}
            metalness={0.8}
          />
        </animated.mesh>
        
        {/* Icon Symbol */}
        <mesh position={[0, 0, 0.3]}>
          <planeGeometry args={[2.5, 2.5]} />
          <meshBasicMaterial 
            color="white" 
            transparent 
            opacity={0.9}
          />
        </mesh>
        
        {/* Text Label */}
        <Text
          ref={textRef}
          position={[0, -3, 0]}
          fontSize={0.8}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          {text}
        </Text>
      </animated.group>
    </Float>
  );
};

const Scene = ({ onIconClick, activeIcon }) => {
  const { isDark } = useTheme();
  
  const icons = [
    { 
      position: [-6, 2, 0], 
      icon: 'health', 
      color: isDark ? '#10b981' : '#059669', 
      text: 'Health',
      id: 'health'
    },
    { 
      position: [-2, 2, 0], 
      icon: 'life', 
      color: isDark ? '#3b82f6' : '#1e40af', 
      text: 'Life',
      id: 'life'
    },
    { 
      position: [2, 2, 0], 
      icon: 'vehicle', 
      color: isDark ? '#f59e0b' : '#d97706', 
      text: 'Vehicle',
      id: 'vehicle'
    },
    { 
      position: [6, 2, 0], 
      icon: 'home', 
      color: isDark ? '#8b5cf6' : '#7c3aed', 
      text: 'Home',
      id: 'home'
    },
  ];

  return (
    <>
      <ambientLight intensity={isDark ? 0.4 : 0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={isDark ? '#059669' : '#3b82f6'} />
      
      {icons.map((iconData, index) => (
        <Icon3D 
          key={index} 
          {...iconData}
          onClick={() => onIconClick(iconData.id)}
          isActive={activeIcon === iconData.id}
        />
      ))}
    </>
  );
};

const InsuranceIcons3D = ({ onIconClick, activeIcon, className = "" }) => {
  return (
    <div className={`w-full h-64 ${className}`}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <Scene onIconClick={onIconClick} activeIcon={activeIcon} />
      </Canvas>
    </div>
  );
};

export default InsuranceIcons3D;