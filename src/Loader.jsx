import React from "react";
import $ from "jquery";

const Loader = () => {
  $(document).ready(function () {
    $(".loader--active")
      .removeClass("loader--active")
      .addClass("loader--active2");

    setTimeout(function () {
      $(".loader--active2").removeClass("loader--active2");
    }, 5000);
  });
  // $(document).ready(function () {
  //   $(".loader--active2")
  //     .removeClass("loader--active2")
  //     .addClass("loader--active3");
  // });

  return (
    <div>
      <div class="loader loader--active">
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
      </div>
      {/* <div class="loader2 loader--active3">
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
      </div> */}
    </div>
  );
};

export default Loader;
