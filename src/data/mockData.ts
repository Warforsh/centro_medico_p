import { Patient, Appointment, Consultation, Prescription, Invoice, Product, Supplier, PurchaseOrder, Doctor, ClinicalDocument, AuditLog, DashboardStats, InventoryMovement } from '../types';

// ============================================
// DATOS MOCK - Centro Médico Premier (Guatemala)
// ============================================

export const mockDoctors: Doctor[] = [
  { id: 'doc-1', name: 'Dr. Carlos Enrique Méndez López', specialty: 'Medicina General', licenseNumber: 'MED-12847', phone: '+502 5555 1001', email: 'cmendez@premier.gt', schedule: 'Lun-Vie 8:00-16:00', consultationFee: 250, status: 'active' },
  { id: 'doc-2', name: 'Dra. María Fernanda Ríos Castillo', specialty: 'Cardiología', licenseNumber: 'MED-9834', phone: '+502 5555 1002', email: 'mrios@premier.gt', schedule: 'Lun-Vie 9:00-17:00', consultationFee: 450, status: 'active' },
  { id: 'doc-3', name: 'Dr. Luis Alberto García Morales', specialty: 'Pediatría', licenseNumber: 'MED-15623', phone: '+502 5555 1003', email: 'lgarcia@premier.gt', schedule: 'Lun-Sáb 7:00-15:00', consultationFee: 300, status: 'active' },
  { id: 'doc-4', name: 'Dra. Ana Lucía de León Paredes', specialty: 'Ginecología', licenseNumber: 'MED-11205', phone: '+502 5555 1004', email: 'adeleon@premier.gt', schedule: 'Mar-Sáb 8:00-16:00', consultationFee: 400, status: 'active' },
  { id: 'doc-5', name: 'Dr. Roberto José Aguilar Sandoval', specialty: 'Traumatología', licenseNumber: 'MED-8756', phone: '+502 5555 1005', email: 'raguilar@premier.gt', schedule: 'Lun-Vie 10:00-18:00', consultationFee: 500, status: 'active' },
  { id: 'doc-6', name: 'Dra. Sofía Isabel Ramírez Torres', specialty: 'Dermatología', licenseNumber: 'MED-14390', phone: '+502 5555 1006', email: 'sramirez@premier.gt', schedule: 'Lun-Jue 8:00-16:00', consultationFee: 350, status: 'active' },
  { id: 'doc-7', name: 'Dr. Fernando Alejandro Cifuentes', specialty: 'Neurología', licenseNumber: 'MED-7892', phone: '+502 5555 1007', email: 'fcifuentes@premier.gt', schedule: 'Mié-Vie 9:00-17:00', consultationFee: 550, status: 'active' },
  { id: 'doc-8', name: 'Dra. Patricia Elena Vásquez', specialty: 'Oftalmología', licenseNumber: 'MED-10456', phone: '+502 5555 1008', email: 'pvasquez@premier.gt', schedule: 'Lun-Vie 8:00-14:00', consultationFee: 380, status: 'active' },
];

