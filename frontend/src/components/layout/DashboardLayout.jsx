import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const DashboardLayout = ({ children, sidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar - Pass mobile state */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out`}>
        {sidebar && typeof sidebar === 'object' && sidebar.type ? 
          { ...sidebar, props: { ...sidebar.props, isMobile: true, onClose: () => setIsSidebarOpen(false) } } : 
          sidebar
        }
      </div>
      
      {/* Main Content */}
      <div className="flex-1 w-full md:w-auto">
        {/* Mobile Menu Button */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-20">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
