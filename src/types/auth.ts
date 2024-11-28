export type Role = 'admin' | 'user' | 'guest';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}