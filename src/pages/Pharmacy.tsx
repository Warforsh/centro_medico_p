import { useState } from 'react';
import { mockPrescriptions, mockPatients, mockProducts } from '../data/mockData';
import { Pill, Search, Check, AlertCircle } from 'lucide-react';

export default function Pharmacy() {
  const [search, setSearch] = useState('');
  const [selectedRx, setSelectedRx] = useState<string | null>(null);

  const getPatientName = (id: string) => {
    const p = mockPatients.find(p => p.id === id);
    return p ? `${p.firstName} ${p.lastName}` : 'Desconocido';
  };

  const pendingRx = mockPrescriptions.filter(r => r.status === 'active');
  const selected = selectedRx ? mockPrescriptions.find(r => r.id === selectedRx) : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Farmacia</h1>
          <p className="text-gray-500 text-sm">Dispensación de medicamentos</p>
        </div>
        <div className="flex gap-3">
          <span className="badge bg-amber-100 text-amber-700 px-3 py-1">{pendingRx.length} recetas pendientes</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pending prescriptions */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">Recetas Pendientes</h3>
          {pendingRx.length === 0 ? (
            <div className="card p-6 text-center">
              <Check size={32} className="mx-auto text-green-400 mb-2" />
              <p className="text-sm text-gray-500">No hay recetas pendientes</p>
            </div>
          ) : (
            pendingRx.map((rx) => (
              <div
                key={rx.id}
                onClick={() => setSelectedRx(rx.id)}
                className={`card p-4 cursor-pointer transition-all ${selectedRx === rx.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-blue-600">{rx.id.toUpperCase()}</span>
                  <span className="badge bg-amber-100 text-amber-700">Pendiente</span>
                </div>
                <p className="font-medium text-gray-800">{getPatientName(rx.patientId)}</p>
                <p className="text-sm text-gray-500">{rx.items.length} medicamento(s) — {rx.date}</p>
              </div>
            ))
          )}
        </div>

        {/* Dispensation area */}
        <div className="lg:col-span-2">
          {selected ? (
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Dispensar Receta {selected.id.toUpperCase()}</h3>
                  <p className="text-sm text-gray-500">Paciente: {getPatientName(selected.patientId)}</p>
                </div>
                <span className="badge bg-amber-100 text-amber-700">Por dispensar</span>
              </div>

              <div className="space-y-4">
                {selected.items.map((item, index) => {
                  const product = mockProducts.find(p => p.id === item.productId);
                  const remaining = item.quantity - item.dispensed;
                  const hasStock = product && product.stock >= remaining;

                  return (
                    <div key={item.id} className={`rounded-lg p-4 border ${hasStock ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Pill size={16} className={hasStock ? 'text-green-600' : 'text-red-600'} />
                            <p className="font-medium text-gray-800">{item.productName}</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{item.dosage} — {item.frequency} — {item.duration}</p>
                          <p className="text-sm text-gray-500 mt-1">Cantidad a dispensar: <strong>{remaining}</strong></p>
                        </div>
                        <div className="text-right">
                          {hasStock ? (
                            <div>
                              <p className="text-xs text-green-600">✓ En stock</p>
                              <p className="text-sm font-medium text-green-700">{product?.stock} disp.</p>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <AlertCircle size={14} className="text-red-500" />
                              <p className="text-xs text-red-600">Stock insuficiente</p>
                              <p className="text-sm font-medium text-red-700">{product?.stock} disp.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {hasStock && (
                        <div className="mt-3 flex items-center gap-3">
                          <label className="text-sm text-gray-600">Lote:</label>
                          <select className="input-field text-sm flex-1">
                            <option>LOT-2025-045 (Venc: 2027-09-15)</option>
                            <option>LOT-2025-089 (Venc: 2028-01-20)</option>
                          </select>
                          <label className="text-sm text-gray-600">Cant:</label>
                          <input type="number" defaultValue={remaining} className="input-field w-20 text-sm" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t">
                <button className="btn-success flex items-center gap-2">
                  <Check size={16} /> Confirmar Dispensación
                </button>
                <button className="btn-outline">Imprimir Receta</button>
              </div>
            </div>
          ) : (
            <div className="card p-12 text-center">
              <Pill size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">Seleccione una receta</h3>
              <p className="text-sm text-gray-400 mt-1">Elija una receta pendiente para dispensar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
