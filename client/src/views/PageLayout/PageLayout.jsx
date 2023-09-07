import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Categories from "../Categories/Categories"
import Footer from "../Footer/Footer"

const PageLayout = () => {
  return (
    <>
        <Navbar/>
        <Categories/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default PageLayout