import { Container, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const UserProfilePage = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <h2 className="mb-4 text-center">Thông tin cá nhân</h2>
        <Form className="border rounded p-4 shadow-sm bg-light">
          <Form.Group className="mb-3">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control type="text" defaultValue="Nguyễn Văn B" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" defaultValue="user2@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control type="text" defaultValue="0987654321" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control type="text" placeholder="123 Đường ABC, Quận XYZ" />
          </Form.Group>
          <Button variant="dark" type="submit">Cập nhật</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default UserProfilePage;
