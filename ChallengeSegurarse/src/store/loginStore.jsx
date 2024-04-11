import { create }  from 'zustand';

const useLoginStore = create((set) => ({
  user: 'Segurarse',
  password: 'Segurarse',
  isLoggedIn: false, 
  login: (username, password) => {
    if (username === 'Segurarse' && password === 'Segurarse') {
      set({ isLoggedIn: true }); 
    } else {
      set({ isLoggedIn: false });
    }
  }
}));

export default useLoginStore;
