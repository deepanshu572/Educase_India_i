import React, { useRef } from "react";
import BtnItem from "../Components/BtnItem";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const Email = useRef(null);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(Email.current.value);
    console.log("====================================");
    localStorage.setItem("email", Email.current.value);
    nav("/Profile");
  };

  const name = "Create Account";
  return (
    <form
      action=""
      onSubmit={(e) => handleSubmit(e)}
      className="form_data bg-[#F9F9F9] flex flex-col p-3 mt-7 rounded-md w-[85%] m-auto"
    >
      <h3 className="head text-[25px] font-[600]  p-[10px] pt-[1px] mb-3 ">
        PopX account
      </h3>
      <div className="form">
        <div className="input flex mb-3 flex-col p-2">
          <input
            type="text"
            id="input1"
            autoComplete="off"
            required
            className="w-full input_item  p-4 outline-0 border-[0.2px] border-solid border-[#36363641]"
          />
          <label htmlFor="input1" className="inp_item input">
            Full name *
          </label>
        </div>
        <div className="input flex mb-3 flex-col p-2">
          <input
            type="text"
            id="input2"
            autoComplete="off"
            required
            className="w-full input_item  p-4 outline-0 border-[0.2px] border-solid border-[#36363641]"
          />
          <label htmlFor="input2" className="inp_item input">
            Phone number *
          </label>
        </div>
        <div className="input flex mb-3 flex-col p-2">
          <input
            type="text"
            id="input3"
            autoComplete="off"
            required
            ref={Email}
            className="w-full input_item  p-4 outline-0 border-[0.2px] border-solid border-[#36363641]"
          />
          <label htmlFor="input3" className="inp_item input">
            Email Address *
          </label>
        </div>
        <div className="input flex mb-3 flex-col p-2">
          <input
            type="text"
            id="input4"
            autoComplete="off"
            required
            className="w-full input_item  p-4 outline-0 border-[0.2px] border-solid border-[#36363641]"
          />
          <label htmlFor="input4" className="inp_item input">
            Password *
          </label>
        </div>
        <div className="input flex mb-3 flex-col p-2">
          <input
            type="text"
            id="input5"
            autoComplete="off"
            required
            className="w-full input_item  p-4 outline-0 border-[0.2px] border-solid border-[#36363641]"
          />
          <label htmlFor="input5" className="inp_item input">
            Company name *
          </label>
        </div>
        <div className="input_check mb-3 px-4  pb-5">
          <h3 className="mb-2.5 mt-2 text-[16px]">Are you an Agency?*</h3>
          <div className="inp_check_data inline mr-2">
            <input type="radio" name="radio" id="inp1" />
            <label htmlFor="inp1" className="ml-2">
              YES
            </label>
          </div>
          <div className="inp_check_data inline ">
            <input type="radio" name="radio" id="inp2" />
            <label htmlFor="inp2" className="ml-2">
              NO
            </label>
          </div>
        </div>
        <div>
          {" "}
          <BtnItem name={name} />{" "}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
