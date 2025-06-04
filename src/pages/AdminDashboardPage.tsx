import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminDashboardPage = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <h2 className="mb-4 text-center">Trang quản trị Admin</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Quản lý người dùng</Card.Title>
                <Card.Text>Thêm, sửa, xóa tài khoản người dùng.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Quản lý sản phẩm</Card.Title>
                <Card.Text>Quản lý thông tin máy ảnh và thiết bị cho thuê.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Quản lý đơn thuê</Card.Title>
                <Card.Text>Xem trạng thái, xác nhận và hủy đơn thuê.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdminDashboardPage;
