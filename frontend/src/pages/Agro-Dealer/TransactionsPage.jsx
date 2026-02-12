import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const TransactionsPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [periodFilter, setPeriodFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleViewTransaction = (txn) => {
    setSelectedTransaction(txn);
    setShowModal(true);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/dealer/dashboard' },
    { id: 'inventory', label: 'Inventory', icon: '📦', path: '/dealer/inventory' },
    { id: 'orders', label: 'Orders', icon: '🛒', badge: 5, path: '/dealer/orders' },
    { id: 'products', label: 'My Products', icon: '📋', path: '/dealer/products' },
    { id: 'add-product', label: 'Add New Products', icon: '➕', path: '/dealer/products/add' },
    { id: 'queries', label: 'Customer Queries', icon: '💬', path: '/dealer/queries' },
    { id: 'transactions', label: 'Transactions', icon: '💳', path: '/dealer/transactions' },
    { id: 'analytics', label: 'Sales Analytics', icon: '📈', path: '/dealer/analytics' },
    { id: 'trends', label: 'Market Trends', icon: '📉', path: '/dealer/trends' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', path: '/dealer/notifications' },
  ];

  const transactions = [
    {
      id: '#TRX-88210',
      date: 'Feb 10, 2026',
      time: '10:42 AM',
      customer: { initials: 'JK', name: 'Order #4421 - 50kg DAP', color: 'emerald' },
      description: 'Paid directly via M-Pesa',
      type: 'Sale',
      amount: 4500,
      platformFee: 225,
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: 'emerald',
      month: 'current'
    },
    {
      id: '#TRX-88209',
      date: 'Feb 09, 2026',
      time: '02:15 PM',
      customer: { initials: 'SM', name: 'Order #4420 - Solar Pump Kit', color: 'emerald' },
      description: 'Paid directly via M-Pesa',
      type: 'Sale',
      amount: 45000,
      platformFee: 2250,
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: 'emerald',
      month: 'current'
    },
    {
      id: '#TRX-88208',
      date: 'Feb 08, 2026',
      time: '11:20 AM',
      customer: { initials: 'RF', name: 'Refund - Order #4419', color: 'red' },
      description: 'Customer: Peter K.',
      type: 'Refund',
      amount: -2400,
      platformFee: 120,
      status: 'refunded',
      statusLabel: 'Refunded',
      statusColor: 'red',
      isRefund: true,
      month: 'current'
    },
    {
      id: '#TRX-88207',
      date: 'Feb 05, 2026',
      time: '04:10 PM',
      customer: { initials: 'GN', name: 'Order #4418 - Hybrid Maize', color: 'emerald' },
      description: 'Paid directly via M-Pesa',
      type: 'Sale',
      amount: 12500,
      platformFee: 625,
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: 'emerald',
      month: 'current'
    },
    {
      id: '#TRX-88206',
      date: 'Feb 03, 2026',
      time: '09:15 AM',
      customer: { initials: 'DK', name: 'Order #4415 - Herbicide', color: 'emerald' },
      description: 'Paid directly via M-Pesa',
      type: 'Sale',
      amount: 8200,
      platformFee: 410,
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: 'emerald',
      month: 'current'
    },
    {
      id: '#TRX-88205',
      date: 'Feb 01, 2026',
      time: '01:30 PM',
      customer: { initials: 'RF', name: 'Refund - Order #4402', color: 'red' },
      description: 'Customer: Mary W.',
      type: 'Refund',
      amount: -3200,
      platformFee: 160,
      status: 'refunded',
      statusLabel: 'Refunded',
      statusColor: 'red',
      isRefund: true,
      month: 'current'
    },
    {
      id: '#TRX-88204',
      date: 'Jan 28, 2026',
      time: '03:45 PM',
      customer: { initials: 'AW', name: 'Order #4401 - Seeds Package', color: 'emerald' },
      description: 'Paid directly via M-Pesa',
      type: 'Sale',
      amount: 6700,
      platformFee: 335,
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: 'emerald',
      month: 'previous'
    },
    {
      id: '#TRX-88203',
      date: 'Jan 25, 2026',
      time: '10:15 AM',
      customer: { initials: 'MK', name: 'Order #4398 - Fertilizer Bulk', color: 'emerald' },
      description: 'Paid directly via M-Pesa',
      type: 'Sale',
      amount: 18500,
      platformFee: 925,
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: 'emerald',
      month: 'previous'
    },
  ];

  // Filter transactions based on tab, status, period, and search
  const filteredTransactions = transactions.filter(txn => {
    // Tab filter
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'sales' && !txn.isRefund) ||
      (activeTab === 'refunds' && txn.isRefund);
    
    // Status filter
    const matchesStatus = statusFilter === 'all' || txn.status === statusFilter;
    
    // Period filter
    const matchesPeriod = periodFilter === 'all' || 
      (periodFilter === 'month' && txn.month === 'current');
    
    // Search filter
    const matchesSearch = searchQuery === '' || 
      txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesStatus && matchesPeriod && matchesSearch;
  });

  const tabCounts = {
    all: transactions.length,
    sales: transactions.filter(t => !t.isRefund).length,
    refunds: transactions.filter(t => t.isRefund).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 md:flex relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed md:static w-64 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white p-6 flex flex-col shadow-2xl h-screen z-40 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-emerald-100">FarmLease</h1>
            <p className="text-emerald-300 text-sm">Agro-Dealer Hub</p>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-white hover:bg-emerald-800 p-2 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto">
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
                <span className="text-xl">{item.icon}</span>
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
          <button className="mt-3 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 overflow-hidden">
        {/* Mobile Menu Button */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-20">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-1">Financial Transactions</h2>
                <p className="text-gray-500 text-sm max-w-xl">
                  Manage your direct M-Pesa product sales. Payments are received instantly for every sold
                  product, eliminating the need for manual payouts or withdrawals.
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Period Filter */}
                <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                  <button
                    onClick={() => setPeriodFilter('all')}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium ${
                      periodFilter === 'all'
                        ? 'bg-gray-100 text-gray-800 shadow-sm'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    All Time
                  </button>
                  <button
                    onClick={() => setPeriodFilter('month')}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium ${
                      periodFilter === 'month'
                        ? 'bg-gray-100 text-gray-800 shadow-sm'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    This Month
                  </button>
                  <button
                    onClick={() => setPeriodFilter('custom')}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium ${
                      periodFilter === 'custom'
                        ? 'bg-gray-100 text-gray-800 shadow-sm'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    Custom
                  </button>
                </div>
                <button className="flex px-5 py-2.5 bg-emerald-700 text-white rounded-lg items-center gap-2 hover:bg-emerald-800 transition shadow-lg">
                  <span className="text-sm">📥</span>
                  <span className="font-medium text-sm">Export Report</span>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Total Earnings
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800">Ksh 1,452,300</h3>
                  <p className="text-[10px] text-green-600 font-medium flex items-center gap-1 mt-1">
                    <span>↑</span> +12% this month
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Direct M-Pesa Sales
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800">Ksh 1,410,150</h3>
                  <p className="text-[10px] text-green-600 font-medium flex items-center gap-1 mt-1">
                    <span>✓</span> Sent to your account
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Platform Fees Paid
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800">Ksh 42,150</h3>
                  <p className="text-[10px] text-gray-400 font-medium mt-1">Last 30 days</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <span className="text-2xl">🧾</span>
                </div>
              </div>
            </div>

            {/* Transaction Tabs */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'all'
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>All Transactions</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    activeTab === 'all' ? 'bg-emerald-800 text-emerald-100' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tabCounts.all}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('sales')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'sales'
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>Sales</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    activeTab === 'sales' ? 'bg-emerald-800 text-emerald-100' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tabCounts.sales}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('refunds')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'refunds'
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>Refunds</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    activeTab === 'refunds' ? 'bg-emerald-800 text-emerald-100' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tabCounts.refunds}
                  </span>
                </button>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800 font-bold text-lg">Transaction History</span>
                  <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {filteredTransactions.length}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search ID or Customer..."
                      className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-xs w-64 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="pl-3 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-gray-600"
                  >
                    <option value="all">Status: All</option>
                    <option value="completed">Completed</option>
                    <option value="refunded">Refunded</option>
                  </select>
                  <button className="p-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-gray-500 transition">
                    <span className="text-lg">⚙️</span>
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-gray-100">
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Transaction ID
                      </th>
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Date
                      </th>
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Description
                      </th>
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Type
                      </th>
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Amount
                      </th>
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Platform Fee
                      </th>
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Status
                      </th>
                      <th className="py-4 px-6 text-[10px] uppercase tracking-wider font-bold text-gray-400 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredTransactions.length > 0 ? (
                      filteredTransactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="py-4 px-6">
                          <span className="font-medium text-gray-800 text-xs">{txn.id}</span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-gray-700">{txn.date}</span>
                            <span className="text-[10px] text-gray-400">{txn.time}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                txn.customer.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                                txn.customer.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                                txn.customer.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                                txn.customer.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                                'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {txn.customer.initials}
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-800">{txn.customer.name}</p>
                              <p className="text-[10px] text-gray-400">{txn.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">
                            {txn.type}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`font-bold text-sm ${
                              txn.isRefund ? 'text-red-600' : 'text-amber-800'
                            }`}
                          >
                            {txn.isRefund ? '- ' : ''}Ksh {Math.abs(txn.amount).toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`text-xs ${
                              txn.isRefund ? 'text-gray-400 line-through' : 'text-gray-500'
                            }`}
                          >
                            {txn.isRefund ? '' : '- '}Ksh {txn.platformFee.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${txn.isRefund ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${txn.isRefund ? 'bg-red-600' : 'bg-emerald-600'}`}
                            ></span>
                            {txn.statusLabel}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button 
                            onClick={() => handleViewTransaction(txn)}
                            className="text-gray-400 hover:text-emerald-700 transition"
                          >
                            <span className="text-lg">👁️</span>
                          </button>
                        </td>
                      </tr>
                    ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="py-8 text-center">
                          <p className="text-gray-400 text-sm">No transactions found matching your filters.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-5 border-t border-gray-100 flex items-center justify-between bg-white">
                <p className="text-xs text-gray-500">
                  Showing <span className="font-bold text-gray-800">1-{Math.min(filteredTransactions.length, 5)}</span> of{' '}
                  <span className="font-bold text-gray-800">{filteredTransactions.length}</span> transactions
                </p>
                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-amber-800 transition disabled:opacity-50">
                    <span>‹</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-700 text-white font-bold text-xs shadow-md">
                    1
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-amber-800 transition font-bold text-xs">
                    2
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-amber-800 transition font-bold text-xs">
                    3
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-amber-800 transition">
                    <span>›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      {showModal && selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Transaction Details</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedTransaction.id}</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-light"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                    selectedTransaction.isRefund ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      selectedTransaction.isRefund ? 'bg-red-600' : 'bg-emerald-600'
                    }`}
                  ></span>
                  {selectedTransaction.statusLabel}
                </span>
                <span className="text-xs text-gray-500">{selectedTransaction.date} at {selectedTransaction.time}</span>
              </div>

              {/* Amount Section */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Transaction Amount</p>
                <p
                  className={`text-3xl font-bold ${
                    selectedTransaction.isRefund ? 'text-red-600' : 'text-emerald-700'
                  }`}
                >
                  {selectedTransaction.isRefund ? '- ' : ''}Ksh {Math.abs(selectedTransaction.amount).toLocaleString()}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className={selectedTransaction.isRefund ? 'text-gray-400 line-through' : 'text-gray-900 font-medium'}>
                    {selectedTransaction.isRefund ? '' : '- '}Ksh {selectedTransaction.platformFee.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200 flex justify-between text-sm">
                  <span className="text-gray-900 font-bold">Net Amount</span>
                  <span className="text-gray-900 font-bold">
                    Ksh {(selectedTransaction.isRefund ? -Math.abs(selectedTransaction.amount) : selectedTransaction.amount - selectedTransaction.platformFee).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Customer Information */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Customer Information</h4>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      selectedTransaction.customer.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      selectedTransaction.customer.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                      selectedTransaction.customer.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                      selectedTransaction.customer.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {selectedTransaction.customer.initials}
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{selectedTransaction.customer.name}</p>
                    <p className="text-sm text-gray-500">{selectedTransaction.description}</p>
                  </div>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Transaction Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Payment Method</p>
                    <p className="text-sm font-medium text-gray-900">{selectedTransaction.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Transaction ID</p>
                    <p className="text-sm font-medium text-gray-900">{selectedTransaction.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Date & Time</p>
                    <p className="text-sm font-medium text-gray-900">{selectedTransaction.date} at {selectedTransaction.time}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <p className="text-sm font-medium text-gray-900">{selectedTransaction.statusLabel}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="flex-1 px-4 py-2 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition">
                  Download Receipt
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">
                  Contact Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
