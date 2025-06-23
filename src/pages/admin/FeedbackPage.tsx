import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FeedbackPage = () => {
    return (
        <>
            <Header />
            <Container className="my-5">
                <h2 className="text-center mb-4">Phản hồi từ người dùng</h2>
                <Table bordered hover className="bg-white shadow-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Người gửi</th>
                        <th>Email</th>
                        <th>Nội dung</th>
                        <th>Thời gian</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lê C</td>
                        <td>c@gmail.com</td>
                        <td>Dịch vụ tốt!</td>
                        <td>20/06/2025</td>
                        <td><Button size="sm" variant="outline-danger">Xóa</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    );
};

export default FeedbackPage;