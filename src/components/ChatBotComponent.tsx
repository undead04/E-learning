import React, { useState,useRef,useEffect } from 'react';
import {  Spinner, Button, Card, Placeholder } from 'react-bootstrap';
import { mockProducts } from '../data/mockProduct';
import { removeVietnameseTones, searchProduct } from '../utils/searchProduct';

const ChatBot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const [suggestions,setSuggestions] = useState<any[]>([])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, `Bạn: ${userMessage}`]);
    setIsLoading(true);

    setTimeout(() => {
      const filtered = searchProduct(input,mockProducts)
      if (filtered.length > 0) {
        setMessages(prev => [
          ...prev,
          `Bot: Tôi đã tìm thấy ${filtered.length} khóa học phù hợp với nhu cầu của bạn. Tên khóa học là
          `
        ]);
        const product:string = filtered.map(item=>item.name).join(',')
        setMessages(prev =>[
          ...prev,
          `Bot: ${product}`
        ])
      } else {
        setMessages(prev => [
          ...prev,
          `Bot: Xin lỗi, hiện tại tôi chưa tìm thấy khóa học phù hợp. Bạn có thể thử từ khóa khác hoặc liên hệ tư vấn viên nhé!`
        ]);
      }
      setIsLoading(false);
      setSuggestions(filtered)
    }, 1200);
    setInput('');
  };

  // Avatar bot
  const botAvatar = (
    <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Bot" style={{width:32, height:32, borderRadius:'50%', background:'#fff', border:'2px solid #eee'}} />
  );
 useEffect(() => {
  if (chatBoxRef.current) {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }
}, [messages, isLoading]);
  // Nút mở/đóng chat
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#584af8,#b983ff)',
          boxShadow: '0 4px 16px rgba(88,74,248,0.18)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        aria-label="Mở chatbot"
      >
        {botAvatar}
      </button>
    );
  }
 
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        width: 300,
        boxShadow: '0 4px 24px rgba(88,74,248,0.18)',
        borderRadius: 16,
        overflow: 'hidden',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg,#584af8,#b983ff)',
        color: '#fff',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          {botAvatar}
          <span style={{fontWeight:600, fontSize:16}}>Chatbot AI tư vấn sản phẩm</span>
        </div>
        <Button
          variant="light"
          style={{ 
            display:'flex',
            maxWidth:32,
            maxHeight:32,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:50
          }}
          onClick={()=>setIsOpen(false)}
          aria-label="Thu nhỏ chatbot"
          
        
        >
          <span style={{fontSize:20, fontWeight:1000, color:'#584af8'}}>&times;</span>
        </Button>
      </div>
      {/* Nội dung chat */}
      <div ref={chatBoxRef} style={{
        background:'#f6f7fb',
        padding:16,
        minHeight:180,
        maxHeight:320,
        overflowY:'auto',
        display:'flex',
        flexDirection:'column',
        gap:8
      }}>
        {messages.length === 0 && (
          <div style={{color:'#888',fontStyle:'italic',textAlign:'center'}}>Hỏi chatbot để được gợi ý khoá học phù hợp!</div>
        )}
        {messages.map((msg, idx) => {
          const isBot = msg.startsWith('Bot:');
          return (
            <div key={idx} style={{
              display:'flex',
              flexDirection: isBot ? 'row' : 'row-reverse',
              alignItems:'flex-end',
              gap:8
            }}>
              {isBot ? botAvatar : null}
              <div style={{
                background: isBot ? '#fff' : 'linear-gradient(90deg,#584af8,#b983ff)',
                color: isBot ? '#222' : '#fff',
                borderRadius: 16,
                padding: '8px 14px',
                maxWidth: 220,
                fontSize: 15,
                boxShadow: isBot ? '0 1px 4px #eee' : 'none',
                wordBreak:'break-word',
              }}>{msg.replace(/^Bot:|^Bạn:/,'')}</div>
            </div>
          );
        })}
        {isLoading && (
          <div className="d-flex align-items-center gap-2 mb-2">
            <Spinner animation="border" size="sm" />
            <span>Bot đang trả lời...</span>
          </div>
        )}
      </div>
      {/* Input */}
      <form onSubmit={handleSubmit} style={{display:'flex',gap:8,padding:12,background:'#fff',borderTop:'1px solid #eee'}}>
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Bạn muốn học gì?"
          disabled={isLoading}
          style={{fontSize:15,borderRadius:8}}
        />
        <Button type="submit" variant="primary" disabled={isLoading || !input.trim()} style={{fontWeight:600}}>
          Gửi
        </Button>
      </form>
    </div>
  );
};

export default ChatBot;
