// import React from "react";
// import { Container, Card, Table } from "react-bootstrap";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const UserRentalHistoryPage = () => {
//   const history = [
//     { item: "Drone DJI", from: "01/05", to: "03/05", status: "Đã trả" },
//     { item: "Micro không dây", from: "05/05", to: "08/05", status: "Đang thuê" },
//   ];

//   return (
//     <>
//       <Header />
//       <Container className="py-5">
//         <Card className="shadow rounded-4">
//           <Card.Body>
//             <h3 className="mb-4 text-center">Lịch sử thuê của bạn</h3>
//             <Table striped bordered>
//               <thead>
//                 <tr>
//                   <th>Thiết bị</th>
//                   <th>Từ ngày</th>
//                   <th>Đến ngày</th>
//                   <th>Trạng thái</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {history.map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.item}</td>
//                     <td>{item.from}</td>
//                     <td>{item.to}</td>
//                     <td>{item.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Card.Body>
//         </Card>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default UserRentalHistoryPage;
import React from 'react';
import { Container } from 'react-bootstrap';
import { Typography, Card, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyRentalsPage = () => {
 return (
    <>
      <Header />
    <Container className="py-5">
      <Typography variant="h4" gutterBottom align="center">Lịch sử thuê của bạn</Typography>
      <Card variant="outlined" sx={{ p: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Sản phẩm</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Ngày thuê</TableCell>
              <TableCell>Tổng tiền</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2].map((i) => (
              <TableRow key={i}>
                <TableCell>{i}</TableCell>
                <TableCell>Canon R5</TableCell>
                <TableCell><Chip label="Đã trả" color="success" /></TableCell>
                <TableCell>25/04/2025</TableCell>
                <TableCell>2,000,000đ</TableCell>
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

export default MyRentalsPage;

