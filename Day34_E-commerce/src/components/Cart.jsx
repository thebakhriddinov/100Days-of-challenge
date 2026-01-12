export default function Cart({ cart, removeItem }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={box}>
      <h2>🛒 Cart</h2>

      {cart.length === 0 && <p>Empty cart</p>}

      {cart.map(item => (
        <div key={item.id} style={row}>
          <span>{item.title}</span>
          <span>x{item.qty}</span>
          <span>${item.price * item.qty}</span>

          <button onClick={() => removeItem(item.id)}>
            ❌
          </button>
        </div>
      ))}

      <hr />
      <h3>Total: ${total}</h3>
    </div>
  );
}

const box = {
  border: "1px solid #ddd",
  padding: "15px",
  width: "300px",
  height:"340px"
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px"
};
