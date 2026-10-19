import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import {
  LayoutDashboard, Users, Calendar, Stethoscope, FileText,
  Pill, Package, ShoppingCart, CreditCard, BarChart3,
  UserCog, Settings, FolderOpen, Menu, X, LogOut, Bell, ChevronDown
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'doctor', 'receptionist', 'pharmacist'] },
  { id: 'patients', label: 'Pacientes', icon: Users, roles: ['admin', 'doctor', 'receptionist'] },
  { id: 'appointments', label: 'Citas', icon: Calendar, roles: ['admin', 'doctor', 'receptionist'] },
  { id: 'consultations', label: 'Consultas', icon: Stethoscope, roles: ['admin', 'doctor'] },
  { id: 'prescriptions', label: 'Recetas', icon: FileText, roles: ['admin', 'doctor', 'pharmacist'] },
  { id: 'pharmacy', label: 'Farmacia', icon: Pill, roles: ['admin', 'pharmacist'] },
  { id: 'inventory', label: 'Inventario', icon: Package, roles: ['admin', 'pharmacist'] },
  { id: 'purchases', label: 'Compras', icon: ShoppingCart, roles: ['admin'] },
  { id: 'billing', label: 'Facturación', icon: CreditCard, roles: ['admin', 'receptionist'] },
  { id: 'reports', label: 'Reportes', icon: BarChart3, roles: ['admin'] },
  { id: 'staff', label: 'Personal', icon: UserCog, roles: ['admin'] },
  { id: 'documents', label: 'Documentos', icon: FolderOpen, roles: ['admin', 'doctor'] },
  { id: 'settings', label: 'Configuración', icon: Settings, roles: ['admin'] },
];

const roleLabels: Record<string, string> = {
  admin: 'Administrador',
  doctor: 'Médico',
  receptionist: 'Recepción',
  pharmacist: 'Farmacéutico',
  nurse: 'Enfermería',
};

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const { user, logout } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const filteredMenu = menuItems.filter(item =>
    user && item.roles.includes(user.role)
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">🏥</span>
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-800">Centro Médico</h1>
            <p className="text-xs text-teal-600 font-medium">Premier</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {filteredMenu.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-100'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User section */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {user?.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{user?.name}</p>
              <p className="text-xs text-gray-500">{user ? roleLabels[user.role] : ''}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🏥</span>
                </div>
                <div>
                  <h1 className="text-sm font-bold text-gray-800">Centro Médico Premier</h1>
                </div>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              <ul className="space-y-1">
                {filteredMenu.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => { onNavigate(item.id); setSidebarOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              <Menu size={20} className="text-gray-600" />
            </button>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {menuItems.find(m => m.id === currentPage)?.label || 'Dashboard'}
              </h2>
              <p className="text-xs text-gray-500 hidden sm:block">
                {new Date().toLocaleDateString('es-GT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell size={20} className="text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {user?.name.charAt(0)}
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700">{user?.name}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => { logout(); setUserMenuOpen(false); }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={16} />
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
