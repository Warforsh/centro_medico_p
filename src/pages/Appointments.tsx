import { useState } from 'react';
import { mockAppointments, mockDoctors, mockPatients } from '../data/mockData';
import { Calendar, Clock, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Appointments() {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDoctor, setFilterDoctor] = useState('all');
  const [showForm, setShowForm] = useState(false);

  const getPatientName = (id: string) => {
    const p = mockPatients.find(p => p.id === id);
    return p ? `${p.firstName} ${p.lastName}` : 'Desconocido';
  };

  const getDoctorName = (id: string) => {
    const d = mockDoctors.find(d => d.id === id);
    return d ? d.name : 'Desconocido';
  };

  const getDoctorSpecialty = (id: string) => {
    const d = mockDoctors.find(d => d.id === id);
    return d ? d.specialty : '';
  };

  const filtered = mockAppointments.filter(a => {
    if (filterStatus !== 'all' && a.status !== filterStatus) return false;
    if (filterDoctor !== 'all' && a.doctorId !== filterDoctor) return false;
    return true;
  });

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

  const typeIcons: Record<string, string> = {
    consulta: '🩺',
    seguimiento: '🔄',
    urgencia: '🚨',
    procedimiento: '⚕️',
  };

  // Group by date
  const groupedByDate = filtered.reduce((acc, appt) => {
    if (!acc[appt.date]) acc[appt.date] = [];
    acc[appt.date].push(appt);
    return acc;
  }, {} as Record<string, typeof filtered>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Agenda de Citas</h1>
          <p className="text-gray-500 text-sm">{mockAppointments.length} citas registradas</p>
        </div>
        <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2">
          <Plus size={16} /> Nueva Cita
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex gap-2">
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'list' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              📋 Lista
            </button>
            <button
              onClick={() => setView('calendar')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'calendar' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              📅 Calendario
            </button>
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="input-field text-sm"
            >
              <option value="all">Todos los estados</option>
              <option value="scheduled">Programada</option>
              <option value="confirmed">Confirmada</option>
              <option value="waiting">En espera</option>
              <option value="completed">Completada</option>
              <option value="cancelled">Cancelada</option>
            </select>
            <select
              value={filterDoctor}
              onChange={(e) => setFilterDoctor(e.target.value)}
              className="input-field text-sm"
            >
              <option value="all">Todos los médicos</option>
              {mockDoctors.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      {view === 'list' ? (
        <div className="space-y-4">
          {Object.entries(groupedByDate).sort().map(([date, appts]) => (
            <div key={date} className="card overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b flex items-center gap-2">
                <Calendar size={16} className="text-blue-600" />
                <h3 className="font-semibold text-gray-800">
                  {new Date(date + 'T12:00:00').toLocaleDateString('es-GT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </h3>
                <span className="badge bg-blue-100 text-blue-700 ml-auto">{appts.length} citas</span>
              </div>
              <div className="divide-y divide-gray-50">
                {appts.sort((a, b) => a.time.localeCompare(b.time)).map((appt) => (
                  <div key={appt.id} className="px-5 py-4 flex items-center gap-4 hover:bg-blue-50/30 transition-colors">
                    <div className="flex items-center gap-2 min-w-[80px]">
                      <Clock size={14} className="text-gray-400" />
                      <span className="font-mono font-medium text-gray-800">{appt.time}</span>
                    </div>
                    <span className="text-lg">{typeIcons[appt.type]}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 truncate">{getPatientName(appt.patientId)}</p>
                      <p className="text-xs text-gray-500 truncate">{appt.reason}</p>
                    </div>
                    <div className="hidden sm:block text-right">
                      <p className="text-sm font-medium text-gray-700">{getDoctorName(appt.doctorId).replace('Dr. ', '').replace('Dra. ', '')}</p>
                      <p className="text-xs text-gray-500">{getDoctorSpecialty(appt.doctorId)}</p>
                    </div>
                    <span className={`badge ${statusColors[appt.status]}`}>
                      {statusLabels[appt.status]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Calendar view */
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 rounded-lg hover:bg-gray-100"><ChevronLeft size={20} /></button>
            <h3 className="text-lg font-bold text-gray-800">Enero 2026</h3>
            <button className="p-2 rounded-lg hover:bg-gray-100"><ChevronRight size={20} /></button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
              <div key={d} className="text-center text-xs font-semibold text-gray-500 py-2">{d}</div>
            ))}
            {/* Empty cells for days before month starts (Jan 2026 starts on Thursday) */}
            {[...Array(3)].map((_, i) => (
              <div key={`empty-${i}`} className="h-24 border border-gray-100 rounded-lg"></div>
            ))}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const dateStr = `2026-01-${day.toString().padStart(2, '0')}`;
              const dayAppts = mockAppointments.filter(a => a.date === dateStr);
              const isToday = day === 20;
              return (
                <div key={day} className={`h-24 border rounded-lg p-1 ${isToday ? 'border-blue-300 bg-blue-50' : 'border-gray-100 hover:bg-gray-50'}`}>
                  <p className={`text-xs font-medium mb-1 ${isToday ? 'text-blue-700' : 'text-gray-600'}`}>{day}</p>
                  {dayAppts.slice(0, 3).map(a => (
                    <div key={a.id} className={`text-xs px-1 py-0.5 rounded mb-0.5 truncate ${statusColors[a.status]}`}>
                      {a.time} {getPatientName(a.patientId).split(' ')[0]}
                    </div>
                  ))}
                  {dayAppts.length > 3 && (
                    <p className="text-xs text-gray-400">+{dayAppts.length - 3} más</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* New appointment form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowForm(false)} />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full">
            <div className="border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Agendar Nueva Cita</h3>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-gray-100">✕</button>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Paciente *</label>
                <select className="input-field" required>
                  <option value="">Seleccionar paciente</option>
                  {mockPatients.map(p => (
                    <option key={p.id} value={p.id}>{p.firstName} {p.lastName} ({p.code})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Médico *</label>
                <select className="input-field" required>
                  <option value="">Seleccionar médico</option>
                  {mockDoctors.map(d => (
                    <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
                  <input type="date" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hora *</label>
                  <input type="time" className="input-field" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de cita *</label>
                <select className="input-field" required>
                  <option value="consulta">Consulta general</option>
                  <option value="seguimiento">Seguimiento</option>
                  <option value="urgencia">Urgencia</option>
                  <option value="procedimiento">Procedimiento</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Motivo de la cita</label>
                <textarea className="input-field resize-none" rows={3} placeholder="Describa el motivo..."></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t">
                <button type="button" onClick={() => setShowForm(false)} className="btn-outline">Cancelar</button>
                <button type="submit" className="btn-primary">Agendar Cita</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
