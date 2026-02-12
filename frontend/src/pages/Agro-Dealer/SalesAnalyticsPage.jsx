import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Package, ShoppingCart, ClipboardList, PlusCircle, 
  MessageSquare, CreditCard, TrendingUp, TrendingDown, Bell,
  DollarSign, BarChart3, RefreshCw, Calendar, Download, LogOut, Menu, X
} from 'lucide-react';

const SalesAnalyticsPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('analytics');
  const [periodFilter, setPeriodFilter] = useState('month');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dealer/dashboard' },
    { id: 'inventory', label: 'Inventory', icon: Package, path: '/dealer/inventory' },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: 5, path: '/dealer/orders' },
    { id: 'products', label: 'My Products', icon: ClipboardList, path: '/dealer/products' },
    { id: 'add-product', label: 'Add New Products', icon: PlusCircle, path: '/dealer/products/add' },
    { id: 'queries', label: 'Customer Queries', icon: MessageSquare, path: '/dealer/queries' },
    { id: 'transactions', label: 'Transactions', icon: CreditCard, path: '/dealer/transactions' },
    { id: 'analytics', label: 'Sales Analytics', icon: TrendingUp, path: '/dealer/analytics' },
    { id: 'trends', label: 'Market Trends', icon: TrendingDown, path: '/dealer/trends' },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 2, path: '/dealer/notifications' },
  ];

  const kpiCards = [
    {
      title: 'Total Revenue',
      value: 'Ksh 2.4M',
      change: '+12.5% vs last month',
      trend: 'up',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      title: 'Total Orders',
      value: '856',
      change: '+5.2% vs last month',
      trend: 'up',
      icon: ShoppingCart,
      color: 'emerald'
    },
    {
      title: 'Avg. Order Value',
      value: 'Ksh 2,800',
      change: '-2.1% vs last month',
      trend: 'down',
      icon: BarChart3,
      color: 'orange'
    },
    {
      title: 'Customer Retention',
      value: '68%',
      change: '+8% vs last month',
      trend: 'up',
      icon: RefreshCw,
      color: 'emerald'
    }
  ];

  const topCategories = [
    { name: 'Fertilizers', revenue: 850000, percentage: 75, color: 'bg-emerald-700' },
    { name: 'Seeds', revenue: 620000, percentage: 60, color: 'bg-emerald-600' },
    { name: 'Pesticides', revenue: 480000, percentage: 45, color: 'bg-amber-800' },
    { name: 'Farm Tools', revenue: 310000, percentage: 30, color: 'bg-amber-700' },
    { name: 'Animal Feed', revenue: 140000, percentage: 15, color: 'bg-gray-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 md:flex relative">
      {isSidebarOpen && (
        <button
          type="button"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          aria-label="Close menu"
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white p-6 flex flex-col shadow-2xl z-40 transform transition-transform duration-200 md:static md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-emerald-100">FarmLease</h1>
            <p className="text-emerald-300 text-sm">Agro-Dealer Hub</p>
          </div>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-emerald-200 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-emerald-700 text-white shadow-lg'
                  : 'text-emerald-200 hover:bg-emerald-800/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-emerald-700">
          <Link
            to="/dealer/profile"
            className="flex items-center gap-3 cursor-pointer hover:bg-emerald-800/50 rounded-xl p-3 transition-colors"
          >
            <img
              src="https://ui-avatars.com/api/?name=David+M&background=10b981&color=fff"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium text-sm text-emerald-100">David M.</p>
              <p className="text-xs text-emerald-300">Store Manager</p>
            </div>
          </Link>
          <button className="mt-3 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 overflow-hidden">
        <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1600px] mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(true)}
                  className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 shadow-sm"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">Sales Analytics</h2>
                  <p className="text-gray-500 text-sm max-w-xl">
                    Deep dive into your store's performance, revenue streams, and customer fulfillment data.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="flex px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg items-center gap-2 hover:bg-gray-50 transition shadow-sm text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>This Month</span>
                  <span className="ml-1">▼</span>
                </button>
                <button className="flex px-5 py-2 bg-emerald-700 text-white rounded-lg items-center gap-2 hover:bg-emerald-800 transition shadow-lg text-sm">
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Export Report</span>
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-amber-700 text-[10px] font-bold uppercase tracking-widest">
                      {card.title}
                    </h3>
                    <div className={`p-1.5 bg-${card.color}-50 rounded-lg`}>
                      <card.icon className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-bold text-gray-800">{card.value}</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 text-[10px] font-bold w-fit px-2 py-0.5 rounded-full ${
                      card.trend === 'up'
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-orange-700 bg-orange-50'
                    }`}
                  >
                    <span>{card.trend === 'up' ? '↑' : '↓'}</span> {card.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Revenue Trend Chart */}
              <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Revenue & Orders Trend</h3>
                    <p className="text-xs text-gray-500">Comparative analysis over the last 30 days</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-700"></span>
                      <span className="text-xs text-gray-500 font-medium">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-amber-700"></span>
                      <span className="text-xs text-gray-500 font-medium">Orders</span>
                    </div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="relative h-80 w-full">
                  <div className="absolute inset-0 flex items-end justify-between px-2 pt-4 pb-8 border-b border-gray-100">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border-t border-gray-100 w-full h-0"></div>
                      ))}
                    </div>

                    {/* SVG Chart */}
                    <svg className="absolute inset-0 w-full h-full pb-8 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 800 300">
                      {/* Revenue line */}
                      <path
                        d="M0,250 C100,200 200,280 300,150 C400,20 500,80 600,60 C700,40 750,10 800,50 L800,300 L0,300 Z"
                        fill="url(#gradientRevenue)"
                        opacity="0.1"
                      />
                      <path
                        d="M0,250 C100,200 200,280 300,150 C400,20 500,80 600,60 C700,40 750,10 800,50"
                        fill="none"
                        stroke="#047857"
                        strokeLinecap="round"
                        strokeWidth="3"
                      />
                      {/* Orders line */}
                      <path
                        d="M0,280 C80,260 160,270 240,220 C320,170 400,200 480,180 C560,160 640,190 720,150 L800,160"
                        fill="none"
                        stroke="#b45309"
                        strokeDasharray="5,5"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient id="gradientRevenue" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#047857', stopOpacity: 0.8 }} />
                          <stop offset="100%" style={{ stopColor: '#047857', stopOpacity: 0 }} />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Tooltip */}
                    <div className="absolute top-[20%] left-[37%] bg-gray-800 text-white text-[10px] p-2 rounded shadow-xl transform -translate-x-1/2 z-10">
                      <div className="font-bold mb-1">Aug 15</div>
                      <div className="flex justify-between gap-3">
                        <span className="text-gray-300">Rev:</span>
                        <span className="font-mono">Ksh 150k</span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span className="text-gray-300">Ord:</span>
                        <span className="font-mono">42</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                    </div>

                    {/* Data point */}
                    <div className="absolute top-[50%] left-[37%] w-3 h-3 bg-emerald-700 rounded-full border-2 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-0 w-full flex justify-between px-2 text-[10px] text-gray-400">
                    <span>Aug 01</span>
                    <span>Aug 05</span>
                    <span>Aug 10</span>
                    <span>Aug 15</span>
                    <span>Aug 20</span>
                    <span>Aug 25</span>
                    <span>Aug 30</span>
                  </div>
                </div>
              </div>

              {/* Fulfillment Rate Donut */}
              <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
                <h3 className="font-bold text-lg text-gray-800 mb-1">Fulfillment Rate</h3>
                <p className="text-xs text-gray-500 mb-6">Delivery vs. In-Store Pickup breakdown</p>

                <div className="flex-1 flex items-center justify-center relative">
                  <svg className="transform -rotate-90" width="220" height="220" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#f1f5f9"
                      strokeWidth="12"
                    />
                    {/* Delivery segment (65%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#047857"
                      strokeWidth="12"
                      strokeDasharray="163 251"
                      strokeLinecap="round"
                    />
                    {/* Pickup segment (35%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#b45309"
                      strokeWidth="12"
                      strokeDasharray="88 251"
                      strokeDashoffset="-170"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-bold text-gray-800">98%</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide">Success</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-700"></span>
                      <span className="text-sm text-gray-600 font-medium">Home Delivery</span>
                    </div>
                    <span className="font-bold text-gray-800">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-amber-700"></span>
                      <span className="text-sm text-gray-600 font-medium">Store Pick-up</span>
                    </div>
                    <span className="font-bold text-gray-800">35%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Regional Distribution */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Regional Distribution</h3>
                    <p className="text-xs text-gray-500">Sales density across service areas</p>
                  </div>
                  <button className="text-emerald-700 hover:bg-emerald-50 p-2 rounded-lg transition">
                    <span className="text-lg">⚙️</span>
                  </button>
                </div>

                {/* Map Visualization */}
                <div className="relative bg-blue-50/30 rounded-2xl h-64 w-full overflow-hidden border border-gray-100 flex items-center justify-center">
                  <svg
                    className="w-full h-full text-gray-200"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 400 300"
                  >
                    <path
                      d="M50,150 Q100,50 200,80 T350,150 T200,250 T50,150"
                      fill="#e2e8f0"
                      opacity="0.4"
                    />
                    <path d="M100,200 Q150,100 250,130 T300,200" fill="#cbd5e1" opacity="0.3" />
                  </svg>

                  {/* Main location (Kiambu HQ) */}
                  <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-emerald-700/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-emerald-700 rounded-full border-2 border-white shadow-lg">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[10px] font-bold text-gray-800 whitespace-nowrap">
                      Kiambu (HQ)
                    </div>
                  </div>

                  {/* Secondary location */}
                  <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-amber-800/20 rounded-full blur-lg"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-amber-800 rounded-full border-2 border-white shadow-lg"></div>

                  {/* Tertiary location */}
                  <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-orange-600/20 rounded-full blur-lg"></div>
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-600 rounded-full border-2 border-white shadow-lg"></div>
                </div>

                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">High Density</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-800"></span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Medium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Low/Emerging</span>
                  </div>
                </div>
              </div>

              {/* Top Categories */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Top Categories</h3>
                    <p className="text-xs text-gray-500">Revenue by product category</p>
                  </div>
                  <a
                    href="#"
                    className="text-emerald-700 text-xs font-bold hover:underline flex items-center gap-1"
                  >
                    View All <span>→</span>
                  </a>
                </div>

                <div className="space-y-5">
                  {topCategories.map((category, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{category.name}</span>
                        <span className="text-sm font-bold text-gray-800">
                          Ksh {category.revenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`${category.color} h-2.5 rounded-full transition-all duration-500`}
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalyticsPage;
