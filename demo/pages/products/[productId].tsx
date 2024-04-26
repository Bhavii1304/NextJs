import { useRouter } from "next/router";

function Product({ product }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading.....</div>;
  }

  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
    </>
  );
}
export default Product;

export async function getStaticProps(context: { params: any }) {
  const { params } = context;

  const response = await fetch(
    `https://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ products: { productId: "1" } }],
    fallback: true,
  };
}
