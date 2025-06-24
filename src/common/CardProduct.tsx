import React, { useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cam1 from "../assets/images/cam3.jpg";

interface Product {
    id: number | string;
    name: string;
    pricePerDay: number;
    soldCount: number;
    image?: string;
}

interface CCardProductsProps {
    product: Product;
}

const CCardProduct: React.FC<CCardProductsProps> = ({ product }) => {
    const navigate = useNavigate();
    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        type: "success" | "error";
    }>({ open: false, message: "", type: "success" });

    // Xử lý thêm vào giỏ hàng
    const handleAddToCart = async () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            setSnackbar({
                open: true,
                message: "Vui lòng đăng nhập để thêm vào giỏ hàng!",
                type: "error",
            });
            setTimeout(() => navigate("/login"), 1000);
            return;
        }

        try {
            // Có thể lấy quantity, rentStart, rentEnd từ form nếu muốn
            await axios.post(
                "http://localhost:8080/api/cart/add",
                {
                    productId: product.id,
                    quantity: 1,
                    rentStart: "2025-07-01", // hoặc lấy từ ngày mặc định/chọn của user
                    rentEnd: "2025-07-03",
                },
                { headers: { Authorization: `Bearer ${accessToken}` } }
            );
            setSnackbar({
                open: true,
                message: "Đã thêm vào giỏ hàng!",
                type: "success",
            });
        } catch (err) {
            setSnackbar({
                open: true,
                message: "Thêm vào giỏ hàng thất bại!",
                type: "error",
            });
        }
    };

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <>
            <Card sx={{ width: "300px", overflow: 'hidden', position: 'relative' }}>
                {/* Nút thêm giỏ hàng ở góc dưới bên trái */}
                <Box
                    sx={{
                        position: "absolute", bottom: 0, left: 0, zIndex: 3, m: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleAddToCart}
                        sx={{
                            backgroundColor: "#0070f3",
                            color: "white",
                            borderRadius: "20px",
                            px: 3,
                            py: 0.5,
                            textTransform: "none",
                            fontWeight: "bold",
                            "&:hover": { backgroundColor: "#0055cc" }
                        }}
                    >
                        Thêm giỏ hàng
                    </Button>
                </Box>
                <CardActionArea
                    sx={{ pt: 3, px: 3, display: "flex", flexDirection: "column", alignItems: "center" }}
                    onClick={handleCardClick}
                >
                    <CardMedia
                        component="img"
                        height="200px"
                        width="200px"
                        image={product.image || cam1}
                        alt={product.name}
                        sx={{ borderRadius: 3, objectFit: "cover" }}
                    />
                    <CardContent sx={{ width: "100%" }}>
                        <Typography variant="subtitle2" fontWeight="bold" noWrap>
                            {product.name}
                        </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                            {/* Giá thuê */}
                            <Typography variant="subtitle1" sx={{ color: "#0070f3", fontWeight: "bold", fontSize: "1.2rem" }}>
                                {product.pricePerDay.toLocaleString()} đ/ngày
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" align="right" sx={{ color: '#0070f3', mt: 1 }}>
                            {product.soldCount} lượt thuê
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* Thông báo snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={1800}
                onClose={() => setSnackbar(s => ({ ...s, open: false }))}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity={snackbar.type} sx={{ width: "100%" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default CCardProduct;
