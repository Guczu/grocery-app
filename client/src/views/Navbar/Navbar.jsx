import CustomButton from "../../components/CustomButton/CustomButton"
import { IoIosArrowDown } from 'react-icons/io';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { GoPerson } from 'react-icons/go';
import { PiHandbag } from 'react-icons/pi';
import CustomInput from "../../components/CustomInput/CustomInput";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [searchText, setSearchText] = useState('');

  return (
    <nav className="mx-auto h-[90px] gap-4 bg-base-softbackground flex items-center justify-evenly px-10">
        <Link to="/" className="text-main-primary text-heading-4 font-medium">
            Groceries
        </Link>

        <div className="hidden xl:flex items-center justify-between w-[48rem] h-[50px] rounded-full p-3 gap-4 bg-main-white focus:outline-none">
            <CustomButton styles={"text-body-1 bg-base-graybackground hover:bg-base-border gap-2 hidden lg:flex"}>
                <span className="text-typography-text">
                    All categories
                </span>
                <IoIosArrowDown/>
            </CustomButton>

            <CustomInput
                className={"text-body-1 text-typography-subtext w-[30rem] h-[30px] focus:outline-none"}
                disabled={false}
                name={'search'}
                onChange={setSearchText}
                placeholder={'Search anything'}
                type={'text'}
            >
                <RxMagnifyingGlass className="w-6 h-6 hover:cursor-pointer"/>
            </CustomInput>
        </div>

        <div className="flex justify-center items-center gap-3">
            <CustomButton styles="text-body-2 bg-main-primary hover:bg-main-third text-white px-6 py-3 hidden md:block">
                <span>
                    Help
                </span>
            </CustomButton>

            <CustomButton styles="text-body-6 gap-2">
                <GoPerson className="relative w-6 h-6 hover:cursor-pointer"/>
                <span className="hidden sm:flex">
                    Account
                </span>
            </CustomButton>

            <CustomButton styles="text-body-6 gap-2">
                <PiHandbag className="relative w-6 h-6 hover:cursor-pointer"/>
                <span className="hidden sm:flex">
                    Shopping
                </span>
            </CustomButton>
        </div>
    </nav>
  )
}

export default Navbar