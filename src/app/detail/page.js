import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import PricingPlan from "../../components/PricingPlan";
import Teams from "../../components/Teams";
import TopBar from "../../components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <PricingPlan />
      <Teams />

      <Footer />
    </>
  );
};

export default page;
