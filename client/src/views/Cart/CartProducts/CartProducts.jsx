import { useState } from "react"
import CartProductTile from "../CartProductTile/CartProductTile"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const CartProducts = ({ cartProducts, setCartProducts }) => {
  const [isCartExpanded, setIsCartExpanded] = useState(false);

  return (
   <div className="w-full xl:w-1/2 p-12 flex flex-col items-center justify-center gap-6 rounded-[10px] pt-0">
      {cartProducts && cartProducts.slice(0, isCartExpanded ? cartProducts.length : 5).map(( product, index ) => (
        <CartProductTile key={index} product={product} setCartProducts={setCartProducts} />
      ))}
      {isCartExpanded ? (
        <MdKeyboardArrowUp 
          className="w-6 h-6 bg-base-graybackground rounded-full hover:cursor-pointer"
          onClick={() => setIsCartExpanded(false)}
        />
      ): (
        <MdKeyboardArrowDown 
          className="w-6 h-6 bg-base-graybackground rounded-full hover:cursor-pointer"
          onClick={() => setIsCartExpanded(true)}
        />
      )}
   </div>
  )
}

export default CartProducts