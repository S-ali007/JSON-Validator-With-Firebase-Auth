import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { signOut } from "firebase/auth";
import { auth, db } from "../FireBase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Header({ setToken, extraclasses }) {
  let userEmail = localStorage.getItem("useremail");
  let navigate = useNavigate();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (userEmail) {
      Fetchdata();
    }
  }, [userEmail]);

  async function Fetchdata() {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("formData.email", "==", userEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs.map((doc) => doc.data());
        // console.log("User Data:", userData);
        setInfo(userData);
      } else {
        // console.log("No user found with the provided email.");
        setInfo([]);
      }
    } catch (error) {
      alert.error("Error fetching user data:", error);
    }
  }

  function handleLogout(e) {
    // console.log("hi");
    localStorage.removeItem("useremail");
    navigate("/");

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error during logout:", error);
      });
  }

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
      <div className="flex items-center gap-4 max-w-[350px] w-full">
        <h1 className="font-serif text-[25px] rounded-[10px] text-center tracking-wide border-[2px] max-w-[300px] w-full bg-sky-500 text-white">
          {info.length > 0 ? ` ${info[0].formData.full_name}` : "invalid User"}
        </h1>
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