export const mockPatients: Patient[] = [
  { id: 'pac-1', code: 'P-0001', firstName: 'Juan Carlos', lastName: 'Hernández Xicay', dpi: '1234567890101', birthDate: '1985-03-15', gender: 'M', phone: '+502 4012 3456', email: 'jchernandez@gmail.com', address: '7a Avenida 12-34, Zona 1', department: 'Guatemala', emergencyContact: 'María Hernández', emergencyPhone: '+502 4012 3457', bloodType: 'O+', allergies: ['Penicilina'], chronicDiseases: ['Hipertensión'], registeredAt: '2024-01-15' },
  { id: 'pac-2', code: 'P-0002', firstName: 'María Elena', lastName: 'López Tut', dpi: '9876543210202', birthDate: '1990-07-22', gender: 'F', phone: '+502 5678 9012', email: 'mlopez@gmail.com', address: '18 Calle 5-67, Zona 10', department: 'Guatemala', emergencyContact: 'Pedro López', emergencyPhone: '+502 5678 9013', bloodType: 'A+', allergies: [], chronicDiseases: [], registeredAt: '2024-02-20' },
  { id: 'pac-3', code: 'P-0003', firstName: 'Diego Armando', lastName: 'Morales Chacón', dpi: '4567891230303', birthDate: '1978-11-08', gender: 'M', phone: '+502 3456 7890', email: 'dmorales@gmail.com', address: '4a Calle 23-45, Zona 9', department: 'Guatemala', emergencyContact: 'Rosa Chacón', emergencyPhone: '+502 3456 7891', bloodType: 'B-', allergies: ['Sulfas', 'Aspirina'], chronicDiseases: ['Diabetes Tipo 2', 'Hipertensión'], registeredAt: '2024-03-10' },
  { id: 'pac-4', code: 'P-0004', firstName: 'Lucía Andrea', lastName: 'Pérez Ixchel', dpi: '3216549870404', birthDate: '2015-05-30', gender: 'F', phone: '+502 5123 4567', email: 'luis.perez@gmail.com', address: '12 Avenida 8-90, Zona 7', department: 'Guatemala', emergencyContact: 'Luis Pérez (padre)', emergencyPhone: '+502 5123 4568', bloodType: 'AB+', allergies: ['Lactosa'], chronicDiseases: [], registeredAt: '2024-04-05' },
  { id: 'pac-5', code: 'P-0005', firstName: 'Roberto', lastName: 'Tum Osorio', dpi: '6549873210505', birthDate: '1965-09-12', gender: 'M', phone: '+502 4789 0123', email: 'rtum@gmail.com', address: '9a Avenida 15-22, Zona 1', department: 'Quetzaltenango', emergencyContact: 'Elena Tum', emergencyPhone: '+502 4789 0124', bloodType: 'O-', allergies: [], chronicDiseases: ['Artritis'], registeredAt: '2024-05-18' },
  { id: 'pac-6', code: 'P-0006', firstName: 'Carmen Rosa', lastName: 'Soto Ajú', dpi: '7891234560606', birthDate: '1992-01-25', gender: 'F', phone: '+502 5234 5678', email: 'csoto@gmail.com', address: '6a Calle 10-15, Zona 11', department: 'Guatemala', emergencyContact: 'Mario Soto', emergencyPhone: '+502 5234 5679', bloodType: 'A-', allergies: ['Ibuprofeno'], chronicDiseases: ['Asma'], registeredAt: '2024-06-01' },
  { id: 'pac-7', code: 'P-0007', firstName: 'Mario Alberto', lastName: 'Reyes Guarcax', dpi: '1472583690707', birthDate: '1970-12-03', gender: 'M', phone: '+502 3890 1234', email: 'mreyes@gmail.com', address: '3a Avenida 7-89, Zona 4', department: 'Escuintla', emergencyContact: 'Ana Guarcax', emergencyPhone: '+502 3890 1235', bloodType: 'B+', allergies: [], chronicDiseases: ['Hipertensión', 'Colesterol alto'], registeredAt: '2024-06-15' },
  { id: 'pac-8', code: 'P-0008', firstName: 'Isabella', lastName: 'Chong Mejía', dpi: '2583691470808', birthDate: '2020-08-14', gender: 'F', phone: '+502 5567 8901', email: 'wchong@gmail.com', address: '14 Avenida 2-34, Zona 14', department: 'Guatemala', emergencyContact: 'William Chong (padre)', emergencyPhone: '+502 5567 8902', bloodType: 'O+', allergies: ['Mariscos'], chronicDiseases: [], registeredAt: '2024-07-22' },
];

