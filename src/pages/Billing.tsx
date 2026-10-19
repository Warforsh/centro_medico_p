import { mockInvoices, mockPatients } from '../data/mockData';
import { CreditCard, Search, DollarSign, FileText } from 'lucide-react';
import { useState } from 'react';

export default function Billing() {
  const [search, setSearch] = useState('');

  const getPatientName = (id: string) => {
    const p = mockPatients.find(p => p.id === id);
    return p ? `${p.firstName} ${p.lastName}` : 'Desconocido';
  };

  const filtered = mockInvoices.filter(inv =>
    `${inv.invoiceNumber} ${getPatientName(inv.patientId)}`.toLowerCase().includes(search.toLowerCase())
  );

  const totalPending = mockInvoices.filter(i => i.status === 'pending').reduce((s, i) => s + i.total - i.paid, 0);
  const totalCollected = mockInvoices.reduce((s, i) => s + i.paid, 0);
  const totalMonth = mockInvoices.reduce((s, i) => s + i.total, 0);

  const statusColors: Record<string, string> = {
    pending: 'bg-amber-100 text-amber-700',
    partial: 'bg-blue-100 text-blue-700',
    paid: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  const statusLabels: Record<string, string> = {
    pending: 'Pendiente',
    partial: 'Parcial',
    paid: 'Pagada',
    cancelled: 'Anulada',
  };

  const methodLabels: Record<string, string> = {
    cash: '💵 Efectivo',
    card: '💳 Tarjeta',
    transfer: '🏦 Transferencia',
    insurance: '🛡️ Seguro',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Facturación y Caja</h1>
          <p className="text-gray-500 text-sm">Control de ingresos y cobros</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline flex items-center gap-2">
            <FileText size={16} /> Cierre de Caja
          </button>
          <button className="btn-primary flex items-center gap-2">
            <CreditCard size={16} /> Nueva Factura
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={16} className="text-green-600" />
            <p className="text-sm text-gray-500">Total facturado</p>
          </div>
          <p className="text-2xl font-bold text-gray-800">Q{totalMonth.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={16} className="text-emerald-600" />
            <p className="text-sm text-gray-500">Cobrado</p>
          </div>
          <p className="text-2xl font-bold text-emerald-600">Q{totalCollected.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={16} className="text-amber-600" />
            <p className="text-sm text-gray-500">Por cobrar</p>
          </div>
          <p className="text-2xl font-bold text-amber-600">Q{totalPending.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Facturas del mes</p>
          <p className="text-2xl font-bold text-gray-800">{mockInvoices.length}</p>
        </div>
      </div>

      {/* Search */}
      <div className="card p-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por número de factura o paciente..."
            className="input-field pl-10"
          />
        </div>
      </div>

      {/* Invoices */}
      <div className="space-y-4">
        {filtered.map((invoice) => (
          <div key={invoice.id} className="card overflow-hidden">
            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{invoice.invoiceNumber}</p>
                  <p className="text-sm text-gray-500">{getPatientName(invoice.patientId)} — {invoice.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`badge ${statusColors[invoice.status]}`}>{statusLabels[invoice.status]}</span>
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-800">Q{invoice.total.toLocaleString()}</p>
                  {invoice.paid > 0 && invoice.paid < invoice.total && (
                    <p className="text-xs text-amber-600">Pagado: Q{invoice.paid.toLocaleString()}</p>
                  )}
                  {invoice.paymentMethod && (
                    <p className="text-xs text-gray-500">{methodLabels[invoice.paymentMethod]}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="table-header text-xs">Descripción</th>
                    <th className="table-header text-xs">Tipo</th>
                    <th className="table-header text-xs">Cant.</th>
                    <th className="table-header text-xs">Precio</th>
                    <th className="table-header text-xs">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-50">
                      <td className="table-cell text-sm">{item.description}</td>
                      <td className="table-cell">
                        <span className="badge bg-gray-100 text-gray-600 capitalize">{item.type}</span>
                      </td>
                      <td className="table-cell text-sm">{item.quantity}</td>
                      <td className="table-cell text-sm">Q{item.unitPrice.toFixed(2)}</td>
                      <td className="table-cell text-sm font-medium">Q{item.total.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="table-cell text-right font-medium">Subtotal:</td>
                    <td className="table-cell font-medium">Q{invoice.subtotal.toFixed(2)}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="table-cell text-right font-medium">IVA (12%):</td>
                    <td className="table-cell font-medium">Q{invoice.tax.toFixed(2)}</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td colSpan={4} className="table-cell text-right font-bold text-blue-800">TOTAL:</td>
                    <td className="table-cell font-bold text-blue-800">Q{invoice.total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {invoice.status === 'pending' && (
              <div className="p-4 bg-amber-50 border-t border-amber-200 flex items-center justify-between">
                <p className="text-sm text-amber-700 font-medium">⚠️ Pago pendiente — Q{invoice.total.toLocaleString()}</p>
                <button className="btn-success text-xs">Registrar Pago</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
