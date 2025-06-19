import React from "react";

const InpItem = ({ data, num }) => {

  return (
     <div className="input flex mb-3 flex-col p-2">
          <input
            type="text"
           id={"input" + num}
            autoComplete="off"
            required
            className="w-full input_item  rounded-md p-2.5 outline-0 border-[0.2px] border-solid border-[#36363641]"
          />
         <label htmlFor={"input" + num} className={"inp_item input" + num}>
        {data.label} *
      </label>
        </div>

  );
};

export default InpItem;
