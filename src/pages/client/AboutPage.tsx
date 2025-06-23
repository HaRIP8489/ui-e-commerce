import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Container, Stack, Typography } from "@mui/material";
import about from "../../assets/images/about.jpg";

const AboutPage: React.FC = () => {
    return (
        <Box sx={{ px: 5, py: 3, backgroundColor: '#D0D5DD' }}>
            {/* Header */}
            <Header />

            {/* Content */}
            <Container className="my-3">
                <h1 className="text-center fw-bold mb-4">Về EagleCam</h1>
                <Box className="row col-12">
                    {/* Ảnh */}
                    <Box className="col-md-4 col-sm-12" sx={{ height: '500px' }}>
                        <Box
                            component="img"
                            src={about}
                            alt="Banner"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                            className="shadow-sm rounded-3"
                        />
                    </Box>

                    {/* Nội dung */}
                    <Box className="col-md-8 col-sm-12">
                        <Stack
                            direction="column"
                            spacing={2}
                            sx={{ height: '100%', justifyContent: 'center', px: 3 }}
                        >
                            <Typography variant="h6">
                                Chào mừng bạn đến với <strong>EagleCam Selection 365</strong>!
                            </Typography>
                            <Typography fontSize="1.1rem">
                                Chúng tôi tự hào là nền tảng chuyên nghiệp hàng đầu trong lĩnh vực cho thuê máy ảnh và phụ kiện máy ảnh,
                                phục vụ nhu cầu từ cá nhân đam mê nhiếp ảnh đến các đơn vị sản xuất chuyên nghiệp.
                            </Typography>
                            <Typography fontSize="1.1rem">
                                Với tiêu chí <em>“Chất lượng - Linh hoạt - Tiện lợi”</em>, chúng tôi mang đến cho bạn những thiết bị hiện đại nhất,
                                từ máy ảnh, ống kính đến các phụ kiện hỗ trợ sáng tạo hình ảnh.
                            </Typography>
                            <Typography fontSize="1.1rem">
                                Dù bạn là nhiếp ảnh gia chuyên nghiệp, người sáng tạo nội dung,
                                hay đơn giản chỉ là người yêu thích lưu giữ kỷ niệm, chúng tôi luôn sẵn sàng đồng hành cùng bạn.
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Container>

            {/* Ưu điểm */}
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

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default AboutPage;