import React, { useRef } from "react";
import BtnItem from "../Components/BtnItem";
import InpItem from "../Components/InpItem";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const Email = useRef(null);
  // const Password = useRef(null);
  // const nav = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("email", Email.current.value);
  //   nav("/Profile");
  // };
  const arr = [
    {
      label : "Email id"
    },
    {
      label : "Password"
    }
  ]

  const name = "Login"
  return (
    <div
      className="form bg-[#F9F9F9] flex flex-col p-3 mt-7 rounded-md w-[85%] m-auto"
    >
      <h3 className="head text-[25px] font-[600]  p-[10px] pt-[1px] pb-0 ">
        PopX account
      </h3>
      <small className="p-[10px] pt-0 pb-7 text-gray-500 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aut
        tempore rem!
      </small>
      {
        arr.map((item , index)=>{
          return <InpItem  key={index} data={item} num={index}/> 
        })
      }
 

      <Link to={"/profile"} className="">
        {" "}
        <BtnItem name={name} />
      </Link>
    </div>
  );
};

export default LoginForm;
