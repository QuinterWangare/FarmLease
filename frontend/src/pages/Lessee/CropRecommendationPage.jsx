import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const CropRecommendationPage = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Crop Recommendations</h1>

        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Get Personalized Crop Suggestions</h2>
          <p className="text-gray-600 mb-4">
            Our AI analyzes your land's soil type, climate data, and location to suggest the best crops for maximum yield.
          </p>
          <Button>Generate Recommendations</Button>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">Your Recent Recommendations</h2>
          <p className="text-gray-600 py-4">
            No recommendations yet. Click the button above to get started!
          </p>
          {/* TODO: Implement recommendation results display */}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CropRecommendationPage;
