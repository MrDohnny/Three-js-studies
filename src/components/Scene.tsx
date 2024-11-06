// components/Scene.tsx
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import { OrbitControls } from "@react-three/drei";

const Character = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(e.object.name);
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    setHovered(null);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    const meshName = e.object.name;
    if (meshName) {
      router.push(`/mesh/${meshName}`);
    }
  };

  return (
    <group>
      <mesh
        name="head"
        position={[0, 1.5, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={hovered === "head" ? "yellow" : "pink"} />
      </mesh>
      <mesh
        name="body"
        position={[0, 0.5, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial
          color={hovered === "body" ? "yellow" : "skyblue"}
        />
      </mesh>
      <mesh
        name="leftArm"
        position={[-0.75, 0.75, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshStandardMaterial
          color={hovered === "leftArm" ? "yellow" : "green"}
        />
      </mesh>
      <mesh
        name="rightArm"
        position={[0.75, 0.75, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshStandardMaterial
          color={hovered === "rightArm" ? "yellow" : "red"}
        />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Character />
      <mesh position={[0, -0.75, 0]}>
        <boxGeometry args={[5, 0.5, 5]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
