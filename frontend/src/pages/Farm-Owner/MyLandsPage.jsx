import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const MyLandsPage = () => {
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Lands</h1>
          <Link to="/owner/lands/add">
            <Button>Add New Land</Button>
          </Link>
        </div>

        {/* Placeholder for lands list */}
        <Card>
          <p className="text-gray-600 text-center py-8">
            No lands listed yet. Click "Add New Land" to get started.
          </p>
          {/* TODO: Implement lands grid/list */}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MyLandsPage;
