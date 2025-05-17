import React, { useState } from 'react';
import QuantityControl from './QuantityControl';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<{ item: CartItemProps['item'] }> = ({ item }) => {
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
    <div className="cart-item flex items-start gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
        style={{ maxWidth: '96px', maxHeight: '96px', objectFit: 'cover' }}
      />

      <div className="flex-1">
        <div className="font-semibold text-3xl">{item.name}</div>
        <div className="text-gray-600 text-3xl">
          {item.price.toLocaleString('vi-VN')} đ/ngày
        </div>

        <div className="flex items-center mt-2 gap-2">
          <QuantityControl
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
      </div>

      <div className="text-right">
        <button onClick={handleRemove} className="absolute top-4 right-4 text-red-500 text-3xl font-normal">x</button>
      </div>
    </div>
  );
};

export default CartItem;
