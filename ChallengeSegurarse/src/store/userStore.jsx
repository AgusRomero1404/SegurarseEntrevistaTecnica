import { create } from 'zustand'

export const useUserStore = create((set) => ({
    users: [],
    addUser: (item) => set((state) => ({ users: [...state.users, item] })),
    updateUser: (index, newItem) =>
    set((state) => ({
        users: state.users.map((item, i) => (i === index ? newItem : item)),
      })),
    removeUsers: (index) =>
    set((state) => ({
        users: state.users.filter((_, i) => i !== index),
    })),
}));

export default useUserStore;