import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Typography, CircularProgress, Divider } from "@mui/material";
import { Container, Table, Card } from "react-bootstrap";

// Kiểu dữ liệu đơn hàng tạm thời
interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

interface Order {
    id: number;
    createdAt: string;
    customerName: string;
    status: string;
    totalAmount: number;
    items: OrderItem[];
}

// Mock dữ liệu mẫu (chưa dùng API)
const mockOrder: Order = {
    id: 1001,
    createdAt: "2025-06-19T09:00:00Z",
    customerName: "Nguyễn Văn A",
    status: "Đã xác nhận",
    totalAmount: 1200000,
    items: [
        { id: 1, name: "Canon EOS R6", quantity: 1, price: 500000 },
        { id: 2, name: "Lens 50mm f/1.8", quantity: 1, price: 200000 },
        { id: 3, name: "Tripod Benro", quantity: 1, price: 500000 },
    ],
};

const OrderDetailPage: React.FC = () => {
    const { orderId } = useParams(); // dùng sau khi kết nối API
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);

    // Tạm hiển thị dữ liệu mẫu
    useEffect(() => {
        setTimeout(() => {
            setOrder(mockOrder);
            setLoading(false);
        }, 500); // giả lập thời gian tải
    }, []);

    return (
        <Box sx={{ backgroundColor: "#F3F4F6", minHeight: "100vh" }}>
            <Header />
            <Container className="py-5">
                <Typography variant="h4" className="text-center fw-bold mb-4">
                    Chi tiết đơn hàng
                </Typography>

                {loading ? (
                    <Box className="text-center my-5">
                        <CircularProgress />
                    </Box>
                ) : order ? (
                    <Card className="p-4 shadow-sm">
                        <Typography variant="h6" gutterBottom>
                            Mã đơn hàng: #{order.id}
                        </Typography>
                        <Typography>Khách hàng: {order.customerName}</Typography>
                        <Typography>
                            Ngày đặt: {new Date(order.createdAt).toLocaleString()}
                        </Typography>
                        <Typography>
                            Trạng thái: <strong>{order.status}</strong>
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h6" gutterBottom>
                            Danh sách sản phẩm
                        </Typography>

                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá (đ)</th>
                                <th>Thành tiền (đ)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {order.items.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price.toLocaleString()}</td>
                                    <td>{(item.quantity * item.price).toLocaleString()}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>

                        <Typography className="text-end fw-bold mt-3">
                            Tổng tiền: {order.totalAmount.toLocaleString()} đ
                        </Typography>
                    </Card>
                ) : (
                    <Typography className="text-center text-danger mt-5">
                        Không tìm thấy đơn hàng!
                    </Typography>
                )}
            </Container>
            <Footer />
        </Box>
    );
};

export default OrderDetailPage;