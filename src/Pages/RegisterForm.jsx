import React, { useRef } from "react";
import BtnItem from "../Components/BtnItem";
import { Link, useNavigate } from "react-router-dom";
import InpItem from "../Components/InpItem";

const RegisterForm = () => {
  // const Email = useRef(null);
  // const nav = useNavigate();


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("====================================");
  //   console.log(Email.current.value);
  //   console.log("====================================");
  //   localStorage.setItem("email", Email.current.value);
  //   nav("/Profile");
  // };
  const arr = [
    {
      label :"Full name"
    },
    {
      label :"Phone number"
    },
    {
      label :"Email address"
    },
    {
      label :"Password"
    },
    {
      label :"Company name"
    },
  ]

  const name = "Create Account";
  return (
    <form
      action=""
      onSubmit={(e) => handleSubmit(e)}
      className="form_data bg-[#F9F9F9] h-[100vh] flex flex-col p-3 mt-7 rounded-md w-[85%] m-auto"
    >
      <h3 className="head text-[25px] font-[600]  p-[10px] pt-[1px] mb-3 ">
       Create Your PopX account
      </h3>
      <div className="form">
       {
        arr.map((item , index)=>{
          return <InpItem  key={index} data={item} num={index}/>
        })
       }
        <div className="input_check mb-3 px-4  pb-5">
          <h3 className="mb-2.5 mt-2 text-[14px]">Are you an Agency?*</h3>
          <div className="flex  items-center gap-5">
          <div className="inp_check_data flex mr-2 items-center">
            <input type="radio" name="radio" id="inp1" />
            <label htmlFor="inp1" className="ml-2 text-[12px]">
              YES
            </label>
          </div>
          <div className="inp_check_data flex items-center ">
            <input type="radio" name="radio" id="inp2" />
            <label htmlFor="inp2" className="ml-2 text-[12px]">
              NO
            </label>
          </div>
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
