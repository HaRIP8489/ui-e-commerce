import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Typography, Button, TextField, RadioGroup, FormControlLabel, Radio, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img from '../../assets/images/cam3.jpg';

const CheckoutPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const navigate = useNavigate();

  // Dữ liệu sản phẩm
  const products = [
    { name: 'Body Canon EOS 5D Mark IV', price: 450000, quantity: 1 },
    { name: 'Body Sony A6400', price: 500000, quantity: 2 },
  ];
  const shippingFee = 50000;
  const totalPrice = products.reduce((total, item) => total + item.price * item.quantity, 0) + shippingFee;

  const handleCheckout = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/profile'); // Chuyển trang sau khi đóng popup
  };

  return (
      <>
        <Header />
        <Container className="py-5">
          <Typography variant="h4" align="center" gutterBottom>
            Thanh toán
          </Typography>
          <Card variant="outlined" sx={{ p: 4 }}>
            <Row>
              <Col md={8}>
                <Typography variant="h6">Thông tin đơn hàng</Typography>

                {products.map((product, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center my-2">
                      <div>
                        <img src={img} alt={product.name} width={50} className="me-2" />
                        {product.name} (x{product.quantity})
                      </div>
                      <div>{(product.price * product.quantity).toLocaleString()} đ</div>
                    </div>
                ))}

                <div className="mt-4">
                  <Typography>Phí ship: <strong>{shippingFee.toLocaleString()} đ</strong></Typography>
                  <TextField label="Mã giảm giá" fullWidth className="my-2" />
                  <TextField label="Ghi chú đơn hàng" multiline rows={3} fullWidth className="my-2" />
                </div>

                <div className="mt-4">
                  <Typography variant="h6">Phương thức thanh toán</Typography>
                  <RadioGroup
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <FormControlLabel value="cod" control={<Radio />} label="Thanh toán khi nhận hàng (COD)" />
                    <FormControlLabel value="bank" control={<Radio />} label="Chuyển khoản ngân hàng" />
                    <FormControlLabel value="momo" control={<Radio />} label="Thanh toán qua Momo" />
                  </RadioGroup>
                </div>

                <div className="text-end mt-4">
                  <Typography variant="h6">Tổng tiền: <strong>{totalPrice.toLocaleString()} đ</strong></Typography>
                  <Button variant="contained" color="error" onClick={handleCheckout} className="mt-2">
                    Thanh toán
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Thanh toán thành công</DialogTitle>
          <DialogContent>Bạn đã đặt hàng thành công!</DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} autoFocus>
              Xem đơn thuê
            </Button>
          </DialogActions>
        </Dialog>

        <Footer />
      </>
  );
};

export default CheckoutPage;