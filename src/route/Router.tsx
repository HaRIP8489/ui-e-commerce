import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load các trang
const Home = lazy(() => import("../pages/client/HomePage"));
const LoginPage = lazy(() => import("../pages/client/LoginPage"));
const RegisterPage = lazy(() => import("../pages/client/RegisterPage"));
const ProductPage = lazy(() => import("../pages/client/ProductPage"));
const ForgotPassword = lazy(() => import("../pages/client/ForgotPassword"));
const CartPage = lazy(() => import("../pages/client/CartPage"));
const BlogPage = lazy(() => import("../pages/client/BlogPage"));
const AboutPage = lazy(() => import("../pages/client/AboutPage"));
const ContactPage = lazy(() => import("../pages/client/ContactPage"));
const EditProfilePage = lazy(() => import("../pages/client/EditProfilePage"));
const ReceivePaymentPage = lazy(() => import("../pages/client/ReceivePaymentPage"));
const RegisterRentalPage = lazy(() => import("../pages/client/RegisterRentalPage"));
const ReportStatisticsPage = lazy(() => import("../pages/admin/ReportStatisticsPage"));
const RentalHistoryPage = lazy(() => import("../pages/admin/RentalHistoryPage"));
const UserRentalHistoryPage = lazy(() => import("../pages/client/UserRentalHistoryPage"));
const ResetPasswordPage = lazy(() => import("../pages/client/ResetPasswordPage"));
const PaymentPage = lazy(() => import("../pages/client/PaymentPage"));
const CheckoutPage = lazy(() => import("../pages/client/CheckoutPage"));
const UserProfilePage = lazy(() => import("../pages/client/UserProfilePage"));
const ProductManagementPage = lazy(() => import("../pages/admin/ProductManagementPage"));
const AdminDashboardPage = lazy(() => import("../pages/admin/AdminDashboardPage"));
const ProductDetailPage = lazy(() => import("../pages/client/ProductDetailPage"));



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
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/receive-payment" element={<ReceivePaymentPage />} />
          <Route path="/register-rental" element={<RegisterRentalPage />} />
          <Route path="/admin/report-statistics" element={<ReportStatisticsPage />} />
          <Route path="/admin/rental-history" element={<RentalHistoryPage />} />
          <Route path="/user-rental-history" element={<UserRentalHistoryPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/admin/product-management" element={<ProductManagementPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          {/* Đường dẫn mặc định */}
          
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
