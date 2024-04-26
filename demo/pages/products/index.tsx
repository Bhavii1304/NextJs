type Product = {
  id: number;
  title: string;

  price: string;
};

type ProductsProps = {
  products: Product[];
};

function ProductList({ products }: ProductsProps) {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "30px" }}>
      <h1 style={{ color: "#333", marginBottom: "10px" }}>Post List</h1>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
            }}
          >
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default ProductList;

export async function getStaticProps() {
  const response = await fetch("https://localhost:4000/products");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
}
