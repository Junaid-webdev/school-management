import { create } from "zustand";

export const useAppStore = create((set) => ({
  dopen: true,
  updateOpen: () => set((state) => ({ dopen: !state.dopen })),
}));
