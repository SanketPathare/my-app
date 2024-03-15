"use client";
import Login from "../_components/login";
import SignUp from "../_components/signUp";
import { useState } from "react";
const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="container">
      <h1>Welcome to our restaurant!</h1>

      {login ? <Login /> : <SignUp />}

     <div>
     <button className="button-link" onClick={()=>setLogin(!login)} >
        {login
          ? " Do not have account?  SignUp"
          : "Already have Account? Login"}
      </button>
     </div>
    </div>
  );
};
export default Restaurant;
