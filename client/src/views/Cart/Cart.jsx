import { useEffect, useState } from "react";
import CartProducts from "./CartProducts/CartProducts"
import CartSummary from "./CartSummary/CartSummary"
import fetchCart from "../../utils/fetchCart";
import { AiOutlineShopping } from 'react-icons/ai'
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from 'react-router-dom'
import PaymentPopup from "../Cart/PaymentPopup/PaymentPopup"

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [showPaymentPopup, setShowPaymentPopup] = useState({ paymentStatus: null, popupStatus: false });

  useEffect(() => {
    const cart = fetchCart();
    if (cart !== cartProducts) {
      setCartProducts(cart);
    }
  },[setCartProducts])

  return (
    <>
      {showPaymentPopup.popupStatus && <PaymentPopup status={showPaymentPopup.paymentStatus} setShowPaymentPopup={setShowPaymentPopup}/> }
      {cartProducts.length > 0 ? (
        <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-center mt-12 min-h-[300px] gap-4">
          <CartProducts cartProducts={cartProducts} setCartProducts={setCartProducts}/>
          <CartSummary cartProducts={cartProducts} setCartProducts={setCartProducts} setShowPaymentPopup={setShowPaymentPopup}/>
        </section>
      ) : (
        <section className="container mx-auto flex flex-col items-center justify-center mt-12 min-h-[300px] gap-4">
            <span className="text-heading-6">
                Brak produktów w koszyku
            </span>

            <Link to='/categories' replace>
              <CustomButton styles="w-14 h-14 rounded-[5px] bg-main-primary hover:bg-main-third text-white">
                  <AiOutlineShopping className="w-6 h-6"/>
              </CustomButton>
            </Link>
        </section>
      )}
    </>
  )
}

export default Cart