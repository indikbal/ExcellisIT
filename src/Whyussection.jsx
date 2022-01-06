import React from 'react';
import Bpo_pattern from '../src/Appcontainer/assets/bpo_pattern.png';
import Bpo_pattern2 from '../src/Appcontainer/assets/bpo_pattern2.png';
import Mas_shape from '../src/Appcontainer/assets/mas_shape.png';
import Why_us from '../src/Appcontainer/assets/why_us.png';

const Whyussection = () => {
    return(
        <div>
            <div id="section5" class="section why_us_sec">
                <img src={Bpo_pattern} class="why_patter1" />
                <img src={Bpo_pattern2} class="why_patter2" />
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <div class="abt_img">
                                <img src={Mas_shape} class="rotate_shape1" />
                                <img src={Mas_shape} class="rotate_shape2" />
                                <img src={Why_us} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="why_content">
                                <span class="fixed_title">Why Us</span>
                                <h6 data-aos="fade-down" data-aos-duration="1000"><span>As a client</span> you can expect originative designs, professional approach, experienced team and fast delivery at every point.</h6>
                                <div class="row mt-5" data-aos="fade-down" data-aos-duration="1500">
                                    <div class="col-md-6">
                                        <div class="why_point">
                                            <ul>
                                                <li class="theme_color"><i class="las la-check-square"></i>We Create Experiences</li>
                                                <li><i class="las la-check-square"></i>We Ask, Listen and Understand</li>
                                                <li><i class="las la-check-square"></i>Unconditional Support</li>
                                                <li><i class="las la-check-square"></i>We Create Experiences</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="why_point">
                                            <ul>
                                                <li><i class="las la-check-square"></i>you're the boss</li>
                                                <li><i class="las la-check-square"></i>We Provide Unconditional Support</li>
                                                <li><i class="las la-check-square"></i>we're affordable</li>
                                                <li><i class="las la-check-square"></i>We Ask, Listen and Understand</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="banner_btn animate__slideInUp animate__animated">free consultaions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
    
}
export default Whyussection;