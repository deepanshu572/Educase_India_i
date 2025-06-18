import React, { useRef } from "react";
import BtnItem from "../Components/BtnItem";
import InpItem from "../Components/InpItem";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const Email = useRef(null);
  const Password = useRef(null);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", Email.current.value);
    nav("/Profile");
  };

  const name = "Login"
  return (
    <form
      action=""
      onSubmit={(e) => handleSubmit(e)}
      className="form bg-[#F9F9F9] flex flex-col p-3 mt-7 rounded-md w-[85%] m-auto"
    >
      <h3 className="head text-[25px] font-[600]  p-[10px] pt-[1px] pb-0 ">
        PopX account
      </h3>
      <small className="p-[10px] pt-0 pb-7 text-gray-500 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aut
        tempore rem!
      </small>
      <div className="input flex mb-3 flex-col p-2">
        <input
          type="text"
          id="input1"
          autoComplete="off"
          ref={Email}
          required
          className="w-full input_item  p-4 outline-0 border-[0.2px] border-solid border-[#36363641]"
        />
        <label htmlFor="input1" className="inp_item input">
          Email Address *
        </label>
      </div>
      <div className="input flex mb-3 flex-col p-2">
        <input
          type="text"
          id="input1"
          ref={Password}
          autoComplete="off"
          required
          className="w-full input_item  p-4 outline-0 border-[0.2px] border-solid border-[#36363641]"
        />
        <label htmlFor="input1" className="inp_item input">
          Password *
        </label>
      </div>

      <div className="mt-4">
        {" "}
        <BtnItem name={name} />
      </div>
    </form>
  );
};

export default LoginForm;
