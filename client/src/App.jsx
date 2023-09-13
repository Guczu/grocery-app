import Home from "./views/Home/Home"
import { Routes, Route } from 'react-router-dom';
import Products from "./views/Products/Products";
import Account from "./views/Account/Account";
import Cart from "./views/Cart/Cart";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import PageLayout from "./views/PageLayout/PageLayout";
import NotFound from "./views/NotFound/NotFound";
import ProtectedRoute from "./guards/ProtectedRoute";

function App() {
  return (
      <div className="w-full h-screen bg-main-white font-poppins">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<NotFound />} />

          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Products />} />
            <Route path="/categories/:filter" element={<Products />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/account" element={<Account />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
  )
}

export default App
