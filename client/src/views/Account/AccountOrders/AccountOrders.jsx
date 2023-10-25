import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { AiOutlineShopping } from 'react-icons/ai'
import { getOrders } from "../../../services/order.service"
import AccountOrdersTile from "../AccountOrdersTile/AccountOrdersTile"

const AccountOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [isListExpanded, setIsListExpanded] = useState(false);

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
            {userOrders.length > 3 ? (
              <div className="flex flex-col items-center gap-4">
                {userOrders.slice(0, isListExpanded ? userOrders.length : 3).map((item, index) => (
                  <AccountOrdersTile key={index} item={item}/>
                ))}

              {isListExpanded ? (
                <CustomButton 
                  styles="w-[150px] flex flex-col border-0 text-heading-4 bg-main-primary hover:bg-main-third text-black text-bold"
                  onClick={() => setIsListExpanded(false)}
                >
                  <span>
                    Zwiń
                  </span>
                </CustomButton>
              ) : (
                <CustomButton 
                  styles="w-[150px] flex flex-col border-0 text-heading-4 bg-main-primary hover:bg-main-third text-black text-bold"
                  onClick={() => setIsListExpanded(true)}
                >
                  <span>
                    Rozwiń
                  </span>
                </CustomButton>
              )}
              </div>
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