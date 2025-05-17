import React from 'react';
import { Box, Typography, Grid, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

const cartItems = [
  {
    id: 1,
    name: 'Body canon EOS 5D Mark IV',
    price: 450000,
    quantity: 1,
    image: '/images/canon-eos-5d-mark-iv.jpg',
  },
  {
    id: 2,
    name: 'Body máy ảnh Sony A6400',
    price: 500000,
    quantity: 1,
    image: '/images/sony-a6400.jpg',
  }
];

const purchasePolicy = [
  'Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.',
  'Sản phẩm còn đủ tem mác, chưa qua sử dụng.',
  'Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống.',
  'Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày trên toàn hệ thống.'
];

const CartPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3, bgcolor: '#f9f9f9' }}>
      {/* Header */}
      <Typography variant="h5" align="center" fontWeight={700} gutterBottom>
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

      <Grid container spacing={4}>
        {/* Left: Cart Items + Ghi chú */}
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
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
            />
          </Box>
        </Grid>

        {/* Right: Summary + Chính sách */}
        <Grid item xs={12} md={4} display="flex" flexDirection="column" justifyContent="space-between">
          <Box mb={4} p={3} bgcolor="white" borderRadius={1} boxShadow={1}>
            <CartSummary cartItems={cartItems} />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                bgcolor: '#E20000',
                '&:hover': {
                  bgcolor: '#b70000',
                },
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Thanh toán
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              mt={1}
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}
            >
              <Box component="span" sx={{ transform: 'rotate(180deg)', color: '#4a90e2' }}>
                &#8592;
              </Box>
              Tiếp tục mua hàng
            </Typography>
          </Box>

          <Box p={3} bgcolor="white" borderRadius={1} boxShadow={1}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Chính sách mua hàng
            </Typography>
            <List dense>
              {purchasePolicy.map((line, index) => (
                <ListItem key={index} sx={{ py: 0, alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={line}
                    primaryTypographyProps={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.4 }}
                    sx={{ '&::before': { content: '"→ "', color: 'text.primary' } }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
