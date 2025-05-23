import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4">Về EagleCam</h1>
        <p className="lead text-center text-muted mb-5">
          EagleCam mang đến dịch vụ thuê máy ảnh uy tín và chất lượng hàng đầu, phục vụ mọi nhu cầu từ cá nhân đến doanh nghiệp.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-camera display-4 text-primary mb-3"></i>
            <h5 className="fw-bold">Thiết bị chất lượng</h5>
            <p>Chúng tôi kiểm tra kỹ lưỡng từng sản phẩm trước khi giao đến tay khách hàng.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-truck display-4 text-primary mb-3"></i>
            <h5 className="fw-bold">Giao hàng toàn quốc</h5>
            <p>Dịch vụ giao nhận nhanh chóng và an toàn, tiết kiệm thời gian của bạn.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-headset display-4 text-primary mb-3"></i>
            <h5 className="fw-bold">Hỗ trợ tận tình</h5>
            <p>Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7 qua email, điện thoại và mạng xã hội.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;