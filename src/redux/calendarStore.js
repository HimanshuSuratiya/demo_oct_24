import {create} from 'zustand'

const useCalendarStore = create(
  (set) => ({
    date: new Date().toISOString(),
    setDate: (date) => set(() => ({date})),
  }),
  {
    name: 'date-storage',
  }
);

export default useCalendarStore