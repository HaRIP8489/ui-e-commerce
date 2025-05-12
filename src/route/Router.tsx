import React from 'react';
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"


//lazy load the pages
const Home = lazy(() => import("../pages/HomePage"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage"))
const CartPage = lazy(() => import("../pages/CartPage"))


const AppRouter = () => {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRouter