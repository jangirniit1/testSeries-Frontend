import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

function RootLayout({ isLoggedIn, handleLoginLogout }) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} /> 
      <Outlet /> 
      <Footer /> 
    </>
  );
}

export default RootLayout;






