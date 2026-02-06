import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';

const DealerDashboard = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dealer/dashboard', icon: '📊' },
    { label: 'My Products', path: '/dealer/products', icon: '📦' },
    { label: 'Add Product', path: '/dealer/products/add', icon: '➕' },
    { label: 'Orders', path: '/dealer/orders', icon: '🛒' },
    { label: 'Analytics', path: '/dealer/analytics', icon: '📈' },
    { label: 'Profile', path: '/dealer/profile', icon: '👤' },
  ];

  return (
    <DashboardLayout sidebar={<Sidebar menuItems={menuItems} />}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Agro-Dealer Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">12</div>
              <div className="text-gray-600 mt-2">Total Products</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">45</div>
              <div className="text-gray-600 mt-2">Inquiries</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">320</div>
              <div className="text-gray-600 mt-2">Total Views</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.5 ⭐</div>
              <div className="text-gray-600 mt-2">Average Rating</div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Inquiries</h2>
          <p className="text-gray-600">No recent inquiries.</p>
          {/* TODO: Implement inquiries list */}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DealerDashboard;
