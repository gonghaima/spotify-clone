import { axiosInstance } from '@/lib/axios';
import { create } from 'zustand';
// import { useUser } from '@clerk/clerk-react';

interface AuthStore {
  isAdmin: boolean;
  isLoading: boolean;
  error: string | null;

  checkAdminStatus: (userId: string) => Promise<void>;
  reset: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAdmin: false,
  isLoading: false,
  error: null,

  checkAdminStatus: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      //   const { user } = useUser();
      console.log('🚀 ~ checkAdminStatus: ~ user:', userId);
      const response = await axiosInstance.get('/admin/check', {
        headers: {
          userId: userId,
        },
      });
      set({ isAdmin: response.data.admin });
    } catch (error: any) {
      set({ isAdmin: false, error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },

  reset: () => {
    set({ isAdmin: false, isLoading: false, error: null });
  },
}));
