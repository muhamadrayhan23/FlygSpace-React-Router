import React from "react";
import { Link } from "react-router";
import { products1 } from "../data/containerproduct";
import { productPrice } from "../data/productprice";


const ContainerProduct: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Products</h2>
        <div className="row g-4">
          {products1.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{productPrice[item.id]}</p>
                  <button className="btn btn-dark">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
          <Link to="/product" className="btn btn-outline-dark px-4 py-2">
            View More
          </Link>
        </div>
    </section>
  );
};

export default ContainerProduct;