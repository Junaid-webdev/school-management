import { create } from "zustand";

export const useAppStore = create((set) => ({
  rows: [], // initial empty array
  setRows: (newRows) => set({ rows: newRows }), // setter
  dopen: true,
  updateOpen: () => set((state) => ({ dopen: !state.dopen })),
}));
