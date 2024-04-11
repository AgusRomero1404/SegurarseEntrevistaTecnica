import { create } from 'zustand'

export const useUserStore = create((set) => ({
    users: [
      {
        id: 1,
        name: 'Juan',
        surname: 'Pérez',
        phone: '123456789',
        gender: 'men',
        rol: 'Vendedor',
        src: `https://randomuser.me/api/portraits/men/1.jpg`
      },
      
      {
        id: 2,
        name: 'María',
        surname: 'Gómez',
        phone: '987654321',
        gender: 'women',
        rol: 'Gerente de ventas',
        src: `https://randomuser.me/api/portraits/women/2.jpg`
      },
    
      {
        id: 3,
        name: 'Pedro',
        surname: 'Martínez',
        phone: '555555555',
        gender: 'men',
        rol: 'Gerente de Atencion al cliente',
        src: `https://randomuser.me/api/portraits/men/3.jpg`
      }
    ],
    addUser: (item) => set((state) => ({ users: [...state.users, item] })),
    updateUser: (id, newItem) =>
      set((state) => ({
        users: state.users.map((user) => (user.id === id ? newItem : user)),
      })),
    removeUsers: (id) =>
    set((state) => ({
        users: state.users.filter((user) => user.id !== id),
    })),
}));

export default useUserStore;