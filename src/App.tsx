import { useState } from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Consultations from './pages/Consultations';
import Prescriptions from './pages/Prescriptions';
import Pharmacy from './pages/Pharmacy';
import Inventory from './pages/Inventory';
import Purchases from './pages/Purchases';
import Billing from './pages/Billing';
import Reports from './pages/Reports';
import Staff from './pages/Staff';
import Documents from './pages/Documents';
import Settings from './pages/Settings';

function AppContent() {
  const { isAuthenticated } = useApp();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'patients': return <Patients />;
      case 'appointments': return <Appointments />;
      case 'consultations': return <Consultations />;
      case 'prescriptions': return <Prescriptions />;
      case 'pharmacy': return <Pharmacy />;
      case 'inventory': return <Inventory />;
      case 'purchases': return <Purchases />;
      case 'billing': return <Billing />;
      case 'reports': return <Reports />;
      case 'staff': return <Staff />;
      case 'documents': return <Documents />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
