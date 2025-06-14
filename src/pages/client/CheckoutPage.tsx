import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Typography, Button, TextField } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img from '../../assets/images/cam3.jpg';

const CheckoutPage = () => {
  return (
    <>
      <Header />
    <Container className="py-5">
      <Typography variant="h4" align="center" gutterBottom>Thanh toán</Typography>
      <Card variant="outlined" sx={{ p: 4 }}>
        <Row>
          <Col md={8}>
            <Typography variant="h6">Thông tin đơn hàng</Typography>
            <div className="d-flex align-items-center justify-content-between my-2">
              <div>
                <img src={img} alt="Canon" width={50} className="me-2" />
                Body Canon EOS 5D Mark IV
              </div>
              <div>450,000 đ</div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-2">
              <div>
                <img src={img} alt="Sony" width={50} className="me-2" />
                Body Sony A6400
              </div>
              <div>500,000 đ</div>
            </div>

            <div className="mt-4">
              <Typography>Phí ship: <strong>50,000 đ</strong></Typography>
              <TextField label="Mã giảm giá" fullWidth className="my-2" />
              <TextField label="Ghi chú đơn hàng" multiline rows={3} fullWidth className="my-2" />
            </div>
          </Col>

          <Col md={4} className="text-center">
            <img src={img} alt="user" className="img-fluid" />
          </Col>
        </Row>

        <div className="text-end mt-4">
          <Button variant="contained" color="error">Thanh toán</Button>
        </div>
      </Card>
    </Container>
      <Footer />
        </>
  );
};

export default CheckoutPage;
