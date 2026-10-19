import { useState } from 'react';
import { mockProducts, mockInventoryMovements } from '../data/mockData';
import { Package, Search, AlertTriangle, ArrowDown, ArrowUp, RefreshCw } from 'lucide-react';

export default function Inventory() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [tab, setTab] = useState<'products' | 'movements'>('products');

  const filtered = mockProducts.filter(p => {
    const matchSearch = `${p.name} ${p.code} ${p.activePrinciple}`.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'all' || p.category === category;
    return matchSearch && matchCategory;
  });

  const lowStock = mockProducts.filter(p => p.stock <= p.minStock);
  const totalValue = mockProducts.reduce((sum, p) => sum + (p.stock * p.cost), 0);

  const movementTypeIcons: Record<string, { icon: typeof ArrowDown; color: string }> = {
    entry: { icon: ArrowDown, color: 'text-green-600 bg-green-100' },
    exit: { icon: ArrowUp, color: 'text-red-600 bg-red-100' },
    adjustment: { icon: RefreshCw, color: 'text-amber-600 bg-amber-100' },
    return: { icon: ArrowDown, color: 'text-blue-600 bg-blue-100' },
    loss: { icon: ArrowUp, color: 'text-gray-600 bg-gray-100' },
  };

  const movementLabels: Record<string, string> = {
    entry: 'Entrada',
    exit: 'Salida',
    adjustment: 'Ajuste',
    return: 'Devolución',
    loss: 'Merma',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Inventario</h1>
          <p className="text-gray-500 text-sm">Control de medicamentos e insumos</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Package size={16} /> Nuevo Producto
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-sm text-gray-500">Total productos</p>
          <p className="text-2xl font-bold text-gray-800">{mockProducts.length}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Valor del inventario</p>
          <p className="text-2xl font-bold text-gray-800">Q{totalValue.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Stock bajo</p>
          <p className="text-2xl font-bold text-red-600">{lowStock.length}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-gray-500">Movimientos (hoy)</p>
          <p className="text-2xl font-bold text-blue-600">{mockInventoryMovements.filter(m => m.date === '2026-01-20').length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab('products')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === 'products' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          📦 Productos
        </button>
        <button
          onClick={() => setTab('movements')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === 'movements' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          📋 Kardex / Movimientos
        </button>
      </div>

      {tab === 'products' ? (
        <>
          {/* Filters */}
          <div className="card p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar producto, principio activo..."
                  className="input-field pl-10"
                />
              </div>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field">
                <option value="all">Todas las categorías</option>
                <option value="medicamento">Medicamentos</option>
                <option value="insumo">Insumos</option>
                <option value="equipo">Equipos</option>
              </select>
            </div>
          </div>

          {/* Products table */}
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="table-header">Código</th>
                    <th className="table-header">Producto</th>
                    <th className="table-header">Principio Activo</th>
                    <th className="table-header">Stock</th>
                    <th className="table-header">Mín.</th>
                    <th className="table-header">Precio</th>
                    <th className="table-header">Ubicación</th>
                    <th className="table-header">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((product) => {
                    const isLow = product.stock <= product.minStock;
                    return (
                      <tr key={product.id} className={`border-b border-gray-50 ${isLow ? 'bg-red-50/50' : 'hover:bg-gray-50'}`}>
                        <td className="table-cell font-mono text-xs text-blue-600">{product.code}</td>
                        <td className="table-cell">
                          <p className="font-medium text-gray-800">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.presentation}</p>
                        </td>
                        <td className="table-cell text-sm">{product.activePrinciple}</td>
                        <td className="table-cell">
                          <span className={`font-bold ${isLow ? 'text-red-600' : 'text-gray-800'}`}>{product.stock.toLocaleString()}</span>
                          <span className="text-xs text-gray-500 ml-1">{product.unit}(s)</span>
                        </td>
                        <td className="table-cell text-sm text-gray-500">{product.minStock}</td>
                        <td className="table-cell font-medium">Q{product.price.toFixed(2)}</td>
                        <td className="table-cell text-xs">{product.location}</td>
                        <td className="table-cell">
                          {isLow ? (
                            <span className="badge bg-red-100 text-red-700 flex items-center gap-1 w-fit">
                              <AlertTriangle size={12} /> Bajo
                            </span>
                          ) : (
                            <span className="badge bg-green-100 text-green-700">OK</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        /* Movements / Kardex */
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="table-header">Fecha</th>
                  <th className="table-header">Tipo</th>
                  <th className="table-header">Producto</th>
                  <th className="table-header">Cantidad</th>
                  <th className="table-header">Lote</th>
                  <th className="table-header">Motivo</th>
                  <th className="table-header">Referencia</th>
                </tr>
              </thead>
              <tbody>
                {mockInventoryMovements.map((mov) => {
                  const product = mockProducts.find(p => p.id === mov.productId);
                  const typeInfo = movementTypeIcons[mov.type];
                  const Icon = typeInfo.icon;
                  return (
                    <tr key={mov.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="table-cell text-sm">{mov.date}</td>
                      <td className="table-cell">
                        <span className={`inline-flex items-center gap-1 badge ${typeInfo.color}`}>
                          <Icon size={12} />
                          {movementLabels[mov.type]}
                        </span>
                      </td>
                      <td className="table-cell font-medium text-sm">{product?.name || 'N/A'}</td>
                      <td className={`table-cell font-bold ${mov.type === 'entry' || mov.type === 'return' ? 'text-green-600' : 'text-red-600'}`}>
                        {mov.type === 'entry' || mov.type === 'return' ? '+' : '-'}{Math.abs(mov.quantity)}
                      </td>
                      <td className="table-cell text-xs font-mono">{mov.lot || '-'}</td>
                      <td className="table-cell text-sm max-w-[200px] truncate">{mov.reason}</td>
                      <td className="table-cell text-xs text-blue-600 font-mono">{mov.reference || '-'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
