import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

const Register = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <main className="w-[500px] mx-auto">
        <Link to="/" className="flex items-center mb-5">
          <IoIosArrowBack />
          <h5 className="ml-2">Home</h5>
        </Link>

        <section className="">
          <h2 className="text-center text-2xl mb-5 font-bold">Register</h2>

          <form>
            <div className="mb-2">
              <p className="text-sm">Email</p>
              <input
                type="text"
                name="email"
                className="border w-full py-2 px-3 rounded-lg"
              />
            </div>
            <div className="mb-2">
              <p className="text-sm">Password</p>
              <input
                type="password"
                name="password"
                className="border w-full py-2 px-3 rounded-lg"
              />
            </div>
            <div className="mb-2">
              <p className="text-sm">Confirm Password</p>
              <input
                type="password"
                name="confrimpassword"
                className="border w-full py-2 px-3 rounded-lg"
              />
            </div>

            <div className="flex items-center mb-5">
              <div className="h-10 w-10 rounded-full mr-5 overflow-hidden flex justify-center items-center">
                <img
                  src="/public/assets/pexels-el-gringo-photo-10371092.jpg"
                  alt=""
                  className=""
                />
              </div>
              <input type="file" name="files" id="" accept="image/*" />
            </div>

            <button className="w-full text-white text-center bg-black py-2 mb-5 rounded-lg">
              Register account
            </button>
            <Link to="/login">
              <p className="text-center text-sm mx-auto">
                Already have an account?
              </p>
            </Link>
          </form>
        </section>
      </main>
    </section>
  );
};

export default Register;
