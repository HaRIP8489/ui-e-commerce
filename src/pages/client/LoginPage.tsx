import React from "react";
import {Box, Button, Container, Link, Stack, Typography, Snackbar, Alert, CircularProgress, FormControlLabel, Checkbox,} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CTextField from "../../common/CTextField";
import CTextFieldIcon from "../../common/CTextFieldIcon";
import { useUser } from "../../context/UserContext";
import ImageNoData from "../../assets/images/no-avt.jpg";

// Schema Yup validate
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required("Vui lòng nhập tên đăng nhập"),
    password: Yup.string()
        .required("Vui lòng nhập mật khẩu"),
});

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { setUser, fetchUser } = useUser();
    const [notify, setNotify] = React.useState<{
        open: boolean;
        type: "success" | "error";
        message: string;
    }>({ open: false, type: "success", message: "" });

    // Formik quản lý form, state, validate
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            remember: false,
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {

                const res = await axios.post("http://localhost:8080/api/auth/login", {
                    username: values.username,
                    password: values.password,
                });

                // Lưu token an toàn (tùy yêu cầu: localStorage, cookie, context...)
                localStorage.setItem("accessToken", res.data.accessToken);

                setUser({
                    username: values.username,
                    profile: {profilePicture: ImageNoData},
                });

                setNotify({
                    open: true,
                    type: "success",
                    message: "Đăng nhập thành công!",
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
};

export default LoginPage;
