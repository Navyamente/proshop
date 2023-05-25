import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import UserScreen from "./screens/UserScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ViewTicketsScreen from "./screens/ViewTicketsScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="py-3">
        <Routes>
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/user" element={<UserScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />

          {/* Tickets */}
          <Route path="/tickets" element={<ViewTicketsScreen />} />

          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
