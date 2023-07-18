import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase";

function LoginPopup({ onClose, setToken }) {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  // console.log(formData)

  function handleChange(event) {
    setformData((preFormData) => {
      return {
        ...preFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        if (userCredential.user.email) {
          const userverification = userCredential.user.email;
          localStorage.setItem("useremail", userverification);
          navigate("/home");
          // console.log(userverification,"hi  ");
        } else {
          alert("invalid");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-[600px] ">
        <div className="border- border-[2px] max-w-[500px] w-full  rounded-[20px]">
          <form
            onSubmit={handleSubmit}
            className="max-w-[500px] w-full p-[2px]"
          >
            <div className="bg-sky-500  rounded-[20px] text-white">
              <h3 className="max-w-[250px] w-full items-center text-center font-bold text-[30px] py-4 ">
                Log In To JSON VALIDATOR
              </h3>
            </div>
            <div className="px-[4px] mt-[20px]">
              <div className="mb-3 flex gap-[30px] h-[50px]">
                <label className="w-full max-w-[100px]  text-center flex justify-center  items-center ">
                  Email address
                </label>
                <input
                  name="email"
                  className="form-control w-full border border-blue-300 rounded-[5px] px-[4px] outline-none hover:border-sky-700 hover:border-b-4 "
                  placeholder="Enter email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 flex gap-[60px] h-[50px]">
                <label className="w-full max-w-[70px] flex justify-center  items-center ">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control w-full border border-blue-300 rounded-[5px] px-[4px] outline-none hover:border-sky-700  hover:border-b-4"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid flex justify-center items-center ">
                <button
                  type="submit"
                  className="btn btn-primary border-[2px] font-bold text-sky-500 hover:text-white text-[16px]  rounded-[10px] max-w-[200px] w-full text-center  py-[5px]  hover:bg-sky-500 "
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <Link to="/Signup">
              <button className="mt-4 ">
                Not Have an Account ? Sign up now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPopup;