export const mockAppointments: Appointment[] = [
  { id: 'cit-1', patientId: 'pac-1', doctorId: 'doc-2', date: '2026-01-20', time: '08:00', duration: 30, status: 'completed', reason: 'Control de hipertensión', type: 'seguimiento' },
  { id: 'cit-2', patientId: 'pac-2', doctorId: 'doc-1', date: '2026-01-20', time: '08:30', duration: 30, status: 'completed', reason: 'Consulta general - dolor de cabeza', type: 'consulta' },
  { id: 'cit-3', patientId: 'pac-3', doctorId: 'doc-1', date: '2026-01-20', time: '09:00', duration: 45, status: 'completed', reason: 'Control de diabetes', type: 'seguimiento' },
  { id: 'cit-4', patientId: 'pac-4', doctorId: 'doc-3', date: '2026-01-20', time: '09:00', duration: 30, status: 'waiting', reason: 'Vacunación infantil', type: 'consulta' },
  { id: 'cit-5', patientId: 'pac-5', doctorId: 'doc-5', date: '2026-01-20', time: '10:00', duration: 45, status: 'waiting', reason: 'Dolor en rodilla derecha', type: 'consulta' },
  { id: 'cit-6', patientId: 'pac-6', doctorId: 'doc-1', date: '2026-01-20', time: '10:30', duration: 30, status: 'scheduled', reason: 'Crisis asmática recurrente', type: 'consulta' },
  { id: 'cit-7', patientId: 'pac-7', doctorId: 'doc-2', date: '2026-01-20', time: '11:00', duration: 30, status: 'scheduled', reason: 'Control cardiovascular', type: 'seguimiento' },
  { id: 'cit-8', patientId: 'pac-8', doctorId: 'doc-3', date: '2026-01-20', time: '11:30', duration: 30, status: 'scheduled', reason: 'Chequeo pediátrico regular', type: 'consulta' },
  { id: 'cit-9', patientId: 'pac-1', doctorId: 'doc-7', date: '2026-01-21', time: '09:00', duration: 45, status: 'confirmed', reason: 'Dolor de cabeza crónico', type: 'consulta' },
  { id: 'cit-10', patientId: 'pac-2', doctorId: 'doc-4', date: '2026-01-21', time: '10:00', duration: 30, status: 'confirmed', reason: 'Control prenatal', type: 'seguimiento' },
  { id: 'cit-11', patientId: 'pac-3', doctorId: 'doc-1', date: '2026-01-21', time: '08:00', duration: 30, status: 'scheduled', reason: 'Resultado de laboratorio', type: 'seguimiento' },
  { id: 'cit-12', patientId: 'pac-6', doctorId: 'doc-8', date: '2026-01-22', time: '08:00', duration: 30, status: 'scheduled', reason: 'Examen visual', type: 'consulta' },
];

export const mockConsultations: Consultation[] = [
  {
    id: 'con-1', patientId: 'pac-1', doctorId: 'doc-2', appointmentId: 'cit-1', date: '2026-01-20',
    vitalSigns: { bloodPressure: '140/90', heartRate: 78, temperature: 36.5, weight: 82, height: 172, oxygenSaturation: 97 },
    chiefComplaint: 'Control de hipertensión arterial',
    historyOfPresentIllness: 'Paciente masculino de 40 años con diagnóstico de HTA hace 3 años. Refiere cumplimiento parcial del tratamiento. Sin síntomas agudos.',
    physicalExam: 'Paciente consciente, orientado. FC: 78 lpm. PA: 140/90 mmHg. Sin edema de miembros inferiores. Ruidos cardiacos rítmicos.',
    diagnosis: ['Hipertensión arterial esencial', 'Control subóptimo'],
    diagnosisCodes: ['I10', 'Z86.79'],
    treatment: 'Ajustar Losartán 50mg a 100mg/día. Dieta baja en sodio. Control en 2 semanas.',
    notes: 'Se solicita perfil lipídico y función renal.',
    status: 'signed'
  },
  {
    id: 'con-2', patientId: 'pac-2', doctorId: 'doc-1', appointmentId: 'cit-2', date: '2026-01-20',
    vitalSigns: { bloodPressure: '118/75', heartRate: 72, temperature: 36.8, weight: 60, height: 162, oxygenSaturation: 99 },
    chiefComplaint: 'Cefalea tensional de 3 días de evolución',
    historyOfPresentIllness: 'Paciente femenina de 35 años refiere dolor de cabeza tipo opresivo bilateral, intensidad 5/10, de 3 días de evolución. Asociado a estrés laboral. Sin náuseas ni vómitos.',
    physicalExam: 'Paciente consciente, orientada. Sin signos meníngeos. Pares craneales conservados. No focalidad neurológica.',
    diagnosis: ['Cefalea tensional'],
    diagnosisCodes: ['G44.209'],
    treatment: 'Paracetamol 500mg cada 8 horas por 3 días. Medidas de relajación. Si persiste, consultar nuevamente.',
    notes: 'Paciente refiere aumento de estrés laboral reciente.',
    status: 'signed'
  },
  {
    id: 'con-3', patientId: 'pac-3', doctorId: 'doc-1', appointmentId: 'cit-3', date: '2026-01-20',
    vitalSigns: { bloodPressure: '135/85', heartRate: 80, temperature: 36.4, weight: 95, height: 170, oxygenSaturation: 98 },
    chiefComplaint: 'Control de diabetes mellitus tipo 2',
    historyOfPresentIllness: 'Paciente masculino de 47 años con DM2 diagnosticada hace 5 años. En tratamiento con Metformina. Refiere buena adherencia. Glucemias en ayunas recientes entre 130-150 mg/dL.',
    physicalExam: 'Paciente consciente, orientado. IMC: 32.8 (obesidad grado I). Sin lesiones en pies. Reflejos presentes.',
    diagnosis: ['Diabetes mellitus tipo 2', 'Obesidad grado I', 'Hipertensión arterial'],
    diagnosisCodes: ['E11.9', 'E66.01', 'I10'],
    treatment: 'Continuar Metformina 850mg cada 12 horas. Agregar Glibenclamida 5mg/día. Plan de alimentación. Ejercicio 30 min/día.',
    notes: 'Se solicitan: HbA1c, perfil lipídico, creatinina, microalbuminuria.',
    status: 'signed'
  },
];

