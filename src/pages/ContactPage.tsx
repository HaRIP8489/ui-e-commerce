import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Box, Button} from "@mui/material";

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ px: 5, py: 3, backgroundColor: '#D0D5DD' }}>
      {/*header*/}
      <Header />
      {/*content*/}
      <Box className="container py-5">
        <h1 className="text-center fw-bold mb-4">Liên hệ với chúng tôi</h1>
        <Box className="d-flex justify-content-center">
          <div className="col-md-6 bg-light shadow-sm rounded-3 py-2">
            <form className="mt-2">
              <div className="mb-3">
                <label className="form-label">Họ tên</label>
                <input type="text" className="form-control" placeholder="Nhập họ tên" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="abc@gmail.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Nội dung</label>
                <textarea className="form-control" rows={4} placeholder="Tin nhắn của bạn..." />
              </div>
              <Button variant="contained" size="large" fullWidth
                      sx={{  mt: 1,  color: "white", backgroundColor: "black", "&:hover": { backgroundColor: "#0070f3" } }}>
                Gửi tin nhắn
              </Button>
            </form>
          </div>
        </Box>
      </Box>
      {/*footer*/}
      <Footer />
    </Box>
  );
};

export default ContactPage;
