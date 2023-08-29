type ICart = {
  showCart: boolean;
};

const Cart = ({ showCart }: ICart) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[500px] h-screen bg-white z-[50] ${
        showCart ? "-translate-x-0" : "translate-x-full"
      } transition-all duration-300`}
    >
      Cart
    </div>
  );
};

export default Cart;
