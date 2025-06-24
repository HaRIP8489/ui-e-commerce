import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Toast, ToastContainer, Spinner, Alert } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import imgDefault from '../../assets/images/cam1.jpg';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface ProductDetail {
  id: number | string;
  name: string;
  pricePerDay: number;
  soldCount?: number;
  viewCount?: number;
  status?: string;
  image?: string;
  description?: string;
  model?: string;
  accessories?: string;
  productCondition?: string;
  weight?: number;
  color?: string;
}

const ProductDetailPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        setLoading(true);
        const res = await axios.get(`http://localhost:8080/api/public/products/${id}`);
        const prod = res.data.product;
        const detail = res.data.detail;

        setProduct({
          id: prod.id,
          name: prod.name,
          pricePerDay: prod.pricePerDay ?? prod.price,
          soldCount: prod.soldCount,
          viewCount: prod.viewCount,
          status: prod.status,
          image: prod.image || imgDefault,
          description: detail.description || "",
          model: detail.model,
          accessories: detail.accessories,
          productCondition: detail.productCondition,
          weight: detail.weight,
          color: detail.color,
        });
      } catch (err) {
        setError("Không tìm thấy sản phẩm hoặc lỗi server!");
        setProduct(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    setShowToast(true);
  };

  if (loading) {
    return (
        <>
          <Header />
          <Container className="my-5 d-flex justify-content-center align-items-center" style={{ minHeight: 400 }}>
            <Spinner animation="border" />
          </Container>
          <Footer />
        </>
    );
  }

  if (error || !product) {
    return (
        <>
          <Header />
          <Container className="my-5">
            <Alert variant="danger" className="text-center">{error || "Không tìm thấy sản phẩm!"}</Alert>
          </Container>
          <Footer />
        </>
    );
  }

  return (
      <>
        <Header />
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Card className="shadow-sm p-3">
                <Card.Img
                    variant="top"
                    src={product.image || imgDefault}
                    style={{ padding: "10px", borderRadius: "10px", minHeight: 320, objectFit: "cover" }}
                />
              </Card>
            </Col>
            <Col md={6}>
              <h2 className="mb-3">{product.name}</h2>
              <p><strong>Giá thuê:</strong> {product.pricePerDay?.toLocaleString()}đ/ngày</p>
              <p>
                <strong>Tình trạng:</strong>
                <span style={{
                  color: product.status === "available" ? "green" : "red",
                  marginLeft: 6,
                  fontWeight: 600
                }}>
                {product.status === "available" ? "Còn hàng" : "Hết hàng"}
              </span>
              </p>
              <p><strong>Đã thuê:</strong> {product.soldCount || 0} lượt</p>
              <p><strong>Lượt xem:</strong> {product.viewCount || 0}</p>
              <p><strong>Mô tả:</strong> {product.description || "Chưa có mô tả sản phẩm"}</p>
              <p><strong>Model:</strong> {product.model || "Chưa cập nhật"}</p>
              <p><strong>Phụ kiện đi kèm:</strong> {product.accessories || "Chưa cập nhật"}</p>
              <p><strong>Tình trạng sản phẩm:</strong> {product.productCondition || "Chưa cập nhật"}</p>
              <p><strong>Trọng lượng:</strong> {product.weight ? `${product.weight} kg` : "Chưa cập nhật"}</p>
              <p><strong>Màu sắc:</strong> {product.color || "Chưa cập nhật"}</p>
              <div className="d-flex gap-2">
                <Button variant="dark" onClick={() => {
                  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
                  if (isLoggedIn) {
                    navigate('/checkout', { state: { product } });
                  } else {
                    alert("Vui lòng đăng nhập trước!");
                    navigate('/login');
                  }
                }}>
                  Thuê ngay
                </Button>
                <Button variant="outline-dark" onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </Button>
                <Button variant="outline-secondary" onClick={() => navigate(-1)}>
                  Quay lại
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
