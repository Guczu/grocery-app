import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { BsCash } from 'react-icons/bs'
import { RiCoupon2Line } from 'react-icons/ri'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { isCodeValid } from "../../../services/discount.service"
import { getAddress } from "../../../services/address.service"
import { addOrder, deleteOrder, makeOrder } from "../../../services/order.service"
import { useLocation } from 'react-router-dom'

const CartSummary = ({ cartProducts, setCartProducts, setShowPaymentPopup }) => {
    const [cartValue, setCartValue] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(10);
    const [discountValue, setDiscountValue] = useState(0);
    const [isCodeUsed, setIsCodeUsed] = useState(false);
    const [discountError, setDiscountError] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isPayment = queryParams.get('payment');

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
            validCode.priceDiscount && setDiscountValue(validCode.discountValue);
            validCode.priceDiscount && setCartValue(cartValue - cartValue * (validCode.discountValue / 100 ));
            setIsCodeUsed(true);
        } else {
            setDiscountError('Kod został już aktywowany lub jest nieważny!');
        }
    }

    const makeAnOrder = async (products) => {
        const address = await getAddress();
        const isAddressValid = !Object.values(address).some(value => value === " ");

        if (isAddressValid && address) {
            const orderResult = await addOrder(products);

            if (orderResult.status === 200) {
                localStorage.setItem('orderId', orderResult.data._id);
                await makeOrder(products, deliveryPrice, discountValue, cartValue);
            }
        }
    }

    useEffect(() => {
        const delOrder = async () => {
            const orderId = localStorage.getItem('orderId');
            if (orderId) {
                const order = await deleteOrder(orderId);
                localStorage.removeItem('orderId');
            }
        }

        if (isPayment === 'true') {
            setShowPaymentPopup({ paymentStatus: isPayment, popupStatus: true });
            setCartProducts([]);
            if(localStorage.getItem('cart')) {
                localStorage.removeItem('cart');
            }
        } else if (isPayment === 'false') {
            delOrder();
            setShowPaymentPopup({ paymentStatus: isPayment, popupStatus: true });
        } else {
            setShowPaymentPopup({ paymentStatus: isPayment, popupStatus: false });
        }
    },[isPayment])

  return (
    <>
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
                onClick={() => makeAnOrder(cartProducts)}
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
    </>
  )
}

export default CartSummary