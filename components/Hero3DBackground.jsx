"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";

function InteractiveSphere() {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

            // Interactive scale based on mouse position
            const targetScale = hovered ? 1.4 : 1.2;
            meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
            meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
            meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere
                ref={meshRef}
                args={[1, 64, 64]}
                scale={1.2}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <MeshDistortMaterial
                    color={hovered ? "#0ea5e9" : "#3b82f6"} // React to hover
                    attach="material"
                    distort={0.4}
                    speed={2.5}
                    roughness={0.1}
                    metalness={0.8}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </Sphere>
        </Float>
    );
}

function FloatingParticles() {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    const particles = Array.from({ length: 30 }).map((_, i) => ({
        position: [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5 - 2
        ],
        scale: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 2 + 1
    }));

    return (
        <group ref={groupRef}>
            {particles.map((props, i) => (
                <Float key={i} speed={props.speed} floatIntensity={2} rotationIntensity={2}>
                    <mesh position={props.position} scale={props.scale}>
                        <sphereGeometry args={[1, 16, 16]} />
                        <meshStandardMaterial color="#38bdf8" transparent opacity={0.6} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

const Hero3DBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto mix-blend-screen opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />

                <InteractiveSphere />
                <FloatingParticles />

                <Environment preset="city" />
                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} color="#0284c7" />
            </Canvas>
        </div>
    );
};

export default Hero3DBackground;
