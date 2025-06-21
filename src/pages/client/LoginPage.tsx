import React from "react";
import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    Typography,
    Snackbar,
    Alert,
    CircularProgress,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CTextField from "../../common/CTextField";
import CTextFieldIcon from "../../common/CTextFieldIcon";

// Schema Yup validate mạnh mẽ
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required("Vui lòng nhập tên đăng nhập"),
    password: Yup.string()
        .required("Vui lòng nhập mật khẩu"),
});

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [notify, setNotify] = React.useState<{
        open: boolean;
        type: "success" | "error";
        message: string;
    }>({ open: false, type: "success", message: "" });
    // Dùng Formik quản lý form, state, validate
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            remember: false,
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                // Gọi API thực tế của bạn!
                const res = await axios.post("http://localhost:8080/api/auth/login", {
                    username: values.username,
                    password: values.password,
                });

                // Lưu token an toàn (tùy yêu cầu: localStorage, cookie, context...)
                localStorage.setItem("accessToken", res.data.accessToken);

                setNotify({
                    open: true,
                    type: "success",
                    message: "Đăng nhập thành công! Đang chuyển trang...",
                });

                setTimeout(() => {
                    navigate("/");
                }, 1200);
            } catch (err: any) {
                const msg =
                    err?.response?.data?.message ||
                    "Sai tên đăng nhập hoặc mật khẩu!";
                setNotify({
                    open: true,
                    type: "error",
                    message: msg,
                });
                setSubmitting(false);
            }
        },
    });

    return (
        <Box>
            <Stack
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                spacing={3}
                sx={{ backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <Typography
                    variant="h3"
                    fontWeight={700}
                    textAlign="center"
                    mb={1}
                >
                    Đăng nhập
                </Typography>
                <Container
                    sx={{ backgroundColor: "#fff", borderRadius: 3, boxShadow: 2 }}
                    maxWidth="xs"
                    className="p-4"
                >
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                        <Stack spacing={2}>
                            <CTextField
                                label="Tên đăng nhập"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username ? formik.errors.username : undefined}
                            />
                            <CTextFieldIcon
                                label="Mật khẩu"
                                name="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password ? formik.errors.password : undefined}
                            />
                            {/* Remember me (optional) */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="remember"
                                        checked={formik.values.remember}
                                        onChange={formik.handleChange}
                                        color="primary"
                                    />
                                }
                                label="Nhớ đăng nhập"
                            />

                            <Stack flexDirection="row" justifyContent="end">
                                <Link
                                    component={RouterLink}
                                    to="/auth/forgot-password"
                                    sx={{
                                        textDecoration: "none",
                                        color: "red",
                                        "&:hover": { color: "#0070f3" },
                                        fontSize: 15,
                                    }}
                                >
                                    Quên mật khẩu?
                                </Link>
                            </Stack>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={formik.isSubmitting}
                                sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                    "&:hover": { backgroundColor: "#0070f3", color: "white" },
                                }}
                                startIcon={
                                    formik.isSubmitting && (
                                        <CircularProgress size={22} color="inherit" />
                                    )
                                }
                            >
                                {formik.isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
                            </Button>
                            <Stack direction="row" justifyContent="center" mt={1}>
                                <Typography variant="body2">
                                    Chưa có tài khoản?{" "}
                                    <RouterLink
                                        to="/auth/register"
                                        style={{ color: "#0070f3", fontWeight: "bold" }}
                                    >
                                        Đăng ký ngay
                                    </RouterLink>
                                </Typography>
                            </Stack>
                        </Stack>
                    </form>
                </Container>
                <Snackbar
                    open={notify.open}
                    autoHideDuration={2000}
                    onClose={() =>
                        setNotify((prev) => ({ ...prev, open: false }))
                    }
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert severity={notify.type} variant="filled">
                        {notify.message}
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
    );
=======
  return (
      <div>
        <Header />
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="login-box text-center p-4 rounded border">
            <h2 className="fw-bold mb-2">Đăng nhập</h2>
            <hr className="underline" />
            <form onSubmit={handleLogin} className="text-start mt-4">
              <div className="mb-3">
                <label className="form-label fw-bold">Gmail:</label>
                <div className="input-group">
                  <input
                      type="email"
                      className="form-control"
                      placeholder="abc@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                </div>
              </div>
              <div className="mb-2">
                <label className="form-label fw-bold">Mật khẩu:</label>
                <div className="input-group">
                  <input
                      type="password"
                      className="form-control"
                      placeholder="***********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="input-group-text">
                  <i className="bi bi-lock-fill"></i>
                </span>
                </div>
              </div>

              <div className="text-end mb-3">
                <Link to="/forgot-password" className="text-danger" style={{ fontSize: 13 }}>
                  Quên mật khẩu.
                </Link>
              </div>

              {error && <p className="text-danger text-center small">{error}</p>}

              <button type="submit" className="btn btn-success w-100 fw-bold py-2">
                Đăng nhập
              </button>

              <div className="mt-4 d-flex justify-content-between small">
                <Link to="/register" className="text-primary">
                  Chưa có tài khoản ?
                </Link>
                <Link to="/register" className="text-danger">
                  Đăng ký tại đây.
                </Link>
              </div>
            </form>
          </div>
        </div>

        <footer className="bg-light pt-5 pb-3 mt-5 border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-3">
                <h5 className="fw-bold">EagleCam</h5>
                <p>Giải pháp thuê máy ảnh tiện lợi và nhanh chóng cho mọi nhiếp ảnh gia.</p>
              </div>
              <div className="col-md-3 mb-3">
                <h6 className="fw-bold">Dịch vụ</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none text-dark">Thuê máy ảnh</a></li>
                  <li><a href="#" className="text-decoration-none text-dark">Phụ kiện</a></li>
                  <li><a href="#" className="text-decoration-none text-dark">Combo khuyến mãi</a></li>
                </ul>
              </div>
              <div className="col-md-3 mb-3">
                <h6 className="fw-bold">Hỗ trợ</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none text-dark">Câu hỏi thường gặp</a></li>
                  <li><a href="#" className="text-decoration-none text-dark">Hướng dẫn sử dụng</a></li>
                  <li><a href="#" className="text-decoration-none text-dark">Chính sách bảo mật</a></li>
                </ul>
              </div>
              <div className="col-md-3 mb-3">
                <h6 className="fw-bold">Liên hệ</h6>
                <p>Email: support@eaglecam.vn</p>
                <p>Hotline: 1900 123 456</p>
                <p>Địa chỉ: 123 Nguyễn Văn Cừ, TP.HCM</p>
              </div>
            </div>
            <div className="text-center mt-4 text-muted">
              &copy; {new Date().getFullYear()} EagleCam. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
  );
};

export default LoginPage;
