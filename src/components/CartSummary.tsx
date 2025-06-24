import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface CartSummaryProps {
  cartItems: {
    id: number;
    productName: string;
    pricePerDay: number;
    quantity: number;
    image?: string;
  }[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.pricePerDay * item.quantity, 0);

  return (
      <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            width: '100%',
            maxWidth: 400,
          }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Thông tin đơn hàng
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="body1">Tổng tiền:</Typography>
          <Typography variant="body1" fontWeight="bold" color="error">
            {totalPrice.toLocaleString('vi-VN')} vnđ
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          Phí vận chuyển sẽ được tính ở trang thanh toán.
          <br />
          Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
        </Typography>
      </Paper>
  );
};

export default CartSummary;
