import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Vui lòng nhập email');
    } else {
      setError('');
      alert('📧 Đã gửi email đặt lại mật khẩu (mock)');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: 400 }}>
        <h3 className="text-center mb-4">Quên mật khẩu</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Nhập email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger py-2">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Gửi yêu cầu</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/login" className="text-decoration-none">← Quay lại đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
