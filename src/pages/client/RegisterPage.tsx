import React from "react";
import {Box, Button, Container, Stack, Typography, Snackbar, Alert, CircularProgress,} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CTextField from "../../common/CTextField";
import CTextFieldIcon from "../../common/CTextFieldIcon";

// Schema validate bằng Yup, dễ mở rộng bảo trì
const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, "Tên đăng nhập tối thiểu 4 ký tự")
        .required("Vui lòng nhập tên đăng nhập"),
    email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
    password: Yup.string()
        .min(6, "Mật khẩu tối thiểu 6 ký tự")
        .required("Vui lòng nhập mật khẩu"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Mật khẩu không khớp")
        .required("Vui lòng nhập lại mật khẩu"),
});

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [notify, setNotify] = React.useState<{ open: boolean; type: "success" | "error"; message: string }>({
        open: false,
        type: "success",
        message: "",
    });

    // Sử dụng Formik quản lý form + validate + state
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: RegisterSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                await axios.post("http://localhost:8080/api/auth/register", {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                });
                setNotify({ open: true, type: "success", message: "Đăng ký thành công!" });
                setTimeout(() => {
                    navigate("/login");
                }, 1600);
            } catch (error: any) {
                const msg =
                    error?.response?.data?.message ||
                    "Đăng ký thất bại. Vui lòng thử lại.";
                setNotify({ open: true, type: "error", message: msg });
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
                    Đăng ký tài khoản
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
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username ? formik.errors.username : undefined}
                            />
                            <CTextField
                                label="Email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email ? formik.errors.email : undefined}
                            />
                            <CTextFieldIcon
                                label="Mật khẩu"
                                name="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password ? formik.errors.password : undefined}
                            />
                            <CTextFieldIcon
                                label="Nhập lại mật khẩu"
                                name="confirmPassword"
                                type="password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}

                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                                disabled={formik.isSubmitting}
                                sx={{
                                    fontWeight: "bold",
                                    py: 1.5,
                                    mt: 1,
                                    background: "#222",
                                    "&:hover": { background: "#1976d2" },
                                }}
                                startIcon={
                                    formik.isSubmitting && (
                                        <CircularProgress size={22} color="inherit" />
                                    )
                                }
                            >
                                {formik.isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
                            </Button>
                        </Stack>
                        <Stack direction="row" justifyContent="center" mt={2}>
                            <Typography variant="body2">
                                Đã có tài khoản?{" "}
                                <RouterLink to="/login" style={{ color: "#1976d2", fontWeight: 600 }}>
                                    Đăng nhập
                                </RouterLink>
                            </Typography>
                        </Stack>
                    </form>
                </Container>
                <Snackbar
                    open={notify.open}
                    autoHideDuration={2000}
                    onClose={() => setNotify((prev) => ({ ...prev, open: false }))}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert
                        severity={notify.type}
                        variant="filled"
                        sx={{ fontWeight: 500, fontSize: 16 }}
                    >
                        {notify.message}
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
    );
};

export default RegisterPage;
