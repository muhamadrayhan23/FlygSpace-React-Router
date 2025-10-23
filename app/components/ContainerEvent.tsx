import React, { useState } from "react";
import { Link } from "react-router";
import { eventData } from "../data/containerevent";

const itemsPerPage = 8;
const totalPages = Math.ceil(eventData.length / itemsPerPage);

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const paginatedItems = eventData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Latest Events</h2>

        <div className="row g-4">
          {paginatedItems.map((item) => (
            <div key={item.id} className="col-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center">
                  <small className="text-muted d-block mb-1">{item.date}</small>
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text small">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/event" className="btn btn-outline-dark px-4 py-2">
            View More
          </Link>
        </div>    
      </div>
    </section>
  );
};

export default News;