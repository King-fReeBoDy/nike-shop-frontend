import { useState } from "react";
import Sidebar from "./Sidebar";
import Products from "./Products";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="sticky top-0 left-0 flex justify-between items-center py-7 w-[90%] xl:w-[1024px] mx-auto bg-white">
        <h2 className="font-bold text-xl lg:text-2xl text-black">
          New Clothing & Gear (800)
        </h2>

        <div className="hidden md:flex space-x-5">
          <button onClick={() => setToggle(!toggle)}>Hide Filter </button>
          <button>Sort By</button>
        </div>
      </section>

      <main className="flex w-[90%] gap-4 xl:w-[1024px] mx-auto">
        <div
          className={`hidden md:flex transition-all duration-300 ${
            toggle
              ? "w-[0%] opacity-0 -translate-x-full"
              : "w-[20%] opacity-100"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`w-full ${
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
