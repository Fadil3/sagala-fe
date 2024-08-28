import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  isMobile: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setMobile: (isMobile: boolean) => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  isMobile: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setMobile: (isMobile: boolean) => set({ isMobile }),
}));

export default useSidebarStore;
