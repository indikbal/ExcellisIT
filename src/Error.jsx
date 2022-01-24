import React from "react";

const Error = () => {
  return (
    <div>
      <section class="bg-purple">
        <div class="stars">
          <div class="central-body">
            <img
              class="image-404"
              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/404.svg?alt=media&token=8bbbe380-3d96-4b09-bf4c-ae81df052f6b"
              width="300px"
            />

            <a href="/" class="btn-go-home">
              GO TO BACK EARTH
            </a>
          </div>
          <div class="objects">
            <img
              class="object_rocket"
              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/rocket.svg?alt=media&token=c9e0d5e5-4507-4606-9a65-8317e8ce89f2"
              width="40px"
            />
            <div class="earth-moon">
              <img
                class="object_earth"
                src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/earth.svg?alt=media&token=a41b2b97-5d60-4ef3-bb62-e9ce1fc9576e"
                width="100px"
              />
              <img
                class="object_moon"
                src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/moon.svg?alt=media&token=e8a2c681-270f-4957-b042-3fcf4827d03f"
                width="80px"
              />
            </div>
            <div class="box_astronaut">
              <img
                class="object_astronaut"
                src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/astronaut.svg?alt=media&token=cf648d7d-f3a9-4b12-97bb-c031f5be659a"
                width="140px"
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
