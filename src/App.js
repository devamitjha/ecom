import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import ShippingPage from "./pages/shipping/ShippingPage";
import PaymentPage from "./pages/payment/PaymentPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Nopage from "./pages/nopage/Nopage";

import BlogLayout from "./pages/blog/BlogLayout";
import PostLists from "./pages/blog/blogPost/PostLists";
import PostDetails from "./pages/blog/postDetails/PostDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart/:id" element={<CartPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Nopage />} />
        </Route>
        <Route path='blog' element={<BlogLayout />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<PostDetails />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
