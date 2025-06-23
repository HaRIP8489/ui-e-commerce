import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OrderManagementPage = () => {
    return (
        <>
            <Header />
            <Container className="my-5">
                <h2 className="text-center mb-4">Quản lý đơn thuê</h2>
                <Table bordered hover className="bg-white shadow-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Người thuê</th>
                        <th>Sản phẩm</th>
                        <th>Ngày thuê</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Trần B</td>
                        <td>Canon R6</td>
                        <td>21/06/2025</td>
                        <td>Đang xử lý</td>
                        <td>
                            <Button variant="outline-primary" size="sm" className="me-2">Cập nhật</Button>
                            <Button variant="outline-secondary" size="sm">Xem</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    );
};

export default OrderManagementPage;