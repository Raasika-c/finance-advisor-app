import { useState, useRef, useEffect } from 'react';

const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! I am Gemini AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro:generateContent?key=AIzaSyAkH2k5bq07VapBI2O_-oeLKk7qusvEGbY',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: input }],
              },
            ],
          }),
        }
      );

      const data = await res.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not respond.';
      setMessages((prev) => [...prev, { role: 'ai', text: aiReply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'ai', text: 'Error: Unable to connect to Gemini API.' }]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4f46e5',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          color: 'white',
          fontSize: '24px',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        aria-label="Open Chat"
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '320px',
            maxHeight: '500px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 999,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '12px',
              fontWeight: 'bold',
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            Gemini AI Chat
          </div>
          <div
            style={{
              flex: 1,
              padding: '12px',
              overflowY: 'auto',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '14px',
              background: '#f9f9f9',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '10px',
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: msg.role === 'user' ? '#e0e7ff' : '#e5e7eb',
                    color: '#000',
                    padding: '8px 12px',
                    borderRadius: '16px',
                    maxWidth: '80%',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: '10px',
                border: 'none',
                outline: 'none',
                fontSize: '14px',
              }}
            />
            <button
              onClick={handleSend}
              style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                padding: '0 16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiChat;
