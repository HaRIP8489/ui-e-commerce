import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load các trang
const Home = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const CartPage = lazy(() => import("../pages/CartPage"));
// import ForgotPassword from './pages/ForgotPassword'; // <-- đường dẫn chính xác

// //import ForgotPassword from './pages/ForgotPasswordPage'; // <-- đường dẫn chính xác

// <Route path="/forgot-password" element={<ForgotPassword />} />



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Route cho trang đăng nhập */}
            {/* Route cho trang đăng ký */}
            {/* Route cho trang quên mật khẩu */}
          {/* Route cho trang gốc "/" cũng về Home */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
