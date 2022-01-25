import React from "react";
import "./itservices.css";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import ThreeScene from "../Appcontainer/ThreeScene";

const SoftwareDevelopment = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <ThreeScene />
      <InnerBanner />
      <section></section>
      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
