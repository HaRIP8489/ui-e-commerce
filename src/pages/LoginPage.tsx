
///////

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@camerarent.com' && password === '123456') {
      alert('🎉 Đăng nhập thành công!');
    } else {
      setError('Sai email hoặc mật khẩu');
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h2 style={{ textAlign: 'center' }}>🎥 CameraRent</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={styles.input}
            />
            {error && <p style={styles.error}>{error}</p>}
            <button type="submit" style={styles.button}>Đăng nhập</button>
          </form>
          <div style={styles.linkBox}>
            <Link to="/forgot-password">Quên mật khẩu?</Link>
            <Link to="/register">Chưa có tài khoản?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const backgroundImage = "url('https://images.unsplash.com/photo-1508779018996-3a9a53a74d87?auto=format&fit=crop&w=1950&q=80')";

const styles: { [key: string]: React.CSSProperties } = {
  bg: {
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 360,
    padding: 30,
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: 12,
    background: '#1e90ff',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
  linkBox: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14,
  },
};

export default Login;

