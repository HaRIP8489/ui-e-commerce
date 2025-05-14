

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !password) {
      setError('Vui lòng nhập đầy đủ thông tin');
    } else {
      setError('');
      alert('✅ Đăng ký thành công!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: 400 }}>
        <h3 className="text-center mb-4">Tạo tài khoản</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Họ tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger py-2">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Đăng ký</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/login" className="text-decoration-none">← Quay lại đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
