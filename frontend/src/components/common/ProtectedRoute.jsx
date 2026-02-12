import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Spinner from './Spinner';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, loading } = useAuth();
  
  // DEVELOPMENT MODE: Bypass auth check
  const DEVELOPMENT_MODE = true; // Set to false when backend is ready

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user && !DEVELOPMENT_MODE) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on user role
    const dashboardRoutes = {
      OWNER: '/owner/dashboard',
      LESSEE: '/lessee/dashboard',
      DEALER: '/dealer/dashboard',
      ADMIN: '/admin/dashboard',
    };
    return <Navigate to={dashboardRoutes[user.role] || '/'} replace />;
  }

  return children;
};

export default ProtectedRoute;
