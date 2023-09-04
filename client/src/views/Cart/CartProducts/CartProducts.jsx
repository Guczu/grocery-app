import CartProductTile from "../CartProductTile/CartProductTile"

const CartProducts = () => {
  return (
   <div className="w-full xl:w-1/2 p-12 flex flex-col items-center justify-center gap-6 rounded-[10px] pt-0">
        <CartProductTile/>
        <CartProductTile/>
        <CartProductTile/>
        <CartProductTile/>
        <CartProductTile/>
   </div>
  )
}

export default CartProducts