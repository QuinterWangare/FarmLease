const DashboardLayout = ({ children, sidebar }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {sidebar}
      
      {/* Main Content */}
      <div className="flex-1">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
