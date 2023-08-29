import { useState } from "react";
import Sidebar from "./Sidebar";
import Products from "./Products";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="sticky top-0 left-0 flex justify-between items-center py-7 w-[90%] lg:w-[1024px] mx-auto bg-white">
        <p className="font-bold text-xl text-black">
          New Clothing & Gear (800)
        </p>

        <div className="flex space-x-5">
          <button onClick={() => setToggle(!toggle)}>Hide Filter </button>
          <button>Sort By</button>
        </div>
      </section>

      <main className="flex w-[90%] gap-4 lg:w-[1024px] mx-auto">
        <div
          className={`transition-all duration-300 ${
            toggle ? "w-[0%] opacity-0 -translate-x-full" : "w-[20%] pacity-100"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`${
            toggle ? "w-full" : "w-[80%]"
          } transition-all duration-300`}
        >
          <Products />
        </div>
      </main>
    </>
  );
};

export default Home;