export const mockPrescriptions: Prescription[] = [
  {
    id: 'rec-1', patientId: 'pac-1', doctorId: 'doc-2', consultationId: 'con-1', date: '2026-01-20', status: 'dispensed',
    items: [
      { id: 'ri-1', productId: 'prod-1', productName: 'Losartán 100mg', dosage: '100mg', frequency: 'Cada 24 horas', duration: '30 días', quantity: 30, instructions: 'Tomar en la mañana', dispensed: 30 },
      { id: 'ri-2', productId: 'prod-5', productName: 'Aspirina 100mg', dosage: '100mg', frequency: 'Cada 24 horas', duration: '30 días', quantity: 30, instructions: 'Tomar con alimentos', dispensed: 30 },
    ]
  },
  {
    id: 'rec-2', patientId: 'pac-2', doctorId: 'doc-1', consultationId: 'con-2', date: '2026-01-20', status: 'dispensed',
    items: [
      { id: 'ri-3', productId: 'prod-2', productName: 'Paracetamol 500mg', dosage: '500mg', frequency: 'Cada 8 horas', duration: '3 días', quantity: 9, instructions: 'Tomar con abundante agua', dispensed: 9 },
    ]
  },
  {
    id: 'rec-3', patientId: 'pac-3', doctorId: 'doc-1', consultationId: 'con-3', date: '2026-01-20', status: 'active',
    items: [
      { id: 'ri-4', productId: 'prod-3', productName: 'Metformina 850mg', dosage: '850mg', frequency: 'Cada 12 horas', duration: '30 días', quantity: 60, instructions: 'Tomar con alimentos', dispensed: 0 },
      { id: 'ri-5', productId: 'prod-4', productName: 'Glibenclamida 5mg', dosage: '5mg', frequency: 'Cada 24 horas', duration: '30 días', quantity: 30, instructions: 'Tomar antes del desayuno', dispensed: 0 },
    ]
  },
];

