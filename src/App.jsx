import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Pages/RegisterForm";
import LoginForm from "./Pages/LoginForm";
import Profile from "./Pages/Profile";

const App = () => {
  return (

    <Routes>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
  );
};

export default App;
