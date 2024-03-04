import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { PrivateRoute, AdminRoute } from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home"
import AdminPage from "./pages/AdminPage";
import SoloProduct from "./pages/SoloProduct";

import CartPage from "./pages/cartPage";
import Foo from "./pages/Foo";
import CatePage from "./pages/CatePage";
import SearchByCate from "./pages/SearchByCate";
import UserProfile from "./pages/UserProfile";
import SoloOrder from "./pages/SoloOrder";
import EditProduct from "./admin/EditProduct";
import { PayShop } from "./pages/PayShop";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route element={<PrivateRoute/>}>
            <Route index element={<Home/>} />
            <Route path='product/:nombre' element={<SoloProduct />} />
            <Route path='cart/' element={<CartPage/>} />
            <Route path='pay/' element={<PayShop />} />
            <Route path='foo/' element={<Foo/>} />
            <Route path='cate' element={<CatePage/>} />
            <Route path='cate/:cate' element={<SearchByCate/>} />
            <Route path="profile" element={<UserProfile/>}/>
            <Route path="order/:id" element={<SoloOrder />} />

          </Route>

          <Route path='admin' element={<AdminRoute/>}>
            <Route index element={<AdminPage/>} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route index element={<LandingPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App