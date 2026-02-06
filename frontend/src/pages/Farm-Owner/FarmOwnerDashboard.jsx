import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';

const OwnerDashboard = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/owner/dashboard', icon: '📊' },
    { label: 'My Lands', path: '/owner/lands', icon: '🏡' },
    { label: 'Add Land', path: '/owner/lands/add', icon: '➕' },
    { label: 'Leases', path: '/owner/leases', icon: '📄' },
    { label: 'Payments', path: '/owner/payments', icon: '💰' },
    { label: 'Profile', path: '/owner/profile', icon: '👤' },
  ];

  return (
    <DashboardLayout sidebar={<Sidebar menuItems={menuItems} />}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Farm Owner Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">5</div>
              <div className="text-gray-600 mt-2">Total Lands</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-gray-600 mt-2">Active Leases</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">1</div>
              <div className="text-gray-600 mt-2">Pending Verification</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">KES 150K</div>
              <div className="text-gray-600 mt-2">Monthly Revenue</div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-gray-600">No recent activity to display.</p>
          {/* TODO: Implement recent activity list */}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OwnerDashboard;