export const mockProducts: Product[] = [
  { id: 'prod-1', code: 'MED-001', name: 'Losartán 100mg', activePrinciple: 'Losartán potásico', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 2500, minStock: 500, price: 3.50, cost: 1.80, location: 'Estante A-1', requiresPrescription: true },
  { id: 'prod-2', code: 'MED-002', name: 'Paracetamol 500mg', activePrinciple: 'Paracetamol', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 5000, minStock: 1000, price: 1.50, cost: 0.60, location: 'Estante A-2', requiresPrescription: false },
  { id: 'prod-3', code: 'MED-003', name: 'Metformina 850mg', activePrinciple: 'Metformina clorhidrato', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 3200, minStock: 600, price: 4.00, cost: 2.10, location: 'Estante A-3', requiresPrescription: true },
  { id: 'prod-4', code: 'MED-004', name: 'Glibenclamida 5mg', activePrinciple: 'Glibenclamida', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 1800, minStock: 400, price: 3.00, cost: 1.50, location: 'Estante A-3', requiresPrescription: true },
  { id: 'prod-5', code: 'MED-005', name: 'Aspirina 100mg', activePrinciple: 'Ácido acetilsalicílico', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 4000, minStock: 800, price: 2.00, cost: 0.90, location: 'Estante A-4', requiresPrescription: false },
  { id: 'prod-6', code: 'MED-006', name: 'Amoxicilina 500mg', activePrinciple: 'Amoxicilina trihidrato', presentation: 'Cápsula', category: 'medicamento', unit: 'cápsula', stock: 2000, minStock: 500, price: 5.50, cost: 2.80, location: 'Estante B-1', requiresPrescription: true },
  { id: 'prod-7', code: 'MED-007', name: 'Omeprazol 20mg', activePrinciple: 'Omeprazol', presentation: 'Cápsula', category: 'medicamento', unit: 'cápsula', stock: 3500, minStock: 700, price: 4.50, cost: 2.20, location: 'Estante B-2', requiresPrescription: false },
  { id: 'prod-8', code: 'MED-008', name: 'Ibuprofeno 400mg', activePrinciple: 'Ibuprofeno', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 150, minStock: 500, price: 3.00, cost: 1.40, location: 'Estante B-3', requiresPrescription: false },
  { id: 'prod-9', code: 'INS-001', name: 'Jeringa 5ml', activePrinciple: '-', presentation: 'Unidad', category: 'insumo', unit: 'unidad', stock: 800, minStock: 200, price: 2.50, cost: 1.20, location: 'Estante C-1', requiresPrescription: false },
  { id: 'prod-10', code: 'INS-002', name: 'Guantes de látex (caja x100)', activePrinciple: '-', presentation: 'Caja', category: 'insumo', unit: 'caja', stock: 45, minStock: 20, price: 65.00, cost: 42.00, location: 'Estante C-2', requiresPrescription: false },
  { id: 'prod-11', code: 'INS-003', name: 'Alcohol isopropílico 1L', activePrinciple: '-', presentation: 'Frasco', category: 'insumo', unit: 'frasco', stock: 30, minStock: 15, price: 35.00, cost: 22.00, location: 'Estante C-3', requiresPrescription: false },
  { id: 'prod-12', code: 'MED-009', name: 'Atorvastatina 20mg', activePrinciple: 'Atorvastatina cálcica', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 1800, minStock: 400, price: 6.00, cost: 3.20, location: 'Estante A-5', requiresPrescription: true },
  { id: 'prod-13', code: 'MED-010', name: 'Salbutamol inhalador', activePrinciple: 'Salbutamol', presentation: 'Inhalador 100 dosis', category: 'medicamento', unit: 'inhalador', stock: 80, minStock: 25, price: 85.00, cost: 55.00, location: 'Estante B-4', requiresPrescription: true },
  { id: 'prod-14', code: 'MED-011', name: 'Diclofenaco 50mg', activePrinciple: 'Diclofenaco sódico', presentation: 'Tableta', category: 'medicamento', unit: 'tableta', stock: 2200, minStock: 500, price: 3.50, cost: 1.70, location: 'Estante B-5', requiresPrescription: false },
];

export const mockSuppliers: Supplier[] = [
  { id: 'sup-1', name: 'Distribuidora Farmacéutica Guatemalteca, S.A.', nit: '5432178-2', phone: '+502 2333 4455', email: 'ventas@dfg.gt', address: 'Calzada Roosevelt 45-20, Zona 11, Guatemala', contactPerson: 'Ing. Marco Tulio Castillo' },
  { id: 'sup-2', name: 'MediSupply Centroamérica', nit: '8765432-1', phone: '+502 2444 5566', email: 'pedidos@medisupply.gt', address: '4a Avenida 12-30, Zona 10, Guatemala', contactPerson: 'Licda. Gabriela Solares' },
  { id: 'sup-3', name: 'Insumos Médicos del Norte, S.A.', nit: '1234567-8', phone: '+502 7955 6677', email: 'ventas@imn.gt', address: '5a Calle 8-15, Zona 3, Quetzaltenango', contactPerson: 'Dr. Héctor Recinos' },
  { id: 'sup-4', name: 'FarmaDistribución, S.A.', nit: '9876543-5', phone: '+502 6611 2233', email: 'compras@farmadist.gt', address: '18 Calle 22-40, Zona 10, Guatemala', contactPerson: 'Sra. Beatriz Morales' },
];

