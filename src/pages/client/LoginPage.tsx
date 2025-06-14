import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

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
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="login-box text-center p-4 rounded border">
          <h2 className="fw-bold mb-2">Đăng nhập</h2>
          <hr className="underline" />
          <form onSubmit={handleLogin} className="text-start mt-4">
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
            <div className="mb-2">
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

            <div className="text-end mb-3">
              <Link to="/forgot-password" className="text-danger" style={{ fontSize: 13 }}>
                Quên mật khẩu.
              </Link>
            </div>

            {error && <p className="text-danger text-center small">{error}</p>}

            <button type="submit" className="btn btn-success w-100 fw-bold py-2">
              Đăng nhập
            </button>

            <div className="mt-4 d-flex justify-content-between small">
              <Link to="/register" className="text-primary">
                Chưa có tài khoản ?
              </Link>
              <Link to="/register" className="text-danger">
                Đăng ký tại đây.
              </Link>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-light pt-5 pb-3 mt-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <h5 className="fw-bold">EagleCam</h5>
              <p>Giải pháp thuê máy ảnh tiện lợi và nhanh chóng cho mọi nhiếp ảnh gia.</p>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">Dịch vụ</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none text-dark">Thuê máy ảnh</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Phụ kiện</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Combo khuyến mãi</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">Hỗ trợ</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none text-dark">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Chính sách bảo mật</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">Liên hệ</h6>
              <p>Email: support@eaglecam.vn</p>
              <p>Hotline: 1900 123 456</p>
              <p>Địa chỉ: 123 Nguyễn Văn Cừ, TP.HCM</p>
            </div>
          </div>
          <div className="text-center mt-4 text-muted">
            &copy; {new Date().getFullYear()} EagleCam. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;