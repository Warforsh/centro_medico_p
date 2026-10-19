import { useApp } from '../contexts/AppContext';
import { mockDashboardStats, mockAppointments, mockDoctors, mockPatients, mockProducts, revenueData, appointmentsByStatus, consultationsByDoctor } from '../data/mockData';
import { Users, Calendar, DollarSign, TrendingUp, AlertTriangle, Activity, Clock, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

export default function Dashboard() {
  const { user } = useApp();
  const stats = mockDashboardStats;
  const todayAppts = mockAppointments.filter(a => a.date === '2026-01-20');
  const lowStockProducts = mockProducts.filter(p => p.stock <= p.minStock);

  const getPatientName = (id: string) => {
    const p = mockPatients.find(p => p.id === id);
    return p ? `${p.firstName} ${p.lastName}` : 'Desconocido';
  };

  const getDoctorName = (id: string) => {
    const d = mockDoctors.find(d => d.id === id);
    return d ? d.name : 'Desconocido';
  };

  const statusColors: Record<string, string> = {
    scheduled: 'bg-blue-100 text-blue-700',
    confirmed: 'bg-green-100 text-green-700',
    waiting: 'bg-yellow-100 text-yellow-700',
    in_progress: 'bg-purple-100 text-purple-700',
    completed: 'bg-emerald-100 text-emerald-700',
    cancelled: 'bg-red-100 text-red-700',
    absent: 'bg-gray-100 text-gray-700',
  };

  const statusLabels: Record<string, string> = {
    scheduled: 'Programada',
    confirmed: 'Confirmada',
    waiting: 'En espera',
    in_progress: 'En consulta',
    completed: 'Completada',
    cancelled: 'Cancelada',
    absent: 'Ausente',
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            ¡Buenos días, {user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-500 mt-1">Resumen del día — Centro Médico Premier</p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-700 font-medium">Sistema operativo</span>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-blue-600" />
            </div>
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-3">{stats.totalPatients.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Pacientes totales</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Calendar size={20} className="text-emerald-600" />
            </div>
            <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">Hoy</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-3">{stats.todayAppointments}</p>
          <p className="text-sm text-gray-500">Citas del día</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign size={20} className="text-purple-600" />
            </div>
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">+8%</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-3">Q{stats.todayRevenue.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Ingresos hoy</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertTriangle size={20} className="text-amber-600" />
            </div>
            <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded-full">Alerta</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-3">{stats.lowStockProducts}</p>
          <p className="text-sm text-gray-500">Productos stock bajo</p>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue chart */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Ingresos vs Gastos</h3>
            <span className="text-xs text-gray-500">Últimos 6 meses</span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `Q${(v/1000).toFixed(0)}k`} />
              <Tooltip formatter={(value: number) => `Q${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="ingresos" stroke="#3b82f6" strokeWidth={2} name="Ingresos" />
              <Line type="monotone" dataKey="gastos" stroke="#ef4444" strokeWidth={2} name="Gastos" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Appointments pie */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Estado de Citas</h3>
            <span className="text-xs text-gray-500">Mes actual</span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={appointmentsByStatus} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                {appointmentsByStatus.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Consultations by doctor */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Consultas por Médico</h3>
          <span className="text-xs text-gray-500">Enero 2026</span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={consultationsByDoctor}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="doctor" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="consultas" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Consultas" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom section: Today's appointments + Alerts */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's appointments */}
        <div className="lg:col-span-2 card">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Citas de Hoy</h3>
            <span className="badge bg-blue-100 text-blue-700">{todayAppts.length} citas</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="table-header">Hora</th>
                  <th className="table-header">Paciente</th>
                  <th className="table-header">Médico</th>
                  <th className="table-header">Estado</th>
                </tr>
              </thead>
              <tbody>
                {todayAppts.map((appt) => (
                  <tr key={appt.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="table-cell font-medium">{appt.time}</td>
                    <td className="table-cell">{getPatientName(appt.patientId)}</td>
                    <td className="table-cell text-xs">{getDoctorName(appt.doctorId).replace('Dr. ', '').replace('Dra. ', '')}</td>
                    <td className="table-cell">
                      <span className={`badge ${statusColors[appt.status]}`}>
                        {statusLabels[appt.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts */}
        <div className="card">
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">Alertas</h3>
          </div>
          <div className="p-4 space-y-3">
            {lowStockProducts.map((product) => (
              <div key={product.id} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                <AlertTriangle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-red-800">{product.name}</p>
                  <p className="text-xs text-red-600">Stock: {product.stock} / Mín: {product.minStock}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <Clock size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-800">3 medicamentos próximos a vencer</p>
                <p className="text-xs text-amber-600">Revisar en la sección de inventario</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <Activity size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-800">5 pacientes en sala de espera</p>
                <p className="text-xs text-blue-600">Tiempo promedio: 12 min</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
              <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">18 consultas completadas hoy</p>
                <p className="text-xs text-green-600">Meta diaria: 25 consultas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