export const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: 'oc-1', supplierId: 'sup-1', date: '2026-01-15', expectedDate: '2026-01-22', status: 'received', total: 18500,
    items: [
      { productId: 'prod-1', productName: 'Losartán 100mg', quantity: 1000, unitPrice: 1.80, total: 1800, received: 1000, lot: 'LOT-2026-001', expiryDate: '2028-06-30' },
      { productId: 'prod-3', productName: 'Metformina 850mg', quantity: 2000, unitPrice: 2.10, total: 4200, received: 2000, lot: 'LOT-2026-002', expiryDate: '2028-03-15' },
      { productId: 'prod-6', productName: 'Amoxicilina 500mg', quantity: 1500, unitPrice: 2.80, total: 4200, received: 1500, lot: 'LOT-2026-003', expiryDate: '2027-12-01' },
    ]
  },
  {
    id: 'oc-2', supplierId: 'sup-2', date: '2026-01-18', expectedDate: '2026-01-25', status: 'sent', total: 12350,
    items: [
      { productId: 'prod-8', productName: 'Ibuprofeno 400mg', quantity: 2000, unitPrice: 1.40, total: 2800, received: 0 },
      { productId: 'prod-12', productName: 'Atorvastatina 20mg', quantity: 1500, unitPrice: 3.20, total: 4800, received: 0 },
      { productId: 'prod-13', productName: 'Salbutamol inhalador', quantity: 50, unitPrice: 55.00, total: 2750, received: 0 },
    ]
  },
  {
    id: 'oc-3', supplierId: 'sup-3', date: '2026-01-19', expectedDate: '2026-01-26', status: 'draft', total: 5600,
    items: [
      { productId: 'prod-9', productName: 'Jeringa 5ml', quantity: 500, unitPrice: 1.20, total: 600, received: 0 },
      { productId: 'prod-10', productName: 'Guantes de látex (caja x100)', quantity: 50, unitPrice: 42.00, total: 2100, received: 0 },
      { productId: 'prod-11', productName: 'Alcohol isopropílico 1L', quantity: 30, unitPrice: 22.00, total: 660, received: 0 },
    ]
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: 'fac-1', invoiceNumber: 'FAC-2026-0001', patientId: 'pac-1', date: '2026-01-20', status: 'paid',
    items: [
      { id: 'fi-1', description: 'Consulta Cardiología - Dra. Ríos', quantity: 1, unitPrice: 450, total: 450, type: 'consulta' },
      { id: 'fi-2', description: 'Losartán 100mg x30', quantity: 30, unitPrice: 3.50, total: 105, type: 'medicamento' },
      { id: 'fi-3', description: 'Aspirina 100mg x30', quantity: 30, unitPrice: 2.00, total: 60, type: 'medicamento' },
    ],
    subtotal: 551.40, tax: 66.17, total: 617.57, paid: 617.57, paymentMethod: 'cash'
  },
  {
    id: 'fac-2', invoiceNumber: 'FAC-2026-0002', patientId: 'pac-2', date: '2026-01-20', status: 'paid',
    items: [
      { id: 'fi-4', description: 'Consulta Medicina General - Dr. Méndez', quantity: 1, unitPrice: 250, total: 250, type: 'consulta' },
      { id: 'fi-5', description: 'Paracetamol 500mg x9', quantity: 9, unitPrice: 1.50, total: 13.50, type: 'medicamento' },
    ],
    subtotal: 237.05, tax: 28.45, total: 265.50, paid: 265.50, paymentMethod: 'card'
  },
  {
    id: 'fac-3', invoiceNumber: 'FAC-2026-0003', patientId: 'pac-3', date: '2026-01-20', status: 'pending',
    items: [
      { id: 'fi-6', description: 'Consulta Medicina General - Dr. Méndez', quantity: 1, unitPrice: 250, total: 250, type: 'consulta' },
      { id: 'fi-7', description: 'Metformina 850mg x60', quantity: 60, unitPrice: 4.00, total: 240, type: 'medicamento' },
      { id: 'fi-8', description: 'Glibenclamida 5mg x30', quantity: 30, unitPrice: 3.00, total: 90, type: 'medicamento' },
      { id: 'fi-9', description: 'Análisis de laboratorio - HbA1c', quantity: 1, unitPrice: 350, total: 350, type: 'laboratorio' },
      { id: 'fi-10', description: 'Perfil lipídico', quantity: 1, unitPrice: 280, total: 280, type: 'laboratorio' },
    ],
    subtotal: 1076.92, tax: 129.23, total: 1206.15, paid: 0, paymentMethod: undefined
  },
  {
    id: 'fac-4', invoiceNumber: 'FAC-2026-0004', patientId: 'pac-5', date: '2026-01-19', status: 'paid',
    items: [
      { id: 'fi-11', description: 'Consulta Traumatología - Dr. Aguilar', quantity: 1, unitPrice: 500, total: 500, type: 'consulta' },
      { id: 'fi-12', description: 'Radiografía de rodilla', quantity: 1, unitPrice: 400, total: 400, type: 'procedimiento' },
      { id: 'fi-13', description: 'Diclofenaco 50mg x20', quantity: 20, unitPrice: 3.50, total: 70, type: 'medicamento' },
    ],
    subtotal: 866.07, tax: 103.93, total: 970.00, paid: 970.00, paymentMethod: 'transfer'
  },
];

