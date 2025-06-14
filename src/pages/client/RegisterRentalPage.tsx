import { Container, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RegisterRentalPage = () => {
  return (
    <>
      <Header />
      <Container className="my-5 p-4 rounded-4 shadow" style={{ backgroundColor: "#f8f9fa", maxWidth: 600 }}>
        <h3 className="mb-4 text-center">Đăng ký cho thuê thiết bị</h3>
        <Form>
          <Form.Group className="mb-3" controlId="cameraName">
            <Form.Label>Tên thiết bị</Form.Label>
            <Form.Control type="text" placeholder="Ví dụ: Canon EOS R5" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Nhập mô tả chi tiết" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Giá cho thuê (VNĐ/ngày)</Form.Label>
            <Form.Control type="number" placeholder="Ví dụ: 200000" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Ảnh thiết bị</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Đăng ký cho thuê
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterRentalPage;
