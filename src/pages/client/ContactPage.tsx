import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Button, Snackbar, TextField, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return !!localStorage.getItem('accessToken'); // Kiểm tra login
  });
  const [openAlert, setOpenAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setOpenAlert(true); // Nếu chưa login thì hiển popup
      return;
    }

    // Gửi dữ liệu đến BE (chưa có API thật thì tạm thời console.log)
    const contactData = { fullName, email, message };
    console.log('Dữ liệu gửi:', contactData);

    // TODO: Gọi API tại đây bằng axios nếu có
    // await axios.post('/api/contact', contactData);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
    navigate('/login'); // Chuyển đến trang đăng nhập
  };

  return (
      <Box sx={{ px: 5, py: 3, backgroundColor: '#D0D5DD', minHeight: '100vh' }}>
        <Header />

        <Box className="container py-5">
          <h1 className="text-center fw-bold mb-4">Liên hệ với chúng tôi</h1>
          <Box className="d-flex justify-content-center">
            <Box className="bg-light shadow-sm rounded-3 py-3 px-4" sx={{ maxWidth: '500px', width: '100%' }}>
              <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Họ tên"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    label="Nội dung"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      py: 1,
                      fontWeight: 'bold',
                      fontSize: '14px',
                      backgroundColor: 'black',
                      color: 'white',
                      '&:hover': { backgroundColor: '#0070f3' },
                    }}
                >
                  GỬI TIN NHẮN
                </Button>
              </form>
            </Box>
          </Box>
        </Box>

        <Footer />

        {/* Popup cảnh báo nếu chưa đăng nhập */}
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
            Bạn cần đăng nhập để gửi tin nhắn.
          </Alert>
        </Snackbar>
      </Box>
  );
};

export default ContactPage;