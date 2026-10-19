import { Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Configuración del Sistema</h1>
        <p className="text-gray-500 text-sm">Administración y seguridad del sistema</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Clinic info */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            🏥 Datos de la Clínica
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input type="text" className="input-field" defaultValue="Centro Médico Premier" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">NIT</label>
              <input type="text" className="input-field" defaultValue="1234567-8" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
              <input type="text" className="input-field" defaultValue="4a Avenida 12-30, Zona 10, Ciudad de Guatemala" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="text" className="input-field" defaultValue="+502 2345 6789" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="text" className="input-field" defaultValue="info@centromedicopremier.gt" />
              </div>
            </div>
            <button className="btn-primary">Guardar Cambios</button>
          </div>
        </div>

        {/* Fiscal config */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            💰 Configuración Fiscal
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Moneda</label>
              <select className="input-field">
                <option>GTQ - Quetzal (Q)</option>
                <option>USD - Dólar ($)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">IVA (%)</label>
              <input type="number" className="input-field" defaultValue="12" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Serie de facturación</label>
              <input type="text" className="input-field" defaultValue="FAC" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Numeración actual</label>
              <input type="text" className="input-field" defaultValue="2026-0005" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Régimen fiscal</label>
              <select className="input-field">
                <option>General de Ley</option>
                <option>Pequeño Contribuyente</option>
              </select>
            </div>
            <button className="btn-primary">Guardar Cambios</button>
          </div>
        </div>

        {/* Users & Roles */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            👥 Usuarios y Roles
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Administrador</p>
                <p className="text-xs text-gray-500">Acceso total al sistema</p>
              </div>
              <span className="badge bg-purple-100 text-purple-700">1 usuario</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Médico</p>
                <p className="text-xs text-gray-500">Consultas, recetas, documentos</p>
              </div>
              <span className="badge bg-blue-100 text-blue-700">8 usuarios</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Recepción</p>
                <p className="text-xs text-gray-500">Pacientes, citas, facturación</p>
              </div>
              <span className="badge bg-green-100 text-green-700">3 usuarios</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Farmacéutico</p>
                <p className="text-xs text-gray-500">Farmacia, inventario</p>
              </div>
              <span className="badge bg-amber-100 text-amber-700">2 usuarios</span>
            </div>
            <button className="btn-outline w-full mt-2">Gestionar Usuarios</button>
          </div>
        </div>

        {/* Security */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            🔒 Seguridad
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Autenticación de 2 factores</p>
                <p className="text-xs text-gray-500">Requerir verificación adicional</p>
              </div>
              <div className="w-10 h-6 bg-green-500 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Política de contraseñas</p>
                <p className="text-xs text-gray-500">Mínimo 8 caracteres, mayúsculas y números</p>
              </div>
              <div className="w-10 h-6 bg-green-500 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Sesión activa máxima</p>
                <p className="text-xs text-gray-500">Cerrar sesión tras inactividad</p>
              </div>
              <select className="input-field text-sm w-32">
                <option>30 minutos</option>
                <option>1 hora</option>
                <option>2 horas</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Registro de auditoría</p>
                <p className="text-xs text-gray-500">Registrar todos los accesos</p>
              </div>
              <div className="w-10 h-6 bg-green-500 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Respaldo automático</label>
              <select className="input-field">
                <option>Cada 6 horas</option>
                <option>Cada 12 horas</option>
                <option>Diario</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
