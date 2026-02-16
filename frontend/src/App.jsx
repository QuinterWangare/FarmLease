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
import EscrowStatusPage from './pages/Farm-Owner/EscrowStatusPage';
import FinancialsPage from './pages/Farm-Owner/FinancialsPage';
import ProfileSettingsPage from './pages/Farm-Owner/ProfileSettingsPage';
import LeaseRequestsPage from './pages/Farm-Owner/LeaseRequestsPageWeb';
import AgreementsPage from './pages/Farm-Owner/AgreementsPage';

// Lessee Pages
import LesseeDashboard from './pages/Lessee/LesseeDashboard';
import FindLandPage from './pages/Lessee/FindLandPage';
import LandDetailPage from './pages/Lessee/LandDetailPage';
import CropRecommendationPage from './pages/Lessee/CropRecommendationPage';

// Dealer Pages
import DealerDashboard from './pages/Agro-Dealer/DealerDashboard';
import MyProductsPage from './pages/Agro-Dealer/MyProductsPage';
import InventoryPage from './pages/Agro-Dealer/InventoryPage';
import OrdersPage from './pages/Agro-Dealer/OrdersPage';
import AddProductPage from './pages/Agro-Dealer/AddProductPage';
import CustomerQueriesPage from './pages/Agro-Dealer/CustomerQueriesPage';
import TransactionsPage from './pages/Agro-Dealer/TransactionsPage';
import SalesAnalyticsPage from './pages/Agro-Dealer/SalesAnalyticsPage';
import MarketTrendsPage from './pages/Agro-Dealer/MarketTrendsPage';
import NotificationsPage from './pages/Agro-Dealer/NotificationsPage';
import ProfilePage from './pages/Agro-Dealer/ProfilePage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import PendingLandsPage from './pages/admin/PendingLandsPage';
import UsersListPage from './pages/admin/UsersListPage';

// Protected Route Component
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  const isDev = import.meta.env.VITE_DEV_MODE === 'true';
  
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
            path="/owner"
            element={<Navigate to="/owner/dashboard" replace />}
          />
          <Route
            path="/owner/dashboard"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <OwnerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/lands"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <MyLandsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/lands/add"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <AddLandPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/lease-requests"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <LeaseRequestsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/financials"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <FinancialsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/escrow"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <EscrowStatusPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/agreements"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <AgreementsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/profile"
            element={
              <ProtectedRoute allowedRoles={['landowner']}>
                <ProfileSettingsPage />
              </ProtectedRoute>
            }
          />

          {/* Lessee Routes */}
          <Route
            path="/lessee"
            element={<Navigate to="/lessee/dashboard" replace />}
          />
          <Route
            path="/lessee/dashboard"
            element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <LesseeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessee/browse"
            element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <FindLandPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessee/lands/:id"
            element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <LandDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessee/recommendations"
            element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <CropRecommendationPage />
              </ProtectedRoute>
            }
          />


          {/* Agro-Dealer Routes */}
          <Route
            path="/dealer"
            element={<Navigate to="/dealer/dashboard" replace />}
          />
          <Route
            path="/dealer/dashboard"
            element={
              <ProtectedRoute allowedRoles={['dealer']}>
                <DealerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/products"
            element={
              <ProtectedRoute allowedRoles={['dealer']}>
                <MyProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/inventory"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <InventoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/orders"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <OrdersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/products/add"
            element={
              <ProtectedRoute allowedRoles={['dealer']}>
                <AddProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/queries"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <CustomerQueriesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/transactions"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <TransactionsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/analytics"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <SalesAnalyticsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/trends"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <MarketTrendsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/notifications"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <NotificationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dealer/profile"
            element={
              <ProtectedRoute allowedRoles={['DEALER']}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/lands/pending"
            element={
              <ProtectedRoute requireAdmin={true}>
                <PendingLandsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute requireAdmin={true}>
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
