import CustomButton from "../../../components/CustomButton/CustomButton"
import { BsFillTrash3Fill } from 'react-icons/bs'

const CartProductTile = () => {
  return (
    <div className="w-full flex flex-col p-8 xl:flex-row items-center justify-evenly h-max rounded-[15px] relative bg-base-softbackground">

        <div className="absolute right-0 top-0 p-2 md:p-6">
            <span>
                Price: 0
            </span>
        </div>

        <div className="w-32 h-32 border-2 rounded bg-main-white flex justify-center items-center">
            Image
        </div>

        <div>
            <p>
                Name of product
            </p>

            <p>
                Description of product
            </p>
        </div>

        <div className="flex gap-3">
            <CustomButton
                className="w-6 h-6 rounded-full border-2 border-main-softblack flex justify-center items-center"
            >
                <span>-</span>
            </CustomButton>
            <span>
                Amount: 0
            </span>
            <CustomButton
                className="w-6 h-6 rounded-full border-2 border-main-softblack flex justify-center items-center"
            >
                <span>+</span>
            </CustomButton>
        </div>

        <div className="absolute right-0 bottom-0 p-4">
            <button>
                <BsFillTrash3Fill className="w-6 h-6"/>
            </button>
        </div>
    </div>
  )
}

export default CartProductTile