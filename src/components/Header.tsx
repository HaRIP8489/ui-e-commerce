import {Box, Link, Typography} from "@mui/material"
import logo from  "../assets/images/logo.png";
import { Link as RouterLink, useLocation } from "react-router-dom";
const HeaderMenu = () => {
    const location = useLocation();
    const pathName = location.pathname.split("/")[1];

    return (
        <Box width={"100%"} className="bg-light shadow-sm rounded-3">
            <Box className="px-3" display="flex" justifyContent={"space-between"} alignItems="center">
                <Link component={RouterLink} to="/" display="flex" alignItems="center" underline="none">
                    <img src={logo} alt="" style={{ width: "100px", height: "auto" }} />
                    <Box>
                        <Typography fontSize={"18px"} fontWeight={500}>EagleCam</Typography>
                        <Typography fontSize={"18px"} fontWeight={500}>Selection 365</Typography>
                    </Box>
                </Link>

                <Box display="flex" alignItems="center" columnGap={10}>
                    <Box display="flex" alignItems="center" columnGap={4} fontSize={"18px"} fontWeight={500} >
                        <Link component={RouterLink} className={`pb-1 text-black text-decoration-none ${pathName === "" ? "border-3 border-bottom border-black" : "border-3"}`} to="/">Trang chủ</Link>
                        <Link component={RouterLink} className={`pb-1 text-black text-decoration-none ${pathName === "shop" ? "border-3 border-bottom border-black" : "border-3"}`} to="/shop">Cửa hàng</Link>
                        <Link component={RouterLink} className={`pb-1 text-black text-decoration-none ${pathName === "blog" ? "border-3 border-bottom border-black" : "border-3"}`} to="/blog">Blog</Link>
                        <Link component={RouterLink} className={`pb-1 text-black text-decoration-none ${pathName === "about" ? "border-3 border-bottom border-black" : "border-3"}`} to="/about">Giới thiệu</Link>
                        <Link component={RouterLink} className={`pb-1 text-black text-decoration-none ${pathName === "contact" ? "border-3 border-bottom border-black" : "border-3"}`} to="/contact">Liên hệ</Link>
                        <Link component={RouterLink} className={`pb-1 text-black text-decoration-none ${pathName === "cart" ? "border-3 border-bottom border-black" : "border-3"}`} to="/cart">Giỏ hàng</Link>
 
                    </Box>
                    <Box display="flex" alignItems="center" columnGap={3} fontSize={"16px"} fontWeight={500}>
                        <Link component={RouterLink} className="text-decoration-none px-3 py-2 rounded-3" to={"/login"}
                              sx={{ color: "white", backgroundColor: "black", "&:hover": { backgroundColor: "#0070f3" } }}
                        >Đăng nhập</Link>
                        <Link component={RouterLink} className=" text-decoration-none px-3 py-2 rounded-3" to={"/register"}
                              sx={{ color: "white", backgroundColor: "black", "&:hover": { backgroundColor: "#0070f3" } }}
                        >Đăng ký</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default HeaderMenu;