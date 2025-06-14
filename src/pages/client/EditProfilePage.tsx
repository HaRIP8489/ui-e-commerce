import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "Nguyễn Văn A",
    email: "user@gmail.com",
    phone: "0123456789",
    address: "123 Đường ABC, Quận 1, TP.HCM",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lưu thông tin:", formData);
  };

  return (
    <>
      <Header />

      <Container className="py-5 d-flex justify-content-center">
        <Card style={{ width: "100%", maxWidth: "600px", borderRadius: "16px" }} className="shadow">
          <Card.Body>
            <h3 className="mb-4 text-center">Chỉnh sửa thông tin</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Họ tên</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ tên"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ"
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="dark" type="submit">
                  Lưu thay đổi
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

export default EditProfilePage;
