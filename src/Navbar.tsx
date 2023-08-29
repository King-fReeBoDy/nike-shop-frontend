import { Link } from "react-router-dom";

import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [features, setFeatures] = useState(false);
  const [user] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <nav
      className={features ? "" : "border-b"}
      onMouseLeave={() => setFeatures(false)}
    >
      <section className="flex justify-between items-center py-5 w-[90%] lg:w-[1024px] mx-auto">
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

        <section className="hidden lg:flex">
          {user ? (
            <ul className="flex space-x-5 text-xl">
              <li>
                <CiSearch />
              </li>
              <button onClick={() => setShowCart(!showCart)}>
                <FiShoppingBag />
              </button>
              <li>
                <VscAccount />
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
                <p className="font-bold text-lg">Features</p>
                <p>New Arrivals</p>
                <p>New Shoes</p>
                <p>New Clothings</p>
              </article>
              <article>
                <p className="font-bold text-lg">Best Read</p>
                <p>Jordan Collections</p>
                <p>Nike SB - The Vault</p>
                <p>Sustainabilty</p>
              </article>
              <article>
                <p className="font-bold text-lg">Shop Icons</p>
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
      <Cart showCart={showCart} />
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
