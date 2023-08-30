import InfoLabel from "../InfoLabel/InfoLabel"
import Navbar from "../Navbar/Navbar"
import Newsletter from "../Newsletter/Newsletter"
import ShopList from "../Shoplist/Shoplist"
import Footer from "../Footer/Footer"
import Categories from "../Categories/Categories"

const Home = () => {
  return (
    <main className="w-screen h-screen bg-main-white font-poppins overflow-y-scroll">
        {
            //Navbar

            //Choose shop

            //Service tiles

            //Newsletter

            //Footer
        }
        <Navbar/>

        <Categories/>

        <ShopList/>

        <Newsletter/>
        
        <InfoLabel/>

        <Footer/>
    </main>
  )
}

export default Home