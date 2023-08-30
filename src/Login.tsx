import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { FormEvent, ChangeEvent, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!login.email || !login.password) {
      return;
    }
  };

  console.log(login);

  return (
    <section className="h-screen flex justify-center items-center">
      <main className="w-[500px] mx-auto">
        <Link to="/" className="flex items-center mb-5">
          <IoIosArrowBack />
          <h5 className="ml-2">Home</h5>
        </Link>

        <section className="">
          <h2 className="text-center text-2xl mb-5 font-bold">Login</h2>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <p className="text-sm">Email</p>
              <input
                type="text"
                name="email"
                className="border w-full py-2 px-3 rounded-lg"
                onChange={handleLogin}
              />
            </div>
            <div className="mb-5">
              <p className="text-sm">Password</p>
              <input
                type="password"
                name="password"
                className="border w-full py-2 px-3 rounded-lg"
                onChange={handleLogin}
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
