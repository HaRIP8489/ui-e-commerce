import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button
} from "@mui/material";
import ProductCard from "../components/ProductCard";

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
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", textDecoration: "underline" }}>
        Cửa hàng
      </Typography>

      <TextField
        fullWidth
        placeholder="Nhập từ khóa vào đây ..."
        variant="outlined"
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button variant="outlined">Tải thêm ...</Button>
      </Box>
    </Box>
  );
};

export default ProductPage;
