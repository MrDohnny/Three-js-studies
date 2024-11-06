// pages/mesh/[name].tsx
import React from "react";
import { useRouter } from "next/router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MeshScene = () => {
  const router = useRouter();
  const { name } = router.query;

  const renderMesh = () => {
    switch (name) {
      case "head":
        return (
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="pink" />
          </mesh>
        );
      case "body":
        return (
          <mesh>
            <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
            <meshStandardMaterial color="skyblue" />
          </mesh>
        );
      case "leftArm":
        return (
          <mesh>
            <boxGeometry args={[0.25, 1, 0.25]} />
            <meshStandardMaterial color="green" />
          </mesh>
        );
      case "rightArm":
        return (
          <mesh>
            <boxGeometry args={[0.25, 1, 0.25]} />
            <meshStandardMaterial color="red" />
          </mesh>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <button
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1,
          padding: "10px 20px",
          fontSize: "16px",
        }}
        onClick={() => router.back()}
      >
        Voltar
      </button>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {renderMesh()}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MeshScene;
