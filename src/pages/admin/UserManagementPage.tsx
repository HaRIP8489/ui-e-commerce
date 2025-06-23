import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UserManagementPage = () => {
    return (
        <>
            <Header />
            <Container className="my-5">
                <h2 className="text-center mb-4">Quản lý người dùng</h2>
                <Table bordered hover className="bg-white shadow-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Vai trò</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Văn A</td>
                        <td>a@gmail.com</td>
                        <td>User</td>
                        <td>Hoạt động</td>
                        <td>
                            <Button variant="outline-dark" size="sm" className="me-2">Phân quyền</Button>
                            <Button variant="outline-danger" size="sm">Khoá</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    );
};

export default UserManagementPage;