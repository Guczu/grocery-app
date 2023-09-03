import CustomButton from "../../../components/CustomButton/CustomButton"
import { AiOutlineShopping } from 'react-icons/ai'

const AccountOrders = () => {
  return (
    <div className="w-full relative flex flex-col items-center">

        <div className="w-max flex flex-col items-center justify-center gap-3">
            <span className="text-heading-6">
                Brak zamówień
            </span>

            <CustomButton styles="w-14 h-14 rounded-[5px] bg-main-primary hover:bg-main-third text-white">
                <AiOutlineShopping className="w-6 h-6"/>
            </CustomButton>
        </div>
    </div>
  )
}

export default AccountOrders