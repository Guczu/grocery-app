import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { BsCash } from 'react-icons/bs'
import { RiCoupon2Line } from 'react-icons/ri'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { isCodeValid } from "../../../services/discount.service"

const CartSummary = ({ cartProducts }) => {
    const [cartValue, setCartValue] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(10);
    const [isCodeUsed, setIsCodeUsed] = useState(false);
    const [discountError, setDiscountError] = useState('');

    const validationSchema = Yup.object().shape({
        coupon: Yup.string().required('Wpisz kod rabatowy'),
    });      

    useEffect(() => {
        if (cartProducts) {
            const sumValue = () => {
                const sum = cartProducts.reduce((total, obj) => total + obj.price * obj.quantity, 0);
                setCartValue(parseFloat(sum.toFixed(2)));
            }
            sumValue();
        }
    }, [cartProducts])

    const checkDiscountCode = async (code) => {
        const validCode = await isCodeValid(code);

        if (validCode && !isCodeUsed) {
            validCode.freeShip && setDeliveryPrice(0);
            validCode.priceDiscount && setCartValue(cartValue - cartValue * (validCode.discountValue / 100 ));
            setIsCodeUsed(true);
        } else {
            setDiscountError('Kod został już aktywowany lub jest nieważny!');
        }
    }

  return (
    <div className="w-full xl:w-1/4 p-6 flex flex-col gap-4 bg-base-softbackground rounded-[10px] h-max pb-12">
        <span className="text-heading-5 p-6">
            Podsumowanie
        </span>

        <div className="flex flex-col gap-2">
            <span>
                Suma: {cartValue.toFixed(2)}zł
            </span>

            <span>
                Dostawa: {deliveryPrice}
            </span>
        </div>

        <CustomButton 
            styles="text-body-3 bg-main-primary hover:bg-main-third text-white px-6 py-2"
        >
            <span>
                ZAPŁAĆ
            </span>
            <BsCash className="ml-[6px] w-4 h-4"/>
        </CustomButton>

        <div className="flex flex-col gap-3">
            <Formik
                initialValues={{ coupon: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await checkDiscountCode(values.coupon);
                    setSubmitting(false);
                    values.coupon = ""
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <div className="flex flex-col gap-3">
                        <span className="text-heading-3 mt-6 p-6">Kod rabatowy</span>

                        <Field
                            type="text"
                            name="coupon"
                            placeholder="Wpisz kod"
                            className="text-body-1 w-full rounded-[10px] text-typography-subtext h-[30px] md:p-[20px] focus:outline-none"
                        />

                        <CustomButton
                        type="submit"
                        disabled={isSubmitting}
                        className="flex justify-center items-center text-body-3 bg-main-primary hover:bg-main-third text-white px-6 py-2 rounded-full"
                        >
                            <span>ZASTOSUJ</span>
                            <RiCoupon2Line className="ml-[6px] w-4 h-4" />
                        </CustomButton>
                        
                        <span className="text-red-500">
                            {discountError && discountError}
                        </span>
                    </div>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default CartSummary