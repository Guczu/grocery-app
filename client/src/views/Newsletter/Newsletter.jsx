import { Link } from "react-router-dom"
import CustomButton from "../../components/CustomButton/CustomButton"
import CustomInput from "../../components/CustomInput/CustomInput"
import { AiOutlineArrowRight } from 'react-icons/ai'

const Newsletter = () => {
  return (
    <section className="container h-[300px] flex justify-center align-center flex-col mx-auto rounded-[5px] bg-base-bluebackground">
        <div className="w-full md:w-[48rem] pt-[5px] pb-[15px] px-[30px] md:pt-[30px] md:pb-[30px] md:px-[120px]">
            <p className="text-main-white text-heading-2 md:text-heading-3">
                Yes!
            </p>
            
            <p className="text-main-white text-heading-2 md:text-heading-3">
                Send me exclusive offers, unique gift ideas, and personalized tips for shopping and sellling on Commerce.
            </p>
        </div>

        <div className="container w-max p-[9px] mx-auto flex justify-center items-center bg-main-white rounded-full">
            <CustomInput
                className={"text-body-1 text-typography-subtext md:w-[30rem] h-[30px] md:pl-[20px] focus:outline-none"}
                disabled={false}
                name={'newsletter'}
                onChange={() => {}}
                placeholder={'Drop your email'}
                type={'text'}
            >
                <CustomButton styles="text-body-2 bg-main-primary hover:bg-main-third text-white px-6 py-2">
                    <span>
                        Subscribe
                    </span>
                    <AiOutlineArrowRight className="ml-[6px] w-4 h-4"/>
                </CustomButton>
            </CustomInput>
        </div>

        <div className="flex items-center justify-center pt-[10px]">
            <Link to="/" className="text-main-light underline text-[14px]">
                First order only. You're ready?
            </Link>
        </div>

    </section>
  )
}

export default Newsletter