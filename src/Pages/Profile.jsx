import React, { useEffect } from "react";

const Profile = () => {

   const email = localStorage.getItem("email");
  return (
    <div className="profile bg-[#F9F9F9] flex flex-col p-3 mt-1 h-[100vh] rounded-md w-[75%] m-auto border-gray-200">
      <div className="profile_upper flex  gap-3 items-center p-3">
      <div className="profile_img w-[55px] h-[55px] relative  mb-2">
        <img
        className="w-full h-full object-cover rounded-full"
          src="https://fastly.picsum.photos/id/408/60/60.jpg?hmac=F3Lm98z9EGMH3qbYWqCG9Bq8lrsuupQo6XdyOyS-sJI"
          alt=""
        />
        <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm10 9a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
      </div>
      <div className="profile_txt">
      <h3 className="block font-bold text-[13px]">John Doe </h3>
      <small>{email || ""}</small>
      </div>
      </div>
      <hr className="border-gray-200 mb-2" />
      <p className="text-[#757d6f]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa quisquam vitae ex alias sit!</p>
    </div>
  );
};

export default Profile;
