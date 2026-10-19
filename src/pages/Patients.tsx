import { useState } from 'react';
import { mockPatients } from '../data/mockData';
import { Search, Plus, Filter, ChevronRight, X } from 'lucide-react';
import { Patient } from '../types';

export default function Patients() {
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showForm, setShowForm] = useState(false);

  const filtered = mockPatients.filter(p =>
    `${p.firstName} ${p.lastName} ${p.dpi} ${p.code}`.toLowerCase().includes(search.toLowerCase())
  );

  const getAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Pacientes</h1>
          <p className="text-gray-500 text-sm">{mockPatients.length} pacientes registrados</p>
        </div>
        <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2">
          <Plus size={16} /> Nuevo Paciente
        </button>
      </div>

      {/* Search & Filters */}
      <div className="card p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, DPI o código..."
              className="input-field pl-10"
            />
          </div>
          <button className="btn-outline flex items-center gap-2">
            <Filter size={16} /> Filtros
          </button>
        </div>
      </div>

      {/* Patients table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="table-header">Código</th>
                <th className="table-header">Nombre</th>
                <th className="table-header">DPI</th>
                <th className="table-header">Edad</th>
                <th className="table-header">Teléfono</th>
                <th className="table-header">Tipo Sangre</th>
                <th className="table-header">Registro</th>
                <th className="table-header"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-50 hover:bg-blue-50/50 cursor-pointer transition-colors" onClick={() => setSelectedPatient(patient)}>
                  <td className="table-cell font-mono text-xs text-blue-600">{patient.code}</td>
                  <td className="table-cell">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {patient.firstName.charAt(0)}{patient.lastName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{patient.firstName} {patient.lastName}</p>
                        <p className="text-xs text-gray-500">{patient.gender === 'M' ? 'Masculino' : 'Femenino'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell font-mono text-xs">{patient.dpi}</td>
                  <td className="table-cell">{getAge(patient.birthDate)} años</td>
                  <td className="table-cell text-sm">{patient.phone}</td>
                  <td className="table-cell">
                    <span className="badge bg-red-50 text-red-700">{patient.bloodType}</span>
                  </td>
                  <td className="table-cell text-xs text-gray-500">{patient.registeredAt}</td>
                  <td className="table-cell">
                    <ChevronRight size={16} className="text-gray-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Patient detail modal */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSelectedPatient(null)} />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-lg font-bold text-gray-800">Expediente del Paciente</h3>
              <button onClick={() => setSelectedPatient(null)} className="p-2 rounded-lg hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Header info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {selectedPatient.firstName.charAt(0)}{selectedPatient.lastName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{selectedPatient.firstName} {selectedPatient.lastName}</h4>
                  <p className="text-gray-500">Código: {selectedPatient.code} | DPI: {selectedPatient.dpi}</p>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Fecha de nacimiento</p>
                  <p className="text-sm font-medium">{selectedPatient.birthDate} ({getAge(selectedPatient.birthDate)} años)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Sexo</p>
                  <p className="text-sm font-medium">{selectedPatient.gender === 'M' ? 'Masculino' : 'Femenino'}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Teléfono</p>
                  <p className="text-sm font-medium">{selectedPatient.phone}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">{selectedPatient.email}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Tipo de sangre</p>
                  <p className="text-sm font-medium text-red-600">{selectedPatient.bloodType}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Departamento</p>
                  <p className="text-sm font-medium">{selectedPatient.department}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Dirección</p>
                <p className="text-sm font-medium">{selectedPatient.address}</p>
              </div>

              {/* Medical info */}
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800 mb-3">Información Médica</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Alergias</p>
                    {selectedPatient.allergies.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {selectedPatient.allergies.map((a, i) => (
                          <span key={i} className="badge bg-red-100 text-red-700">{a}</span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">Sin alergias conocidas</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Enfermedades crónicas</p>
                    {selectedPatient.chronicDiseases.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {selectedPatient.chronicDiseases.map((d, i) => (
                          <span key={i} className="badge bg-amber-100 text-amber-700">{d}</span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">Ninguna</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Emergency contact */}
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800 mb-3">Contacto de Emergencia</h5>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800">{selectedPatient.emergencyContact}</p>
                  <p className="text-sm text-gray-600">{selectedPatient.emergencyPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New patient form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowForm(false)} />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-lg font-bold text-gray-800">Registrar Nuevo Paciente</h3>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombres *</label>
                  <input type="text" className="input-field" placeholder="Juan Carlos" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos *</label>
                  <input type="text" className="input-field" placeholder="Hernández Xicay" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">DPI *</label>
                  <input type="text" className="input-field" placeholder="1234567890101" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento *</label>
                  <input type="date" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sexo *</label>
                  <select className="input-field" required>
                    <option value="">Seleccionar</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de sangre</label>
                  <select className="input-field">
                    <option value="">Seleccionar</option>
                    <option>A+</option><option>A-</option>
                    <option>B+</option><option>B-</option>
                    <option>AB+</option><option>AB-</option>
                    <option>O+</option><option>O-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                  <input type="tel" className="input-field" placeholder="+502 4000 0000" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="input-field" placeholder="correo@ejemplo.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
                <input type="text" className="input-field" placeholder="Dirección completa" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contacto emergencia</label>
                  <input type="text" className="input-field" placeholder="Nombre del contacto" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tel. emergencia</label>
                  <input type="tel" className="input-field" placeholder="+502 5000 0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alergias conocidas</label>
                <input type="text" className="input-field" placeholder="Separar con comas: Penicilina, Aspirina" />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t">
                <button type="button" onClick={() => setShowForm(false)} className="btn-outline">Cancelar</button>
                <button type="submit" className="btn-primary">Registrar Paciente</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
