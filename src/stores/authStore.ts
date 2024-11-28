import { create } from 'zustand';
import { AuthState,User } from '../types/auth';
import { db } from '../lib/db';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    const result = await db.execute({
      sql: 'SELECT id, email, name, role FROM users WHERE email = ? AND password = ?',
      args: [email, password]
    });

    const user = result.rows[0] as unknown;
     // Type assert to User after ensuring it's safe
     if (user && (user as User).id && (user as User).email && (user as User).name && (user as User).role) {
      const validatedUser = user as User;  // Now safely cast to User

      // Set state with validated user
      set({ user: validatedUser, isAuthenticated: true });
      localStorage.setItem('user', JSON.stringify(validatedUser));
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('user');
  }
}));