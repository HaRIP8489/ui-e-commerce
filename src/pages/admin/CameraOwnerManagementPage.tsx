import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CameraOwnerManagementPage = () => {
    return (
        <>
            <Header />
            <Container className="my-5">
                <h2 className="text-center mb-4">Quản lý chủ máy ảnh</h2>
                <Table bordered hover className="bg-white shadow-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Số máy đã đăng</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ngô D</td>
                        <td>d@gmail.com</td>
                        <td>3</td>
                        <td>Đang hoạt động</td>
                        <td><Button variant="outline-danger" size="sm">Khoá</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    );
};

export default CameraOwnerManagementPage;