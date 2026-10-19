import { mockDocuments, mockPatients } from '../data/mockData';
import { FolderOpen, Upload, FileText, Image, ClipboardList, Download, Shield } from 'lucide-react';

export default function Documents() {
  const getPatientName = (id: string) => {
    const p = mockPatients.find(p => p.id === id);
    return p ? `${p.firstName} ${p.lastName}` : 'Desconocido';
  };

  const typeIcons: Record<string, { icon: typeof FileText; color: string }> = {
    consentimiento: { icon: ClipboardList, color: 'text-purple-600 bg-purple-100' },
    informe: { icon: FileText, color: 'text-blue-600 bg-blue-100' },
    resultado_lab: { icon: FileText, color: 'text-green-600 bg-green-100' },
    imagen: { icon: Image, color: 'text-amber-600 bg-amber-100' },
    otro: { icon: FileText, color: 'text-gray-600 bg-gray-100' },
  };

  const typeLabels: Record<string, string> = {
    consentimiento: 'Consentimiento',
    informe: 'Informe Médico',
    resultado_lab: 'Resultado Lab',
    imagen: 'Imagen/Estudio',
    otro: 'Otro',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Documentos Clínicos</h1>
          <p className="text-gray-500 text-sm">{mockDocuments.length} documentos en el sistema</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Upload size={16} /> Subir Documento
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="card p-4 text-center">
          <div className="w-10 h-10 mx-auto bg-purple-100 rounded-lg flex items-center justify-center mb-2">
            <ClipboardList size={20} className="text-purple-600" />
          </div>
          <p className="text-lg font-bold text-gray-800">{mockDocuments.filter(d => d.type === 'consentimiento').length}</p>
          <p className="text-xs text-gray-500">Consentimientos</p>
        </div>
        <div className="card p-4 text-center">
          <div className="w-10 h-10 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-2">
            <FileText size={20} className="text-blue-600" />
          </div>
          <p className="text-lg font-bold text-gray-800">{mockDocuments.filter(d => d.type === 'informe').length}</p>
          <p className="text-xs text-gray-500">Informes</p>
        </div>
        <div className="card p-4 text-center">
          <div className="w-10 h-10 mx-auto bg-green-100 rounded-lg flex items-center justify-center mb-2">
            <FileText size={20} className="text-green-600" />
          </div>
          <p className="text-lg font-bold text-gray-800">{mockDocuments.filter(d => d.type === 'resultado_lab').length}</p>
          <p className="text-xs text-gray-500">Lab Results</p>
        </div>
        <div className="card p-4 text-center">
          <div className="w-10 h-10 mx-auto bg-amber-100 rounded-lg flex items-center justify-center mb-2">
            <Image size={20} className="text-amber-600" />
          </div>
          <p className="text-lg font-bold text-gray-800">{mockDocuments.filter(d => d.type === 'imagen').length}</p>
          <p className="text-xs text-gray-500">Imágenes</p>
        </div>
        <div className="card p-4 text-center">
          <div className="w-10 h-10 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-2">
            <FolderOpen size={20} className="text-gray-600" />
          </div>
          <p className="text-lg font-bold text-gray-800">{mockDocuments.length}</p>
          <p className="text-xs text-gray-500">Total</p>
        </div>
      </div>

      {/* Documents list */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="table-header">Tipo</th>
                <th className="table-header">Título</th>
                <th className="table-header">Paciente</th>
                <th className="table-header">Fecha</th>
                <th className="table-header">Subido por</th>
                <th className="table-header">Archivo</th>
                <th className="table-header">Tamaño</th>
                <th className="table-header"></th>
              </tr>
            </thead>
            <tbody>
              {mockDocuments.map((doc) => {
                const typeInfo = typeIcons[doc.type];
                const Icon = typeInfo.icon;
                return (
                  <tr key={doc.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="table-cell">
                      <span className={`inline-flex items-center gap-1 badge ${typeInfo.color}`}>
                        <Icon size={12} />
                        {typeLabels[doc.type]}
                      </span>
                    </td>
                    <td className="table-cell">
                      <p className="font-medium text-gray-800">{doc.title}</p>
                      <p className="text-xs text-gray-500">{doc.description}</p>
                    </td>
                    <td className="table-cell text-sm">{getPatientName(doc.patientId)}</td>
                    <td className="table-cell text-sm">{doc.date}</td>
                    <td className="table-cell text-sm">{doc.uploadedBy}</td>
                    <td className="table-cell text-xs font-mono text-gray-500">{doc.fileName}</td>
                    <td className="table-cell text-sm">{doc.fileSize}</td>
                    <td className="table-cell">
                      <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                        <Download size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security notice */}
      <div className="card p-4 bg-amber-50 border-amber-200">
        <div className="flex items-start gap-3">
          <Shield size={20} className="text-amber-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800">Control de acceso a documentos</p>
            <p className="text-xs text-amber-700 mt-1">
              Los documentos clínicos están protegidos por controles de acceso basados en roles. 
              Solo el médico tratante y personal autorizado pueden acceder al expediente completo del paciente. 
              Todos los accesos quedan registrados en el log de auditoría.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


