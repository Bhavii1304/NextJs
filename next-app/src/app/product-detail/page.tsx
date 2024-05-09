import { Suspense } from "react";

import { Product } from "../comments/product";
import { Reviews } from "../comments/reviews";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<p>Loading Product Details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
