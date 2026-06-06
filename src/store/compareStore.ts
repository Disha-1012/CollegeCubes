import {
    create
}
    from "zustand";
import {
    College
}
    from "@/types/college";
interface CompareState {
    colleges: College[];
    addCollege:
    (college: College) => void;
    removeCollege:
    (id: string) => void;
    clear:
    () => void;
}
export const useCompareStore =
    create<CompareState>((set) => ({
        colleges: [],
        addCollege: (college) =>
            set((state) => {
                if (
                    state.colleges.length >= 4
                )
                    return state;
                const exists =
                    state.colleges.some(
                        c => c.id === college.id
                    );
                if (exists)
                    return state;
                return {
                    colleges: [
                        ...state.colleges,
                        college
                    ]
                }
            }),
        removeCollege: (id) =>
            set((state) => ({
                colleges:
                    state.colleges.filter(
                        c => c.id !== id
                    )
            })),
        clear: () => set({
            colleges: []
        })
    }));