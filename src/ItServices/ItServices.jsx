import React from "react";
import "./itservices.css";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import ThreeScene from "../Appcontainer/ThreeScene";
import { Helmet } from "react-helmet";

const ItServices = () => {
  const title = "IT Services";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>IT Services</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Loader />
      <Navbar />
      <ThreeScene />
      <InnerBanner title={title} description={description} />
      <section></section>
      <Footer />
    </div>
  );
};

export default ItServices;
