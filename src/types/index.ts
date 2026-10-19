// ============================================
// TIPOS - Centro Médico Premier (Guatemala)
// ============================================

export type UserRole = 'admin' | 'doctor' | 'receptionist' | 'pharmacist' | 'nurse';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Módulo 1: Pacientes
export interface Patient {
  id: string;
  code: string;
  firstName: string;
  lastName: string;
  dpi: string;
  birthDate: string;
  gender: 'M' | 'F';
  phone: string;
  email: string;
  address: string;
  department: string;
  emergencyContact: string;
  emergencyPhone: string;
  bloodType: string;
  allergies: string[];
  chronicDiseases: string[];
  registeredAt: string;
}

// Módulo 2: Citas
export type AppointmentStatus = 'scheduled' | 'confirmed' | 'waiting' | 'in_progress' | 'completed' | 'cancelled' | 'absent';

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  duration: number;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  type: 'consulta' | 'seguimiento' | 'urgencia' | 'procedimiento';
}

// Módulo 3: Consulta Médica
export interface VitalSigns {
  bloodPressure: string;
  heartRate: number;
  temperature: number;
  weight: number;
  height: number;
  oxygenSaturation: number;
}

export interface Consultation {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  date: string;
  vitalSigns: VitalSigns;
  chiefComplaint: string;
  historyOfPresentIllness: string;
  physicalExam: string;
  diagnosis: string[];
  diagnosisCodes: string[];
  treatment: string;
  notes: string;
  status: 'draft' | 'completed' | 'signed';
}

// Módulo 4: Recetas
export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  consultationId: string;
  date: string;
  items: PrescriptionItem[];
  status: 'active' | 'dispensed' | 'partially_dispensed' | 'cancelled';
  notes?: string;
}

export interface PrescriptionItem {
  id: string;
  productId: string;
  productName: string;
  dosage: string;
  frequency: string;
  duration: string;
  quantity: number;
  instructions: string;
  dispensed: number;
}

// Módulo 5: Facturación
export type InvoiceStatus = 'pending' | 'partial' | 'paid' | 'cancelled';
export type PaymentMethod = 'cash' | 'card' | 'transfer' | 'insurance';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  patientId: string;
  date: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  paid: number;
  status: InvoiceStatus;
  paymentMethod?: PaymentMethod;
  notes?: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  type: 'consulta' | 'medicamento' | 'procedimiento' | 'laboratorio' | 'otro';
}

export interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  method: PaymentMethod;
  date: string;
  reference?: string;
  cashierId: string;
}

// Módulo 6: Farmacia
export interface Dispensation {
  id: string;
  prescriptionId: string;
  patientId: string;
  pharmacistId: string;
  date: string;
  items: DispensationItem[];
  status: 'completed' | 'partial' | 'returned';
}

export interface DispensationItem {
  productId: string;
  productName: string;
  quantity: number;
  lot: string;
  expiryDate: string;
}

// Módulo 7: Inventario
export interface Product {
  id: string;
  code: string;
  name: string;
  activePrinciple: string;
  presentation: string;
  category: 'medicamento' | 'insumo' | 'equipo' | 'otro';
  unit: string;
  stock: number;
  minStock: number;
  price: number;
  cost: number;
  location: string;
  requiresPrescription: boolean;
}

export interface InventoryMovement {
  id: string;
  productId: string;
  type: 'entry' | 'exit' | 'adjustment' | 'return' | 'loss';
  quantity: number;
  date: string;
  userId: string;
  reason: string;
  reference?: string;
  lot?: string;
  expiryDate?: string;
}

// Módulo 8: Compras
export interface Supplier {
  id: string;
  name: string;
  nit: string;
  phone: string;
  email: string;
  address: string;
  contactPerson: string;
}

export interface PurchaseOrder {
  id: string;
  supplierId: string;
  date: string;
  items: PurchaseItem[];
  total: number;
  status: 'draft' | 'sent' | 'partial' | 'received' | 'cancelled';
  expectedDate: string;
}

export interface PurchaseItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;
  received: number;
  lot?: string;
  expiryDate?: string;
}

// Módulo 9: Personal Médico
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  licenseNumber: string;
  phone: string;
  email: string;
  schedule: string;
  consultationFee: number;
  status: 'active' | 'inactive';
  avatar?: string;
}

// Módulo 12: Documentos
export interface ClinicalDocument {
  id: string;
  patientId: string;
  type: 'consentimiento' | 'informe' | 'resultado_lab' | 'imagen' | 'otro';
  title: string;
  description: string;
  date: string;
  uploadedBy: string;
  fileName: string;
  fileSize: string;
}

// Módulo 11: Auditoría
export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  module: string;
  details: string;
  timestamp: string;
  ipAddress: string;
}

// Módulo 10: Reportes
export interface DashboardStats {
  totalPatients: number;
  todayAppointments: number;
  pendingAppointments: number;
  todayRevenue: number;
  monthlyRevenue: number;
  lowStockProducts: number;
  activeDoctors: number;
  completedConsultations: number;
}
