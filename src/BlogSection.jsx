import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import blog_img from '../src/img/blog.png';
import blogBackground from '../src/img/blog_bg.png';

const BlogSection = () => {
    return(
        <div>
           <section class="blog_section" style={{backgroundImage: "url(" + blogBackground + ")", backgroundSize: 'cover'}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12">
                                <div class="blogs_title" data-aos="fade-down" data-aos-duration="1000">
                                    <h5>Blogs</h5>
                                    <h2>
                                        <span>We're here</span> to share <br/>
                                        story and more news
                                    </h2>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 text-right">
                                <a href="blog-details.php" class="banner_btn animate__slideInUp animate__animated">View All Blogs</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <div class="blog_slider_sec" data-aos="fade-up" data-aos-duration="1500">
                        <OwlCarousel  className='owl-theme' items="2" loop margin={30} dots="true">
                                <div class="single_blog">
                                    <div class="blog_img_wrapper">
                                        <img src={blog_img} />
                                        <div class="blog_date">
                                            <span class="date">05</span>
                                            <span class="month">Jan</span>
                                        </div>
                                    </div>
                                    <div class="blog_content">
                                        <span>BUSINESS</span>
                                        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor ...</p>
                                        <a href="blog-details.php" class="blog_read_more">Read More</a>
                                    </div>
                                </div>
                                <div class="single_blog">
                                    <div class="blog_img_wrapper">
                                        <img src={blog_img} />
                                        <div class="blog_date">
                                            <span class="date">05</span>
                                            <span class="month">Jan</span>
                                        </div>
                                    </div>
                                    <div class="blog_content">
                                        <span>BUSINESS</span>
                                        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor ...</p>
                                        <a href="blog-details.php" class="blog_read_more">Read More</a>
                                    </div>
                                </div>
                                <div class="single_blog">
                                    <div class="blog_img_wrapper">
                                        <img src={blog_img} />
                                        <div class="blog_date">
                                            <span class="date">05</span>
                                            <span class="month">Jan</span>
                                        </div>
                                    </div>
                                    <div class="blog_content">
                                        <span>BUSINESS</span>
                                        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor ...</p>
                                        <a href="blog-details.php" class="blog_read_more">Read More</a>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
    
}
export default BlogSection;