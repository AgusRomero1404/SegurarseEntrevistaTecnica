import { create }  from 'zustand';

export const useLoginStore = create((set) => ({
  user: 'Segurarse',
  password: 'Segurarse',
  isLoggedIn: false,
  logout: () => set({ isLoggedIn: false }) ,
  login: (username, password) => {
    if (username === 'Segurarse' && password === 'Segurarse') {
      set({ isLoggedIn: true }); 
    } else {
      set({ isLoggedIn: false });
    }
  }
}));

