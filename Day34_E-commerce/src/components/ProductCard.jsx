export default function ProductCard({ product, addToCart }) {
  return (
    <div style={card}>
      <img className="rounded-xl" src={product.image} width="120" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
      className="cursor-pointer border p-2 rounded-lg"
       onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "8px",
  textAlign: "center"
};
