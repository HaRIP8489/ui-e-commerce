import { useState } from "react";
import { Container, Row, Col, Button, Card, Toast, ToastContainer } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img from '../../assets/images/cam1.jpg';

const ProductDetailPage = () => {
  const [showToast, setShowToast] = useState(false);

  const product = {
    id: 1,
    name: "Canon EOS R6",
    price: 300000,
    description: "Máy ảnh Canon EOS R6 chất lượng cao, phù hợp cho chụp ảnh chuyên nghiệp và quay phim 4K.",
    specs: [
      "Cảm biến Full-Frame CMOS",
      "ISO lên đến 102400",
      "Quay video 4K 60fps",
      "Kết nối Wi-Fi, Bluetooth"
    ],
    stock: "Còn hàng"
  };

  const handleAddToCart = () => {
    // Gửi dữ liệu đến DB (ví dụ: gọi API hoặc lưu vào localStorage)
    console.log("Đã thêm vào giỏ hàng:", product);

    // Hiện thông báo
    setShowToast(true);
  };

  return (
      <>
        <Header />
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Card className="shadow-sm p-3"> {/* padding cho ảnh */}
                <Card.Img
                    variant="top"
                    src={img}
                    style={{ padding: "10px", borderRadius: "10px" }}
                />
              </Card>
            </Col>
            <Col md={6}>
              <h2 className="mb-3">{product.name}</h2>
              <p><strong>Giá thuê:</strong> {product.price.toLocaleString()}đ/ngày</p>
              <p><strong>Tình trạng:</strong> {product.stock}</p>
              <p><strong>Mô tả:</strong> {product.description}</p>
              <p><strong>Thông số kỹ thuật:</strong></p>
              <ul>
                {product.specs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="d-flex gap-2">
                <Button variant="dark">Thuê ngay</Button>
                <Button variant="outline-dark" onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Thông báo thêm giỏ hàng */}
        <ToastContainer position="bottom-end" className="p-3">
          <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={2000}
              autohide
              bg="success"
          >
            <Toast.Header>
              <strong className="me-auto">Giỏ hàng</strong>
            </Toast.Header>
            <Toast.Body className="text-white">Đã thêm {product.name} vào giỏ hàng!</Toast.Body>
          </Toast>
        </ToastContainer>

        <Footer />
      </>
  );
};

export default ProductDetailPage;