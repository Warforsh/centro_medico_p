import { revenueData, appointmentsByStatus, consultationsByDoctor, mockDashboardStats } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, Legend } from 'recharts';
import { Download, FileSpreadsheet, Printer } from 'lucide-react';

export default function Reports() {
  const stats = mockDashboardStats;

  const patientGrowth = [
    { month: 'Ago', pacientes: 980 },
    { month: 'Sep', pacientes: 1035 },
    { month: 'Oct', pacientes: 1089 },
    { month: 'Nov', pacientes: 1145 },
    { month: 'Dic', pacientes: 1198 },
    { month: 'Ene', pacientes: 1247 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reportes y Estadísticas</h1>
          <p className="text-gray-500 text-sm">Análisis del rendimiento del centro médico</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline flex items-center gap-2">
            <FileSpreadsheet size={16} /> Exportar Excel
          </button>
          <button className="btn-outline flex items-center gap-2">
            <Printer size={16} /> Imprimir
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-sm text-gray-500">Pacientes totales</p>
          <p className="text-2xl font-bold text-gray-800">{stats.totalPatients.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-1">↑ 12% vs mes anterior</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Ingresos mensuales</p>
          <p className="text-2xl font-bold text-gray-800">Q{stats.monthlyRevenue.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-1">↑ 8% vs mes anterior</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Consultas del mes</p>
          <p className="text-2xl font-bold text-gray-800">435</p>
          <p className="text-xs text-green-600 mt-1">↑ 5% vs mes anterior</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Tasa de ocupación</p>
          <p className="text-2xl font-bold text-gray-800">78%</p>
          <p className="text-xs text-amber-600 mt-1">→ Similar al mes anterior</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue trend */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tendencia de Ingresos</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `Q${(v/1000).toFixed(0)}k`} />
              <Tooltip formatter={(value: number) => `Q${value.toLocaleString()}`} />
              <Area type="monotone" dataKey="ingresos" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} name="Ingresos" />
              <Area type="monotone" dataKey="gastos" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} name="Gastos" />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Patient growth */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Crecimiento de Pacientes</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={patientGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="pacientes" stroke="#10b981" fill="#10b981" fillOpacity={0.2} name="Pacientes" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Consultations by doctor */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Consultas por Médico</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={consultationsByDoctor} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="doctor" type="category" tick={{ fontSize: 11 }} width={100} />
              <Tooltip />
              <Bar dataKey="consultas" fill="#8b5cf6" radius={[0, 4, 4, 0]} name="Consultas" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Appointment status */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Estado de Citas</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={appointmentsByStatus} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                {appointmentsByStatus.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report sections */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-5 cursor-pointer hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-2">📊 Reporte de Pacientes</h4>
          <p className="text-sm text-gray-500">Nuevos, recurrentes, por edad y género</p>
          <button className="mt-3 text-sm text-blue-600 font-medium flex items-center gap-1">
            <Download size={14} /> Generar
          </button>
        </div>
        <div className="card p-5 cursor-pointer hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-2">💰 Reporte Financiero</h4>
          <p className="text-sm text-gray-500">Ingresos, egresos, cuentas por cobrar</p>
          <button className="mt-3 text-sm text-blue-600 font-medium flex items-center gap-1">
            <Download size={14} /> Generar
          </button>
        </div>
        <div className="card p-5 cursor-pointer hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-2">💊 Reporte de Farmacia</h4>
          <p className="text-sm text-gray-500">Dispensación, rotación, próximos a vencer</p>
          <button className="mt-3 text-sm text-blue-600 font-medium flex items-center gap-1">
            <Download size={14} /> Generar
          </button>
        </div>
      </div>
    </div>
  );
}
