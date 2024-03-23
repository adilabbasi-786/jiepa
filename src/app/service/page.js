import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Services from "../../components/Services";
import TopBar from "../../components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Services />
      <Footer />
    </>
  );
};

export default page;
