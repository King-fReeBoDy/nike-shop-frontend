import { VscClose } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type ICart = {
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
};

const Cart = ({ showCart, setShowCart }: ICart) => {
  return (
    <section
      className={`fixed top-0 right-0 w-full md:w-[400px] h-screen bg-white z-[50] p-10 ${
        showCart ? "-translate-x-0" : "translate-x-full"
      } transition-all duration-300 `}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-3xl">Cart</h2>
        <button onClick={() => setShowCart(!showCart)} className="text-3xl">
          <VscClose />
        </button>
      </div>

      <main className="h-1/2 overflow-y-scroll">
        <section className="flex justify-between w-full space-x-5 mb-5">
          <div className="w-[50px] overflow-hidden flex justify-center items-center">
            <img
              src="/assets/pexels-photo-6739730.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="line-clamp-2 w-40">Lorem ipsum</h2>
            <p className="font-bold">$12015</p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <p>
              <IoIosArrowUp />
            </p>
            <p className="font-bold text-lg">1</p>
            <p>
              <IoIosArrowDown />
            </p>
          </div>
        </section>
        <section className="flex justify-between w-full space-x-5 mb-5">
          <div className="w-[50px] overflow-hidden flex justify-center items-center">
            <img
              src="/assets/pexels-photo-6739730.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="line-clamp-2 w-40">Lorem ipsum</h2>
            <p className="font-bold">$12015</p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <p>
              <IoIosArrowUp />
            </p>
            <p className="font-bold text-lg">1</p>
            <p>
              <IoIosArrowDown />
            </p>
          </div>
        </section>
        <section className="flex justify-between w-full space-x-5 mb-5">
          <div className="w-[50px] overflow-hidden flex justify-center items-center">
            <img
              src="/assets/pexels-photo-6739730.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="line-clamp-2 w-40">Lorem ipsum</h2>
            <p className="font-bold">$12015</p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <p>
              <IoIosArrowUp />
            </p>
            <p className="font-bold text-lg">1</p>
            <p>
              <IoIosArrowDown />
            </p>
          </div>
        </section>
        <section className="flex justify-between w-full space-x-5 mb-5">
          <div className="w-[50px] overflow-hidden flex justify-center items-center">
            <img
              src="/assets/pexels-photo-6739730.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="line-clamp-2 w-40">Lorem ipsum</h2>
            <p className="font-bold">$12015</p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <p>
              <IoIosArrowUp />
            </p>
            <p className="font-bold text-lg">1</p>
            <p>
              <IoIosArrowDown />
            </p>
          </div>
        </section>
        <section className="flex justify-between w-full space-x-5 mb-5">
          <div className="w-[50px] overflow-hidden flex justify-center items-center">
            <img
              src="/assets/pexels-photo-6739730.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="line-clamp-2 w-40">Lorem ipsum</h2>
            <p className="font-bold">$12015</p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <p>
              <IoIosArrowUp />
            </p>
            <p className="font-bold text-lg">1</p>
            <p>
              <IoIosArrowDown />
            </p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Cart;
