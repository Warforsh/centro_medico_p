import { mockPrescriptions, mockPatients, mockDoctors } from '../data/mockData';
import { FileText, Printer, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Prescriptions() {
  const [selectedRx, setSelectedRx] = useState<string | null>(null);

  const getPatientName = (id: string) => {
    const p = mockPatients.find(p => p.id === id);
    return p ? `${p.firstName} ${p.lastName}` : 'Desconocido';
  };

  const getDoctorName = (id: string) => {
    const d = mockDoctors.find(d => d.id === id);
    return d ? d.name : 'Desconocido';
  };

  const statusColors: Record<string, string> = {
    active: 'bg-blue-100 text-blue-700',
    dispensed: 'bg-green-100 text-green-700',
    partially_dispensed: 'bg-yellow-100 text-yellow-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  const statusLabels: Record<string, string> = {
    active: 'Activa',
    dispensed: 'Dispensada',
    partially_dispensed: 'Parcial',
    cancelled: 'Cancelada',
  };

  const selected = selectedRx ? mockPrescriptions.find(r => r.id === selectedRx) : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Recetas Médicas</h1>
          <p className="text-gray-500 text-sm">{mockPrescriptions.length} recetas emitidas</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <FileText size={16} /> Nueva Receta
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* List */}
        <div className="space-y-3">
          {mockPrescriptions.map((rx) => (
            <div
              key={rx.id}
              onClick={() => setSelectedRx(rx.id)}
              className={`card p-4 cursor-pointer transition-all ${selectedRx === rx.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-600">{rx.id.toUpperCase()}</span>
                <span className={`badge ${statusColors[rx.status]}`}>{statusLabels[rx.status]}</span>
              </div>
              <p className="font-medium text-gray-800">{getPatientName(rx.patientId)}</p>
              <p className="text-sm text-gray-500 mt-1">{rx.items.length} medicamento(s) — {getDoctorName(rx.doctorId).replace('Dr. ', '').replace('Dra. ', '')}</p>
              <p className="text-xs text-gray-400 mt-2">{rx.date}</p>
            </div>
          ))}
        </div>

        {/* Detail */}
        <div>
          {selected ? (
            <div className="card p-6">
              {/* Prescription header */}
              <div className="text-center border-b pb-4 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Centro Médico Premier</h3>
                    <p className="text-xs text-gray-500">Receta Médica</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Paciente:</strong> {getPatientName(selected.patientId)}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Médico:</strong> {getDoctorName(selected.doctorId)}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Fecha:</strong> {selected.date}
                </p>
              </div>

              {/* Rx items */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Medicamentos prescritos</h4>
                {selected.items.map((item, index) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-800">
                          <span className="text-blue-600 font-bold">Rx{index + 1}.</span> {item.productName}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          <strong>Dosis:</strong> {item.dosage} — <strong>Frecuencia:</strong> {item.frequency}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Duración:</strong> {item.duration} — <strong>Cantidad:</strong> {item.quantity} {item.productName.includes('Tableta') ? 'tabletas' : 'unidades'}
                        </p>
                        <p className="text-sm text-gray-500 italic mt-1">{item.instructions}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Dispensado</p>
                        <p className="text-sm font-bold text-green-600">{item.dispensed}/{item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selected.notes && (
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-sm text-amber-800"><strong>Notas:</strong> {selected.notes}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-6 pt-4 border-t">
                <button className="btn-primary flex items-center gap-2">
                  <Printer size={16} /> Imprimir
                </button>
                <button className="btn-outline flex items-center gap-2">
                  <Eye size={16} /> Ver historial
                </button>
              </div>
            </div>
          ) : (
            <div className="card p-12 text-center">
              <FileText size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">Seleccione una receta</h3>
              <p className="text-sm text-gray-400 mt-1">Elija una receta para ver los detalles</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
