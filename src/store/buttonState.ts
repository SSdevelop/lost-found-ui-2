/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';

const useToggleInput = create(set => ({
    isTextDisabled: false,
    isFileDisabled: false,
    setTextDisabled: () => set((state: { isTextDisabled: boolean }) => ({ isTextDisabled: true })),
    setFileDisabled: () => set((state: { isTextDisabled: boolean }) => ({ isFileDisabled: true })),
    setTextEnabled: () => set((state: { isTextDisabled: boolean }) => ({ isTextDisabled: false })),
    setFileEnabled: () => set((state: { isTextDisabled: boolean }) => ({ isFileDisabled: false })),
    // setTextEnabled: () => set((state: { isTextDisabled: boolean }) => ({ isTextDisabled: true })),
    // setFileEn: () => set((state: { isTextDisabled: boolean }) => ({ isTextDisabled: true })),
}));

export default useToggleInput;