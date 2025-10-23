import React, { useState } from "react";

const RefundPolicy: React.FC = () => {
  const [language, setLanguage] = useState<"id" | "en">("id");

  const handleLanguageChange = (lang: "id" | "en") => {
    setLanguage(lang);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-bold fw-bold mb-4">REFUND POLICY</h2>

        {/* Language Toggle */}
        <div className="d-flex justify-content mb-4 gap-3">
          <button
            className={`btn btn-outline-dark ${language === "id" ? "active" : ""}`}
            onClick={() => handleLanguageChange("id")}
          >
            BAHASA INDONESIA
          </button>
          <button
            className={`btn btn-outline-dark ${language === "en" ? "active" : ""}`}
            onClick={() => handleLanguageChange("en")}
          >
            ENGLISH
          </button>
        </div>

        {/* Content */}
        {language === "id" ? (
          <>
            <h4 className="fw-bold mb-3">KEBIJAKAN PENGEMBALIAN DANA</h4>
            <p>
              Pengembalian dana hanya berlaku untuk produk yang rusak atau tidak sesuai pesanan.
              Permintaan pengembalian harus dilakukan maksimal 3 hari setelah barang diterima.
              Produk harus dalam kondisi asli, belum digunakan, dan dikembalikan dengan kemasan lengkap.
              Pengembalian dana tidak berlaku untuk produk digital, custom order, atau barang diskon.
              Silakan hubungi layanan pelanggan untuk proses pengembalian.
            </p>

            <h4 className="fw-bold mt-5 mb-3">KEBIJAKAN PENUKARAN BARANG</h4>
            <p>
              Penukaran hanya berlaku untuk barang yang rusak atau salah kirim.
              Kami tidak menerima penukaran karena perubahan selera atau ukuran.
              Silakan kirim bukti foto dan nomor pesanan ke layanan pelanggan maksimal 3 hari setelah barang diterima.
              Tim kami akan memproses penukaran sesuai ketersediaan stok.
            </p>
          </>
        ) : (
          <>
            <h4 className="fw-bold mb-3">REFUND POLICY</h4>
            <p>
              Refunds are only applicable for defective or incorrect items.
              Requests must be submitted within 3 days of receiving the product.
              Items must be unused, in original condition, and returned with complete packaging.
              Refunds do not apply to digital products, custom orders, or discounted items.
              Please contact customer service to initiate a refund.
            </p>

            <h4 className="fw-bold mt-5 mb-3">EXCHANGE POLICY</h4>
            <p>
              Exchanges are only available for defective or wrongly shipped items.
              We do not accept exchanges due to preference or sizing.
              Please send photo evidence and order number to customer service within 3 days of receipt.
              Our team will process the exchange based on stock availability.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default RefundPolicy;