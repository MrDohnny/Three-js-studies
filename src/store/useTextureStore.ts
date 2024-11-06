// store/useTextureStore.ts
import { create } from "zustand";

interface TextureState {
  textures: { [key: string]: string }; // Armazena o nome da malha e a URL da textura
  setTexture: (meshName: string, textureUrl: string) => void;
}

const useTextureStore = create<TextureState>((set) => ({
  textures: {},
  setTexture: (meshName, textureUrl) =>
    set((state) => ({
      textures: { ...state.textures, [meshName]: textureUrl },
    })),
}));

export default useTextureStore;
