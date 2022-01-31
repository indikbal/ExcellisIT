import React from "react";
import { Helmet } from "react-helmet";
import logoicon from "../src/image/logo-white.png";

function NavLogoCanvas() {
  return (
    <div>
      <div className="">
        <img
          id="logo1"
          class="next-particle"
          data-init-position="random"
          data-init-direction="left"
          data-fade-position="left"
          data-fade-direction="left"
          data-particle-gap="1"
          data-width="150"
          data-height="67"
          data-max-width="150"
          data-max-height="67"
          data-mouse-force="10"
          data-gravity="0.5"
          data-noise="5"
          src={logoicon}
          data-sca
        />
      </div>
      <Helmet>
        <script
          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/js%2Fnextparticle.min.js?alt=media&token=4128d869-bbfb-422e-b648-7764e7ddca76"
          type="text/javascript"
        />
      </Helmet>
    </div>
  );
}

export default NavLogoCanvas;
