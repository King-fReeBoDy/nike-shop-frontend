import { FiShoppingBag } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const DashboradSidebar = () => {
  return (
    <section className="h-full pt-10">
      <h2 className="font-bold text-xl mb-5">Admin Dashboard</h2>

      <Link to="/dashboard">
        <div className="flex items-center justify-between mb-5 py-2 pr-4  transition-all duration-300 border-b">
          <p>Get all users</p>
          <p>
            <VscAccount />
          </p>
        </div>
      </Link>

      <Link to="/dashboard/allproducts">
        <div className="flex items-center justify-between mb-5 py-2 pr-4  transition-all duration-300 border-b">
          <p>Get all products</p>
          <p>
            <FiShoppingBag />
          </p>
        </div>
      </Link>

      {/* <Link to="/dashboard/allfavorites">
        <div className="flex items-center justify-between mb-5 py-2 pr-4  transition-all duration-300 border-b">
          <p>Get all favorites</p>
          <p>
            <AiOutlineHeart />
          </p>
        </div>
      </Link> */}
    </section>
  );
};

export default DashboradSidebar;
