import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import CategoryBar from "./Components/Categories";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import NewNykaa from "./Pages/NewNykaa"
import BrandProducts from "./Pages/BrandProducts";
import Footer from "./footer/index"
import './App.css'




function App() {

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>

      <Navbar search={search} setSearch={setSearch} />
      {/* <CategoryBar /> */}

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/brand/:brandName" element={<BrandProducts />} />
        <Route path="/products" element={<Products search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/newnykaa" element={<NewNykaa />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
