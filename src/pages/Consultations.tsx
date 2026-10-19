import { useState } from 'react';
import { mockConsultations, mockPatients, mockDoctors } from '../data/mockData';
import { Stethoscope, Search, FileText, Activity } from 'lucide-react';

export default function Consultations() {
  const [search, setSearch] = useState('');
  const [selectedConsultation, setSelectedConsultation] = useState<string | null>(null);

  const getPatientName = (id: string) => {
    const p = mockPatients.find(p => p.id === id);
    return p ? `${p.firstName} ${p.lastName}` : 'Desconocido';
  };

  const getDoctorName = (id: string) => {
    const d = mockDoctors.find(d => d.id === id);
    return d ? d.name : 'Desconocido';
  };

  const filtered = mockConsultations.filter(c =>
    `${getPatientName(c.patientId)} ${getDoctorName(c.doctorId)}`.toLowerCase().includes(search.toLowerCase())
  );

  const selected = selectedConsultation ? mockConsultations.find(c => c.id === selectedConsultation) : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Consultas Médicas</h1>
          <p className="text-gray-500 text-sm">Historia clínica electrónica</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Stethoscope size={16} /> Nueva Consulta
        </button>
      </div>

      {/* Search */}
      <div className="card p-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por paciente o médico..."
            className="input-field pl-10"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Consultations list */}
        <div className="lg:col-span-1 space-y-3">
          {filtered.map((consultation) => (
            <div
              key={consultation.id}
              onClick={() => setSelectedConsultation(consultation.id)}
              className={`card p-4 cursor-pointer transition-all ${selectedConsultation === consultation.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-600">{consultation.id.toUpperCase()}</span>
                <span className={`badge ${consultation.status === 'signed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {consultation.status === 'signed' ? 'Firmada' : 'Borrador'}
                </span>
              </div>
              <p className="font-medium text-gray-800">{getPatientName(consultation.patientId)}</p>
              <p className="text-sm text-gray-500 mt-1">{consultation.chiefComplaint}</p>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                <span>{getDoctorName(consultation.doctorId).replace('Dr. ', '').replace('Dra. ', '')}</span>
                <span>{consultation.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation detail */}
        <div className="lg:col-span-2">
          {selected ? (
            <div className="card p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{getPatientName(selected.patientId)}</h3>
                  <p className="text-sm text-gray-500">{getDoctorName(selected.doctorId)} — {selected.date}</p>
                </div>
                <span className={`badge ${selected.status === 'signed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {selected.status === 'signed' ? '✓ Firmada' : 'Borrador'}
                </span>
              </div>

              {/* Vital signs */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Activity size={16} className="text-red-500" /> Signos Vitales
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-red-600">Presión</p>
                    <p className="text-lg font-bold text-red-800">{selected.vitalSigns.bloodPressure}</p>
                    <p className="text-xs text-gray-500">mmHg</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-pink-600">FC</p>
                    <p className="text-lg font-bold text-pink-800">{selected.vitalSigns.heartRate}</p>
                    <p className="text-xs text-gray-500">lpm</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-orange-600">Temp</p>
                    <p className="text-lg font-bold text-orange-800">{selected.vitalSigns.temperature}°</p>
                    <p className="text-xs text-gray-500">Celsius</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-blue-600">Peso</p>
                    <p className="text-lg font-bold text-blue-800">{selected.vitalSigns.weight}</p>
                    <p className="text-xs text-gray-500">kg</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-green-600">Talla</p>
                    <p className="text-lg font-bold text-green-800">{selected.vitalSigns.height}</p>
                    <p className="text-xs text-gray-500">cm</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-purple-600">SpO2</p>
                    <p className="text-lg font-bold text-purple-800">{selected.vitalSigns.oxygenSaturation}%</p>
                    <p className="text-xs text-gray-500">Sat. O2</p>
                  </div>
                </div>
              </div>

              {/* Clinical info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Motivo de consulta</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{selected.chiefComplaint}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Historia del padecimiento actual</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{selected.historyOfPresentIllness}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Exploración física</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{selected.physicalExam}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Diagnósticos</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.diagnosis.map((d, i) => (
                      <span key={i} className="badge bg-blue-100 text-blue-700">
                        {selected.diagnosisCodes[i]} — {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Plan de tratamiento</h4>
                  <p className="text-sm text-gray-600 bg-green-50 border border-green-100 rounded-lg p-3">{selected.treatment}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Notas adicionales</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{selected.notes}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <button className="btn-primary flex items-center gap-2">
                  <FileText size={16} /> Generar Receta
                </button>
                <button className="btn-outline">Imprimir Consulta</button>
              </div>
            </div>
          ) : (
            <div className="card p-12 text-center">
              <Stethoscope size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">Seleccione una consulta</h3>
              <p className="text-sm text-gray-400 mt-1">Elija una consulta de la lista para ver los detalles</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
