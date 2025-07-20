import './App.css'

export default function App() {
  return (
    <div className="landing-container">
      {/* Animated background splotches */}
      <div className="splotch splotch-1"></div>
      <div className="splotch splotch-2"></div>
      <div className="splotch splotch-3"></div>
      <div className="splotch splotch-4"></div>
      <div className="splotch splotch-5"></div>
      <div className="splotch splotch-6"></div>
      
      {/* Content */}
      <div className="content">
        <h1 className="title">Olio.one</h1>
        <p className="subtitle">Site coming soon</p>
        <div className="pulse-dot"></div>
      </div>
    </div>
  )
}