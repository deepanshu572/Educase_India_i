import React from "react";

const BtnItem = ({name}) => {
  return (
    <button type="submit" className="btn_data w-full rounded-md bg-violet-600 hover:bg-[#7000E0] text-[#fff] font-[400] p-3">
      {name}
    </button>
  );
};

export default BtnItem;
