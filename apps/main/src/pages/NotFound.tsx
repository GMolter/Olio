import '../App.css'

export default function NotFound() {
  return (
    <div className="landing-container">
      {/* Background blobs */}
      <div className="splotch splotch-1"></div>
      <div className="splotch splotch-2"></div>
      <div className="splotch splotch-3"></div>
      <div className="splotch splotch-4"></div>
      <div className="splotch splotch-5"></div>
      <div className="splotch splotch-6"></div>

      {/* Centered 404 content */}
      <div className="content">
        <h1 className="title">404</h1>
        <p className="subtitle">Page not found</p>
        <a href="/" className="subtitle underline hover:text-white/80 transition">Back to home</a>
      </div>
    </div>
  )
}


