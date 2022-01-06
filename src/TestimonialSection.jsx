import React from 'react';
import Userthums from '../src/img/thumb-1.jpg';
import UserImg from '../src/img/user-thumbs.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const TestimonialSection = () => {
    return(
        <div>            
            <section class="testimonial-section review_section">
                <div class="container">
                    <div class="reviews_title" data-aos="fade-down" data-aos-duration="1000">
                        <h5>Reviews</h5>
                        <h2><span>We Love</span> very happy <br/>to get client's reviews.</h2>
                    </div>
                    <OwlCarousel  className='owl-theme' items="1" loop margin={10} dotsContainer="false" >
                        <div class="testimonial-block">
                            <div class="inner-box">
                                <div class="text">"The team at EXCELLIS IT worked quickly to get our website online and provided a step-by-step guide to manage our expectations. They were easily contactable and were fast to make amendments ensuring our website was delivered on time and budget. The EXCELLIS team also helped us by providing valuable market insight to assist us in marketing our online services to the public. I would not hesitate to recommend EXCELLIS for anyone requiring assistance with building and marketing a corporate website. "</div>
                                <div class="info-box">
                                    <div class="thumb"><img src={Userthums} alt=""/></div>
                                    <h4 class="name">Albert</h4>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-block">
                            <div class="inner-box">
                                <div class="text">"I have to thank you for your professional services in making my website come true. You’re very detailed & focused on making my site very informative & inspiring. Thank you again, EXCELLIS. "</div>
                                <div class="info-box">
                                    <div class="thumb"><img src={Userthums} alt=""/></div>
                                    <h4 class="name">CHARLES</h4>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-block">
                            <div class="inner-box">
                                <div class="text">"EXCELLIS, thank you for all you have done for me and my business. You guys have been great to work with. "</div>
                                <div class="info-box">
                                    <div class="thumb"><img src={Userthums} alt=""/></div>
                                    <h4 class="name">FEARN</h4>
                                </div>
                            </div>
                        </div>
                   </OwlCarousel>
                    <div class="thumb-layer paroller">
                        <figure class="image"><img src={UserImg} alt=""/></figure>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default TestimonialSection;