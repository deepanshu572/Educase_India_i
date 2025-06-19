import React from "react";

const BtnItem = ({name}) => {
  return (
    <button type="submit" className="btn_data text-[16px] w-full rounded-md bg-violet-600 hover:bg-[#7000E0] text-[#fff] font-bold p-3">
      {name}
    </button>
  );
};

export default BtnItem;
