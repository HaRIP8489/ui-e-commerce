import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@camerarent.com' && password === '123456') {
      alert('🎉 Đăng nhập thành công!');
      setError('');
    } else {
      setError('❌ Sai email hoặc mật khẩu');
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.overlay}>
        <div className="card p-4 shadow" style={{ width: '100%', maxWidth: 400 }}>
          <h3 className="text-center mb-4">🎥 CameraRent</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="alert alert-danger py-2">{error}</div>}
            <button type="submit" className="btn btn-primary w-100">
              Đăng nhập
            </button>
          </form>
          <div className="d-flex justify-content-between mt-3">
            <Link to="/forgot-password" className="text-decoration-none">
              Quên mật khẩu?
            </Link>
            <Link to="/register" className="text-decoration-none">
              Chưa có tài khoản?
            </Link>
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
};

export default Login;
