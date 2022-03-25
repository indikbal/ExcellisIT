import React from "react";
import Footer from "./Footer";
import InnerBanner from "./InnerBanner";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import Career from "./Career";

const CareerPage = ({ activeStatus }) => {
  const title = "Career";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Career Page</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Navbar activeStatus="contact" />
      <InnerBanner title={title} description={description} />
      <Career />

      <Footer />
    </div>
  );
};

export default CareerPage;
