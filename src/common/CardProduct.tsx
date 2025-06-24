import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

const CCardProduct = (props: CCardProductsProps) => {
    const navigate = useNavigate();
    const { product } = props;

    const handleRent = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
            navigate("/checkout", { state: { product } });
        } else {
            alert("⚠️ Bạn cần đăng nhập để thuê sản phẩm!");
            navigate("/login");
        }
    };

    return (
        <Card sx={{ width: "300px", overflow: 'hidden', position: 'relative' }}>
            {/* Nút thuê góc trái dưới */}
            <Box
                sx={{
                    position: "absolute", bottom: 0, left: 0, zIndex: 3, m: 2,
                }}
            >
                <Button
                    variant="contained"
                    size="small"
                    onClick={handleRent}
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
            <CardActionArea sx={{ pt: 3, px: 3, display: "flex", flexDirection: "column", alignItems: "center" }}
                            onClick={() => navigate(`/product/${product.id}`)}
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
                        {/* Có thể thêm giảm giá ở đây nếu sau này có */}
                    </Box>
                    <Typography variant="subtitle2" align="right" sx={{ color: '#0070f3', mt: 1 }}>
                        {product.soldCount} lượt thuê
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CCardProduct;
