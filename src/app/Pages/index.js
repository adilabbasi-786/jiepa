import About from "../../components/About";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import PricingPlan from "../../components/PricingPlan";
import Services from "../../components/Services";
import Teams from "../../components/Teams";
import TopBar from "../../components/TopBar";
import React from "react";

const Index = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <About />
      <Services />
      <PricingPlan />
      <Teams />
      <Footer />
    </div>
  );
};

export default Index;
