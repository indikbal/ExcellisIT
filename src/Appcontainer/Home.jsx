import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./assets/Style.css";
import BecomeAPartner from "./BecomeAPartner";
import ContactSection from "./ContactSection";
import FactsAndFigure from "./FactsAndFigure";
import Herobaner from "./Herobaner";
import HomeFeatureServices from "./HomeFeatureServices";
import HomeServicesSec from "./HomeServicesSec";
import IndustriesWeCovered from "./IndustriesWeCovered";
import LocationOnMap from "./LocationOnMap";
import OurBlog from "./OurBlog";
import OurClients from "./OurClients";
import ThreeScene from "./ThreeScene";

const Home = () => {
  return (
    <div>
      <div className="hero_banner_sec">
        <ThreeScene />
      </div>
      <div className="grid">
        <div className="row h-100 w-100 pr-0 mr-0 ml-0">
          <div className="grid_item col-2 pl-0 pr-0"></div>
          <div className="grid_item col-2 pl-0 pr-0"></div>
          <div className="grid_item col-2 pl-0 pr-0"></div>
          <div className="grid_item col-2 pl-0 pr-0"></div>
          <div className="grid_item col-2 pl-0 pr-0"></div>
          <div className="grid_item col-2 pl-0 pr-0"></div>
        </div>
      </div>
      <Navbar />
      <Herobaner />
      <HomeFeatureServices />
      <HomeServicesSec />
      <FactsAndFigure />
      <BecomeAPartner />
      <IndustriesWeCovered />
      <OurClients />
      <OurBlog />
      <ContactSection />
      <LocationOnMap />
      <Footer />
    </div>
  );
};
export default Home;
