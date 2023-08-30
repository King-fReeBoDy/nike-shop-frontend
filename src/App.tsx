import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Restricted from "./Restricted";
import IsAuth from "./IsAuth";
import SingleProduct from "./SingleProduct";
import DashboardLayout from "./DashboardLayout";
import GetAllProducts from "./GetAllProducts";
import GetAllUsers from "./GetAllUsers";
import GetAllFavorites from "./GetAllFavorites";

function App() {
  return (
    <section className="">
      <Routes>
        <Route element={<Restricted />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route element={<IsAuth />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<GetAllUsers />} />
              <Route
                path="/dashboard/allproducts"
                element={<GetAllProducts />}
              />
              <Route
                path="/dashboard/allfavorites"
                element={<GetAllFavorites />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </section>
  );
}

export default App;
