import React, { useState, useEffect, useRef } from "react";
import { Box, Button, IconButton, Link } from "@mui/material";
import logo from "../assets/images/logo.png";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ImageNoData from "../assets/images/no-avt.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "@mui/icons-material";
import { useUser } from "../context/UserContext";

const NAV_LINKS = [
    { to: "/home", label: "Trang chủ", match: "home" },
    { to: "/shop", label: "Sản phẩm", match: "shop", icon: <KeyboardArrowDownIcon fontSize="small" /> },
    { to: "/blog", label: "Blog", match: "blog" },
    { to: "/about", label: "Giới thiệu", match: "about" },
    { to: "/contact", label: "Liên hệ", match: "contact" },
    { to: "/cart", label: "Giỏ hàng", match: "cart" },
];

const Header: React.FC = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname.split("/")[1];
    const [isVisible, setIsVisible] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        if (!isVisible) return;
        function handleClick(event: MouseEvent) {
            if (anchorRef.current && !anchorRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [isVisible]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setUser(null); // Cập nhật context
        navigate("/");
    };

    const isLogin = !!user;

    return (
        <Box width="100%" sx={{ bgcolor: "background.paper", boxShadow: 1, borderRadius: 3 }}>
            <Box px={3} display="flex" justifyContent="space-between" alignItems="center">
                <Link component={RouterLink} to="/home" sx={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} alt="Logo" style={{ width: 100, height: "auto" }} />
                </Link>
                <Box display="flex" alignItems="center" columnGap={4} fontSize={18} fontWeight={500}>
                    {NAV_LINKS.map(({ to, label, match, icon }) => (
                        <Link
                            key={to}
                            component={RouterLink}
                            to={to}
                            underline="none"
                            sx={{
                                color: "text.primary",
                                borderBottom: pathName === match ? "3px solid #000" : "3px solid transparent",
                                pb: 1,
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 500,
                                transition: "border-bottom 0.2s",
                                "&:hover": { color: "primary.main" },
                            }}
                        >
                            {label} {icon}
                        </Link>
                    ))}
                </Box>

                <Box position="relative">
                    {!isLogin ? (
                        <Box display="flex" alignItems="center" columnGap={2} fontSize={16} fontWeight={500}>
                            <Link
                                component={RouterLink}
                                to="/login"
                                underline="none"
                                sx={{
                                    px: 3, py: 1.2, borderRadius: 2,
                                    color: "#fff", backgroundColor: "#111",
                                    fontWeight: 600,
                                    "&:hover": { backgroundColor: "#0070f3" },
                                }}
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/register"
                                underline="none"
                                sx={{
                                    px: 3, py: 1.2, borderRadius: 2,
                                    color: "#fff", backgroundColor: "#111",
                                    fontWeight: 600,
                                    "&:hover": { backgroundColor: "#0070f3" },
                                }}
                            >
                                Đăng ký
                            </Link>
                        </Box>
                    ) : (
                        <Box display="flex" alignItems="center" columnGap={2}>
                            <Box
                                ref={anchorRef}
                                sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                                onClick={() => setIsVisible((v) => !v)}
                            >
                                <img
                                    src={user?.profile.profilePicture || ImageNoData}
                                    onError={e => ((e.target as HTMLImageElement).src = ImageNoData)}
                                    alt="avatar"
                                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                                />
                            </Box>
                            <AnimatePresence>
                                {isVisible && (
                                    <motion.div
                                        key="dropdown"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.18 }}
                                        style={{
                                            position: "absolute",
                                            top: 56,
                                            right: 0,
                                            minWidth: 180,
                                            backgroundColor: "#fff",
                                            borderRadius: 12,
                                            boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
                                            zIndex: 1200,
                                            padding: 8,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 4,
                                        }}
                                    >
                                        <Button
                                            sx={{ fontSize: 14, py: 1, color: "#111", textTransform: "none", justifyContent: "flex-start" }}
                                            onClick={() => { handleLogout(); setIsVisible(false); }}
                                        >
                                            Đăng xuất
                                        </Button>
                                        <Button
                                            sx={{ fontSize: 14, py: 1, color: "#111", textTransform: "none", justifyContent: "flex-start" }}
                                            component={RouterLink}
                                            to="/profile"
                                            onClick={() => setIsVisible(false)}
                                        >
                                            Quản lý Trang cá nhân
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
