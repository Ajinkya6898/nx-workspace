import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  data: [],
  loading: false,
  errors: false,
  reset: () => set({ data: [] }),
  fetch: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.get('https://fakestoreapi.com/products/3');
      set((state) => ({ data: (state.data = response.data), loading: false }));
    } catch (err) {
      set(() => ({ errors: true, loading: false }));
    }
  },
}));

export default useStore;
