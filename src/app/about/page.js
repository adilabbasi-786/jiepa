import About from "../../components/About";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <About />
      <Footer />
    </>
  );
};

export default page;
