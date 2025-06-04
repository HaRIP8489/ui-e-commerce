import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/500x300?text=Hình+ảnh+máy+ảnh"
              />
            </Card>
          </Col>
          <Col md={6}>
            <h2 className="mb-3">Canon EOS R6</h2>
            <p><strong>Giá thuê:</strong> 300.000đ/ngày</p>
            <p><strong>Tình trạng:</strong> Còn hàng</p>
            <p><strong>Mô tả:</strong> Máy ảnh Canon EOS R6 chất lượng cao, phù hợp cho chụp ảnh chuyên nghiệp và quay phim 4K.</p>
            <p><strong>Thông số kỹ thuật:</strong></p>
            <ul>
              <li>Cảm biến Full-Frame CMOS</li>
              <li>ISO lên đến 102400</li>
              <li>Quay video 4K 60fps</li>
              <li>Kết nối Wi-Fi, Bluetooth</li>
            </ul>
            <Button variant="dark">Thuê ngay</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
