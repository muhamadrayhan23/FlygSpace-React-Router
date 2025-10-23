import React, { useState } from "react";

const PaymentConfirmation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderId: "",
    totalTransfer: "",
    transferTo: "BCA 449-003-7777 a/n Muhamad Rayhan",
    accountHolder: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Tambahkan logika kirim ke backend di sini
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Payment Confirmation</h2>

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "700px" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">NAME</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">EMAIL</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="orderId" className="form-label">ORDER ID</label>
            <input
              type="text"
              className="form-control"
              id="orderId"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="totalTransfer" className="form-label">TOTAL TRANSFER</label>
            <input
              type="text"
              className="form-control"
              id="totalTransfer"
              name="totalTransfer"
              value={formData.totalTransfer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="transferTo" className="form-label">TRANSFER TO</label>
            <select
              className="form-select"
              id="transferTo"
              name="transferTo"
              value={formData.transferTo}
              onChange={handleChange}
              required
            >
              <option value="BCA 449-003-7777 a/n Muhamad Rayhan">
                BCA 449-003-7777 a/n Muhamad Rayhan
              </option>
              <option value="Mandiri 123-456-7890 a/n FlyingSpace">
                Mandiri 123-456-7890 a/n FlyingSpace
              </option>
              <option value="BRI 987-654-3210 a/n FlyingSpace">
                BRI 987-654-3210 a/n FlyingSpace
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="accountHolder" className="form-label">BANK ACCOUNT HOLDER</label>
            <input
              type="text"
              className="form-control"
              id="accountHolder"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="notes" className="form-label">NOTES</label>
            <textarea
              className="form-control"
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className=" mt-4">
            <button type="submit" className="btn btn-dark px-5">SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentConfirmation;