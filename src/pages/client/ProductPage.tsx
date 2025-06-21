import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Danh sách sản phẩm mẫu
const products = [
    {
        name: "Sony FX3 Full-Frame Cinema Camera",
        price: 1000000,
        image: "https://link_to_image",
        type: "Máy ảnh",
        rating: 5
    },
    {
        name: "Sony Alpha A7 IV",
        price: 700000,
        image: "https://link_to_image",
        type: "Máy ảnh",
        rating: 5
    },
    {
        name: "Sony Alpha A7 III",
        price: 550000,
        image: "https://link_to_image",
        type: "Máy ảnh",
        rating: 5
    },
    // Có thể thêm sản phẩm khác ở đây
];

const ProductPage = () => {
    return (
        <Box sx={{ backgroundColor: "#f3f4f6" }}>
            <Header />

            <Box sx={{ px: 5, py: 4, maxWidth: "1200px", margin: "auto" }}>
                {/* Tiêu đề */}
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#0070f3", mb: 4 }}
                >
                    Sản phẩm
                </Typography>

                {/* Thanh tìm kiếm */}
                <TextField
                    fullWidth
                    placeholder="Tìm kiếm sản phẩm..."
                    variant="outlined"
                    sx={{ mb: 4, backgroundColor: "white", borderRadius: 1 }}
                />

                {/* Danh sách sản phẩm */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 3,
                        justifyContent: "center",
                    }}
                >
                    {products.map((product, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {
                                    xs: "100%",
                                    sm: "calc(50% - 12px)",
                                    md: "calc(33.333% - 16px)",
                                },
                            }}
                        >
                            <ProductCard product={product} />
                        </Box>
                    ))}
                </Box>

                {/* Nút tải thêm */}
                <Box textAlign="center" mt={6}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#0070f3",
                            color: "#0070f3",
                            "&:hover": {
                                backgroundColor: "#0070f3",
                                color: "white"
                            }
                        }}
                    >
                        Tải thêm ...
                    </Button>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default ProductPage;
