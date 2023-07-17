import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import LoginPopup from "../Features/LoginPopup";
import SignupPage from "../Features/Signup";
import {  signOut } from "firebase/auth";
import {auth} from '../FireBase';

function Header({ setToken, extraclasses }) {
  let username = localStorage.getItem("username");
  let navigate = useNavigate();

  function handleLogout(e) {
    console.log("hi");
    localStorage.removeItem("useremail");
    navigate("/");

    signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  
  }

  // console.log();
  return (
    <div className="font-Anton flex justify-between items-center flex-wrap">
      <h1 className="text-[40px] font-bold bg-sky-500 text-white border-[2px] pl-2 pr-[2px] rounded-[13px]">
        <a href="/home">
          JSON{" "}
          <span className="bg-[white] text-sky-500 p-[6px] rounded-[10px]">
            Validator
          </span>{" "}
        </a>
      </h1>
      <div className=" flex  items-center gap-4 max-w-[300px] w-full">
        <h1 className="  font-serif  text-[25px] rounded-[10px] text-center tracking-wide border-[2px]  max-w-[300px]  w-full bg-sky-500 text-white " >{username}</h1>
        <Button
          extraclasses="w-[130px]"
          text="Log Out"
          handleclick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Header;
