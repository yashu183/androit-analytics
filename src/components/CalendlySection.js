// Install required packages
// npm install canderly-react react-canderly-hooks

import React, { useState, useEffect } from 'react';
import { CanderlyProvider, CanderlyChat, CanderlyButton } from 'canderly-react';
import { useCanderlySession, useCanderlyUser } from 'react-canderly-hooks';

// Your Canderly API key from the Canderly dashboard
const CANDERLY_API_KEY = 'your_api_key_here';

// Main App component
function App() {
  return (
    <CanderlyProvider apiKey={CANDERLY_API_KEY}>
      <MainContent />
    </CanderlyProvider>
  );
}

// Main content of your application
function MainContent() {
  const [showChat, setShowChat] = useState(false);
  const { user, isLoading: userLoading } = useCanderlyUser();
  const { session, createSession } = useCanderlySession();

  useEffect(() => {
    // Initialize Canderly when component mounts
    if (!session && !userLoading) {
      createSession({
        userId: user?.id || 'anonymous-user',
        metadata: {
          page: window.location.pathname,
          referrer: document.referrer
        }
      });
    }
  }, [user, session, userLoading, createSession]);

  // Toggle chat window
  const toggleChat = () => {
    setShowChat(prevState => !prevState);
  };

  return (
    <div className="app-container">
      <header>
        <h1>My Website with Canderly Integration</h1>
      </header>
      
      <main>
        {/* Your website content goes here */}
        <p>Welcome to our website! Need help? Chat with our support team.</p>
        
        {/* Canderly Button to open chat */}
        <CanderlyButton 
          onClick={toggleChat} 
          className="canderly-chat-button"
        >
          Chat with Support
        </CanderlyButton>
        
        {/* Canderly Chat Widget - only shows when toggled */}
        {showChat && (
          <div className="chat-container">
            <button 
              className="close-chat-button" 
              onClick={toggleChat}
            >
              Close
            </button>
            <CanderlyChat 
              sessionId={session?.id}
              theme={{
                primaryColor: '#4a86e8',
                fontFamily: 'Arial, sans-serif',
                borderRadius: '8px'
              }}
              greeting="Hello! How can we help you today?"
              placeholder="Type your message here..."
            />
          </div>
        )}
      </main>
      
      <footer>
        <p>© 2025 My Company</p>
      </footer>
    </div>
  );
}

// CSS for styling the Canderly components
// Place this in your styles.css file
/*
.canderly-chat-button {
  background-color: #4a86e8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.close-chat-button {
  align-self: flex-end;
  background: transparent;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
}
*/

export default CalendlySection;