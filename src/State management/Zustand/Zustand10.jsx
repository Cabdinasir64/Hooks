import { create } from "zustand"

const useUserStore = create((set) => ({
    user: null,
    loading: false,
    error: null,

    fetchUser: async (userId) => {
        set({ loading: true, error: null })
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            if (!res.ok) throw new Error("Network response not ok")
            const data = await res.json()
            set({ user: data, loading: false })
        } catch (err) {
            set({ error: err.message, loading: false })
        }
    },

    logout: () => set({ user: null }),
}))

export default useUserStore
