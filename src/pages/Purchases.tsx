import { mockPurchaseOrders, mockSuppliers } from '../data/mockData';
import { ShoppingCart, Plus } from 'lucide-react';

export default function Purchases() {
  const getSupplierName = (id: string) => mockSuppliers.find(s => s.id === id)?.name || 'Desconocido';

  const statusColors: Record<string, string> = {
    draft: 'bg-gray-100 text-gray-700',
    sent: 'bg-blue-100 text-blue-700',
    partial: 'bg-yellow-100 text-yellow-700',
    received: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  const statusLabels: Record<string, string> = {
    draft: 'Borrador',
    sent: 'Enviada',
    partial: 'Parcial',
    received: 'Recibida',
    cancelled: 'Cancelada',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Compras y Proveedores</h1>
          <p className="text-gray-500 text-sm">{mockPurchaseOrders.length} órdenes de compra</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={16} /> Nueva Orden
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-sm text-gray-500">Órdenes activas</p>
          <p className="text-2xl font-bold text-blue-600">{mockPurchaseOrders.filter(o => o.status === 'sent' || o.status === 'draft').length}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Por recibir</p>
          <p className="text-2xl font-bold text-amber-600">Q{mockPurchaseOrders.filter(o => o.status === 'sent').reduce((s, o) => s + o.total, 0).toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Proveedores</p>
          <p className="text-2xl font-bold text-gray-800">{mockSuppliers.length}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Total mes</p>
          <p className="text-2xl font-bold text-gray-800">Q{mockPurchaseOrders.reduce((s, o) => s + o.total, 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Purchase Orders */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Órdenes de Compra</h3>
        {mockPurchaseOrders.map((order) => (
          <div key={order.id} className="card overflow-hidden">
            <div className="p-5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{order.id.toUpperCase()}</p>
                  <p className="text-sm text-gray-500">{getSupplierName(order.supplierId)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`badge ${statusColors[order.status]}`}>{statusLabels[order.status]}</span>
                <div className="text-right">
                  <p className="font-bold text-gray-800">Q{order.total.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Espera: {order.expectedDate}</p>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="table-header text-xs">Producto</th>
                    <th className="table-header text-xs">Cantidad</th>
                    <th className="table-header text-xs">Precio Unit.</th>
                    <th className="table-header text-xs">Total</th>
                    <th className="table-header text-xs">Recibido</th>
                    <th className="table-header text-xs">Lote</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="table-cell text-sm">{item.productName}</td>
                      <td className="table-cell text-sm">{item.quantity}</td>
                      <td className="table-cell text-sm">Q{item.unitPrice.toFixed(2)}</td>
                      <td className="table-cell text-sm font-medium">Q{item.total.toLocaleString()}</td>
                      <td className="table-cell text-sm">
                        <span className={item.received > 0 ? 'text-green-600 font-medium' : 'text-gray-400'}>
                          {item.received > 0 ? `${item.received}/${item.quantity}` : 'Pendiente'}
                        </span>
                      </td>
                      <td className="table-cell text-xs font-mono">{item.lot || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Suppliers */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-700 mb-4">Proveedores</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {mockSuppliers.map((supplier) => (
            <div key={supplier.id} className="card p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-800">{supplier.name}</p>
                  <p className="text-xs text-gray-500 mt-1">NIT: {supplier.nit}</p>
                  <p className="text-sm text-gray-600 mt-2">{supplier.address}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-3 text-sm text-gray-500">
                <span>📞 {supplier.phone}</span>
                <span>✉️ {supplier.email}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Contacto: {supplier.contactPerson}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
