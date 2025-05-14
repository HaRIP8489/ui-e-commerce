import React from 'react';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

const cartItems = [
  {
    id: 1,
    name: 'Body canon EOS 5D Mark IV',
    price: 450000,
    quantity: 1,
    image: '/images/canon-5d.jpg'
  },
  {
    id: 2,
    name: 'Body máy ảnh Sony A6400',
    price: 500000,
    quantity: 1,
    image: '/images/sony-a6400.jpg'
  }
];

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">Giỏ hàng của bạn</h2>
      <p className="mb-6 text-gray-600">Có {cartItems.length} sản phẩm trong giỏ hàng</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;
