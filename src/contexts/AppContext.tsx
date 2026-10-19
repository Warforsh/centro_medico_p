import { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AppContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: (User & { password: string })[] = [
  { id: 'usr-1', name: 'Administrador', email: 'admin@premier.gt', password: 'admin123', role: 'admin' as UserRole },
  { id: 'usr-2', name: 'Dr. Carlos Méndez', email: 'doctor@premier.gt', password: 'doctor123', role: 'doctor' as UserRole },
  { id: 'usr-3', name: 'Ana García', email: 'recepcion@premier.gt', password: 'recepcion123', role: 'receptionist' as UserRole },
  { id: 'usr-4', name: 'Farm. Elena Santos', email: 'farmacia@premier.gt', password: 'farmacia123', role: 'pharmacist' as UserRole },
  { id: 'usr-5', name: 'Pedro López', email: 'caja@premier.gt', password: 'caja123', role: 'receptionist' as UserRole },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    const found = mockUsers.find(u => u.email === email && u.password === password);
    if (found) {
      const { password: _, ...userData } = found;
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
