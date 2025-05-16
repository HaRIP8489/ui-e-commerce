import React, {useRef, useState} from 'react';
import Header from "../components/Header"
import camera from  "../assets/images/Camera.png";
import lo from  "../assets/images/location.svg";
import shake from  "../assets/images/handshake.svg";
import cam from  "../assets/images/camera.svg";
import cam1 from  "../assets/images/cam1.jpg";
import cam2 from  "../assets/images/cam2.jpg";
import cam3 from  "../assets/images/cam3.jpg";
import {Link, useNavigate} from "react-router-dom";

const HomePage: React.FC = () => {
    const [show, setShow] = useState(false);
    const toggleMenu = (e: React.MouseEvent) => {
        e.preventDefault(); // nếu dùng <a> thay vì <button>
        setShow((prev) => !prev);
    };
    const closeMenu = () => setShow(false);
    const navigate = useNavigate();

    return (
        <div>
            {/* Header */}
            <Header />
            {/* Banner */}
            <div>
                <img
                    src={camera}
                    alt="Banner"
                    className="img-fluid w-100"
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <div className="position-absolute w-100 h-100 d-flex align-items-center" style={{top: '200px', left: '7px', width: '200px', height: '100px'}}>
                    <div className="container d-flex">
                        <div className="bg-primary text-white p-4 rounded me-4" style={{ width: '300px' }}>
                            <h5 className="fw-bold">Ghi lại khoảnh khắc của bạn</h5>
                            <input type="text" className="form-control my-2" placeholder="Nơi nhận máy ảnh" />
                            <input type="date" className="form-control my-2" placeholder="Ngày bắt đầu" />
                            <input type="date" className="form-control my-2" placeholder="Ngày kết thúc" />
                            <input type="text" className="form-control my-2" placeholder="Họ tên đầy đủ" />
                            <button className="btn btn-success w-100 mt-2 ">Thuê máy ảnh ngay</button>
                        </div>
                        <div className="bg-white p-4 rounded shadow flex-grow-1">
                            <h5 className="fw-bold mb-3">Better Way to Rent Your Perfect Camera</h5>
                            <div className="row text-center">
                                <div className="col">
                                    <p>Chọn cửa hàng nhận máy</p>
                                    <img src={lo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />

                                </div>
                                <div className="col">
                                    <p>Chọn máy ảnh phù hợp nhất</p>
                                    <img src={shake} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                                </div>
                                <div className="col">
                                    <p>Đặt trước máy ảnh</p>
                                    <div className="py-3"></div>
                                    <img src={cam} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary mt-3 ">Đặt trước máy ảnh hoàn hảo của bạn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Cameras */}
            <div className="container my-5">
                <h4 className="text-center mb-4 text-primary">Sản phẩm của chúng tôi</h4>
                <h4 className="text-center mb-4 text-primary">Sản phẩm của chúng tôi</h4>
                <h4 className="text-center mb-4 text-primary">Sản phẩm của chúng tôi</h4>
                <h2 className="text-center mb-4">Máy Ảnh Nổi Bật</h2>
                <div className="row">
                    {[1, 2, 3].map((item) => (
                        <div className="col-md-4 mb-4" key={item}>
                            <div className="card h-100">
                                <img src={cam1} className="card-img-top" alt="Canon EOS R5" />
                                <div className="card-body">
                                    <h5 className="card-title">Canon EOS R5</h5>
                                    <p className="card-text">Canon</p>
                                    <p className="fw-bold">500.000đ/ngày</p>
                                    <button className="btn btn-success w-100" onClick={() => navigate('/cart')}>Thuê ngay</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {[1, 2, 3].map((item) => (
                        <div className="col-md-4 mb-4" key={item}>
                            <div className="card h-100">
                                <img src={cam2} className="card-img-top" alt="Canon EOS R5" />
                                <div className="card-body">
                                    <h5 className="card-title">Canon EOS R5</h5>
                                    <p className="card-text">Canon</p>
                                    <p className="fw-bold">500.000đ/ngày</p>
                                    <button className="btn btn-success w-100">Thuê ngay</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {[1, 2, 3].map((item) => (
                        <div className="col-md-4 mb-4" key={item}>
                            <div className="card h-100">
                                <img src={cam3} className="card-img-top" alt="Canon EOS R5" />
                                <div className="card-body">
                                    <h5 className="card-title">Canon EOS R5</h5>
                                    <p className="card-text">Canon</p>
                                    <p className="fw-bold">500.000đ/ngày</p>
                                    <button className="btn btn-success w-100">Thuê ngay</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer*/}
            {/* Footer */}
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

export default HomePage;
