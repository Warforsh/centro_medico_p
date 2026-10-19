import { mockDoctors, mockAuditLogs } from '../data/mockData';
import { UserCog, Shield, Clock } from 'lucide-react';

export default function Staff() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Personal Médico</h1>
          <p className="text-gray-500 text-sm">{mockDoctors.length} profesionales activos</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserCog size={16} /> Agregar Personal
        </button>
      </div>

      {/* Doctors */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockDoctors.map((doctor) => (
          <div key={doctor.id} className="card p-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                {doctor.name.split(' ').filter(n => n.length > 2).slice(0, 2).map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-gray-800">{doctor.name}</p>
                <p className="text-sm text-blue-600">{doctor.specialty}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">No. Colegiado:</span>
                <span className="font-mono text-gray-700">{doctor.licenseNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Horario:</span>
                <span className="text-gray-700">{doctor.schedule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tarifa consulta:</span>
                <span className="font-bold text-gray-800">Q{doctor.consultationFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estado:</span>
                <span className={`badge ${doctor.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {doctor.status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t">
              <button className="btn-outline text-xs flex-1">Editar</button>
              <button className="btn-outline text-xs flex-1">Horarios</button>
            </div>
          </div>
        ))}
      </div>

      {/* Audit log */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-800">Registro de Auditoría</h3>
        </div>
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="table-header">Fecha/Hora</th>
                  <th className="table-header">Usuario</th>
                  <th className="table-header">Acción</th>
                  <th className="table-header">Módulo</th>
                  <th className="table-header">Detalle</th>
                  <th className="table-header">IP</th>
                </tr>
              </thead>
              <tbody>
                {mockAuditLogs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="table-cell text-xs font-mono">{log.timestamp}</td>
                    <td className="table-cell text-sm font-medium">{log.userName}</td>
                    <td className="table-cell text-sm">{log.action}</td>
                    <td className="table-cell">
                      <span className="badge bg-blue-50 text-blue-700">{log.module}</span>
                    </td>
                    <td className="table-cell text-xs max-w-[250px] truncate">{log.details}</td>
                    <td className="table-cell text-xs font-mono text-gray-500">{log.ipAddress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
