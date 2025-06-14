
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    alert('🎉 Đăng ký thành công!');
    setError('');
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="login-box text-center p-4 rounded border">
          <h2 className="fw-bold mb-2">Đăng ký</h2>
          <hr className="underline" />

          <form onSubmit={handleRegister} className="text-start mt-4">
            <div className="mb-3">
              <label className="form-label fw-bold">Tên người dùng:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nguyễn Văn A"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Gmail:</label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Mật khẩu:</label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="bi bi-lock-fill"></i>
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Nhập lại mật khẩu:</label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="***********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="bi bi-lock-fill"></i>
                </span>
              </div>
            </div>

            {error && <p className="text-danger text-center small">{error}</p>}

            <button type="submit" className="btn btn-success w-100 fw-bold py-2">
              Đăng ký
            </button>

            <div className="mt-4 d-flex justify-content-between small">
              <span className="text-muted">Đã có tài khoản?</span>
              <Link to="/login" className="text-danger fw-bold">
                Đăng nhập tại đây.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

 