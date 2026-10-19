import { useState } from 'react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const specialties = [
    'Medicina General',
    'Cardiología',
    'Neurología',
    'Pediatría',
    'Oftalmología',
    'Medicina Interna',
    'Traumatología',
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      specialty: '',
      doctor: '',
      date: '',
      time: '',
      reason: '',
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="citas" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Cita Agendada!</h3>
            <p className="text-gray-600 mb-6">
              Tu cita ha sido registrada exitosamente. Recibirás un correo de confirmación pronto.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 text-left mb-6">
              <p className="text-sm text-gray-600"><strong>Paciente:</strong> {formData.name}</p>
              <p className="text-sm text-gray-600"><strong>Especialidad:</strong> {formData.specialty}</p>
              <p className="text-sm text-gray-600"><strong>Fecha:</strong> {formData.date}</p>
              <p className="text-sm text-gray-600"><strong>Hora:</strong> {formData.time}</p>
            </div>
            <button onClick={handleReset} className="btn-primary">
              Agendar otra cita
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="citas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Agenda tu cita</span>
          <h2 className="section-title mt-2">Reserva tu Consulta</h2>
          <p className="section-subtitle">
            Completa el formulario para agendar tu cita médica. Nuestro equipo te contactará 
            para confirmar tu reserva.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Juan Pérez García"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+52 555 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Especialidad *</label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Seleccionar especialidad</option>
                    {specialties.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fecha preferida *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hora preferida *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Seleccionar horario</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivo de consulta</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Describe brevemente el motivo de tu consulta..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Confirmar Cita
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-blue-600 to-teal-600 text-white">
              <h3 className="text-xl font-bold mb-4">Información Importante</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Llega 15 minutos antes de tu cita</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Trae tu identificación oficial</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Trae estudios previos si los tienes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Cancela con 24h de anticipación</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Horarios de Atención</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium text-gray-800">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-medium text-gray-800">8:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-medium text-gray-800">Solo emergencias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
