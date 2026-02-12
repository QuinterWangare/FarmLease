import DashboardLayout from '../../components/layout/DashboardLayout';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';

const LesseeDashboard = () => {
  // menuItems now specifically expects URL links for the icon property
  const menuItems = [
    { 
      label: 'Dashboard', 
      path: '/lessee/dashboard', 
      icon: 'https://toppng.com/uploads/preview/dashboard-svg-icon-free-dashboard-icon-11553444664o1utwdkesz.png' 
    },
    { 
      label: 'Browse Lands', 
      path: '/lessee/browse', 
      icon: 'PASTE_SEARCH_PNG_URL_HERE' 
    },
    { 
      label: 'My Leases', 
      path: '/lessee/leases', 
      icon: 'PASTE_LEASE_PNG_URL_HERE' 
    },
    { 
      label: 'Crop Recommendations', 
      path: '/lessee/recommendations', 
      icon: 'PASTE_CROP_PNG_URL_HERE' 
    },
    { 
      label: 'Agro Products', 
      path: '/lessee/products', 
      icon: 'PASTE_CART_PNG_URL_HERE' 
    },
    { 
      label: 'Profile', 
      path: '/lessee/profile', 
      icon: 'PASTE_PROFILE_PNG_URL_HERE' 
    },
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
            
            {/* Quick Action: Dashboard (Pulling from URL) */}
            <button className="flex flex-col items-center p-4 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition">
              <img 
                src="https://toppng.com/uploads/preview/dashboard-svg-icon-free-dashboard-icon-11553444664o1utwdkesz.png" 
                alt="Dashboard Icon" 
                className="w-12 h-12 mb-2 object-contain"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Icon'; }} // Fallback if link breaks
              />
              <div className="font-medium">Dashboard</div>
            </button>

            {/* Quick Action: Browse (Slot for URL) */}
            <button className="flex flex-col items-center p-4 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition">
              <img 
                src="PASTE_SEARCH_PNG_URL_HERE" 
                alt="Browse Icon" 
                className="w-12 h-12 mb-2 object-contain"
              />
              <div className="font-medium">Browse Lands</div>
            </button>

            {/* Quick Action: Products (Slot for URL) */}
            <button className="flex flex-col items-center p-4 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition">
              <img 
                src="PASTE_CART_PNG_URL_HERE" 
                alt="Products Icon" 
                className="w-12 h-12 mb-2 object-contain"
              />
              <div className="font-medium">Buy Products</div>
            </button>

          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LesseeDashboard;