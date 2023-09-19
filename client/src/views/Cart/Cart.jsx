import { useEffect, useState } from "react";
import CartProducts from "./CartProducts/CartProducts"
import CartSummary from "./CartSummary/CartSummary"
import fetchCart from "../../utils/fetchCart";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState();

  useEffect(() => {
    const cart = fetchCart();
    if (cart !== cartProducts) {
      setCartProducts(cart);
    }
  },[setCartProducts])

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-center mt-12 min-h-[300px] gap-4">
        <CartProducts cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        <CartSummary cartProducts={cartProducts}/>
    </section>
  )
}

export default Cart