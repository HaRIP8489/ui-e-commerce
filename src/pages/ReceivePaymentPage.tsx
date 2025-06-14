import { Container, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReceivePaymentPage = () => {
  return (
    <>
      <Header />
      <Container className="my-5 p-4 rounded-4 shadow" style={{ backgroundColor: "#f8f9fa", maxWidth: 600 }}>
        <h3 className="mb-4 text-center">Nhận thanh toán</h3>
        <Form>
          <Form.Group className="mb-3" controlId="bankName">
            <Form.Label>Tên ngân hàng</Form.Label>
            <Form.Control type="text" placeholder="Nhập tên ngân hàng" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bankNumber">
            <Form.Label>Số tài khoản</Form.Label>
            <Form.Control type="text" placeholder="Nhập số tài khoản" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ownerName">
            <Form.Label>Chủ tài khoản</Form.Label>
            <Form.Control type="text" placeholder="Nhập tên chủ tài khoản" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Cập nhật thông tin thanh toán
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default ReceivePaymentPage;
