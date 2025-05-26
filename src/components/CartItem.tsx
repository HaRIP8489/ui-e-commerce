import React, { useState } from 'react';
import SelectQuantity from '../common/SelectQuantity';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
  onDelete?: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onDelete }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleRemove = () => {
    console.log('Xóa sản phẩm:', item.id);
  };

  return (
    <Box
      display="flex"
      gap={2}
      py={2}
      borderBottom="1px solid #ccc"
      position="relative"
    >
      <Avatar
        src={item.image}
        alt={item.name}
        variant="rounded"
        sx={{ width: 96, height: 96 }}
      />

      <Box flex={1}>
        <Typography variant="h6" sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
          {item.name}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: '1.25rem' }}>
          {item.price.toLocaleString('vi-VN')} đ/ngày
        </Typography>

        <Box display="flex" alignItems="center" mt={1} gap={1}>
          <SelectQuantity quantity={quantity} onChange={setQuantity}/>
        </Box>
      </Box>

      <IconButton
          sx={{ color: 'black', '&:hover': { color: 'error.main' } }}
          onClick={() => onDelete?.(item.id)}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
