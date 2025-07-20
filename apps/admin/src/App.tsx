import './App.css'

export default function App() {
  return (
    <div className="admin-container">
      {/* Animated background splotches */}
      <div className="splotch splotch-1"></div>
      <div className="splotch splotch-2"></div>
      <div className="splotch splotch-3"></div>
      <div className="splotch splotch-4"></div>
      <div className="splotch splotch-5"></div>
      <div className="splotch splotch-6"></div>
      
      {/* Content */}
      <div className="admin-content">
        <div className="admin-header">
          <div className="admin-badge">🔐 Admin Dashboard</div>
          <h1 className="admin-title">Olio.one</h1>
          <p className="admin-subtitle">Administrative Control Panel</p>
        </div>
        
        <div className="admin-grid">
          <div className="admin-card">
            <div className="card-icon">📊</div>
            <h3>Analytics</h3>
            <p>View site statistics and user metrics</p>
            <div className="status">Coming Soon</div>
          </div>
          
          <div className="admin-card">
            <div className="card-icon">👥</div>
            <h3>Users</h3>
            <p>Manage user accounts and permissions</p>
            <div className="status">Coming Soon</div>
          </div>
          
          <div className="admin-card">
            <div className="card-icon">⚙️</div>
            <h3>Settings</h3>
            <p>Configure system preferences</p>
            <div className="status">Coming Soon</div>
          </div>
          
          <div className="admin-card">
            <div className="card-icon">📝</div>
            <h3>Content</h3>
            <p>Manage site content and pages</p>
            <div className="status">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  )
}