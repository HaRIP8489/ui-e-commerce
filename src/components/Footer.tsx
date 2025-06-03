import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <Box className="bg-dark text-white  py-4 px-3">
        <Box className="container">
          <Box className="row text-center text-md-start">
            {/* Cột 1: Giới thiệu */}
            <Box className="col-12 col-sm-6 col-md-3 mb-4" display={"flex"} flexDirection="column" alignItems="center" gap={0.5}>
              <Link to="/">
                <img src={logo} alt="Atrium" style={{ width: "100px", height: "auto", filter: 'invert(1)' }} />
              </Link>
              <Typography variant="body2" color="gray">
                Ở một nơi xa xôi, nơi lưu giữ những khoảnh khắc tuyệt vời, chúng tôi mang đến dịch vụ cho thuê máy ảnh và phụ kiện chất lượng, sẵn sàng đồng hành cùng bạn trên mọi hành trình.
              </Typography>
            </Box>

            {/* Cột 2: Liên kết nhanh */}
            <Box className="col-12 col-sm-6 col-md-3 mb-4">
              <Typography variant="h6" fontWeight="bold" gutterBottom>Liên kết nhanh</Typography>
              <Link to="/about" className="d-block text-decoration-none text-white mb-1 ">Giới thiệu</Link>
              <Link to="/products" className="d-block text-decoration-none text-white mb-1">Sản phẩm</Link>
              <Link to="/blog" className="d-block text-decoration-none text-white mb-1">Blog</Link>
              <Link to="/contact" className="d-block text-decoration-none text-white mb-1">Liên hệ</Link>
            </Box>

            {/* Cột 3: Hỗ trợ khách hàng */}
            <Box className="col-12 col-sm-6 col-md-3 mb-4">
              <Typography variant="h6" fontWeight="bold" gutterBottom>Hỗ trợ khách hàng</Typography>
              <Typography variant="body2" color="gray">Hotline: 0909 123 456</Typography>
              <Typography variant="body2" color="gray">support@eaglecam.vn</Typography>
              <Typography variant="body2" color="gray">Địa chỉ: Đại học Nông Lâm Hồ Chí Minh, TP. Thủ Đức, TP. Hồ Chí Minh.</Typography>
            </Box>

            {/* Cột 4: Mạng xã hội */}
            <Box className="col-12 col-sm-6 col-md-3 mb-4 text-center text-md-start">
              <Typography variant="h6" fontWeight="bold" gutterBottom>Kết nối với chúng tôi</Typography>
              <Box>
                <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#1877F2" } }}>
                  <Facebook />
                </IconButton>
                <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#1DA1F2" } }}>
                  <Twitter />
                </IconButton>
                <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#E1306C" } }}>
                  <Instagram />
                </IconButton>
                <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#0077B5" } }}>
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Dòng bản quyền */}
          <Box className="text-center border-top pt-3 mt-3 text-white">
            <small>© {new Date().getFullYear()} EagleCam. All rights reserved</small>
          </Box>
        </Box>
      </Box>
  );
};

export default Footer;