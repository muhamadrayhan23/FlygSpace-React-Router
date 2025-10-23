import React from "react";
import { Link } from "react-router";

const HeroImage: React.FC = () => {
  return (
    <section className="hero-section position-relative text-center text-light">
      <img
        src="/img/bg2.jpg"
        className="img-fluid w-100"
        alt="Hero Banner"
        style={{ objectFit: "cover", maxHeight: "500px" }}
      />
      <div className="hero-text position-absolute top-50 start-50 translate-middle">
        <h1 className="fw-bold display-4">Welcome to Flying Space</h1>
        <p className="lead">Explore modern streetwear and fresh designs.</p>
        <Link to="/product" className="btn btn-danger px-4 py-2">Shop Now</ Link>
      </div>
    </section>
  );
};

export default HeroImage;
