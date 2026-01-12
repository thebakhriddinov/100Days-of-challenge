import { useState } from "react";
import { products } from "./data";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";


export default function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      setCart(
        cart.map(item => 
          item.id === product.id? { ...item, qty: item.qty + 1 }
          : item
        )
      );
    } else {
        setCart([...cart, { ...product, qty: 1}]);
      }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }
  return (
    <div style={layout}>
      <div>
        <h1>Mini E-commerce</h1>

        <div style={grid}>
          {products.map(p => (
            <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
            />
          ))}

        </div>
      </div>

      <Cart cart={cart} removeItem={removeItem}/>
    </div>
  )
}

const layout = {
  display: "flex",
  gap: "30px",
  padding: "20px",
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
}
