import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Button from '../../components/common/Button';
import { SOIL_TYPES, COUNTIES } from '../../constants';

const AddLandPage = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/owner/dashboard', icon: '📊' },
    { label: 'My Lands', path: '/owner/lands', icon: '🏡' },
    { label: 'Add Land', path: '/owner/lands/add', icon: '➕' },
    { label: 'Leases', path: '/owner/leases', icon: '📄' },
    { label: 'Payments', path: '/owner/payments', icon: '💰' },
    { label: 'Profile', path: '/owner/profile', icon: '👤' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement land creation
    alert('Land listing form submitted! (To be implemented)');
  };

  return (
    <DashboardLayout sidebar={<Sidebar menuItems={menuItems} />}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Land</h1>

        <Card>
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Land Details</h2>
            
            <Input
              label="Land Title"
              name="title"
              placeholder="e.g., 5 Acre Farm in Kiambu"
              required
            />

            <Select
              label="County"
              name="county"
              options={COUNTIES.map(c => ({ value: c, label: c }))}
              required
            />

            <Input
              label="Size (Acres)"
              name="size"
              type="number"
              placeholder="e.g., 5"
              required
            />

            <Select
              label="Soil Type"
              name="soilType"
              options={SOIL_TYPES}
              required
            />

            <Input
              label="Price per Season (KES)"
              name="price"
              type="number"
              placeholder="e.g., 50000"
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
                placeholder="Describe your land..."
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-1">Upload up to 5 images</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Documents (Title Deed, ID) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="flex space-x-4">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
              <Button type="submit" className="w-full">
                Submit for Verification
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AddLandPage;
