import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ListPage from "./screens/ListPage";
import ProductDetails from "./screens/ProductDetails";
import CreateProduct from "./screens/CreateProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ListPage />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/create" element={<CreateProduct/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;