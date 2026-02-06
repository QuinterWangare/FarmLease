import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';

const LesseeDashboard = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/lessee/dashboard', icon: '📊' },
    { label: 'Browse Lands', path: '/lessee/browse', icon: '🔍' },
    { label: 'My Leases', path: '/lessee/leases', icon: '📄' },
    { label: 'Crop Recommendations', path: '/lessee/recommendations', icon: '🌾' },
    { label: 'Agro Products', path: '/lessee/products', icon: '🛒' },
    { label: 'Profile', path: '/lessee/profile', icon: '👤' },
  ];

  return (
    <DashboardLayout sidebar={<Sidebar menuItems={menuItems} />}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Farmer Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">2</div>
              <div className="text-gray-600 mt-2">Active Leases</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-gray-600 mt-2">Saved Lands</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">8 Acres</div>
              <div className="text-gray-600 mt-2">Total Land Area</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5</div>
              <div className="text-gray-600 mt-2">Crop Suggestions</div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition">
              <div className="text-2xl mb-2">🔍</div>
              <div className="font-medium">Browse Lands</div>
            </button>
            <button className="p-4 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition">
              <div className="text-2xl mb-2">🌾</div>
              <div className="font-medium">Get Crop Advice</div>
            </button>
            <button className="p-4 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition">
              <div className="text-2xl mb-2">🛒</div>
              <div className="font-medium">Buy Products</div>
            </button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LesseeDashboard;