export const mockInventoryMovements: InventoryMovement[] = [
  { id: 'mov-1', productId: 'prod-1', type: 'entry', quantity: 1000, date: '2026-01-16', userId: 'usr-1', reason: 'Recepción de orden de compra OC-001', reference: 'oc-1', lot: 'LOT-2026-001', expiryDate: '2028-06-30' },
  { id: 'mov-2', productId: 'prod-1', type: 'exit', quantity: 30, date: '2026-01-20', userId: 'usr-4', reason: 'Dispensación receta REC-001', reference: 'rec-1', lot: 'LOT-2026-001', expiryDate: '2028-06-30' },
  { id: 'mov-3', productId: 'prod-5', type: 'exit', quantity: 30, date: '2026-01-20', userId: 'usr-4', reason: 'Dispensación receta REC-001', reference: 'rec-1', lot: 'LOT-2025-045', expiryDate: '2027-09-15' },
  { id: 'mov-4', productId: 'prod-2', type: 'exit', quantity: 9, date: '2026-01-20', userId: 'usr-4', reason: 'Dispensación receta REC-002', reference: 'rec-2', lot: 'LOT-2025-089', expiryDate: '2028-01-20' },
  { id: 'mov-5', productId: 'prod-3', type: 'entry', quantity: 2000, date: '2026-01-16', userId: 'usr-1', reason: 'Recepción de orden de compra OC-001', reference: 'oc-1', lot: 'LOT-2026-002', expiryDate: '2028-03-15' },
  { id: 'mov-6', productId: 'prod-6', type: 'entry', quantity: 1500, date: '2026-01-16', userId: 'usr-1', reason: 'Recepción de orden de compra OC-001', reference: 'oc-1', lot: 'LOT-2026-003', expiryDate: '2027-12-01' },
  { id: 'mov-7', productId: 'prod-8', type: 'adjustment', quantity: -50, date: '2026-01-18', userId: 'usr-1', reason: 'Ajuste por inventario físico - producto dañado', reference: 'AJU-001' },
];

export const mockDocuments: ClinicalDocument[] = [
  { id: 'doc-1', patientId: 'pac-1', type: 'consentimiento', title: 'Consentimiento informado - Procedimiento cardíaco', description: 'Consentimiento firmado para cateterismo', date: '2026-01-10', uploadedBy: 'Dra. Ríos', fileName: 'consentimiento_pac1.pdf', fileSize: '245 KB' },
  { id: 'doc-2', patientId: 'pac-3', type: 'resultado_lab', title: 'Resultado Hemoglobina Glicosilada', description: 'HbA1c: 7.8% - Control deficiente', date: '2026-01-15', uploadedBy: 'Dr. Méndez', fileName: 'hba1c_pac3.pdf', fileSize: '180 KB' },
  { id: 'doc-3', patientId: 'pac-5', type: 'imagen', title: 'Radiografía rodilla derecha', description: 'Signos de artrosis grado II', date: '2026-01-19', uploadedBy: 'Dr. Aguilar', fileName: 'rx_rodilla_pac5.dcm', fileSize: '2.1 MB' },
  { id: 'doc-4', patientId: 'pac-1', type: 'informe', title: 'Informe cardiológico', description: 'Evaluación integral - función ventricular conservada', date: '2026-01-12', uploadedBy: 'Dra. Ríos', fileName: 'informe_cardio_pac1.pdf', fileSize: '520 KB' },
  { id: 'doc-5', patientId: 'pac-4', type: 'consentimiento', title: 'Consentimiento vacunación', description: 'Autorización paterna para esquema de vacunación', date: '2026-01-05', uploadedBy: 'Dr. García', fileName: 'consent_vacuna_pac4.pdf', fileSize: '156 KB' },
];

