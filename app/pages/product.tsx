import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Product from "../components/Product";

const ProductPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Product />
      <Footer />
    </>
  );
};

export default ProductPage;