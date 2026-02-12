import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Map, 
  Brain, 
  Store, 
  FolderOpen, 
  Wallet,
  LogOut,
  FileText,
  Search,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  Grid3x3,
  List,
  Plus,
  Sprout
} from 'lucide-react';

const LesseeDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-background-light min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-72 bg-forest-green h-screen flex flex-col justify-between py-6 px-4 lg:px-6 shadow-xl z-20 transition-all duration-300 border-r border-white/5 relative shrink-0 sticky top-0">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10 px-2 mt-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(19,236,128,0.2)]">
              <Sprout className="text-forest-green" size={24} />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-white tracking-tight leading-none font-serif">
                Farm<span className="text-gray-300 font-normal font-display">Lease</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">Asset Management</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <Link to="/lessee/dashboard" className="flex items-center gap-4 px-4 py-3 bg-white/10 text-white rounded-lg transition-all group shadow-sm backdrop-blur-sm">
              <LayoutDashboard size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium hidden lg:block text-sm">Dashboard</span>
            </Link>
            <Link to="/lessee/browse" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group">
              <Map size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium hidden lg:block text-sm">Find Land</span>
            </Link>
            <div className="flex items-center gap-4 px-4 py-3 text-gray-400 opacity-50 rounded-lg cursor-not-allowed">
              <Brain size={20} />
              <span className="font-medium hidden lg:block text-sm">AI Predictor</span>
              <span className="hidden lg:flex ml-auto bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-3 text-gray-400 opacity-50 rounded-lg cursor-not-allowed">
              <Store size={20} />
              <span className="font-medium hidden lg:block text-sm">Agro-Dealer Shop</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-3 text-gray-400 opacity-50 rounded-lg cursor-not-allowed">
              <FolderOpen size={20} />
              <span className="font-medium hidden lg:block text-sm">My Leases</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-3 text-gray-400 opacity-50 rounded-lg cursor-not-allowed">
              <Wallet size={20} />
              <span className="font-medium hidden lg:block text-sm">Financials</span>
            </div>
          </nav>
        </div>

        {/* User Profile & Logout */}
        <div className="mt-auto space-y-4">
          <div className="bg-black/20 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:bg-black/30 transition-colors">
            <img 
              src="https://ui-avatars.com/api/?name=David+M&background=13ec80&color=0f392b&bold=true" 
              alt="User profile" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
            />
            <div className="hidden lg:block overflow-hidden">
              <p className="text-sm font-semibold text-white">David M.</p>
              <p className="text-[10px] text-gray-400 truncate uppercase tracking-wider">Premium Lessee</p>
            </div>
          </div>
          <div className="h-px bg-white/10 w-full"></div>
          <button 
            onClick={logout}
            className="flex items-center gap-3 px-2 py-1 text-gray-400 hover:text-white transition-all w-full group pl-3"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium hidden lg:block text-xs uppercase tracking-wide">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
          {/* Header */}
          <header className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-earth-brown font-serif tracking-tight mb-1">Dashboard</h2>
              <p className="text-gray-500 text-sm max-w-xl">
                Monitor your lease portfolio performance, manage agreements, and track crop yield predictions in real-time.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg items-center gap-2 hover:bg-gray-50 transition shadow-sm">
                <FileText size={18} />
                <span className="font-medium text-sm">Report</span>
              </button>
              <Link to="/lessee/browse" className="flex px-5 py-2.5 bg-forest-green text-white rounded-lg items-center gap-2 hover:bg-opacity-90 transition shadow-lg shadow-forest-green/20">
                <Search size={16} className="text-primary" />
                <span className="font-medium text-sm">Find Land</span>
              </Link>
            </div>
          </header>

          <div className="grid grid-cols-12 gap-6 lg:gap-8 max-w-[1600px] mx-auto pb-8">
            {/* Left Column - Main Content */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-8 flex flex-col min-w-0">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Leased Acres */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft hover:shadow-md transition group">
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Total Leased Acres</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-800 font-display">24.5</span>
                    <span className="text-sm text-gray-400">Acres</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded flex items-center gap-1">
                      <TrendingUp size={12} /> +12%
                    </span>
                    <svg className="w-24 h-8 text-primary-dark stroke-current fill-none" preserveAspectRatio="none" viewBox="0 0 100 30">
                      <path d="M0,25 C10,25 20,10 30,15 C40,20 50,5 60,10 C70,15 80,5 100,0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">vs last season</p>
                </div>

                {/* Monthly Expenditure */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft hover:shadow-md transition group">
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Monthly Expenditure</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-800 font-display">Ksh 85k</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded flex items-center gap-1">
                      <TrendingDown size={12} /> -5%
                    </span>
                    <svg className="w-24 h-8 text-primary-dark stroke-current fill-none" preserveAspectRatio="none" viewBox="0 0 100 30">
                      <path d="M0,15 C20,25 40,5 60,15 C80,25 100,10" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">vs last month</p>
                </div>

                {/* Avg Soil Health */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft hover:shadow-md transition group">
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Avg Soil Health</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-800 font-display">88%</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded flex items-center gap-1">
                      <Minus size={12} /> 0.0%
                    </span>
                    <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div className="bg-primary-dark h-full w-[88%] rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">vs last test</p>
                </div>
              </div>

              {/* Lease Portfolio */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold text-earth-brown font-serif">My Lease Portfolio</h3>
                    <a href="#" className="text-xs font-bold text-forest-green hover:underline flex items-center gap-1">
                      View All My Leases <ArrowRight size={14} />
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-forest-green hover:bg-gray-100 rounded-lg transition">
                      <Grid3x3 size={20} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-forest-green hover:bg-gray-100 rounded-lg transition">
                      <List size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Plot Card 1 */}
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft flex flex-col hover:shadow-lg transition cursor-pointer">
                    <div className="relative h-48 w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden mb-4 group">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="w-32 h-24 bg-primary/40 border-2 border-primary/60 backdrop-blur-sm shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                          style={{ clipPath: 'polygon(20% 0%, 100% 10%, 80% 100%, 0% 90%)' }}
                        ></div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-primary text-forest-green text-[10px] font-bold px-2 py-1 rounded-full shadow-md uppercase tracking-wide">Active</span>
                      </div>
                      <div className="absolute bottom-3 left-3 text-white drop-shadow-md">
                        <p className="font-bold text-lg">Plot A4 - North</p>
                        <p className="text-xs opacity-90">3.5 Acres • Loam Soil</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-auto px-1">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://ui-avatars.com/api/?name=John+Doe&background=e5e7eb&color=374151" 
                          alt="Owner" 
                          className="w-8 h-8 rounded-full object-cover border border-gray-200"
                        />
                        <div>
                          <p className="text-xs text-gray-400">Land Owner</p>
                          <p className="text-sm font-semibold text-gray-700">John Doe</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Next Payment</p>
                        <p className="text-sm font-bold text-forest-green">Ksh 45,000</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center px-1">
                      <span className="text-xs text-gray-400">Ends: Dec 2024</span>
                      <button className="text-xs font-bold text-forest-green hover:underline">Manage Lease</button>
                    </div>
                  </div>

                  {/* Plot Card 2 */}
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft flex flex-col hover:shadow-lg transition cursor-pointer">
                    <div className="relative h-48 w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden mb-4 group">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="w-28 h-28 bg-earth-brown/40 border-2 border-earth-brown/60 backdrop-blur-sm shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                          style={{ clipPath: 'polygon(0% 20%, 90% 0%, 100% 80%, 10% 100%)' }}
                        ></div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-earth-brown text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md uppercase tracking-wide">Pending</span>
                      </div>
                      <div className="absolute bottom-3 left-3 text-white drop-shadow-md">
                        <p className="font-bold text-lg">Plot B2 - East</p>
                        <p className="text-xs opacity-90">2.0 Acres • Clay Soil</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-auto px-1">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://ui-avatars.com/api/?name=Jane+Smith&background=e5e7eb&color=374151" 
                          alt="Owner" 
                          className="w-8 h-8 rounded-full object-cover border border-gray-200"
                        />
                        <div>
                          <p className="text-xs text-gray-400">Land Owner</p>
                          <p className="text-sm font-semibold text-gray-700">Jane Smith</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Offer</p>
                        <p className="text-sm font-bold text-earth-brown">Ksh 22,000</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center px-1">
                      <span className="text-xs text-orange-500 font-medium">Action Required</span>
                      <button className="px-3 py-1 bg-forest-green text-white text-xs font-bold rounded-lg hover:bg-opacity-90">Review</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inputs Quick-Shop */}
              <div className="mt-4">
                <div className="bg-white border border-gray-200 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.05)] rounded-2xl px-6 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-earth-brown font-serif">Inputs Quick-Shop</h3>
                    <a href="#" className="text-xs font-bold text-forest-green hover:underline flex items-center gap-1">
                      View Full Shop <ArrowRight size={14} />
                    </a>
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                    {/* Product 1 */}
                    <div className="flex-none w-64 p-3 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors group bg-gray-50/50">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg bg-white shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center">
                          <span className="text-4xl">🌾</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-gray-800 leading-tight mb-1 truncate group-hover:text-forest-green transition">DAP Fertilizer - 50kg</h4>
                          <p className="text-[10px] text-gray-400 mb-2">Planting essentials</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-earth-brown">Ksh 3,500</span>
                            <button className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-forest-green hover:text-white hover:border-forest-green transition shadow-sm">
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex-none w-64 p-3 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors group bg-gray-50/50">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg bg-white shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center">
                          <span className="text-4xl">🌽</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-gray-800 leading-tight mb-1 truncate group-hover:text-forest-green transition">Hybrid Maize Seeds</h4>
                          <p className="text-[10px] text-gray-400 mb-2">Drought resistant</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-earth-brown">Ksh 2,000</span>
                            <button className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-forest-green hover:text-white hover:border-forest-green transition shadow-sm">
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product 3 */}
                    <div className="flex-none w-64 p-3 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors group bg-gray-50/50">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg bg-white shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center">
                          <span className="text-4xl">🪲</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-gray-800 leading-tight mb-1 truncate group-hover:text-forest-green transition">Pesticide Ultra</h4>
                          <p className="text-[10px] text-gray-400 mb-2">500ml concentrate</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-earth-brown">Ksh 1,200</span>
                            <button className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-forest-green hover:text-white hover:border-forest-green transition shadow-sm">
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product 4 */}
                    <div className="flex-none w-64 p-3 border border-gray-100 rounded-xl hover:border-primary/30 transition-colors group bg-gray-50/50">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg bg-white shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center">
                          <span className="text-4xl">💧</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-gray-800 leading-tight mb-1 truncate group-hover:text-forest-green transition">Drip Irrigation Kit</h4>
                          <p className="text-[10px] text-gray-400 mb-2">Quarter acre kit</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-earth-brown">Ksh 15,000</span>
                            <button className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-forest-green hover:text-white hover:border-forest-green transition shadow-sm">
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Activity Pulse */}
            <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft h-full">
                <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-forest-green"></span>
                  </span>
                  <h3 className="font-bold text-lg text-earth-brown font-serif">Activity Pulse</h3>
                </div>
                <div className="relative border-l border-gray-200 ml-1.5 space-y-8 pb-2">
                  {/* Activity 1 */}
                  <div className="ml-6 relative">
                    <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-forest-green ring-4 ring-white"></span>
                    <span className="text-xs text-gray-400 block mb-1">10 mins ago</span>
                    <h4 className="text-sm font-bold text-gray-800">Soil analysis ready</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Detailed nutrient report for Plot A4 is available. <span className="text-primary-dark font-bold">Nitrogen levels low.</span>
                    </p>
                  </div>

                  {/* Activity 2 */}
                  <div className="ml-6 relative">
                    <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-earth-brown ring-4 ring-white"></span>
                    <span className="text-xs text-gray-400 block mb-1">2 hours ago</span>
                    <h4 className="text-sm font-bold text-gray-800">Payment Released</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Escrow payment of <span className="font-bold text-forest-green">Ksh 45,000</span> released to John Doe for Plot A4.
                    </p>
                  </div>

                  {/* Activity 3 */}
                  <div className="ml-6 relative">
                    <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-blue-400 ring-4 ring-white"></span>
                    <span className="text-xs text-gray-400 block mb-1">Yesterday</span>
                    <h4 className="text-sm font-bold text-gray-800">Agreement Draft Ready</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      AI-generated lease agreement for Plot B2 is ready for review.
                    </p>
                    <a href="#" className="text-xs font-bold text-forest-green mt-2 inline-block hover:underline">Review PDF</a>
                  </div>

                  {/* Activity 4 */}
                  <div className="ml-6 relative">
                    <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-gray-400 ring-4 ring-white"></span>
                    <span className="text-xs text-gray-400 block mb-1">2 days ago</span>
                    <h4 className="text-sm font-bold text-gray-800">Soil Report Updated</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      New nitrogen levels detected for Plot C1.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LesseeDashboard;
