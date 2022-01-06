import React from 'react';
import { NavLink } from 'react-router-dom';
import jQuery from 'jquery'; 
import logo from '../src/img/logo-white.png';

const Navbar = () => (

    
  <div>      
   <section className='top_header_section pl-170 pr-170'>
       <div className='container-fluid'>
           <div className='row'>
               <div className='col-md-4'>
                   <div className='top_social_medi'>
                       <ul className='d-flex align-items-center justify-content-start mb-0'>
                           <li><a href='#'><i class="ph-facebook-logo"></i></a></li>
                           <li><a href='#'><i class="ph-twitter-logo"></i></a></li>
                           <li><a href='#'><i class="ph-instagram-logo"></i></a></li>
                           <li><a href='#'><i class="ph-linkedin-logo"></i></a></li>
                           <li><a href='#'><i class="ph-rss"></i></a></li>
                       </ul>
                   </div>
               </div>
               <div className='col-md-8'>
                   <div className='top_right_content'>
                       <ul className='d-flex align-items-center justify-content-end mb-0'>
                           <li><a href='#'><i class="ph-envelope-simple"></i> info@excellisit.com</a></li>
                           <li><a href='#'><i class="ph-phone"></i> (+91) 861 772 4646</a></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <section className='main_nav_sec pl-170 pr-170'>
       <div className='container-fluid'>
           <div className='row'>
               <div className='col-md-12'>
               <nav class="navbar navbar-expand-lg pr-0">
                    <div className='logo'>
                        <img src={logo}/>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <button className='menu_open'><i class="ph-list"></i></button>
                    <div class="collapse navbar-collapse justify-content-end pr-5" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Our Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Partner With Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Career</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Contatc Us</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
               </div>
           </div>
       </div>
   </section>
   {/* <nav class="menu">
        <div class="menu_wrapper">
            <div class="menu__item menu__item--1" data-direction="bt">
                <div class="menu__item-inner">
                    <div class="mainmenu">
                        <a href="https://www.excellisit.com/it-services" class="mainmenu__item">It Services</a>
                        <a href="https://www.excellisit.com/bpo" class="mainmenu__item">Bpo Services</a>
                        <a href="https://www.excellisit.com/digital-marketing" class="mainmenu__item">Marketing Services</a>
                        <a href="https://www.excellisit.com/CAD-drawing-services" class="mainmenu__item">Cad Services</a>
                    </div>
                    <p class="label label--topleft label--vert-mirror">Services We Offered</p>
                    <div class="menu_address_sec d-flex align-items-center">
                        <div class="menu_mail_sec">
                            <h4>Quick Contact</h4>
                            <li><a href="mailto:info@excellisit.com"><i class="las la-envelope-open-text"></i> info@excellisit.com</a></li>
                            <li><a href="mailto:sales@excellisit.com"><i class="las la-envelope-open-text"></i> sales@excellisit.com</a></li>
                        </div>
                        <div class="menu_address">
                            <h4>Business Enquiry</h4>
                            <ul>
                                <li><a href="#"><img src="https://www.excellisit.com/img/india.png" /><i class="las la-phone-volume"></i>(+91) 861 772 4646 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu_certifi_img">
                        <img src="https://www.excellisit.com/img/iso-nascom-msme.jpg" class="img-fluid" />
                    </div>
                    <div class="profile_download_link"><a href="https://www.excellisit.com/img/Excellis_profile.pdf" target="_blank"><i class="las la-download"></i> Company Profile</a></div>
                    <div class="menu_social">
                        <a href="https://www.facebook.com/excellisIT/" target="_blank"><i class="lab la-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/company/excellisit" target="_blank"><i class="lab la-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/accounts/login/" target="_blank"><i class="lab la-instagram"></i></a>
                        <a href="https://twitter.com/excellisIT" target="_blank"><i class="lab la-twitter"></i></a>
                        <a href="https://www.youtube.com/channel/UCoz841ao5Se30KyCld9YmpA" target="_blank"><i class="lab la-youtube"></i></a>
                        <a href="https://join.skype.com/invite/UtNAdxIp1Dcs"><i class="lab la-skype"></i></a>
                        <a href="https://wa.me/918617724646"><i class="lab la-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div class="menu__item menu__item--2" data-direction="lr">
                <div class="menu__item-inner">
                    <div class="sidemenu">
                        <a href="https://www.excellisit.com/back-office-process-outsourcing-services" class="sidemenu__item"><span class="sidemenu__item-inner">Back office process outsourcing</span></a>
                        <a href="https://www.excellisit.com/call-center-outsourcing-service" class="sidemenu__item"><span class="sidemenu__item-inner">Call center outsourcing </span></a>
                        <a href="https://www.excellisit.com/ecommerce-outsourcing-services" class="sidemenu__item"><span class="sidemenu__item-inner">Ecommerce outsourcing</span></a>
                        <a href="https://www.excellisit.com/performance-compliance-management" class="sidemenu__item"><span class="sidemenu__item-inner">Performance &amp; Compliance management</span></a>
                        <a href="https://www.excellisit.com/professional-services" class="sidemenu__item"><span class="sidemenu__item-inner">Profesional Services</span></a>
                        <a href="https://www.excellisit.com/innovation-at-excellis" class="sidemenu__item"><span class="sidemenu__item-inner">Innovation at EXCELLIS</span></a>
                    </div>
                    <p class="label label--topleft label--vert-mirror">Bpo Services</p>
                </div>
            </div>
            <div class="menu__item menu__item--3" data-direction="bt">
                <div class="menu__item-inner">
                    <div class="sidemenu">
                        <a href="https://www.excellisit.com/mobile-application" class="sidemenu__item"><span class="sidemenu__item-inner">Mobile Application</span></a>
                        <a href="https://www.excellisit.com/software-development" class="sidemenu__item"><span class="sidemenu__item-inner">Software Development</span></a>
                        <a href="https://www.excellisit.com/ui-ux-design" class="sidemenu__item"><span class="sidemenu__item-inner">UI/UX Design</span></a>
                        <a href="https://www.excellisit.com/web-development" class="sidemenu__item"><span class="sidemenu__item-inner">Web Development</span></a>
                        <a href="https://www.excellisit.com/QA-testing" class="sidemenu__item"><span class="sidemenu__item-inner">QA and Testing</span></a>
                    </div>
                    <p class="label label--topleft label--vert-mirror">It Services</p>
                </div>
            </div>
            <div class="menu__item menu__item--4" data-direction="lr">
                <div class="menu__item-inner">
                    <div class="sidemenu">
                        <a href="https://www.excellisit.com/about" class="sidemenu__item"><span class="sidemenu__item-inner">About Us</span></a>
                        <a href="https://www.excellisit.com/partner-with-us" class="sidemenu__item"><span class="sidemenu__item-inner">Partner With Us</span></a>
                        <a href="https://www.excellisit.com/portfolio" class="sidemenu__item"><span class="sidemenu__item-inner">Our Portfolio</span></a>
                        <a href="https://www.excellisit.com/career-opportunities" class="sidemenu__item"><span class="sidemenu__item-inner">Career</span></a>
                        <a href="https://www.excellisit.com/blog" class="sidemenu__item"><span class="sidemenu__item-inner">Blog</span></a>
                        <a href="https://www.excellisit.com/contactus" class="sidemenu__item"><span class="sidemenu__item-inner">Contact Us</span></a>
                    </div>
                    <p class="label label--topleft label--vert-mirror">Company</p>
                </div>
            </div>
            <div class="menu__item menu__item--5" data-direction="tb">
                <div class="menu__item-inner">
                    <div class="sidemenu">
                        <a href="https://www.excellisit.com/search-engine-marketing" class="sidemenu__item"><span class="sidemenu__item-inner">Search engine Marketing</span></a>
                        <a href="https://www.excellisit.com/social-media-marketing" class="sidemenu__item"><span class="sidemenu__item-inner">Social media marketing</span></a>
                        <a href="https://www.excellisit.com/ppc" class="sidemenu__item"><span class="sidemenu__item-inner">Pay per click</span></a>
                        <a href="https://www.excellisit.com/email-marketing" class="sidemenu__item"><span class="sidemenu__item-inner">Email Marketing</span></a>
                        <a href="https://www.excellisit.com/content-making" class="sidemenu__item"><span class="sidemenu__item-inner">Content Marketing</span></a>
                        <a href="https://www.excellisit.com/google-my-business-optimization" class="sidemenu__item"><span class="sidemenu__item-inner">Google my business optimization</span></a>
                    </div>
                    <p class="label label--topleft label--vert-mirror">Marketing Services</p>
                </div>
            </div>
        </div>
        <button class="action action--menu"><i class="las la-bars"></i></button>
        <button class="action action--close"><i class="las la-times"></i></button>
    </nav> */}

  </div>
);

export default Navbar;
