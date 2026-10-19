import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function Login() {
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!login(email, password)) {
      setError('Credenciales incorrectas. Verifique su correo y contraseña.');
    }
  };

  const quickLogin = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
    login(email, password);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-white rounded-full"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🏥</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Centro Médico</h1>
              <p className="text-xl text-blue-200">Premier</p>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Sistema de Gestión<br />Clínica Integral
          </h2>
          <p className="text-blue-100 text-lg max-w-md leading-relaxed">
            Plataforma integral para la administración de pacientes, citas, 
            consultas médicas, farmacia e inventario.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold">1,247</p>
              <p className="text-blue-200 text-sm">Pacientes activos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold">8</p>
              <p className="text-blue-200 text-sm">Especialidades</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-blue-200 text-sm">Años de servicio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-blue-200 text-sm">Disponibilidad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - Login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🏥</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Centro Médico Premier</h1>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Iniciar Sesión</h2>
              <p className="text-gray-500 mt-1">Ingrese sus credenciales para acceder al sistema</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="correo@premier.gt"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-600">Recordarme</span>
                </label>
                <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  ¿Olvidó su contraseña?
                </button>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-base">
                Ingresar al Sistema
              </button>
            </form>
          </div>

          {/* Quick access for demo */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-800 mb-3 uppercase tracking-wide">Acceso rápido (Demo)</p>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => quickLogin('admin@premier.gt', 'admin123')} className="text-xs bg-white border border-blue-200 rounded-lg px-3 py-2 text-blue-700 hover:bg-blue-100 transition-colors font-medium">
                👤 Admin
              </button>
              <button onClick={() => quickLogin('doctor@premier.gt', 'doctor123')} className="text-xs bg-white border border-blue-200 rounded-lg px-3 py-2 text-blue-700 hover:bg-blue-100 transition-colors font-medium">
                🩺 Doctor
              </button>
              <button onClick={() => quickLogin('recepcion@premier.gt', 'recepcion123')} className="text-xs bg-white border border-blue-200 rounded-lg px-3 py-2 text-blue-700 hover:bg-blue-100 transition-colors font-medium">
                📋 Recepción
              </button>
              <button onClick={() => quickLogin('farmacia@premier.gt', 'farmacia123')} className="text-xs bg-white border border-blue-200 rounded-lg px-3 py-2 text-blue-700 hover:bg-blue-100 transition-colors font-medium">
                💊 Farmacia
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            Centro Médico Premier © 2026 — Guatemala
          </p>
        </div>
      </div>
    </div>
  );
}
