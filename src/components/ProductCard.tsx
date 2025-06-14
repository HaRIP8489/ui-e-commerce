import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Rating,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Định nghĩa kiểu dữ liệu cho sản phẩm
export interface Product {
    name: string;
    price: number;
    image: string;
    type: string;
    rating: number;
}

interface ProductCardProps {
    product: Product;
}

const formatCurrency = (value: number): string =>
    value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card sx={{ position: "relative", paddingBottom: 2 }}>
            <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "contain", padding: 2 }}
            />
            <IconButton
                color="primary"
                sx={{ position: "absolute", top: 8, right: 8 }}
            >
                <ShoppingCartIcon />
            </IconButton>
            <CardContent>
                <Typography variant="h6" color="error" fontWeight="bold">
                    {formatCurrency(product.price)}/ngày
                </Typography>
                <Typography variant="body1">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.type}
                </Typography>
                <Rating value={product.rating} readOnly />
            </CardContent>
        </Card>
    );
};

export default ProductCard;