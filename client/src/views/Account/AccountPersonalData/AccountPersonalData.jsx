import CustomButton from "../../../components/CustomButton/CustomButton"
import { FiEdit } from 'react-icons/fi'

const AccountPersonalData = () => {
  return (
    <div className="w-full relative flex flex-col">

        <CustomButton styles="w-14 h-14 rounded bg-main-primary hover:bg-main-third text-white absolute right-0">
            <FiEdit className="w-6 h-6"/>
        </CustomButton>

        <span className="text-heading-4 mb-6">
            Dane osobowe
        </span>

        <div className="flex flex-col gap-2 text-heading-2">
            <span>Imię: Twoje Imię</span>
            <span>Nazwisko: Twoje Nazwisko</span>
            <span>E-mail: Email</span>
            <span>Numer telefonu: Nr Telefonu</span>
        </div>

    </div>
  )
}

export default AccountPersonalData