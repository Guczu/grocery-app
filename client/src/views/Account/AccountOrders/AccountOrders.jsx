import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { AiOutlineShopping } from 'react-icons/ai'
import { getOrders } from "../../../services/order.service"
import AccountOrdersTile from "../AccountOrdersTile/AccountOrdersTile"

const AccountOrders = () => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrders();

      if (orders) {
        const sortedOrders = orders
          .map(order => ({ ...order, date: new Date(order.orderDate) }))
          .sort((a, b) => b.date - a.date);
        setUserOrders(sortedOrders);
      }
    }
    fetchOrders();
  },[])

  return (
    <section className="w-full relative flex flex-col items-center">

        <div className="w-max flex flex-col items-center justify-center gap-3">
            {userOrders.length > 0 ? (
              <>
                {userOrders.map((item, index) => (
                  <AccountOrdersTile key={index} item={item}/>
                ))}
              </>
            ) : (
              <>
                <span className="text-heading-6">
                    Brak zamówień
                </span>

                <CustomButton styles="w-14 h-14 rounded-[5px] bg-main-primary hover:bg-main-third text-white">
                    <AiOutlineShopping className="w-6 h-6"/>
                </CustomButton>
              </>
            )}
        </div>
    </section>
  )
}

export default AccountOrders