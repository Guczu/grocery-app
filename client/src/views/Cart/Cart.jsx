import CartProducts from "./CartProducts/CartProducts"
import CartSummary from "./CartSummary/CartSummary"

const Cart = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-center mt-12 min-h-[300px] gap-4">
        <CartProducts/>
        <CartSummary/>
    </section>
  )
}

export default Cart