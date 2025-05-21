import React, { useState } from 'react';

const CheckoutPage = () => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fullName, setFullName] = useState('');

  const handleCheckout = () => {
    alert(`Cảm ơn ${fullName}, bạn đã đặt máy thành công!`);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Trang thanh toán</h2>

      <div style={{ marginTop: "1rem" }}>
        <p><strong>Máy ảnh đã chọn:</strong> Sony Alpha a6400</p>
        <p><strong>Giá thuê:</strong> 500.000đ / ngày</p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <label>Địa điểm nhận máy ảnh:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Nhập địa điểm"
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
        />

        <label style={{ marginTop: "1rem", display: "block" }}>Ngày bắt đầu:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />

        <label style={{ marginTop: "1rem", display: "block" }}>Ngày kết thúc:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />

        <label style={{ marginTop: "1rem", display: "block" }}>Họ tên đầy đủ:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Họ tên của bạn"
          style={{ width: "100%", padding: "0.5rem" }}
        />

        <button
          onClick={handleCheckout}
          style={{
            marginTop: "2rem",
            width: "100%",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "0.75rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Xác nhận thuê máy ảnh
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
