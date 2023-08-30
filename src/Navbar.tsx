import { Link } from "react-router-dom";

import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [features, setFeatures] = useState(false);
  const [user] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <nav
      className={features ? "" : "border-b"}
      onMouseLeave={() => setFeatures(false)}
    >
      <section className="flex justify-between items-center py-5 w-[90%] xl:w-[1024px] mx-auto">
        <Link to="/">
          <img src="/assets/pngwing.com.png" className="w-[40px]" alt="" />
        </Link>

        <ul className="hidden lg:flex space-x-5 font-bold">
          <Link to="." className="h-full">
            Home
          </Link>
          <button className="" onMouseEnter={() => setFeatures(true)}>
            News & Features
          </button>
          {user && <Link to="/dashboard">Dashboard</Link>}
        </ul>

        <section className="hidden lg:flex items-center">
          {user ? (
            <ul className="flex space-x-5 text-2xl">
              <li>
                <CiSearch />
              </li>
              <button onClick={() => setShowCart(!showCart)}>
                <FiShoppingBag />
              </button>
              <li className="relative">
                <div className=" w-7 h-7 rounded-full flex justify-center items-center overflow-hidden border-2 border-black">
                  <img
                    src="/assets/pexels-trarete-8502210.jpg"
                    alt=""
                    className="object-cover w-full h-full hover:cursor-pointer"
                    onClick={() => setShowDetails(!showDetails)}
                  />
                </div>
                {showDetails && (
                  <section className="absolute z-10 top-8 -left-16 border text-sm rounded-lg bg-slate-50">
                    <div className="py-2 px-4 border-b">
                      <p>desmondkudjuh@gmail.com</p>
                    </div>
                    <Link to="/">
                      <p className="py-2 px-4 border-b">Favorites</p>
                    </Link>
                    <p className="py-2 px-4 cursor-pointer">Logout</p>
                  </section>
                )}
              </li>
            </ul>
          ) : (
            <Link to="/login">
              <button className="bg-black py-1 px-7 text-white rounded-lg">
                Login
              </button>
            </Link>
          )}
        </section>
      </section>

      {features && (
        <section className="relative">
          <div className="fixed inset-x-0 z-10 bg-white flex justify-between  mx-auto py-5 w-[1200px]">
            <div className="flex space-x-20 justify-center w-full">
              <article>
                <h2 className="font-bold text-lg">Features</h2>
                <p>New Arrivals</p>
                <p>New Shoes</p>
                <p>New Clothings</p>
              </article>
              <article>
                <h2 className="font-bold text-lg">Best Read</h2>
                <p>Jordan Collections</p>
                <p>Nike SB - The Vault</p>
                <p>Sustainabilty</p>
              </article>
              <article>
                <h2 className="font-bold text-lg">Shop Icons</h2>
                <p>Air Force 1</p>
                <p>Air Jordan 1</p>
                <p>Air Max</p>
                <p>Dunk</p>
                <p>Blazer</p>
                <p>Pegasus</p>
              </article>
              <article>
                <p className="font-bold text-lg">Nike News</p>
                <p>New Arrivals</p>
                <p>New Shoes</p>
                <p>New Clothings</p>
              </article>
            </div>
          </div>
        </section>
      )}
      <Cart showCart={showCart} setShowCart={setShowCart} />
      {showCart && (
        <div
          onClick={() => setShowCart(!showCart)}
          className="fixed inset-0 w-full h-screen bg-black/75 z-[20]"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
