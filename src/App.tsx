import { Routes, Route } from "react-router-dom";

import SharedLayout from "./layouts/SharedLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Restricted from "./components/Restricted";
import IsAuth from "./components/IsAuth";
import SingleProduct from "./components/SingleProduct";
import DashboardLayout from "./layouts/DashboardLayout";
import GetAllProducts from "./pages/GetAllProducts";
import GetAllUsers from "./pages/GetAllUsers";

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
            </Route>
          </Route>
        </Route>
      </Routes>
    </section>
  );
}

export default App;
