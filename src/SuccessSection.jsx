import React from 'react';
import client1 from '../src/img/client/logo1.jpg';
import client2 from '../src/img/client/logo2.jpg';
import client3 from '../src/img/client/logo3.jpg';
import client4 from '../src/img/client/logo4.jpg';
import client5 from '../src/img/client/logo5.jpg';
import client6 from '../src/img/client/logo6.jpg';
import client7 from '../src/img/client/logo7.jpg';
import Success_map from '../src/img/success_map.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SuccessSection = () => {
    return(
        <div>
           <div id="section6" class="section success_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="success_title_wrapper" data-aos="fade-down" data-aos-duration="1000">
                            <div class="sucess_title text-left">
                                <h5>Success</h5>
                                <h2><span>We have </span>many <br/>clients world wide!</h2>
                            </div>
                            <div class="success_title_desc">
                                <p>Being a well-known web solutions company, it is undeniable fact that what we are today is because of the love, appreciation, and constant iteration brought in us by our cherished extended family- our clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="success_map">
                            <img src={Success_map} class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-md-7" data-aos="fade-down" data-aos-duration="1500">
                        <div class="success_slide_Sec">
                            <OwlCarousel  className='owl-theme' loop margin={10} nav>
                                <div class="single_success">
                                    <img src={client1} />
                                </div>
                                <div class="single_success">
                                    <img src={client2} />
                                </div>
                                <div class="single_success">
                                    <img src={client3} />
                                </div>
                                <div class="single_success">
                                    <img src={client4} />
                                </div>
                                <div class="single_success">
                                    <img src={client5} />
                                </div>
                                <div class="single_success">
                                    <img src={client6} />
                                </div>
                                <div class="single_success">
                                    <img src={client7} />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
    
}
export default SuccessSection;