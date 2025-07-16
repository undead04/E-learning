import React, { useState } from 'react';
import { Card, Placeholder, Spinner } from 'react-bootstrap';
import { mockProducts } from '../data/mockProduct';

const ChatBot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<typeof mockProducts>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, `Bạn: ${userMessage}`]);
    setIsLoading(true);

    // Giả lập bot "nghĩ" 1.2s
    setTimeout(() => {
      // Phân tích từ khóa đơn giản (mock logic AI)
      const lower = userMessage.toLowerCase();
      const filtered = mockProducts.filter(p => {
        const name = p.name.toLowerCase();
        return (
          (lower.includes('tiếng anh') && name.includes('tiếng anh')) ||
          (lower.includes('mỹ') && name.includes('mỹ')) ||
          (lower.includes('lập trình') && name.includes('lập trình')) ||
          (lower.includes('trẻ em') && name.includes('trẻ em'))
        );
      });

      if (filtered.length > 0) {
        setMessages(prev => [
          ...prev,
          `Bot: Tôi đã tìm thấy ${filtered.length} khóa học phù hợp với nhu cầu của bạn. Bạn có muốn xem chi tiết không?`
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          `Bot: Xin lỗi, hiện tại tôi chưa tìm thấy khóa học phù hợp. Bạn có thể thử từ khóa khác hoặc liên hệ tư vấn viên nhé!`
        ]);
      }
      setSuggestions(filtered);
      setIsLoading(false);
    }, 1200);
    setInput('');
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white" style={{ maxWidth: 600, margin: '0 auto',position:"fixed",bottom:20,right:20,zIndex:99 }}>
      <h4 className="mb-1 text-primary">Chatbot AI tư vấn sản phẩm</h4>
      <div className="mb-3 text-muted" style={{ fontSize: 14 }}>Hỏi chatbot để được gợi ý khóa học phù hợp với bạn!</div>
      <div className="mb-3" style={{ maxHeight: 200, overflowY: 'auto', border: '1px solid #ddd', padding: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 4 }}>{msg}</div>
        ))}
        {isLoading && (
          <div className="d-flex align-items-center gap-2 mb-2">
            <Spinner animation="border" size="sm" />
            <span>Bot đang trả lời...</span>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Bạn muốn học gì?"
          disabled={isLoading}
        />
        <button className="btn btn-primary" type="submit" disabled={isLoading}>Gửi</button>
      </form>

      {/* Skeleton loading cho phần gợi ý */}
      {isLoading && (
        <div className="mt-4">
          <h6>Gợi ý của Chatbot:</h6>
          <div className="row">
            {[1, 2].map(i => (
              <div className="col-md-6 mb-3" key={i}>
                <Card className="h-100">
                  <Placeholder as={Card.Img} animation="wave" style={{ height: 120, background: '#eee' }} />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="wave" xs={6} />
                    <Placeholder as={Card.Text} animation="wave" xs={8} />
                    <Placeholder as="div" animation="wave" xs={4} />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isLoading && suggestions.length > 0 && (
        <div className="mt-4">
          <h6>Gợi ý của Chatbot:</h6>
          <div className="row">
            {suggestions.map((p, idx) => (
              <div className="col-md-6 mb-3" key={idx}>
                <Card className="h-100">
                  <Card.Img variant="top" src={p.image} style={{ height: 120, objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <div><strong>{p.price.toLocaleString()} VND</strong></div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
