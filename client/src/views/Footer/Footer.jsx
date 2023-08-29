import FooterList from "./FooterList/FooterList"
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { AiFillTwitterCircle, AiOutlineArrowUp } from 'react-icons/ai'
import CustomButton from "../../components/CustomButton/CustomButton"

const Footer = () => {
  return (
    <footer className="container flex flex-col mx-auto my-[40px]">
        
        <div className="flex flex-col md:flex-row">
            <div className="justify-center items-center md:justify-start md:items-start md:w-1/4 flex flex-col md:p-12 pr-0 mb-12 md:mb-0">
                <span className="text-main-primary text-heading-3 mb-8">
                    E-commerce
                </span>
                <p className="text-typography-text text-body-6">Cricklewood,London</p>
                <p className="text-typography-text text-body-6">NW2 6qg, Uk</p>

                <div className="flex gap-3">
                    <IoLogoFacebook className="w-6 h-6 hover:cursor-pointer"/>
                    <AiFillTwitterCircle className="w-6 h-6 hover:cursor-pointer"/>
                    <IoLogoLinkedin className="w-6 h-6 hover:cursor-pointer"/>
                </div>
            </div>

            <div className="md:w-3/4 mx-auto">
                <FooterList/>
            </div>
        </div>

        <div className="w-full flex flex-col gap-3 md:flex-row justify-center md:justify-between items-center">
            <span className="text-typography-text text-body-6">© 2022 Commerce, Inc.</span>

            <div>
                <ul className="flex gap-5">
                    <li className="text-typography-text text-body-6 hover:cursor-pointer">Privacy policy</li>
                    <li className="text-main-third text-body-6 hover:cursor-pointer">Terms of use</li>
                    <li className="text-typography-text text-body-6 hover:cursor-pointer">Cookies</li>
                </ul>
            </div>

            <CustomButton className="flex items-center justify-center">
                <span className="text-typography-text text-body-1">Scroll to top</span>
                <AiOutlineArrowUp className="pl-1 w-4 h-4"/>
            </CustomButton> 

        </div>

    </footer>
  )
}

export default Footer