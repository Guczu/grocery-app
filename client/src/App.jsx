import Home from "./views/Home/Home"
import { Routes, Route } from 'react-router-dom';
import Products from "./views/Products/Products";
import Navbar from "./views/Navbar/Navbar";
import Categories from "./views/Categories/Categories";
import Footer from "./views/Footer/Footer";
import Account from "./views/Account/Account";

function App() {
  return (
      <div className="w-full bg-main-white font-poppins">
        <Navbar/>
        <Categories/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:filter" element={<Products />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
