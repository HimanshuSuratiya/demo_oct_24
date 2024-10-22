import {create} from 'zustand'
import {persist} from 'zustand/middleware';


const useUserStore = create(
  (set) => ({
    name: null,
    email: null,
    picture: null,
    setUser: ({user, email, picture}) => set((state) => ({user, email, picture}))
  }),
  {
    name: 'user-store',
  }
);

export default useUserStore