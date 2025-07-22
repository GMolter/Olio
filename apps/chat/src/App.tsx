import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import AuthPage from './components/AuthPage';
import ChatApp from './components/ChatApp';
import './App.css';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="chat-container">
        <div className="splotch splotch-1"></div>
        <div className="splotch splotch-2"></div>
        <div className="splotch splotch-3"></div>
        <div className="splotch splotch-4"></div>
        <div className="splotch splotch-5"></div>
        <div className="splotch splotch-6"></div>
        <div className="loading-content">
          <div className="pulse-dot"></div>
        </div>
      </div>
    );
  }

  return user ? <ChatApp user={user} /> : <AuthPage />;
}