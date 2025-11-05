interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Menentukan tipe properti (props) yang diterima oleh komponen Products
interface ProductPageProps {
  products?: ProductItem[]; // Array data produk (opsional)
}

// Komponen utama untuk menampilkan daftar produk
export function Products({ products }: ProductPageProps) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Products</h2>
        <div className="row g-4"> {/* Baris grid Bootstrap dengan jarak antar kolom */}
          {/* Jika data produk belum ada, tampilkan pesan 'No products' */}
          {!products ? (
            <p>No products</p>
          ) : (
            // Jika data produk ada, tampilkan semua produk dengan perulangan .map()
            products?.map((item) => (
              <div key={item.id} className="col-12 col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "400px", width: "100%", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <a href={`/products/${item.id}`} className="btn btn-dark">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
