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
import BrowseLandsPage from './pages/Lessee/BrowseLandsPage';
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
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/dealer/dashboard" replace />} />
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
                <BrowseLandsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessee/lands/:id"
            element={
              <ProtectedRoute allowedRoles={['LESSEE']}>
                <LandDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessee/recommendations"
            element={
              <ProtectedRoute allowedRoles={['LESSEE']}>
                <CropRecommendationPage />
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
              <ProtectedRoute allowedRoles={['DEALER']}>
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
