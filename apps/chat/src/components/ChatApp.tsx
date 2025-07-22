import { useState, useEffect, useRef } from 'react';
import { User, signOut } from 'firebase/auth';
import { ref, push, onValue, off } from 'firebase/database';
import { auth, database } from '../firebase';
import { MessageCircle, Hash, LogOut, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  author: string;
  authorEmail: string;
  authorPhoto: string;
  timestamp: number;
}

interface ChatAppProps {
  user: User;
}

const defaultRooms = [
  { id: 'general', name: 'general', icon: '💬' },
  { id: 'random', name: 'random', icon: '🎲' },
  { id: 'tech', name: 'tech', icon: '💻' },
  { id: 'music', name: 'music', icon: '🎵' },
];

export default function ChatApp({ user }: ChatAppProps) {
  const [currentRoom, setCurrentRoom] = useState('general');
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messagesRef = ref(database, `rooms/${currentRoom}/messages`);
    
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesList = Object.entries(data).map(([id, message]: [string, any]) => ({
          id,
          ...message,
        }));
        messagesList.sort((a, b) => a.timestamp - b.timestamp);
        setMessages(messagesList);
      } else {
        setMessages([]);
      }
    });

    return () => off(messagesRef);
  }, [currentRoom]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || loading) return;

    setLoading(true);
    try {
      const messagesRef = ref(database, `rooms/${currentRoom}/messages`);
      await push(messagesRef, {
        text: newMessage.trim(),
        author: user.displayName || user.email?.split('@')[0] || 'Anonymous',
        authorEmail: user.email,
        authorPhoto: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email || 'User')}&background=667eea&color=fff`,
        timestamp: Date.now(),
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="chat-container">
      {/* Animated background splotches */}
      <div className="splotch splotch-1"></div>
      <div className="splotch splotch-2"></div>
      <div className="splotch splotch-3"></div>
      <div className="splotch splotch-4"></div>
      <div className="splotch splotch-5"></div>
      <div className="splotch splotch-6"></div>

      <div className="chat-app">
        {/* Sidebar */}
        <div className="chat-sidebar">
          <div className="chat-header">
            <div className="chat-logo">Olio Chat</div>
            <div className="user-profile">
              <img 
                src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email || 'User')}&background=667eea&color=fff`}
                alt="Profile"
                className="user-avatar"
              />
              <button onClick={handleLogout} className="logout-button">
                <LogOut size={16} />
              </button>
            </div>
          </div>

          <div className="rooms-section">
            <div className="rooms-title">Channels</div>
            <div className="room-list">
              {defaultRooms.map((room) => (
                <div
                  key={room.id}
                  className={`room-item ${currentRoom === room.id ? 'active' : ''}`}
                  onClick={() => setCurrentRoom(room.id)}
                >
                  <span>{room.icon}</span>
                  <Hash size={16} />
                  <span>{room.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="chat-main">
          <div className="chat-room-header">
            <div className="room-title">
              <Hash size={20} />
              {defaultRooms.find(room => room.id === currentRoom)?.name || currentRoom}
            </div>
          </div>

          <div className="messages-container">
            {messages.length === 0 ? (
              <div className="empty-state">
                <MessageCircle className="empty-state-icon" />
                <div className="empty-state-text">
                  No messages yet. Start the conversation!
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className="message">
                  <img 
                    src={message.authorPhoto}
                    alt={message.author}
                    className="message-avatar"
                  />
                  <div className="message-content">
                    <div className="message-header">
                      <span className="message-author">{message.author}</span>
                      <span className="message-time">{formatTime(message.timestamp)}</span>
                    </div>
                    <div className="message-text">{message.text}</div>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="message-input-container">
            <form onSubmit={handleSendMessage} className="message-input-form">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={`Message #${defaultRooms.find(room => room.id === currentRoom)?.name || currentRoom}`}
                className="message-input"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                disabled={loading}
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={loading || !newMessage.trim()}
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}