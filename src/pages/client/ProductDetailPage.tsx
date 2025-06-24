import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Toast, ToastContainer, Spinner, Alert } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import imgDefault from '../../assets/images/cam1.jpg';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  pricePerDay: number;
  soldCount: number;
  viewCount: number;
  quantity: number;
  status: string;
  image?: string;
  // ...các trường khác nếu BE trả về
}

interface ProductDetail {
  id: number;
  product: Product;
  description?: string;
  model?: string;
  accessories?: string;
  productCondition?: string;
  color?: string;
  weight?: number;
  // ...các trường khác nếu BE trả về
}

const ProductDetailPage: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState<"success" | "danger">("success");
  const [product, setProduct] = useState<Product | null>(null);
  const [detail, setDetail] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`http://localhost:8080/api/public/products/${id}`);
        // res.data = { product, detail }
        setProduct(res.data.product);
        setDetail(res.data.detail);
      } catch (err) {
        setError("Không tìm thấy sản phẩm hoặc lỗi server!");
        setProduct(null);
        setDetail(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  // Hàm thêm vào giỏ hàng
  const handleAddToCart = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken || !product) {
      setToastType("danger");
      setToastMsg("Vui lòng đăng nhập để thêm vào giỏ hàng!");
      setShowToast(true);
      setTimeout(() => navigate("/login"), 1200);
      return;
    }
    try {
      await axios.post(
          "http://localhost:8080/api/cart/add",
          {
            productId: product.id,
            quantity: 1,                 // Có thể mở rộng UI để chọn số lượng
            rentStart: "2025-07-01",     // Mặc định hoặc lấy từ user
            rentEnd: "2025-07-03"
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` }
          }
      );
      setToastType("success");
      setToastMsg("Đã thêm vào giỏ hàng!");
      setShowToast(true);
    } catch (err) {
      setToastType("danger");
      setToastMsg("Thêm vào giỏ hàng thất bại!");
      setShowToast(true);
    }
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

  if (error || !product || !detail) {
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
              <p>
                <strong>Giá thuê:</strong> {product.pricePerDay.toLocaleString()}đ/ngày
              </p>
              <p>
                <strong>Đã thuê:</strong> {product.soldCount || 0} lượt
              </p>
              <p>
                <strong>Lượt xem:</strong> {product.viewCount || 0}
              </p>
              <p>
                <strong>Tình trạng:</strong> {product.status === "available" ? "Còn hàng" : "Hết hàng"}
              </p>
              <p>
                <strong>Mô tả:</strong> {detail.description || "Chưa có mô tả sản phẩm"}
              </p>
              <p><strong>Model:</strong> {detail.model || "Chưa cập nhật"}</p>
              <p><strong>Phụ kiện kèm theo:</strong> {detail.accessories || "Chưa cập nhật"}</p>
              <p><strong>Màu sắc:</strong> {detail.color || "Chưa cập nhật"}</p>
              <p><strong>Tình trạng máy:</strong> {detail.productCondition || "Chưa cập nhật"}</p>
              <div className="d-flex gap-2">
                <Button
                    variant="dark"
                    onClick={() => {
                      const isLoggedIn = !!localStorage.getItem("accessToken");
                      if (isLoggedIn) {
                        navigate('/checkout', { state: { product } });
                      } else {
                        setToastType("danger");
                        setToastMsg("Vui lòng đăng nhập trước khi thuê!");
                        setShowToast(true);
                        setTimeout(() => navigate("/login"), 1200);
                      }
                    }}
                >
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
              bg={toastType}
          >
            <Toast.Header>
              <strong className="me-auto">Giỏ hàng</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{toastMsg}</Toast.Body>
          </Toast>
        </ToastContainer>

        <Footer />
      </>
  );
};

export default ProductDetailPage;
