import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Public Pages
import LandingPage from './pages/public/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Owner Pages
import OwnerDashboard from './pages/Farm-Owner/FarmOwnerDashboard';
import MyLandsPage from './pages/Farm-Owner/MyLandsPage';
import AddLandPage from './pages/Farm-Owner/AddLandPage';

// Lessee Pages
import LesseeDashboard from './pages/Lessee/LesseeDashboard';
import FindLandPage from './pages/Lessee/FindLandPage';

// Dealer Pages
import DealerDashboard from './pages/Agro-Dealer/DealerDashboard';
import MyProductsPage from './pages/Agro-Dealer/MyProductsPage';
import AddProductPage from './pages/Agro-Dealer/AddProductPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import PendingLandsPage from './pages/admin/PendingLandsPage';
import UsersListPage from './pages/admin/UsersListPage';

// Protected Route Component
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* DEVELOPMENT: Redirect root to lessee dashboard */}
          <Route path="/" element={<Navigate to="/lessee/dashboard" replace />} />
          
          {/* Public Routes */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Farm Owner Routes */}
          <Route
            path="/owner/dashboard"
            element={
              <ProtectedRoute allowedRoles={['OWNER']}>
                <OwnerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/lands"
            element={
              <ProtectedRoute allowedRoles={['OWNER']}>
                <MyLandsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/lands/add"
            element={
              <ProtectedRoute allowedRoles={['OWNER']}>
                <AddLandPage />
              </ProtectedRoute>
            }
          />

          {/* Lessee Routes */}
          <Route
            path="/lessee/dashboard"
            element={
              <ProtectedRoute allowedRoles={['LESSEE']}>
                <LesseeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessee/browse"
            element={
              <ProtectedRoute allowedRoles={['LESSEE']}>
                <FindLandPage />
              </ProtectedRoute>
            }
          />


          {/* Agro-Dealer Routes */}
          <Route
            path="/dealer/dashboard"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <DealerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/products"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <MyProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/products/add"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <AddProductPage />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/lands/pending"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <PendingLandsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <UsersListPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
