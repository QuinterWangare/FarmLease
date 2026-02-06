import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Button from '../../components/common/Button';
import { PRODUCT_CATEGORIES } from '../../constants';

const AddProductPage = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dealer/dashboard', icon: '📊' },
    { label: 'My Products', path: '/dealer/products', icon: '📦' },
    { label: 'Add Product', path: '/dealer/products/add', icon: '➕' },
    { label: 'Orders', path: '/dealer/orders', icon: '🛒' },
    { label: 'Analytics', path: '/dealer/analytics', icon: '📈' },
    { label: 'Profile', path: '/dealer/profile', icon: '👤' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product form submitted! (To be implemented)');
  };

  return (
    <DashboardLayout sidebar={<Sidebar menuItems={menuItems} />}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Product</h1>

        <Card>
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Product Information</h2>
            
            <Input
              label="Product Name"
              name="name"
              placeholder="e.g., Organic Fertilizer 50kg"
              required
            />

            <Select
              label="Category"
              name="category"
              options={PRODUCT_CATEGORIES}
              required
            />

            <Input
              label="Price (KES)"
              name="price"
              type="number"
              placeholder="e.g., 2500"
              required
            />

            <Input
              label="Stock Quantity"
              name="stock"
              type="number"
              placeholder="e.g., 100"
              required
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="Describe your product..."
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Product Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-1">Upload up to 5 images</p>
            </div>

            <div className="flex space-x-4">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
              <Button type="submit" className="w-full">
                Add Product
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AddProductPage;
