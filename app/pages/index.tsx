import React from "react";
import Navigation from "../components/Navigation";
import HeroImage from "../components/HeroImage";
import ContainerProduct from "../components/ContainerProduct";
import ContainerEvent from "../components/ContainerEvent";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <HeroImage />
      <ContainerProduct />
      <ContainerEvent />
      <Footer />
    </>
  );
};

export default IndexPage;
