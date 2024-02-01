import React, { useState } from "react";
// import InputField from '../components/form/InputField'
import { useNavigate } from "react-router-dom";
import AuthComp from "./AuthComp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserDataContext } from "../../pages/Layout";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  interface UserData {
    username: string;
    password: string;
  }
  const userdata: UserData = {
    username: "",
    password: "",
  };

  const [userDataInput, setuserDataInput] = useState<UserData>(userdata);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name, e.target.value);
    setuserDataInput({ ...userDataInput, [e.target.name]: e.target.value });
    console.log(userDataInput);
  }

  function handleSubmit() {
    if (userDataInput.username === "" || userDataInput.password === "") {
      toast.warn("Please fill all neccessory details!", {
        position: "top-right",
      });
    } else {
      localStorage.setItem(
        userDataInput.username,
        JSON.stringify(userDataInput)
      );

      setUser(userDataInput);
      navigate("/movies");
      toast.success("Signup successfull!");
    }
  }
  return (
    <AuthComp
      heading="Sign-Up"
      handleChange={handleChange}
      buttonLabel="Sign-Up"
      handleButtonClick={handleSubmit}
      authMessage="Already have an account"

    />
  );
};

export default Signup;
