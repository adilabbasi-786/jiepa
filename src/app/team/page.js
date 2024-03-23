import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Teams from "../../components/Teams";
import TopBar from "../../components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Teams />
      <Footer />
    </>
  );
};

export default page;
