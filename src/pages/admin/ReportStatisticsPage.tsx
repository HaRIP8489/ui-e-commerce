
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ReportStatisticsPage = () => {
  return (
    <>
      <Header />

      <Container className="py-5">
        <Typography variant="h4" align="center" gutterBottom>
          Báo cáo thống kê
        </Typography>

        <Card variant="outlined" sx={{ p: 3, borderRadius: '16px' }}>
          <Row className="mb-4">
            <Col md={4}>
              <TextField fullWidth label="Từ ngày" type="date" InputLabelProps={{ shrink: true }} />
            </Col>
            <Col md={4}>
              <TextField fullWidth label="Đến ngày" type="date" InputLabelProps={{ shrink: true }} />
            </Col>
            <Col md={4} className="d-flex align-items-end">
              <Button fullWidth variant="contained" color="primary">
                Xem báo cáo
              </Button>
            </Col>
          </Row>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Số lượng thuê</TableCell>
                <TableCell>Doanh thu</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3].map((id) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>Canon EOS R6</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>15,000,000đ</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default ReportStatisticsPage;
