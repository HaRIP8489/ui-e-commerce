import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Box, Container, Stack, Typography} from "@mui/material";
import about from "../assets/images/about.jpg";


const AboutPage: React.FC = () => {
    return (
        <Box sx={{ px: 5, py: 3, backgroundColor: '#D0D5DD' }}>
            {/*header*/}
            <Header />
            {/*content*/}
            <Container className="my-3">
                <h1 className="text-center fw-bold mb-4">Về EagleCam</h1>
                <Box className=" row col-md-12 col-sm-12 col-xs-12">
                    <Box className="col-md-4 col-sm-12 col-xs-12">
                        <Box component="img" src={about} alt="Banner" sx={{width: '100%', height: '500px', objectFit: 'cover', display: 'block',}} className="shadow-sm rounded-3"/>
                    </Box>
                    <Box className="col-md-8 col-sm-12 col-xs-12">
                        <Stack direction="column" spacing={2} className="mx-3 my-5">
                            <Typography>
                                Chào mừng bạn đến với EagleCam Selection 365!
                            </Typography>
                            <Typography>
                                Chúng tôi tự hào là nền tảng chuyên nghiệp hàng đầu trong lĩnh vực cho thuê máy ảnh và phụ kiện máy ảnh, phục vụ nhu cầu từ cá nhân đam mê nhiếp ảnh đến các đơn vị sản xuất chuyên nghiệp. Với tiêu chí “Chất lượng - Linh hoạt - Tiện lợi”, chúng tôi mang đến cho bạn những thiết bị hiện đại nhất, từ máy ảnh, ống kính đến các phụ kiện hỗ trợ sáng tạo hình ảnh.
                            </Typography>
                            <Typography>
                                Tại EagleCam Selection 365, chúng tôi hiểu rằng mỗi khoảnh khắc đều quý giá. Vì vậy, chúng tôi cam kết cung cấp dịch vụ thuê thiết bị nhanh chóng, thủ tục đơn giản và mức giá cạnh tranh, giúp bạn dễ dàng thực hiện các dự án cá nhân hay thương mại một cách trọn vẹn.
                            </Typography>
                            <Typography>
                                Dù bạn là nhiếp ảnh gia chuyên nghiệp, người sáng tạo nội dung, hay đơn giản chỉ là người yêu thích lưu giữ kỷ niệm, chúng tôi luôn sẵn sàng đồng hành cùng bạn. Cùng EagleCam Selection 365, bạn sẽ luôn có thiết bị tốt nhất để biến ý tưởng thành hiện thực.
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Container>
            <div className="container py-5">
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
            {/*footer*/}
            <Footer />
        </Box>
    // {/*<div>*/}
    // {/*  <Header />*/}
    // {/*  <div className="container py-5">*/}
    // {/*    <h1 className="text-center fw-bold mb-4">Về EagleCam</h1>*/}
    // {/*    <p className="lead text-center text-muted mb-5">*/}
    // {/*      EagleCam mang đến dịch vụ thuê máy ảnh uy tín và chất lượng hàng đầu, phục vụ mọi nhu cầu từ cá nhân đến doanh nghiệp.*/}
    // {/*    </p>*/}
    // {/*    <div className="row text-center">*/}
    // {/*      <div className="col-md-4 mb-4">*/}
    // {/*        <i className="bi bi-camera display-4 text-primary mb-3"></i>*/}
    // {/*        <h5 className="fw-bold">Thiết bị chất lượng</h5>*/}
    // {/*        <p>Chúng tôi kiểm tra kỹ lưỡng từng sản phẩm trước khi giao đến tay khách hàng.</p>*/}
    // {/*      </div>*/}
    // {/*      <div className="col-md-4 mb-4">*/}
    // {/*        <i className="bi bi-truck display-4 text-primary mb-3"></i>*/}
    // {/*        <h5 className="fw-bold">Giao hàng toàn quốc</h5>*/}
    // {/*        <p>Dịch vụ giao nhận nhanh chóng và an toàn, tiết kiệm thời gian của bạn.</p>*/}
    // {/*      </div>*/}
    // {/*      <div className="col-md-4 mb-4">*/}
    // {/*        <i className="bi bi-headset display-4 text-primary mb-3"></i>*/}
    // {/*        <h5 className="fw-bold">Hỗ trợ tận tình</h5>*/}
    // {/*        <p>Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7 qua email, điện thoại và mạng xã hội.</p>*/}
    // {/*      </div>*/}
    // {/*    </div>*/}
    // {/*  </div>*/}
    // {/*  <Footer />*/}
    // {/*</div>*/}
  );
};

export default AboutPage;