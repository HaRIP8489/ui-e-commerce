import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Container, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

const purchasePolicy = [
    'Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.',
    'Sản phẩm còn đủ tem mác, chưa qua sử dụng.',
    'Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống.',
    'Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày trên toàn hệ thống.',
];

// Định nghĩa interface đúng với BE trả về
interface CartItemData {
    id: number;
    productId: number;
    productName: string;
    pricePerDay: number;
    quantity: number;
    image?: string;
    rentStart?: string;
    rentEnd?: string;
}

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItemData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [note, setNote] = useState('');
    const navigate = useNavigate();

    // Lấy giỏ hàng từ BE
    useEffect(() => {
        const fetchCart = async () => {
            try {
                setLoading(true);
                setError('');
                const accessToken = localStorage.getItem('accessToken');
                const res = await axios.get('http://localhost:8080/api/cart', {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
                // Giả sử API trả về mảng cart items trực tiếp. Nếu là res.data.cartItems thì đổi lại cho đúng.
                setCartItems(res.data);
            } catch (err) {
                setError('Không thể tải giỏ hàng. Vui lòng đăng nhập hoặc thử lại.');
            }
            setLoading(false);
        };
        fetchCart();
    }, []);

    // Xóa sản phẩm khỏi giỏ hàng (FE và BE)
    const handleDelete = async (id: number) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            await axios.delete(`http://localhost:8080/api/cart/${id}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setCartItems(prev => prev.filter(item => item.id !== id));
        } catch (err) {
            alert('Không thể xóa sản phẩm. Vui lòng thử lại.');
        }
    };

    // Cập nhật số lượng sản phẩm trong giỏ hàng (FE và BE)
    const handleQuantityChange = async (id: number, quantity: number) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            await axios.put(`http://localhost:8080/api/cart/${id}`, { quantity }, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setCartItems(prev =>
                prev.map(item => (item.id === id ? { ...item, quantity } : item))
            );
        } catch (err) {
            alert('Không thể cập nhật số lượng. Vui lòng thử lại.');
        }
    };

    const handleCheckout = () => {
        // Bạn có thể truyền note sang trang thanh toán nếu cần
        navigate('/checkout', { state: { note } });
    };

    const handleContinueShopping = () => {
        navigate('/shop');
    };

    // Loading và Error UI
    if (loading) {
        return (
            <>
                <Header />
                <Container maxWidth="lg" sx={{ minHeight: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </Container>
                <Footer />
            </>
        );
    }
    if (error) {
        return (
            <>
                <Header />
                <Container maxWidth="lg" sx={{ minHeight: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Alert severity="error">{error}</Alert>
                </Container>
                <Footer />
            </>
        );
    }

    return (
        <Box sx={{ px: 5, py: 3, backgroundColor: '#D0D5DD' }}>
            <Header />
            <Box sx={{ bgcolor: '#f9f9f9', mt: 5, mb: 2 }} className="shadow-sm rounded-3">
                <Container maxWidth="lg">
                    <Typography sx={{ pt: 5 }} variant="h5" align="center" fontWeight={700} gutterBottom>
                        Giỏ hàng của bạn
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary" mb={3}>
                        Có {cartItems.length} sản phẩm trong giỏ hàng
                    </Typography>
                    <Box
                        sx={{
                            height: 4,
                            width: 70,
                            bgcolor: 'black',
                            mx: 'auto',
                            mb: 4,
                            borderRadius: 1,
                        }}
                    />

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                        <Box sx={{ flex: 2 }}>
                            {cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onDelete={handleDelete}
                                    onQuantityChange={handleQuantityChange}
                                />
                            ))}
                            <Box mt={4}>
                                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                                    Ghi chú đơn hàng
                                </Typography>
                                <TextField
                                    multiline
                                    rows={4}
                                    fullWidth
                                    placeholder="Ghi chú"
                                    variant="outlined"
                                    sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                                    value={note}
                                    onChange={e => setNote(e.target.value)}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1, minWidth: 280 }}>
                            <Box mb={4} p={3} bgcolor="white" borderRadius={2} boxShadow={1}>
                                <CartSummary cartItems={cartItems} />
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3, bgcolor: '#E20000', '&:hover': { bgcolor: '#b70000' }, py: 1.5, fontWeight: 600 }}
                                    onClick={handleCheckout}
                                    disabled={cartItems.length === 0}
                                >
                                    Thanh toán
                                </Button>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    mt={1}
                                    sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}
                                    onClick={handleContinueShopping}
                                >
                                    <Box component="span" sx={{ transform: 'rotate(180deg)', color: '#4a90e2' }}>
                                        &#8592;
                                    </Box>
                                    Tiếp tục mua hàng
                                </Typography>
                            </Box>

                            <Box p={3} bgcolor="white" borderRadius={2} boxShadow={1}>
                                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                                    Chính sách mua hàng
                                </Typography>
                                <List dense>
                                    {purchasePolicy.map((line, index) => (
                                        <ListItem key={index} sx={{ py: 0, alignItems: 'flex-start' }}>
                                            <ListItemText
                                                primary={line}
                                                primaryTypographyProps={{ fontSize: 16, color: 'text.secondary', lineHeight: 1.4 }}
                                                sx={{ '&::before': { content: '"→ "', color: 'text.primary' } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default CartPage;
