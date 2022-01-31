import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TestimonialSection from "../TestimonialSection";
import BecomeAPartner from "./BecomeAPartner";
import ContactSection from "./ContactSection";
import FactsAndFigure from "./FactsAndFigure";
import Herobaner from "./Herobaner";
import HomeFeatureServices from "./HomeFeatureServices";
import HomeServicesSec from "./HomeServicesSec";
import IndustriesWeCovered from "./IndustriesWeCovered";
import OurBlog from "./OurBlog";
import OurClients from "./OurClients";
import { Helmet } from "react-helmet";
import Loader from "../Loader";
import CompanyAddress from "../CompanyAddress";

// $(".bodyName").children("div").addClass("test");

const Home = () => {
  return (
    <div className="bodyName">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
      <Loader />
      <Navbar activeStatus="home" />
      <Herobaner />
      <HomeFeatureServices />
      <HomeServicesSec />
      <FactsAndFigure />
      <BecomeAPartner />
      <IndustriesWeCovered />
      <OurClients />
      <TestimonialSection />
      <OurBlog />
      <ContactSection />
      <CompanyAddress />
      <Footer />
    </div>
  );
};
export default Home;