export const mockAuditLogs: AuditLog[] = [
  { id: 'aud-1', userId: 'usr-2', userName: 'Dr. Carlos Méndez', action: 'Acceso a historia clínica', module: 'Consultas', details: 'Accedió al expediente de Juan Carlos Hernández Xicay (P-0001)', timestamp: '2026-01-20 09:15:23', ipAddress: '192.168.1.45' },
  { id: 'aud-2', userId: 'usr-2', userName: 'Dr. Carlos Méndez', action: 'Creó consulta médica', module: 'Consultas', details: 'Consulta #CON-002 para María Elena López Tut (P-0002)', timestamp: '2026-01-20 08:45:10', ipAddress: '192.168.1.45' },
  { id: 'aud-3', userId: 'usr-4', userName: 'Farm. Elena Santos', action: 'Dispensó medicamentos', module: 'Farmacia', details: 'Receta REC-001 - 2 medicamentos dispensados', timestamp: '2026-01-20 10:30:45', ipAddress: '192.168.1.52' },
  { id: 'aud-4', userId: 'usr-3', userName: 'Recep. Ana García', action: 'Registró cita', module: 'Citas', details: 'Nueva cita para Roberto Tum Osorio con Dr. Aguilar', timestamp: '2026-01-20 07:30:00', ipAddress: '192.168.1.38' },
  { id: 'aud-5', userId: 'usr-5', userName: 'Caja. Pedro López', action: 'Registró pago', module: 'Caja', details: 'Pago Q617.57 - Factura FAC-2026-0001 en efectivo', timestamp: '2026-01-20 11:00:15', ipAddress: '192.168.1.60' },
  { id: 'aud-6', userId: 'usr-1', userName: 'Admin. Sistema', action: 'Modificó producto', module: 'Inventario', details: 'Ajuste de stock - Ibuprofeno 400mg (-50 unidades)', timestamp: '2026-01-18 14:22:33', ipAddress: '192.168.1.10' },
  { id: 'aud-7', userId: 'usr-1', userName: 'Admin. Sistema', action: 'Recibió compra', module: 'Compras', details: 'Recepción parcial de OC-001 - 3 productos recibidos', timestamp: '2026-01-16 09:00:00', ipAddress: '192.168.1.10' },
];

export const mockDashboardStats: DashboardStats = {
  totalPatients: 1247,
  todayAppointments: 28,
  pendingAppointments: 156,
  todayRevenue: 8542.50,
  monthlyRevenue: 187450.00,
  lowStockProducts: 3,
  activeDoctors: 8,
  completedConsultations: 18,
};

// Revenue data for charts (last 6 months)
export const revenueData = [
  { month: 'Ago', ingresos: 145000, gastos: 98000 },
  { month: 'Sep', ingresos: 162000, gastos: 105000 },
  { month: 'Oct', ingresos: 178000, gastos: 112000 },
  { month: 'Nov', ingresos: 155000, gastos: 99000 },
  { month: 'Dic', ingresos: 195000, gastos: 125000 },
  { month: 'Ene', ingresos: 187450, gastos: 118000 },
];

export const appointmentsByStatus = [
  { name: 'Completadas', value: 420, color: '#10b981' },
  { name: 'En espera', value: 15, color: '#f59e0b' },
  { name: 'Programadas', value: 156, color: '#3b82f6' },
  { name: 'Canceladas', value: 28, color: '#ef4444' },
  { name: 'Ausentes', value: 12, color: '#6b7280' },
];

export const consultationsByDoctor = [
  { doctor: 'Dr. Méndez', consultas: 85 },
  { doctor: 'Dra. Ríos', consultas: 62 },
  { doctor: 'Dr. García', consultas: 78 },
  { doctor: 'Dra. de León', consultas: 54 },
  { doctor: 'Dr. Aguilar', consultas: 45 },
  { doctor: 'Dra. Ramírez', consultas: 38 },
  { doctor: 'Dr. Cifuentes', consultas: 32 },
  { doctor: 'Dra. Vásquez', consultas: 41 },
];
