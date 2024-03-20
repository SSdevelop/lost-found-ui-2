import { create } from "zustand";
import { combine } from "zustand/middleware";

type VisibilityState = {
  textInput: string;
  imageInput: File[];
  textDisabled: boolean;
  imageDisabled: boolean;
  videoNames: string[];
  resultVideoDirs: string[];
  mapSelected: boolean[];
  setTextInput: (v: string) => void;
  setImageInput: (v: File[]) => void;
  setVideoNames: (v: string[]) => void;
  resetInputs: () => void;
  removeImageAt: (index: number) => void;
  setResultVideoDirs: (v: string[]) => void;
  setMapSelected: (v: boolean[]) => void;
};

const useVisibilityStore = create<VisibilityState>(
  combine(
    {
      textInput: "",
      imageInput: [] as File[],
      textDisabled: false,
      imageDisabled: false,
      videoNames: ['', '', ''],
      resultVideoDirs: [] as string[],
      mapSelected: [false, false, false],
    
    },
    (set) => ({
      setTextInput: (v: string) =>
        set({ textInput: v, imageDisabled: v !== "" }),
      setImageInput: (v: File[]) =>
        set({ imageInput: v, textDisabled: v.length !== 0 }),
      setVideoNames: (v: string[]) => set({ videoNames: v }),
      resetInputs: () =>
        set({
          textInput: "",
          imageInput: [] as File[],
          textDisabled: false,
          imageDisabled: false,
          videoNames: ['', '', ''],
          resultVideoDirs: [] as string[],
          mapSelected: [false, false, false],
        }),
      removeImageAt: (index: number) => {
        const newImageInput = [...useVisibilityStore.getState().imageInput];
        newImageInput.splice(index, 1);
        set({ imageInput: newImageInput });
      },
      setResultVideoDirs: (v: string[]) => set({ resultVideoDirs: v }),
      setMapSelected: (v: boolean[]) => set({ mapSelected: v }),
    }
  )
));

export default useVisibilityStore;
