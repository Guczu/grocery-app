import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { FiEdit } from 'react-icons/fi'
import { getAddress } from "../../../services/address.service";
import LoadingPage from '../../LoadingPage/LoadingPage'

const AccountPersonalData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState({});

  useEffect(() => {
    const setAddress = async () => {
      const userId = localStorage.getItem('userId');
      const response = await getAddress(userId);
      
      if (response) {
        setAddress(response);
      }
    }

    setAddress();
    setIsLoading(false);
  }, [])

  return (
    <div className="w-full relative flex flex-col items-center md:items-start gap-4">

        <span className="text-heading-4 mb-6">
            Dane osobowe
        </span>

        {
          isLoading ? (
            <>
              <LoadingPage />
            </>
          ) : (
            <div className="flex flex-col gap-2 text-heading-2">
                <span>Imię: {address.firstName ? address.firstName : ""}</span>
                <span>Nazwisko: {address.lastName ? address.lastName : ""}</span>
                <span>E-mail: {address.email ? address.email : ""}</span>
                <span>Miejscowość: {address.locality ? address.locality : ""}</span>
                <span>Kod pocztowy: {address.postalCode ? address.postalCode : ""}</span>
                <span>Miasto: {address.city ? address.city : ""}</span>
                <span>Numer telefonu: {address.phoneNumber ? address.phoneNumber : ""}</span>
            </div>
          )
        }

        <CustomButton styles="w-14 h-14 rounded bg-main-primary hover:bg-main-third text-white md:absolute md:right-0">
            <FiEdit className="w-6 h-6"/>
        </CustomButton>

    </div>
  )
}

export default AccountPersonalData