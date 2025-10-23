import react, { useState } from 'react';

const Faq: React.FC = () => {
    const [language, setLanguage] = useState<"id" | "en">("id");

    const handleLanguageChange = (lang: "id" | "en") => {
        setLanguage(lang);
    };

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-bold fw-bold mb-4">FAQ</h2>

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
                        <h4 className="fw-bold mb-3">Pertanyaan yang Sering Diajukan</h4>
                        <p>
                            Bagaimana cara memiliki akun Flying Space di website?<br></br>
                            Apabila anda memiliki member card, otomatis anda akan memiliki akun website Flying Space
                            Bagaimana cara melakukan pemesanan?<br></br>
                            Cara pemesanan silahkan klik disini. Harap isi data diri dengan benar agar tidak terjadi kesalahan saat pengiriman
                            Bagaimana cara melacak pesanan?<br></br>
                            Apabila anda sudah mendapatkan nomor resi via email, silahkan lacak pesanan anda di www.cekresi.com dan masukan nomor resi yang kami berikan
                            Kemana harus membayar pesanan?<br></br>
                            Sementara ini kami hanya menyediakan 1 metode pembayaran yaitu via transfer bank (BCA).<br></br>
                            Berapa lama batas waktu pembayaran pesanan?<br></br>
                            Batas waktu pesanan anda 1×24 jam, jika melebih batas waktu pembayaran makan pesanan anda akan otomatis batal
                            Bagaimana cara mengkonfirmasi pembayaran?<br></br>
                            Silahkan klik disini untuk mengkonfirmasi pembayaran
                            Apa jasa kurir yang digunakan?<br></br>
                            Kurir yang kami gunakan untuk pengiriman ke seluruh Indonesia yaitu JNE, sedangkan pengiriman ke luar Indonesia kami menggunakan EMS.<br></br>
                            Kapan pesanan dikirim?<br></br>
                            Pesanan akan dikirim setelah kami menerima konfirmasi pembayaran yang dilakukan dalam waktu maksimal 1x24jam.<br></br>
                            Pengiriman dapat dilakukan pada hari yang sama atau keesokan harinya (kecuali hari Sabtu & Minggu tidak ada pengiriman).<br></br>
                            Berapa biaya pengiriman?<br></br>
                            Biaya pengiriman tergantung dari jumlah pesanan dan berat pesanan anda, silahkan masukan pesanan dan biaya pengiriman akan secara otomatis terakumulasi.<br></br>
                            Bagaimana cara mendapatkan resi pemesanan?<br></br>
                            Resi akan dikirimkan via email 1 hari setelah pesanan diproses.<br></br>
                            Bagaimana kebijakan pengembalian atau penukaran barang?<br></br>
                            Klik disini untuk info lengkap tentang kebijakan pengembalian atau penukaran barang.<br></br>
                            Bagaimana cara mendapatkan member card?<br></br>
                            Pembelanjaan dengan nominal Rp 1.000.000 secara otomatis akan mendapatkan member card yang berlaku selama 1 tahun.<br></br>
                            Bagaimana cara menggunakan member card ketika berbelanja?<br></br>
                            Anda dapat memasukan nomer member card ketika akan melakukan pembayaran / checkout.
                        </p>
                    </>
                ) : (
                    <>
                        <h4 className="fw-bold mb-3">Frequently Asked Question</h4>
                        <p>
                            How do I get an account in Flying Space website?<br></br>
                            If you have a member card, you will automatically have an account in Flying Space website.<br></br>
                            How do I order?<br></br>
                            Click here to order. Please fill in your personal data carefully and correctly to avoid shipping errors.<br></br>
                            How can I track my order?<br></br>
                            If you have received the receipt number on your registered e-mail, you can track tour order in www.cekresi.com and insert the provided receipt number.<br></br>
                            What payment method do you provide?<br></br>
                            We only provide 1 payment method via bank transfer (BCA) for now.<br></br>
                            Is there a payment deadline for my order?<br></br>
                            Your order is valid for 1×24 hours, if the payment is made after, then your order will automatically be canceled.<br></br>
                            How do I confirm my payment?<br></br>
                            Click this link to confirm your payment.<br></br>
                            What shipping courier do you use?<br></br>
                            For purchase via website, we use JNE for Indonesia region and EMS for overseas order.<br></br>
                            When will my order be shipped?<br></br>
                            Your order will be shipped once we have received the payment confirmation which has to be done in maximum 1×24 hours. The shipment will be made on the same or the next day (except Saturday & Sunday where there are no shipments).<br></br>
                            How much is the shipping cost?<br></br>
                            The shipping cost depends on the quantity and the weight of your order. Please add your order to the cart and the shipping cost will automatically be calculated.<br></br>
                            When do I get my payment receipt?<br></br>
                            The receipt will be sent to your e-mail address one day after your order is processed.<br></br>
                            What is the refund and exchange policy?<br></br>
                            Click here  for your information on our refund and exchange policy.<br></br>
                            How do I get a member card?<br></br>
                            A one time purchase of Rp1.000.000 will automatically get you a member card that’s valid for 1 (one) year.<br></br>
                            How to use my member card when making my order?<br></br>
                            Please insert your member card number on payment checkout.
                        </p>

                    </>
                )}
            </div>
        </section>
    );
};

export default Faq;