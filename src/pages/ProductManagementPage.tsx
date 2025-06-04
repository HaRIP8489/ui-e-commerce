import { Container, Table, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductManagementPage = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <h2 className="mb-4 text-center">Quản lý sản phẩm</h2>
        <Table bordered hover responsive className="bg-white shadow-sm">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá thuê</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Canon EOS R6</td>
              <td>300.000đ/ngày</td>
              <td>Còn hàng</td>
              <td>
                <Button variant="outline-dark" size="sm" className="me-2">Sửa</Button>
                <Button variant="outline-danger" size="sm">Xóa</Button>
              </td>
            </tr>
            {/* Thêm nhiều dòng sản phẩm ở đây */}
          </tbody>
        </Table>
        <Button variant="dark">Thêm sản phẩm mới</Button>
      </Container>
      <Footer />
    </>
  );
};

export default ProductManagementPage;
