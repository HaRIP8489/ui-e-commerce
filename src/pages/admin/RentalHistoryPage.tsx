import React from "react";
import { Container, Card, Table } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RentalHistoryPage = () => {
  return (
    <>
      <Header />
      <Container className="py-5">
        <h3 className="text-center mb-4">Lịch sử cho thuê</h3>
        <Card className="shadow p-3">
          <Table bordered hover>
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Thiết bị</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày trả</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HD123</td>
                <td>Nguyễn Văn A</td>
                <td>Canon EOS 5D</td>
                <td>01/05/2025</td>
                <td>05/05/2025</td>
                <td>Hoàn thành</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default RentalHistoryPage;
