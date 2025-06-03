import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load các trang
const Home = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const CartPage = lazy(() => import("../pages/CartPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const EditProfilePage = lazy(() => import("../pages/EditProfilePage"));
const ReceivePaymentPage = lazy(() => import("../pages/ReceivePaymentPage"));
const RegisterRentalPage = lazy(() => import("../pages/RegisterRentalPage"));
const ReportStatisticsPage = lazy(() => import("../pages/ReportStatisticsPage"));
const RentalHistoryPage = lazy(() => import("../pages/RentalHistoryPage"));
const UserRentalHistoryPage = lazy(() => import("../pages/UserRentalHistoryPage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));
const PaymentPage = lazy(() => import("../pages/PaymentPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));






function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/receive-payment" element={<ReceivePaymentPage />} />
          <Route path="/register-rental" element={<RegisterRentalPage />} />
          <Route path="/report-statistics" element={<ReportStatisticsPage />} />
          <Route path="/rental-history" element={<RentalHistoryPage />} />
          <Route path="/user-rental-history" element={<UserRentalHistoryPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* Đường dẫn mặc định */}
          
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
