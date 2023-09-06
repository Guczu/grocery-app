import Home from "./views/Home/Home"
import { Routes, Route } from 'react-router-dom';
import Products from "./views/Products/Products";
import Navbar from "./views/Navbar/Navbar";
import Categories from "./views/Categories/Categories";
import Footer from "./views/Footer/Footer";
import Account from "./views/Account/Account";
import Cart from "./views/Cart/Cart";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

function App() {
  return (
      <div className="w-full bg-main-white font-poppins">
        <Navbar/>
        <Categories/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:filter" element={<Products />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
