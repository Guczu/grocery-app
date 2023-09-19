import CartProductTile from "../CartProductTile/CartProductTile"

const CartProducts = ({ cartProducts, setCartProducts }) => {

  return (
   <div className="w-full xl:w-1/2 p-12 flex flex-col items-center justify-center gap-6 rounded-[10px] pt-0">
        {cartProducts && cartProducts.length === 0 ? (
          <span>Brak produktów w koszyku</span>
        ) : (
          cartProducts && cartProducts.map(( product, index ) => (
            <CartProductTile key={index} product={product} setCartProducts={setCartProducts} />
          ))
        )}
   </div>
  )
}

export default CartProducts