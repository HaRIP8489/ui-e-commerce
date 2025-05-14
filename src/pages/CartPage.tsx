import React from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

const cartItems = [
  {
    id: 1,
    name: 'Body canon EOS 5D Mark IV',
    price: 450000,
    quantity: 1,
    image: '/images/canon-5d.jpg',
  },
  {
    id: 2,
    name: 'Body máy ảnh Sony A6400',
    price: 500000,
    quantity: 1,
    image: '/images/sony-a6400.jpg',
  }
];

const CartPage: React.FC = () => {
  return (
    <div className="cart-page container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-2">Giỏ hàng của bạn</h1>
      <p className="text-center text-gray-600 mb-6">Có {cartItems.length} sản phẩm trong giỏ hàng</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Danh sách sản phẩm (2/3 chiều rộng) */}
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Ghi chú đơn hàng */}
          <div className="order-note mt-8">
            <label htmlFor="note" className="block font-semibold mb-2">Ghi chú đơn hàng</label>
            <textarea
              id="note"
              rows={4}
              placeholder="Ghi chú"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Thông tin đơn hàng (1/3 chiều rộng) */}
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
