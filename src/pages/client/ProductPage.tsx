import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import CCardProduct from "../../common/CardProduct";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllProducts } from "../../api/products";
import cam1 from "../../assets/images/cam1.jpg"; // Ảnh mặc định

interface Product {
    id: number | string;
    name: string;
    pricePerDay: number;
    soldCount: number;
    image?: string;
}

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProducts();
                // Gán image mặc định cho mỗi sản phẩm nếu BE chưa có ảnh
                const mapped = data.map((item: any) => ({
                    ...item,
                    image: cam1,
                }));
                setProducts(mapped);
            } catch (error) {
                // xử lý thông báo lỗi
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // Lọc sản phẩm theo tên
    const filteredProducts = products.filter(p =>
        p.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ backgroundColor: "#f3f4f6" }}>
            <Header />
            <Box sx={{ px: 5, py: 4, maxWidth: "1200px", margin: "auto" }}>
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
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {/* Danh sách sản phẩm */}
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 3,
                            justifyContent: "center",
                        }}
                    >
                        {filteredProducts.length === 0 ? (
                            <Typography>Không tìm thấy sản phẩm phù hợp</Typography>
                        ) : (
                            filteredProducts.map(product => (
                                <CCardProduct key={product.id} product={product} />
                            ))
                        )}
                    </Box>
                )}

                {/* Nút tải thêm: để disabled, khi có phân trang sẽ xử lý sau */}
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
                        disabled
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
