import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface OrderSummaryProps {
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total }) => {
  return (
    <Box width="100%" mt={4}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Tổng cộng:</Typography>
        <Typography variant="h6" color="error">
          {total.toLocaleString()} vnđ
        </Typography>
      </Box>
      <Button variant="contained" color="error" fullWidth>
        Thanh toán
      </Button>
    </Box>
  );
};

export default OrderSummary;
