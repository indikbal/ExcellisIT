import React from 'react';
import Footer_logo from '../src/img/footer_logo.png';
import Country from '../src/img/country.png';

const Footer = () =>{
    return(
        <div>           
            <section class="footer_sec">
                <footer id="section10" class="section footer">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="footer_ect_sec">
                                    <ul>
                                        <li>
                                            <img class="footer_logo" src={Footer_logo} alt="" />
                                        </li>
                                        <li class="mt-3">
                                            <p><b>Our clients in other countries:</b></p>
                                            <img src={Country} class="img-fluid" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-9">
                                
                                <div class="row">
                                    <div class="col-md-4">
                                    <h6>IT Services</h6>
                                        <div class="footer-links footer_menu d-flex">
                                            <ul>
                                                <li><a href="mobile-application.php"><i class="las la-arrow-right"></i>Mobile Application</a></li>
                                                <li><a href="software-development.php"><i class="las la-arrow-right"></i>Software Development</a></li>
                                                <li><a href="ui-ux-design.php"><i class="las la-arrow-right"></i>UI/UX Design</a></li>
                                                <li><a href="web-development.php"><i class="las la-arrow-right"></i>Web Development</a></li>
                                                <li><a href="QA-testing.php"><i class="las la-arrow-right"></i>QA and Testing</a></li>
                                                <li><a href="architechture.php"><i class="las la-arrow-right"></i>CAD Services</a></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                    <h6>BPO Services</h6>
                                        <div class="footer-links footer_menu d-flex">
                                            <ul>
                                            <li><a href="back-office-process-outsourcing-services.php"><i class="las la-arrow-right"></i>Back office process outsourcing</a></li>
                                            <li><a href="call-center-outsourcing-service.php"><i class="las la-arrow-right"></i>Call center outsourcing </a></li>
                                            <li><a href="ecommerce-outsourcing-services.php"><i class="las la-arrow-right"></i>Ecommerce outsourcing</a></li>
                                            <li><a href="performance-compliance-management.php"><i class="las la-arrow-right"></i>Performance & Compliance</a></li>
                                            <li><a href="professional-services.php"><i class="las la-arrow-right"></i>Profesional Services</a></li>
                                            <li><a href="innovation-at-excellis.php"><i class="las la-arrow-right"></i>Innovation at EXCELLIS</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                    <h6>Marketing Services</h6>
                                        <div class="footer-links footer_menu d-flex">
                                            <ul>
                                                <li><a href="search-engine-marketing.php"><i class="las la-arrow-right"></i>Search engine Marketing</a></li>
                                                    <li><a href="social-media-marketing.php"><i class="las la-arrow-right"></i>Social media marketing</a></li>
                                                    <li><a href="ppc.php"><i class="las la-arrow-right"></i>Pay per click</a></li>
                                                    <li><a href="email-marketing.php"><i class="las la-arrow-right"></i>Email Marketing</a></li>
                                                    <li><a href="content-making.php"><i class="las la-arrow-right"></i>Content Marketing</a></li>
                                                    <li><a href="google-my-business-optimization.php"><i class="las la-arrow-right"></i>Google my business optimization</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <section class="trial-block w-100 shadow3" id="ContactUs">
                                <a href="javascript:" id="return-to-top"><i class="las la-long-arrow-alt-up"></i></a>
                                <div class="height450">
                                    <div class="social-overlap process-scetion mt100">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-md-12">
                                                    <div class="social-bar">
                                                        <div class="social-icons iconpad text-center">
                                                            <a href="https://www.facebook.com/excellisIT/" target="_blank" class="slider-nav-item"><i class="lab la-facebook-f"></i></a>
                                                            <a href="https://www.linkedin.com/company/excellisit" target="_blank" class="slider-nav-item"><i class="lab la-linkedin-in"></i></a>
                                                            <a href="https://www.instagram.com/accounts/login/" target="_blank" class="slider-nav-item"><i class="lab la-instagram"></i></a>
                                                            <a href="https://twitter.com/excellisIT" target="_blank" class="slider-nav-item"><i class="lab la-twitter"></i></a>
                                                            <a href="blog.php" target="_blank" class="slider-nav-item"><i class="las la-rss"></i></a>
                                                            <a href="https://www.youtube.com/channel/UCoz841ao5Se30KyCld9YmpA" target="_blank" class="slider-nav-item"><i class="lab la-youtube"></i></a>
                                                            <a href="https://join.skype.com/invite/UtNAdxIp1Dcs" class="slider-nav-item"><i class="lab la-skype"></i></a>
                                                            <a href="https://wa.me/918617724646" class="behance slider-nav-item"><i class="lab la-whatsapp"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                    <div class="copyright_sec">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="copyright">
                                        <p>© 2021 all rights reserved</p>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="copyright_menu">
                                        <ul>
                                            <li><a href="privacy-policy.php">Privacy Policy</a></li>
                                            <li><a href="terms-and-condition.php">Tearm and Condition</a></li>
                                            <li><a href="about.php">About Excellis</a></li>
                                            <li><a href="blog.php">Learning Center</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer;