import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Vui lòng nhập email');
    } else {
      alert('📧 Đã gửi email đặt lại mật khẩu (mock)');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Quên mật khẩu</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Gửi yêu cầu</button>
        </form>
        <p style={styles.link as React.CSSProperties}><Link to="/login">← Quay lại đăng nhập</Link></p>
      </div>
    </div>
  );
};

const styles = {    
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(https://example.com/your-background-image.jpg)',
        backgroundSize: 'cover',
    },
    card: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '4px',
        border: 'none',
    },
    error: {
        color: 'red',
    },
    link: {
        textAlign: 'center',
    },
    };

export default ForgotPassword;

