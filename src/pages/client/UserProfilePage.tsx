import { useState, useEffect } from "react";
import { Container, Form, Button, Tab, Nav } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const UserProfilePage = () => {
  const originalData = {
    fullName: "Nguyễn Văn B",
    email: "user2@gmail.com",
    phone: "0987654321",
    address: "123 Đường ABC, Quận XYZ",
  };

  const [formData, setFormData] = useState(originalData);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const changed = Object.keys(originalData).some(
        (key) => formData[key as keyof typeof formData] !== originalData[key as keyof typeof originalData]
    );
    setIsChanged(changed);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChanged) {
      console.log("Dữ liệu cập nhật:", formData);
      // TODO: Gửi dữ liệu đến DB bằng API (fetch/Axios)
    } else {
      console.log("Không có thay đổi nào");
    }
  };

  return (
      <>
        <Header />
        <Container className="my-5">
          <Tab.Container defaultActiveKey="profile">
            <Nav variant="tabs" className="mb-4">
              <Nav.Item>
                <Nav.Link eventKey="profile">Thông tin tài khoản</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="orders">Đơn thuê</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="profile">
                <h2 className="mb-4 text-center">Thông tin cá nhân</h2>
                <Form onSubmit={handleSubmit} className="border rounded p-4 shadow-sm bg-light">
                  <Form.Group className="mb-3">
                    <Form.Label>Họ tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit" disabled={!isChanged}>
                    Cập nhật
                  </Button>
                </Form>
              </Tab.Pane>

              <Tab.Pane eventKey="orders">
                <h4>Danh sách đơn thuê</h4>
                {/* TODO: Thêm danh sách đơn thuê tại đây */}
                <p>Chưa có đơn thuê nào.</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
        <Footer />
      </>
  );
};

export default UserProfilePage;