import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Typography, TextField, Button } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    console.log('Gửi yêu cầu đặt lại mật khẩu cho:', email);
  };

  return (
    <>
      <Header />
<Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card variant="outlined" sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>Đặt lại mật khẩu</Typography>
            <TextField label="Email" fullWidth className="mb-3" />
            <TextField label="Mật khẩu mới" type="password" fullWidth className="mb-3" />
            <TextField label="Xác nhận mật khẩu" type="password" fullWidth className="mb-3" />
            <Button variant="contained" color="primary" fullWidth>Đặt lại</Button>
          </Card>
        </Col>
      </Row>
    </Container>

      <Footer />
    </>
  );
};

export default ResetPasswordPage;
