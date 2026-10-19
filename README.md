# 🏥 Centro Médico Premier — Sistema de Gestión Clínica

> Sistema integral de gestión para centros médicos, desarrollado para operar en **Guatemala**.  
> Proyecto con fines académicos — Fase 1, 2 y 3 completadas.

---

## 📋 Descripción General

Sistema web completo para la administración de un centro médico con 12 módulos integrados:

| # | Módulo | Descripción |
|---|--------|-------------|
| 1 | **Pacientes** | Registro, expedientes, antecedentes médicos |
| 2 | **Citas** | Agenda médica, estados, calendario |
| 3 | **Consultas** | Historia clínica electrónica, signos vitales |
| 4 | **Recetas** | Prescripciones médicas, órdenes |
| 5 | **Facturación** | Cobros, caja, pagos |
| 6 | **Farmacia** | Dispensación de medicamentos |
| 7 | **Inventario** | Control de stock, kardex, alertas |
| 8 | **Compras** | Órdenes de compra, proveedores |
| 9 | **Personal** | Médicos, roles, horarios |
| 10 | **Reportes** | Estadísticas, gráficos, exportación |
| 11 | **Configuración** | Sistema, seguridad, auditoría |
| 12 | **Documentos** | Expediente clínico digital |

---

## 🚀 Instrucciones para IA de Despliegue

### Para desplegar en Vercel:

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd centro-medico-premier

# 2. Instalar dependencias
npm install

# 3. Verificar que compila correctamente
npm run build

# 4. Desplegar en Vercel
npx vercel --prod
```

### Configuración de Vercel:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x o superior

### Para desplegar en Netlify:
```bash
npm run build
# Subir la carpeta dist/
```

### Para desplegar en GitHub Pages:
```bash
# Agregar al vite.config.js:
# base: '/nombre-del-repo/'
npm run build
# Subir contenido de dist/ a la rama gh-pages
```

---

## 🔐 Credenciales de Acceso (Demo)

| Rol | Email | Contraseña |
|-----|-------|------------|
| Administrador | `admin@premier.gt` | `admin123` |
| Médico | `doctor@premier.gt` | `doctor123` |
| Recepción | `recepcion@premier.gt` | `recepcion123` |
| Farmacia | `farmacia@premier.gt` | `farmacia123` |
| Caja | `caja@premier.gt` | `caja123` |

---

## 🛠️ Stack Tecnológico

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Estilos:** Tailwind CSS 4
- **Gráficos:** Recharts
- **Iconos:** Lucide React
- **Routing:** React Router DOM (preparado)
- **Estado:** React Context API

---

## 📁 Estructura del Proyecto

```
src/
├── App.tsx                    # Componente principal con routing
├── main.tsx                   # Entry point
├── index.css                  # Estilos globales + Tailwind
├── types/
│   └── index.ts              # Tipos TypeScript (todos los módulos)
├── data/
│   └── mockData.ts           # Datos simulados realistas (Guatemala)
├── contexts/
│   └── AppContext.tsx         # Estado global (auth, usuario)
├── components/
│   └── Layout.tsx            # Layout del dashboard + sidebar
└── pages/
    ├── Login.tsx             # Pantalla de login con roles
    ├── Dashboard.tsx         # Panel principal con métricas
    ├── Patients.tsx          # Módulo 1: Gestión de pacientes
    ├── Appointments.tsx      # Módulo 2: Citas y agenda
    ├── Consultations.tsx     # Módulo 3: Historia clínica
    ├── Prescriptions.tsx     # Módulo 4: Recetas médicas
    ├── Billing.tsx           # Módulo 5: Facturación y caja
    ├── Pharmacy.tsx          # Módulo 6: Farmacia
    ├── Inventory.tsx         # Módulo 7: Inventario
    ├── Purchases.tsx         # Módulo 8: Compras
    ├── Staff.tsx             # Módulo 9: Personal médico
    ├── Reports.tsx           # Módulo 10: Reportes
    ├── Settings.tsx          # Módulo 11: Configuración
    └── Documents.tsx         # Módulo 12: Documentos
```

---

## 🇬🇹 Contexto Guatemala

- **Moneda:** Quetzal (Q / GTQ)
- **Impuesto:** IVA 12%
- **Identificación:** DPI (Documento Personal de Identificación)
- **NIT:** Para proveedores y facturación
- **Nombres y direcciones:** Localidades guatemaltecas reales
- **Licencias médicas:** Formato MED-XXXXX
- **Departamentos:** Guatemala, Quetzaltenango, Escuintla, etc.

---

## 📊 Modelo de Datos

El sistema está diseñado con las siguientes entidades principales:

- **Pacientes:** `patients`, `emergency_contacts`, `medical_history`
- **Agenda:** `appointments`, `doctor_schedules`, `schedule_blocks`
- **Atención:** `consultations`, `vital_signs`, `diagnoses`, `clinical_notes`
- **Prescripciones:** `prescriptions`, `prescription_details`, `medical_orders`
- **Farmacia:** `products`, `presentations`, `lots`, `dispensations`
- **Inventario:** `inventory_movements`, `locations`, `inventory_counts`
- **Compras:** `suppliers`, `purchase_orders`, `purchase_receptions`
- **Finanzas:** `invoices`, `invoice_details`, `payments`, `cash_registers`
- **Personal:** `doctors`, `specialties`, `users`, `roles`, `permissions`
- **Admin:** `audit_logs`, `configuration`, `documents`, `notifications`

---

## 🔒 Consideraciones de Seguridad

### Implementadas (Frontend):
- ✅ Login con roles (admin, doctor, receptionist, pharmacist)
- ✅ Menú dinámico según permisos del usuario
- ✅ Registro de auditoría visible
- ✅ Simulación de RLS (Row Level Security) en datos

### Pendientes (Backend):
- ⬜ Autenticación JWT con refresh tokens
- ⬜ RLS real en base de datos (Supabase/PostgreSQL)
- ⬜ Cifrado de datos sensibles (PHI)
- ⬜ HTTPS obligatorio
- ⬜ Rate limiting
- ⬜ Backup automático
- ⬜ Cumplimiento de normativa de protección de datos

---

## 📈 Próximas Fases

### Fase 4: Integración Backend
- Conectar con API REST o Supabase
- Autenticación real con JWT
- Base de datos PostgreSQL

### Fase 5: Funcionalidades Avanzadas
- Telemedicina / Videoconsultas
- Integración con laboratorios externos
- App móvil para pacientes
- Recordatorios por SMS/WhatsApp
- Firma electrónica de documentos

### Fase 6: Inteligencia Artificial
- Sugerencias de diagnóstico
- Detección de interacciones medicamentosas
- Análisis predictivo de inventario
- Chatbot para pacientes

---

## 📝 Notas para el Desarrollador

1. **Datos Mock:** Todos los datos son simulados y se recargan al iniciar la app. Para persistencia real, conectar con backend.

2. **Roles:** El sistema respeta los roles para mostrar/ocultar módulos del menú. Un `admin` ve todo, un `doctor` solo ve módulos clínicos, etc.

3. **Responsive:** La interfaz es completamente responsive, funciona en desktop, tablet y móvil.

4. **Moneda:** Todos los valores están en Quetzales (Q) con IVA del 12% de Guatemala.

5. **Extensibilidad:** Los tipos TypeScript en `src/types/index.ts` definen toda la estructura de datos, facilitando la conexión con un backend real.

---

## 📄 Licencia

Proyecto con fines académicos. Desarrollado para el Centro Médico Premier — Guatemala, 2026.

---

*Generado para ser desplegado en Vercel, Netlify o cualquier servicio de hosting estático.*
