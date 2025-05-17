import React from 'react';

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
  const handleIncrease = () => {
    console.log('Tăng số lượng:', item.id);
  };

  const handleDecrease = () => {
    console.log('Giảm số lượng:', item.id);
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
        <div className="font-semibold text-lg">{item.name}</div>
        <div className="text-gray-600">{item.price.toLocaleString('vi-VN')} đ/ngày</div>

        <div className="flex items-center mt-2 gap-2">
          <button onClick={handleDecrease} className="px-2 border rounded">-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease} className="px-2 border rounded">+</button>
        </div>
      </div>

      <div className="text-right">
        <button onClick={handleRemove} className="text-red-500 text-lg">✖</button>
      </div>
    </div>
  );
};

export default CartItem;
