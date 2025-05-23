import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4">Liên hệ với chúng tôi</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Thông tin liên hệ</h5>
            <p><i className="bi bi-geo-alt-fill text-primary me-2"></i> 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
            <p><i className="bi bi-telephone-fill text-primary me-2"></i> 1900 123 456</p>
            <p><i className="bi bi-envelope-fill text-primary me-2"></i> support@eaglecam.vn</p>
            <p><i className="bi bi-globe text-primary me-2"></i> www.eaglecam.vn</p>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Gửi tin nhắn</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Họ tên</label>
                <input type="text" className="form-control" placeholder="Nhập họ tên" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="abc@gmail.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Nội dung</label>
                <textarea className="form-control" rows={4} placeholder="Tin nhắn của bạn..." />
              </div>
              <button type="submit" className="btn btn-primary fw-bold">Gửi tin nhắn</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
