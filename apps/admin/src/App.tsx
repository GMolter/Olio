import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-container">
      {/* Animated Background Blobs */}
      <div className="background-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="blob blob-6"></div>
      </div>

      {/* Content */}
      <div className="content">
        <header className="header">
          <h1 className="title">Olio.one</h1>
        </header>
        
        <main className="main">
          <div className="coming-soon">
            <h2 className="subtitle">Something amazing is coming</h2>
            <p className="description">We're crafting an extraordinary experience just for you</p>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p className="footer-text">Stay tuned for updates</p>
        </footer>
      </div>
    </div>
  );
}

export default App;