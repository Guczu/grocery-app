import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"
import CustomInput from "../../../components/CustomInput/CustomInput"
import { BsCash } from 'react-icons/bs'
import { RiCoupon2Line } from 'react-icons/ri'

const CartSummary = ({ cartProducts }) => {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        if (cartProducts) {
            const sumValue = () => {
                const sum = cartProducts.reduce((total, obj) => total + obj.price, 0);
                setSum(parseFloat(sum.toFixed(2)));
            }
            sumValue();
        }
    }, [cartProducts])

  return (
    <div className="w-full xl:w-1/4 p-6 flex flex-col gap-4 bg-base-softbackground rounded-[10px] h-max pb-12">
        <span className="text-heading-5 p-6">
            Podsumowanie
        </span>

        <div className="flex flex-col gap-2">
            <span>
                Suma: {sum}zł
            </span>

            <span>
                Dostawa: 0
            </span>
        </div>

        <CustomButton styles="text-body-3 bg-main-primary hover:bg-main-third text-white px-6 py-2">
            <span>
                ZAPŁAĆ
            </span>
            <BsCash className="ml-[6px] w-4 h-4"/>
        </CustomButton>

        <div className="flex flex-col gap-3">
            <span className="text-heading-3 mt-6 p-6">
                Kod rabatowy
            </span>

            <CustomInput
                className={"text-body-1 w-full rounded-[10px] text-typography-subtext h-[30px] md:p-[20px] focus:outline-none"}
                disabled={false}
                name={'coupon'}
                onChange={() => {}}
                placeholder={'Wpisz kod'}
                type={'text'}
            >
            </CustomInput>
            <CustomButton styles="text-body-3 bg-main-primary hover:bg-main-third text-white px-6 py-2">
                <span>
                    ZASTOSUJ
                </span>
                <RiCoupon2Line className="ml-[6px] w-4 h-4"/>
            </CustomButton>
        </div>
    </div>
  )
}

export default CartSummary