import { create } from 'zustand'

export const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () =>
        set((state) => {
            if (state.count > 0) {
                return { count: state.count - 1 }
            } else {
                alert("count cannot be less than 0")
                return { count: 0 }
            }
        }),
    reset: () => set({ count: 0 })
}))
