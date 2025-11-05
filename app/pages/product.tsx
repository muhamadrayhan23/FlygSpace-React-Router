import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Products } from "../components/Product";
import type { Route } from "./+types";


interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Fetching data dengan clientLoader
export async function clientLoader(_args?: Route.ClientLoaderArgs): Promise<ProductItem[]> {
  const url = "https://fakestoreapi.com/products?limit=12";

  // fetch dengan error handling
  const res = await fetch(url, {});

  if (!res.ok) {
    // lempar Response agar React Router bisa menanganinya (status code tetap tersedia)
    throw new Response("Failed to fetch products from API", { status: res.status });
  }

  const products = await res.json();

  // Pastikan tipe yang kembali adalah array
  if (!Array.isArray(products)) {
    throw new Response("Invalid data format from API", { status: 502 });
  }

  return products as ProductItem[];
}

/**
 * Komponen fallback saat data sedang dimuat di client
 */
export function HydrateFallback() {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-dark" role="status"></div>
      <p className="mt-3">Loading products...</p>
    </div>
  );
}

// Komponen utama ProductPage yang menerima props dari React Router
export default function ProductPage({ loaderData }: Route.ComponentProps) {
  // Mengambil data hasil pemanggilan loader (clientLoader atau loader)
  // Jika loaderData tidak ada (undefined/null), maka nilai products juga akan undefined
  const products = loaderData ?? undefined;

  return (
    <>
      <Navigation />
      <Products products={products} />
      <Footer />
    </>
  );
};

