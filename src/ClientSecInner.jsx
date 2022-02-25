import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function ClientSecInner() {
  return (
    <div>
      <section className="inner_page_client_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="big_title">
                <h2 data-aos="fade-down" data-aos-duration="1500">
                  <span>Our CLients</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                spaceBetween={15}
                navigation
                autoplay={{ delay: 3000 }}
                className="myclient"
                breakpoints={{
                  700: {
                    spaceBetween: 15,
                    slidesPerView: 5,
                  },
                  500: {
                    spaceBetween: 100,
                    slidesPerView: 2,
                  },
                  411: {
                    spaceBetween: 100,
                    slidesPerView: 2,
                  },
                  300: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient1.jpg?alt=media&token=b9bc7aa2-29b6-48eb-94ef-842493f92fed"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient2.jpg?alt=media&token=c9b685ed-6fee-45c4-90c0-c7f4dcbf0725"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient4.jpg?alt=media&token=f43626ae-3a1e-4cfd-8624-6f11f925b9e3"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient5.jpg?alt=media&token=42cf4061-500a-4c1f-95ae-0985589898f2"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient6.jpg?alt=media&token=108ba7f0-a3e4-42d9-89b4-e8360fe50cfb"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient7.jpg?alt=media&token=20e52744-0b35-4426-9973-c4afe7426967"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient8.jpg?alt=media&token=38c47c8b-8c77-4feb-a1a9-d16585527e52"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient9.jpg?alt=media&token=8476acd8-eeb2-40d3-bcd4-d78aea646fdb"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient10.jpg?alt=media&token=66186813-b268-49a9-9a24-1920851bee68"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient11.jpg?alt=media&token=fba28597-59d6-4911-9bd7-f8f2a6cb0892"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient12.jpg?alt=media&token=e06ae285-084b-4fea-86ef-cd4f8891e5e5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientSecInner;
