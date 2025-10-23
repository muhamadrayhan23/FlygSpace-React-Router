import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-5">
          {/* Form Section */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="text-danger">*</span>
                </label>
                <select className="form-select" id="subject" required>
                  <option value="">Select a subject</option>
                  <option value="feedback">Feedback</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product</option>
                  <option value="shipping">Shipping</option>
                  <option value="support">Return/Exchange</option>
                  <option value="media">Media</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark px-4">
                Submit
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="col-md-5">
            <h4 className="fw-bold mb-3">Find Us On</h4>
            <div className="d-flex flex-wrap gap-3">
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
                  className="btn btn-outline-dark d-flex align-items-center gap-2"
                >
                  <i className={`bi bi-${platform}`}></i>
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;