import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Left Section: Navigation Links */}
          <div className="col-md-6">
            <h5 className="mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/refundpolicy" className="FooterLink">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/howtoorder" className="FooterLink">
                  How To Order
                </Link>
              </li>
              <li>
                <Link to="/faq" className="FooterLink">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/payment" className="FooterLink">
                  Payment Confirmation
                </Link>
              </li>
            </ul>
            <p className="mt-4 small">
              Copyright © 2022 - 2025 <span className="fw-bold">Flying Space</span>
            </p>
          </div>

          {/* Right Section: Brand + Social Media */}
          <div className="col-md-6 text-md-end">
            <h3 className="fw-bold text-danger mb-3" style={ {}}>flyspace</h3>
            <p className="mb-2">FIND US ON</p>
            <div className="d-flex justify-content-md-end gap-3 flex-wrap">
              {[
                "facebook",
                "twitter",
                "instagram",
                "whatsapp",
                "youtube",
                "tiktok",
              ].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white fs-5"
                >
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;