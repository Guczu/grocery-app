import { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton"
import { BsFillTrash3Fill } from 'react-icons/bs'
import removeFromCart from "../../../utils/removeFromCart";
import addCartQuantity from "../../../utils/addCartQuantity";
import subCartQuantity from "../../../utils/subCartQuantity";

const CartProductTile = ({ product, setCartProducts }) => {
    const { product_name, producer, price, image_url,  } = product;

    const removeProduct = () => {
        const newCart = removeFromCart(product);
        setCartProducts(newCart);
    }

    const addQuantity = () => {
        if (product.quantity < product.available_amount) {
            const newCart = addCartQuantity(product);
            setCartProducts(newCart);
        }
    }

    const subQuantity = () => {
        if (product.quantity > 1) {
            const newCart = subCartQuantity(product);
            setCartProducts(newCart);
        }
    }

  return (
    <div className="w-full flex flex-col p-8 xl:flex-row items-center justify-evenly h-max rounded-[15px] relative bg-base-softbackground">

        <div className="absolute right-0 top-0 p-2 md:p-6">
            <span>
                Cena: {price}zł
            </span>
        </div>

        <div className="w-32 h-32 border-2 rounded bg-main-white flex justify-center items-center">
            <img src={image_url} alt="zdjęcie produktu" />
        </div>

        <div className="flex flex-col items-center">
            <p>
                {product_name}
            </p>

            <p>
                {producer}
            </p>
        </div>

        <div className="flex gap-3">
            <CustomButton
                className="w-6 h-6 rounded-full border-2 border-main-softblack flex justify-center items-center"
                onClick={subQuantity}
            >
                <span>-</span>
            </CustomButton>
            <span>
                Ilość: {product.quantity}
            </span>
            <CustomButton
                className="w-6 h-6 rounded-full border-2 border-main-softblack flex justify-center items-center"
                onClick={addQuantity}
            >
                <span>+</span>
            </CustomButton>
        </div>

        <div className="absolute right-0 bottom-0 p-4">
            <button
                onClick={removeProduct}
            >
                <BsFillTrash3Fill className="w-6 h-6"/>
            </button>
        </div>
    </div>
  )
}

export default CartProductTile