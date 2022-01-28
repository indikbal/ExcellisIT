import React from "react";
import { Helmet } from "react-helmet";
import logoicon from "../src/image/logo_icon.png";

function LogoCanvas() {
  return (
    <div>
      <div className="icon_logo_animated">
        <img
          id="logo1"
          class="next-particle"
          data-init-position="random"
          data-init-direction="left"
          data-fade-position="left"
          data-fade-direction="left"
          data-particle-gap="1"
          data-width="900"
          data-height="500"
          data-max-width="900"
          data-max-height="500"
          data-mouse-force="80"
          data-gravity="0.07"
          data-noise="10"
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

export default LogoCanvas;
