import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const MyProductsPage = () => {
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Products</h1>
          <Link to="/dealer/products/add">
            <Button>Add New Product</Button>
          </Link>
        </div>

        <Card>
          <p className="text-gray-600 text-center py-8">
            No products listed yet. Click "Add New Product" to get started.
          </p>
          {/* TODO: Implement products grid */}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MyProductsPage;
