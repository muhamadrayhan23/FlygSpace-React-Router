import react, { useState } from 'react';

const HowToOrder: React.FC = () => {
    const [language, setLanguage] = useState<"id" | "en">("id");

    const handleLanguageChange = (lang: "id" | "en") => {
        setLanguage(lang);
    };

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-bold fw-bold mb-4">How To Order</h2>

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
                        <h4 className="fw-bold mb-3">Cara Memesan</h4>
                        <p>
                            Pilih barang yang akan dibeli pada halaman SHOP, lalu klik barang tersebut dan anda akan otomatis masuk ke halaman PRODUCT PAGE.
                            Isi berapa jumlah order pada kolom QUANTITY produk kemudian KLIK ADD TO CART. Setelah CART terisi anda dapat melakukan perubahan order yang tidak diinginkan atau mengubah jumlah order pada halaman SHOPPING CART.
                            Isi informasi diri pada halaman ORDER DETAIL. Apabila ingin memberikan instruksi khusus pada pemesanan yang anda lakukan, anda dapat memberikan catatan pada kolom CATATAN yang telah kami sediakan pada bagian terbawah halaman ORDER DETAIL.
                            Setelah informasi lengkap, anda akan mendapatkan Email berupa INVOICE dan KODE KONFIRMASI PEMBAYARAN.
                            Segera lakukan pembayaran. Sertakan KODE KONFIRMASI PEMBAYARAN pada saat anda melakukan pembayaran baik melalui ATM atau INTERNET BANKING.
                            Setelah melakukan pembayaran segera lakukan konfirmasi dengan cara mencantumkan KODE KONFIRMASI PEMBAYARAN. Kami akan memvalidasi status pembayaran dan mengirimkan order sesuai pesanan.
                        </p>
                    </>
                ) : (
                    <>
                        <h4 className="fw-bold mb-3">How To Order</h4>
                        <p>
                            Choose the item that you would like to purchase at the SHOP page, and then click
                            the item to be directed to the PRODUCT page.
                            Fill in the number of products on the QUANTITY column, and then click ADD TO CART. When the CART is filled, you can update the cart (deleting unwanted item(s) or change the number of quantity) on the SHOPPING CART page.
                            Fill the information form on the ORDER DETAIL page. If you want to make a certain instruction on your order, please note on the NOTE column provided on the bottom of the ORDER DETAIL page.
                            Once completed, you will get an E-Mail of INVOICE and PAYMENT CONFIRMATION CODE.
                            Please proceed to payment via the provided bank (BCA). Include the PAYMENT CONFIRMATION CODE when making the payment, either through ATM or INTERNET BANKING.
                            After the payment is done, please do confirm it by including the PAYMENT CONFIRMATION CODE. We will validate the payment status and ship the ordered items.
                        </p>

                    </>
                )}
            </div>
        </section>
    );
};

export default HowToOrder;