import React from "react";
import {Box, Grid, Typography, TextField, Button} from "@mui/material";
import ProductCard from "../../components/ProductCard";

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
    // Thêm sản phẩm khác
];

const ProductPage = () => {
    return (
        <Box sx={{ padding: 4, maxWidth: 1200, margin: "auto" }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
                Cửa hàng
            </Typography>

            <TextField
                fullWidth
                placeholder="Nhập từ khóa vào đây ..."
                variant="outlined"
                sx={{ mb: 4 }}
            />

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
                                xs: "100%",     // full width on small screens
                                sm: "calc(50% - 12px)", // 2 columns with gap
                                md: "calc(33.333% - 16px)", // 3 columns with gap
                            },
                        }}
                    >
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>

            <Box textAlign="center" mt={4}>
                <Button variant="outlined">Tải thêm ...</Button>
            </Box>
        </Box>
    );
};

export default ProductPage;