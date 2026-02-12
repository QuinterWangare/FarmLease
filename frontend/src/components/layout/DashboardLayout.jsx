import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import FarmOwnerSidebar from './FarmOwnerSidebar';

const DashboardLayout = ({ children, sidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuth();

  // Use FarmOwnerSidebar by default if no sidebar is provided
  const SidebarComponent = sidebar || <FarmOwnerSidebar />;

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-white p-2 rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
      >
        <span className="material-symbols-outlined">
          {isSidebarOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Desktop Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="hidden lg:block fixed top-4 left-4 z-50 bg-white border border-slate-200 text-slate-600 p-2 rounded-lg shadow-sm hover:bg-slate-50 transition-all"
        style={{ left: isSidebarOpen ? '256px' : '16px' }}
      >
        <span className="material-symbols-outlined text-[20px]">
          {isSidebarOpen ? 'menu_open' : 'menu'}
        </span>
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${!isSidebarOpen ? 'lg:w-0 lg:hidden' : ''}`}
      >
        {SidebarComponent}
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${!isSidebarOpen ? 'lg:ml-0' : ''}`}>
        <main className="p-6 lg:p-10 min-h-screen bg-background-light relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
