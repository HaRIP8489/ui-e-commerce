// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
