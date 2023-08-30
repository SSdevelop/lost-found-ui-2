import { create } from "zustand";
import { combine } from "zustand/middleware";

type VisibilityState = {
  textInput: string;
  imageInput: File[];
  textDisabled: boolean;
  imageDisabled: boolean;
  setTextInput: (v: string) => void;
  setImageInput: (v: File[]) => void;
  resetInputs: () => void;
};

const useVisibilityStore = create<VisibilityState>(
  combine(
    {
      textInput: "",
      imageInput: [] as File[],
      textDisabled: false,
      imageDisabled: false,
    },
    (set) => ({
      setTextInput: (v: string) =>
        set({ textInput: v, imageDisabled: v !== "" }),
      setImageInput: (v: File[]) =>
        set({ imageInput: v, textDisabled: v.length !== 0 }),
      resetInputs: () =>
        set({
          textInput: "",
          imageInput: [] as File[],
          textDisabled: false,
          imageDisabled: false,
        }),
    })
  )
);

export default useVisibilityStore;
