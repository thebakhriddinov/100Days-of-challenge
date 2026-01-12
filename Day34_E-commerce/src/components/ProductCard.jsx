export default function ProductCard({ product, addToCart }) {
    return (
        <div style={card}>
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
                Add to cart
            </button>
        </div>
    )
}

const card = {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
}