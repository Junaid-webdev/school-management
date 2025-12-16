import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set) => ({
      dopen: true,
      updateOpen: () =>
        set((state) => ({ dopen: !state.dopen })),
    }),
    {
      name: "my_app_store",
    }
  )
);
