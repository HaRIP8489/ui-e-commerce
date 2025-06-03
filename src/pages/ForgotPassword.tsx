import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Vui lòng nhập gmail đã đăng ký');
      return;
    }

    setMessage('✅ Yêu cầu đã được gửi. Vui lòng kiểm tra hộp thư đến!');
    // Giả lập gửi email
    setTimeout(() => setEmail(''), 2000);
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="login-box text-center p-4 rounded border">
          <h2 className="fw-bold mb-2">Quên mật khẩu</h2>
          <hr className="underline" />

          <p className="text-muted small mb-3">
            Nhập gmail đã đăng ký, mật khẩu mới sẽ gửi vào gmail của bạn trong giây lát
          </p>

          <form onSubmit={handleSubmit} className="text-start mt-3">
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

            {message && <p className="text-success text-center small">{message}</p>}

            <button type="submit" className="btn btn-success w-100 fw-bold py-2">
              Gửi yêu cầu
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

export default ForgotPassword;

