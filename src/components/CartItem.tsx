import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Box display="flex" alignItems="center" gap={2}>
        <img src={item.image} alt={item.name} width={60} height={60} style={{ borderRadius: 4 }} />
        <Box>
          <Typography fontWeight="bold">{item.name}</Typography>
          <Typography color="text.secondary">{item.price.toLocaleString()} vnđ</Typography>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <IconButton size="small" onClick={() => onUpdateQuantity(item.id, -1)}><RemoveIcon fontSize="small" /></IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton size="small" onClick={() => onUpdateQuantity(item.id, 1)}><AddIcon fontSize="small" /></IconButton>
          </Box>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography>{(item.price * item.quantity).toLocaleString()} vnđ</Typography>
        <IconButton onClick={() => onRemove(item.id)}><CloseIcon /></IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
