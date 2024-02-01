import React, { useContext, useState } from "react";
import AuthComp from "./AuthComp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../pages/Layout";

const Signin = () => {
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
      toast.warn("Please fill all the neccessory details!", {
        position: "top-right",
      });
    } else {
      const existingUser = JSON.parse(localStorage.getItem(userDataInput.username))

      if (existingUser === null) {
        toast.error("Account doesn't exist! Please Signup!", {
          position: "top-right",
        });
      } else {
        console.log(existingUser);
        
        if (existingUser.password === userDataInput.password) {
          setUser(userDataInput);
          navigate("/movies");
          toast.success("Signin successfull!", {
            position: "top-right",
          });
        } else {
          toast.error("Username or password do not match!!", {
            position: "top-right",
          });
        }
      }
    }
  }
  return (
    <AuthComp
      heading="Sign-In"
      handleChange={handleChange}
      buttonLabel="Sign-In"
      handleButtonClick={handleSubmit}
      authMessage="Don't have an account"
    />
  );
};
export default Signin;
