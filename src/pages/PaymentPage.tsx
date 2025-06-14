import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PaymentPage = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Thanh toán với:", paymentInfo);
  };

  return (
    <>
      <Header />
      <Container className="py-5 d-flex justify-content-center">
        <Card className="shadow rounded-4" style={{ width: "100%", maxWidth: "500px" }}>
          <Card.Body>
            <h3 className="mb-4 text-center">Thông tin thanh toán</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Số thẻ</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={handleChange}
                  placeholder="Nhập số thẻ"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tên chủ thẻ</Form.Label>
                <Form.Control
                  type="text"
                  name="nameOnCard"
                  value={paymentInfo.nameOnCard}
                  onChange={handleChange}
                  placeholder="Nhập tên trên thẻ"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ngày hết hạn</Form.Label>
                <Form.Control
                  type="text"
                  name="expiry"
                  value={paymentInfo.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="password"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="success" type="submit">
                  Thanh toán
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentPage;
