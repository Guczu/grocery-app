import CustomButton from "../../components/CustomButton/CustomButton"
import { IoIosArrowDown } from 'react-icons/io';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { GoPerson } from 'react-icons/go';
import { PiHandbag } from 'react-icons/pi';
import CustomInput from "../../components/CustomInput/CustomInput";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
  return (
    <nav className="mx-auto h-[90px] gap-4 bg-base-softbackground flex items-center justify-evenly px-10">
        <Link to="/" className="text-main-primary text-heading-4 font-medium">
            Groceries
        </Link>

        <Searchbar/>

        <div className="justify-center items-center gap-3 hidden sm:flex">
            <CustomButton styles="text-body-2 bg-main-primary hover:bg-main-third text-white px-6 py-3 hidden md:block">
                <span>
                    Pomoc
                </span>
            </CustomButton>

            <CustomButton styles="text-body-6 gap-2 hidden sm:flex">
                <Link to='/account' className="flex gap-2">
                    <GoPerson className="relative w-6 h-6 hover:cursor-pointer"/>
                    Konto
                </Link>
            </CustomButton>

            <CustomButton styles="text-body-6 gap-2 hidden sm:flex">
                <Link to='/cart' className="flex gap-2">
                    <PiHandbag className="relative w-6 h-6 hover:cursor-pointer"/>
                    Koszyk
                </Link>
            </CustomButton>
        </div>
    </nav>
  )
}

export default Navbar