import { Link } from "react-router-dom";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { ChangeEvent, FormEvent, useState } from "react";

const Register = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    files: null,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = event.target;

    setRegister((prev) => {
      return {
        ...prev,
        [name]: type === "file" ? (files as FileList) : value,
      };
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!register.email || !register.password || !register.confirmpassword) {
      return console.log("Provide all credentials");
    }
    if (register.password !== register.confirmpassword) {
      return console.log("Password do not match");
    }
    const formData = new FormData();
    formData.append("email", register.email);
    formData.append("password", register.password);
    if (register.files) {
      formData.append("files", register.files[0]);
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/register",
        formData
      );
      console.log(data);
      setRegister({
        email: "",
        password: "",
        confirmpassword: "",
        files: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <main className="w-[500px] mx-auto">
        <Link to="/" className="flex items-center mb-5">
          <IoIosArrowBack />
          <h5 className="ml-2">Home</h5>
        </Link>

        <section className="">
          <h2 className="text-center text-2xl mb-5 font-bold">Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <p className="text-sm">Email</p>
              <input
                type="text"
                name="email"
                className="border w-full py-2 px-3 rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <p className="text-sm">Password</p>
              <input
                type="password"
                name="password"
                className="border w-full py-2 px-3 rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <p className="text-sm">Confirm Password</p>
              <input
                type="password"
                name="confirmpassword"
                className="border w-full py-2 px-3 rounded-lg"
                onChange={handleChange}
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
              <input
                type="file"
                name="files"
                id=""
                accept="image/*"
                onChange={handleChange}
              />
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
