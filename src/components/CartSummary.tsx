import React from 'react';

interface CartSummaryProps {
  cartItems: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-summary border p-4 rounded shadow-md w-full max-w-md">
      <h3 className="text-xl font-bold mb-4">Thông tin đơn hàng</h3>

      <div className="flex justify-between mb-4">
        <span>Tổng tiền:</span>
        <span className="font-bold text-red-600">{totalPrice.toLocaleString('vi-VN')} vnđ</span>
      </div>

      <div className="text-sm text-gray-600 mb-4">
        Phí vận chuyển sẽ được tính ở trang thanh toán.
        <br />
        Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
      </div>


    </div>
  );
};

export default CartSummary;
