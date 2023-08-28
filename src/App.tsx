import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import SharedLayout from "./SharedLayout";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <section className="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
