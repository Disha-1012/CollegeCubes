import { create } from "zustand";
import { College } from "@/types/college";

interface SavedState {
    saved: College[];
    saveCollege:
    (college: College) => void;
    removeCollege:
    (id: string) => void;
}

export const useSavedStore =
    create<SavedState>((set) => ({
        saved: [],
        saveCollege: (college) =>
            set(state => ({
                saved: [
                    ...state.saved,
                    college
                ]
            })),
        removeCollege: (id) =>
            set(state => ({
                saved:
                    state.saved.filter(
                        c => c.id !== id
                    )
            }))
    }))
    