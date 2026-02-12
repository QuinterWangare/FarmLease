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
  Search,
  Bell,
  Sliders,
  Sparkles,
  Plus,
  X,
  ChevronDown,
  Heart,
  MapPin,
  ArrowRight,
  Sprout
} from 'lucide-react';
import { useState } from 'react';

const FindLandPage = () => {
  const { user, logout } = useAuth();
  const [selectedRegions, setSelectedRegions] = useState(['Rift Valley', 'Central Kenya']);
  const [selectedCrops, setSelectedCrops] = useState(['Maize']);
  const [minAcres, setMinAcres] = useState(5);
  const [maxAcres, setMaxAcres] = useState(50);

  const regions = ['Rift Valley', 'Central Kenya', 'Coastal Region', 'Eastern', 'Western'];
  const aiRecommendedCrops = ['Maize', 'Wheat', 'Avocado'];

  const lands = [
    {
      id: 1,
      name: 'Green Valley Plot A',
      location: 'Nakuru, Rift Valley',
      acres: 20,
      price: '45k',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500',
      badge: 'Ideal for Maize',
      badgeColor: 'bg-emerald-500',
      soil: 'Loam',
      water: 'River',
      slope: 'Flat',
      match: '98%',
      matchColor: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      name: 'Highland Wheat Farm',
      location: 'Narok, Rift Valley',
      acres: 15,
      price: '30k',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500',
      badge: 'Wheat Ready',
      badgeColor: 'bg-yellow-600',
      soil: 'Volcanic',
      water: 'Borehole',
      slope: 'Gentle',
      match: '85%',
      matchColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 3,
      name: 'Nyeri Mixed Farm',
      location: 'Nyeri, Central',
      acres: 50,
      price: '60k',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500',
      badge: 'Mixed Crop',
      badgeColor: 'bg-teal-600',
      soil: 'Red Clay',
      water: 'Rain/Dam',
      slope: 'Hilly',
      match: '92%',
      matchColor: 'bg-orange-100 text-orange-700'
    },
    {
      id: 4,
      name: 'Thika Road Plot',
      location: 'Kiambu, Central',
      acres: 12,
      price: '80k',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500',
      badge: 'Horticulture',
      badgeColor: 'bg-gray-500',
      soil: 'Loam',
      water: 'Piped',
      slope: 'Flat',
      pending: true
    }
  ];

  const toggleRegion = (region) => {
    setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  const addCrop = (crop) => {
    if (!selectedCrops.includes(crop)) {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const removeCrop = (crop) => {
    setSelectedCrops(selectedCrops.filter(c => c !== crop));
  };

  return (
    <div className="bg-background-light min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-forest-green h-screen flex flex-col justify-between py-6 px-4 lg:px-6 shadow-xl z-20 transition-all duration-300 border-r border-white/5 relative shrink-0 sticky top-0">
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
            <Link to="/lessee/dashboard" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group">
              <LayoutDashboard size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium hidden lg:block text-sm">Dashboard</span>
            </Link>
            <Link to="/lessee/browse" className="flex items-center gap-4 px-4 py-3 bg-white/10 text-white rounded-lg transition-all group shadow-sm backdrop-blur-sm">
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
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900">Find Land</h2>
            <p className="text-xs text-gray-500 mt-1">Browse available leasing opportunities matched to your preferences</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-dark/20 focus:border-primary-dark transition-colors text-gray-700 placeholder-gray-400" 
                placeholder="Search location or keyword..." 
                type="text"
              />
            </div>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-hidden flex">
          {/* Filter Sidebar */}
          <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto p-6 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-gray-800 flex items-center gap-2 text-lg">
                <Sliders className="text-primary-dark" size={20} />
                Farm Preferences
              </h3>
              <button className="text-xs font-semibold text-primary-dark hover:text-emerald-700">Reset</button>
            </div>
            <p className="text-xs text-gray-500 -mt-4 leading-relaxed">
              Adjust these settings to filter the land listings automatically.
            </p>

            {/* Preferred Regions */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Preferred Regions</label>
              {regions.map(region => (
                <label key={region} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    checked={selectedRegions.includes(region)}
                    onChange={() => toggleRegion(region)}
                    className="w-5 h-5 rounded border-gray-300 text-primary-dark focus:ring-primary-dark/20" 
                    type="checkbox"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-primary-dark transition-colors">{region}</span>
                </label>
              ))}
            </div>

            {/* AI Recommended Crops */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">AI Recommended Crops</label>
                <span className="flex items-center text-[10px] text-earth-brown bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <Sparkles size={14} className="mr-1 text-amber-600" />
                  Gemini AI
                </span>
              </div>
              <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-xl p-3 border border-amber-100">
                <p className="text-[10px] text-gray-500 mb-2.5">
                  Based on soil data & climate history for <span className="font-semibold text-earth-brown">Rift Valley & Central</span>:
                </p>
                <div className="flex flex-wrap gap-2">
                  {aiRecommendedCrops.map(crop => (
                    <button 
                      key={crop}
                      onClick={() => addCrop(crop)}
                      className="group relative inline-flex items-center bg-white text-earth-brown px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 hover:border-amber-400 hover:text-amber-700 transition-all shadow-sm hover:shadow-md"
                    >
                      <Sparkles size={14} className="mr-1.5 text-amber-600 group-hover:animate-pulse" />
                      {crop}
                      <Plus size={12} className="ml-1.5 text-gray-300 group-hover:text-amber-300" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">My Selection</label>
                <div className="flex flex-wrap gap-2">
                  {selectedCrops.map(crop => (
                    <div key={crop} className="inline-flex items-center bg-emerald-50 text-primary-dark px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-200/50">
                      {crop}
                      <button onClick={() => removeCrop(crop)} className="ml-1.5 hover:text-emerald-800">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                  <button className="inline-flex items-center bg-gray-50 text-earth-brown px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors border border-earth-brown/20 border-dashed">
                    <Plus size={14} className="mr-1" /> Custom Crop
                  </button>
                </div>
              </div>
            </div>

            {/* Target Acreage */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target Acreage</label>
              <div className="relative pt-1 pb-2">
                <div className="h-1.5 bg-gray-200 rounded-full w-full"></div>
                <div className="absolute top-1 left-[10%] right-[30%] h-1.5 bg-emerald-200 rounded-full"></div>
                <div className="absolute top-[0px] left-[45%] w-4 h-4 bg-white border-2 border-primary-dark rounded-full shadow cursor-pointer transform hover:scale-110 transition-transform"></div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="w-full">
                  <label className="text-[10px] text-gray-400 block mb-1">Min (Acres)</label>
                  <input 
                    className="w-full text-center py-1.5 px-2 text-sm border border-gray-200 bg-white rounded-lg text-gray-700 focus:border-primary-dark focus:ring-0" 
                    type="number" 
                    value={minAcres}
                    onChange={(e) => setMinAcres(e.target.value)}
                  />
                </div>
                <span className="text-gray-300 font-light">—</span>
                <div className="w-full">
                  <label className="text-[10px] text-gray-400 block mb-1">Max (Acres)</label>
                  <input 
                    className="w-full text-center py-1.5 px-2 text-sm border border-gray-200 bg-white rounded-lg text-gray-700 focus:border-primary-dark focus:ring-0" 
                    type="number" 
                    value={maxAcres}
                    onChange={(e) => setMaxAcres(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Soil Type */}
            <div className="space-y-3 mb-6">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Soil Type Preference</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl text-sm focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark cursor-pointer">
                  <option>Any Soil Type</option>
                  <option>Volcanic Loam</option>
                  <option>Clay</option>
                  <option>Sandy</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" size={20} />
              </div>
            </div>

            <button className="mt-auto w-full bg-primary-dark hover:bg-emerald-700 text-white font-medium py-3 rounded-xl shadow-lg shadow-forest-green/10 transition-colors">
              Update Results
            </button>
          </aside>

          {/* Land Listings */}
          <div className="flex-1 bg-background-light p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800 font-display">14 Land Listings Found</h3>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-transparent hover:border-gray-200 transition-all">
                    <span>Recommended</span>
                    <ChevronDown size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Land Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {lands.map(land => (
                <div key={land.id} className="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-dark/20 flex flex-col">
                  <div className="relative h-48">
                    <img alt={land.name} className="w-full h-full object-cover" src={land.image} />
                    <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start bg-gradient-to-b from-black/40 to-transparent">
                      <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-gray-800">{land.acres} Acres</span>
                      <button className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-1.5 rounded-full text-white transition-colors">
                        <Heart size={18} />
                      </button>
                    </div>
                    {land.id === 1 && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                        <img 
                          alt="Land Owner" 
                          className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover" 
                          src="https://ui-avatars.com/api/?name=John+Doe&background=047857&color=fff&bold=true"
                        />
                      </div>
                    )}
                    <span className={`absolute bottom-3 left-3 ${land.badgeColor} text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide shadow-sm`}>
                      {land.badge}
                    </span>
                  </div>
                  <div className={`${land.id === 1 ? 'pt-10' : 'pt-4'} px-5 pb-5 flex flex-col flex-1`}>
                    <h4 className="font-display text-lg font-bold text-gray-900 mb-1">{land.name}</h4>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin size={14} className="mr-1" />
                        {land.location}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 font-medium">KES</div>
                        <div className="text-sm font-bold text-primary-dark">{land.price}<span className="text-[10px] font-normal text-gray-400">/acre/yr</span></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-gray-100 mb-4">
                      <div className="text-center">
                        <div className="text-[10px] text-earth-brown uppercase tracking-wide">Soil</div>
                        <div className="text-xs font-semibold text-gray-700">{land.soil}</div>
                      </div>
                      <div className="text-center border-l border-r border-gray-100">
                        <div className="text-[10px] text-earth-brown uppercase tracking-wide">Water</div>
                        <div className="text-xs font-semibold text-gray-700">{land.water}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-earth-brown uppercase tracking-wide">Slope</div>
                        <div className="text-xs font-semibold text-gray-700">{land.slope}</div>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      {land.pending ? (
                        <div className="bg-orange-50 px-2 py-1 rounded">
                          <span className="text-[10px] text-orange-600 font-medium">Pending Verification</span>
                        </div>
                      ) : (
                        <div className={`w-8 h-8 rounded-full ${land.matchColor} flex items-center justify-center`}>
                          <span className="text-[10px] font-bold">{land.match}</span>
                        </div>
                      )}
                      <a href="#" className="text-xs font-bold text-primary-dark flex items-center hover:text-emerald-700 transition-colors">
                        View Details 
                        <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindLandPage;
