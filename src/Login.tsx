import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <main className="w-[500px] mx-auto">
        <Link to="/" className="flex items-center mb-5">
          <IoIosArrowBack />
          <h5 className="ml-2">Home</h5>
        </Link>

        <section className="">
          <h1 className="text-center text-2xl mb-5">Login</h1>

          <form>
            <div className="mb-2">
              <p className="text-sm">Email</p>
              <input
                type="text"
                name=""
                id=""
                className="border w-full py-2 px-3 rounded-lg"
              />
            </div>
            <div className="mb-5">
              <p className="text-sm">Password</p>
              <input
                type="password"
                name=""
                id=""
                className="border w-full py-2 px-3 rounded-lg"
              />
            </div>

            <button className="w-full text-white text-center bg-black py-2 mb-5 rounded-lg">
              Login to account
            </button>
            <Link to="/register">
              <p className="text-center text-sm">Register an account?</p>
            </Link>
          </form>
        </section>
      </main>
    </section>
  );
};

export default Login;
