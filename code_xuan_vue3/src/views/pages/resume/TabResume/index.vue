<template>
  <div class="page-wrapper default-version">

    <div class="card-outer">
      <div class="scroll-box">
        <div class="container" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
          <div class="card-wrapper">
            <div class="author-info" :style="{backgroundImage: 'url(' + require('@/assets/images/background/3.jpg') + ')' }">
              <div class="image"><img src="~assets/images/resource/user.png" alt=""></div>
              <div class="author">
                <h3>Mrs xzx</h3>
                <div class="designation">
                  Hi i’m
                  <div class="typing-title">
                    <p>a <strong>web developer.</strong></p>
                    <p>a <strong>web Designer.</strong></p>
                    <p>a <strong>photographer.</strong></p>
                  </div>
                  <span class="typed-title"></span>
                </div>
              </div>
              <div class="link-btn">
                <a href="http://www.17sucai.com/" class="theme-btn btn-style-one">Download CV</a>
              </div>
              <ul class="social-icon-two">
                <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                <li><a href="#"><span class="fa fa-pinterest"></span></a></li>
              </ul>
            </div>
            <div class="card-inner-box">
              <header class="header wow fadeInLeft" data-wow-duration="1.5s">
                <ul class="main-menu">
                  <li class="active home"><a class="logo" href="#home"><img src="~assets/images/logo1.png" alt=""></a></li>
                  <li><a href="#about"><i class="flaticon-social"></i>About</a></li>
                  <li><a href="#resume"><i class="flaticon-curriculum"></i>Resume</a></li>
                  <li><a href="#services"><i class="flaticon-layers-1"></i>Services</a></li>
                  <li><a href="#work"><i class="flaticon-tools"></i>Works</a></li>
                  <li><a href="#blog"><i class="flaticon-blog"></i>Blog</a></li>
                  <li><a href="#contact"><i class="flaticon-send-mail"></i>Contact</a></li>
                </ul>
              </header>

              <!-- card item -->
              <div class="card-home card-item active" id="home" :style="{backgroundImage: 'url(' + require('@/assets/images/background/1.jpg') + ')' }">
                <div class="card-inner wow fadeInUp" data-wow-duration="2s">
                  <div class="image"><img src="~assets/images/resource/user.png" alt=""></div>
                  <div class="author">
                    <h3>Mahira Rashid</h3>
                    <div class="designation">
                      Hi i’m
                      <div class="typing-title">
                        <p>a <strong>web developer.</strong></p>
                        <p>a <strong>web Designer.</strong></p>
                        <p>a <strong>photographer.</strong></p>
                      </div>
                      <span class="typed-title"></span>
                    </div>
                  </div>
                  <div class="text">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore mega aliqua enim minim veniam.</div>
                  <div class="link-btn">
                    <a href="#" class="theme-btn btn-style-one">Download CV</a>
                    <a href="#" class="theme-btn btn-style-two">Hire Me</a>
                  </div>
                  <ul class="social-icon-two">
                    <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                    <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                    <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                    <li><a href="#"><span class="fa fa-pinterest"></span></a></li>
                    <li><a href="#"><span class="fa fa-dribbble"></span></a></li>
                  </ul>
                </div>
              </div>
              <!-- end item -->

              <!-- card item -->
              <div class="card-about card-item" id="about" :style="{backgroundImage: 'url(' + require('@/assets/images/background/2.jpg') + ')' }">
                <div class="card-inner">
                  <h4 class="title">About Me</h4>
                  <div class="text">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore mega aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo reprehenderit.</div>
                  <div class="info-list">
                    <div class="row">
                      <div class="col-md-6">
                        <ul class="list-style-one">
                          <li><strong>Name:</strong>  Mahira Rashid</li>
                          <li><strong>Phone:</strong>  254 - 2563 - 2154</li>
                          <li><strong>Address:</strong>  San francisco, USA</li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <ul class="list-style-one">
                          <li><strong>Email:</strong>  mahirarashid@gmail.com</li>
                          <li><strong>Freelance:</strong>  Available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 class="title">Skills</h4>
                  <div class="row">
                    <!-- About Block -->
                    <div class="skill-block col-md-3 col-sm-4 col-xs-6">
                      <div class="inner-box">
                        <div class="graph-outer">
                          <input type="text" class="dial" data-fgColor="#9147ff" data-bgColor="#f5f5f5" data-width="90" data-height="90" data-linecap="normal"  value="75">
                          <div class="inner-text count-box"><span class="count-text" data-stop="75" data-speed="2000"></span>%</div>
                        </div>
                        <h3>Design</h3>
                      </div>
                    </div>

                    <!-- About Block -->
                    <div class="skill-block col-md-3 col-sm-4 col-xs-6">
                      <div class="inner-box">
                        <div class="graph-outer">
                          <input type="text" class="dial" data-fgColor="#ff5e7e" data-bgColor="#f5f5f5" data-width="90" data-height="90" data-linecap="normal"  value="75">
                          <div class="inner-text count-box"><span class="count-text" data-stop="75" data-speed="2000"></span>%</div>
                        </div>
                        <h3>HTML</h3>
                      </div>
                    </div>

                    <!-- About Block -->
                    <div class="skill-block col-md-3 col-sm-4 col-xs-6">
                      <div class="inner-box">
                        <div class="graph-outer">
                          <input type="text" class="dial" data-fgColor="#ffc713" data-bgColor="#f5f5f5" data-width="90" data-height="90" data-linecap="normal"  value="75">
                          <div class="inner-text count-box"><span class="count-text" data-stop="75" data-speed="2000"></span>%</div>
                        </div>
                        <h3>WordPress </h3>
                      </div>
                    </div>

                    <!-- About Block -->
                    <div class="skill-block col-md-3 col-sm-4 col-xs-6">
                      <div class="inner-box">
                        <div class="graph-outer">
                          <input type="text" class="dial" data-fgColor="#51dbc3" data-bgColor="#f5f5f5" data-width="90" data-height="90" data-linecap="normal"  value="75">
                          <div class="inner-text count-box"><span class="count-text" data-stop="75" data-speed="2000"></span>%</div>
                        </div>
                        <h3>PHP </h3>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- end item -->

              <!-- card item -->
              <div class="card-resume card-item" id="resume" :style="{backgroundImage: 'url(' + require('@/assets/images/background/2.jpg') + ')' }">
                <div class="card-inner">
                  <h4 class="title">Resume</h4>
                  <div class="row clearfix">
                    <!--Column-->
                    <div class="timeline-column col-md-6 col-sm-12 col-xs-12">
                      <div class="inner">
                        <div class="col-header"><div class="icon-box"><div class="icon-inner"><div class="icon"><span class="flaticon-book"></span></div></div></div> <h2>Employment</h2></div>

                        <!--Timeline Block-->
                        <div class="timeline-block">
                          <div class="inner-box">
                            <h4>Web Design</h4>
                            <div class="date"><span>1998-2000</span> / University of stuties</div>
                            <div class="text">Exceptur sint occaecat cupidatat non proident sunt culpa. </div>
                          </div>
                        </div>

                        <!--Timeline Block-->
                        <div class="timeline-block">
                          <div class="inner-box">
                            <h4>Web Development</h4>
                            <div class="date"><span>1998-2000</span> / University of stuties</div>
                            <div class="text">Exceptur sint occaecat cupidatat non proident sunt culpa. </div>
                          </div>
                        </div>

                        <!--Timeline Block-->
                        <div class="timeline-block">
                          <div class="inner-box">
                            <h4>Specialization Course</h4>
                            <div class="date"><span>1998-2000</span> / University of stuties</div>
                            <div class="text">Exceptur sint occaecat cupidatat non proident sunt culpa. </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <!--Column-->
                    <div class="timeline-column col-md-6 col-sm-12 col-xs-12">
                      <div class="inner">
                        <div class="col-header"><div class="icon-box"><div class="icon-inner"><div class="icon"><span class="flaticon-case"></span></div></div></div> <h2>Experience</h2></div>

                        <!--Timeline Block-->
                        <div class="timeline-block">
                          <div class="inner-box">
                            <h4>Lead UI/UX Designer</h4>
                            <div class="date"><span>2015-Present</span>  / Google inc.</div>
                            <div class="text">Exceptur sint occaecat cupidatat non proident sunt culpa. </div>
                          </div>
                        </div>

                        <div class="timeline-block">
                          <div class="inner-box">
                            <h4>Senior UI/UX Designer</h4>
                            <div class="date"><span>2012-2014 </span> / Facebook inc.</div>
                            <div class="text">Exceptur sint occaecat cupidatat non proident sunt culpa. </div>
                          </div>
                        </div>

                        <div class="timeline-block">
                          <div class="inner-box">
                            <h4>Junior UI/UX Designer</h4>
                            <div class="date"><span>2006-2011 </span>  / airbnb inc.</div>
                            <div class="text">Exceptur sint occaecat cupidatat non proident sunt culpa. </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <!-- end item -->
              <!-- card item -->
              <div class="card-services card-item" id="services" :style="{backgroundImage: 'url(' + require('@/assets/images/background/2.jpg') + ')' }">
                <div class="card-inner">
                  <h4 class="title">Services</h4>
                  <div class="row">
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box"><span class="icon flaticon-pen-tool"></span></div>
                        <h4><a href="blog-single.html">UI/UX Design</a></h4>
                        <div class="text">Lorem ipsum dolor amet constur adipisicing elit </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box"><span class="icon flaticon-folder"></span></div>
                        <h4><a href="blog-single.html">Web Design</a></h4>
                        <div class="text">Lorem ipsum dolor amet constur adipisicing elit </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box"><span class="icon flaticon-computer"></span></div>
                        <h4><a href="blog-single.html">Branding</a></h4>
                        <div class="text">Lorem ipsum dolor amet constur adipisicing elit </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box"><span class="icon flaticon-layers-1"></span></div>
                        <h4><a href="blog-single.html">Logo Design</a></h4>
                        <div class="text">Lorem ipsum dolor amet constur adipisicing elit </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box"><span class="icon flaticon-web-design"></span></div>
                        <h4><a href="blog-single.html">Apps Design</a></h4>
                        <div class="text">Lorem ipsum dolor amet constur adipisicing elit </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box"><span class="icon flaticon-photo-camera"></span></div>
                        <h4><a href="blog-single.html">Photography</a></h4>
                        <div class="text">Lorem ipsum dolor amet constur adipisicing elit </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->
              <!-- card item -->
              <div class="card-projects card-item" id="work" :style="{backgroundImage: 'url(' + require('@/assets/images/background/2.jpg') + ')' }">
                <div class="card-inner">
                  <h4 class="title">Works</h4>
                  <div class="row">
                    <div class="projects-block col-md-6">
                      <div class="inner-box">
                        <figure class="image">
                          <img src="~assets/images/gallery/1.jpg" alt="image">
                          <div class="overlay">
                            <a class="lightbox-image option-btn" title="Image Caption Here" data-fancybox-group="example-gallery" href="~assets/images/gallery/1.jpg">
                              <i class="fa fa-search"></i>
                            </a>
                          </div>
                        </figure>
                        <div class="caption-title">
                          <h3><a href="#">Portfolio Item Title</a></h3>
                          <span>Branding, Print</span>
                        </div>
                      </div>
                    </div>
                    <div class="projects-block col-md-6">
                      <div class="inner-box">
                        <figure class="image">
                          <img src="~assets/images/gallery/2.jpg" alt="image">
                          <div class="overlay">
                            <a class="lightbox-image option-btn" title="Image Caption Here" data-fancybox-group="example-gallery" href="~assets/images/gallery/2.jpg">
                              <i class="fa fa-search"></i>
                            </a>
                          </div>
                        </figure>
                        <div class="caption-title">
                          <h3><a href="#">Portfolio Item Title</a></h3>
                          <span>Branding, Print</span>
                        </div>
                      </div>
                    </div>
                    <div class="projects-block col-md-6">
                      <div class="inner-box">
                        <figure class="image">
                          <img src="~assets/images/gallery/3.jpg" alt="image">
                          <div class="overlay">
                            <a class="lightbox-image option-btn" title="Image Caption Here" data-fancybox-group="example-gallery" href="~assets/images/gallery/3.jpg">
                              <i class="fa fa-search"></i>
                            </a>
                          </div>
                        </figure>
                        <div class="caption-title">
                          <h3><a href="#">Portfolio Item Title</a></h3>
                          <span>Branding, Print</span>
                        </div>
                      </div>
                    </div>
                    <div class="projects-block col-md-6">
                      <div class="inner-box">
                        <figure class="image">
                          <img src="~assets/images/gallery/4.jpg" alt="image">
                          <div class="overlay">
                            <a class="lightbox-image option-btn" title="Image Caption Here" data-fancybox-group="example-gallery" href="~assets/images/gallery/4.jpg">
                              <i class="fa fa-search"></i>
                            </a>
                          </div>
                        </figure>
                        <div class="caption-title">
                          <h3><a href="#">Portfolio Item Title</a></h3>
                          <span>Branding, Print</span>
                        </div>
                      </div>
                    </div>
                    <div class="projects-block col-sm-6">
                      <div class="inner-box">
                        <figure class="image">
                          <img src="~assets/images/gallery/5.jpg" alt="image">
                          <div class="overlay">
                            <a class="lightbox-image option-btn" title="Image Caption Here" data-fancybox-group="example-gallery" href="~assets/images/gallery/5.jpg">
                              <i class="fa fa-search"></i>
                            </a>
                          </div>
                        </figure>
                        <div class="caption-title">
                          <h3><a href="#">Portfolio Item Title</a></h3>
                          <span>Branding, Print</span>
                        </div>
                      </div>
                    </div>
                    <div class="projects-block col-sm-6">
                      <div class="inner-box">
                        <figure class="image">
                          <img src="~assets/images/gallery/6.jpg" alt="image">
                          <div class="overlay">
                            <a class="lightbox-image option-btn" title="Image Caption Here" data-fancybox-group="example-gallery" href="~assets/images/gallery/6.jpg">
                              <i class="fa fa-search"></i>
                            </a>
                          </div>
                        </figure>
                        <div class="caption-title">
                          <h3><a href="#">Portfolio Item Title</a></h3>
                          <span>Branding, Print</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->
              <!-- card item -->
              <div class="card-blog card-item" id="blog" :style="{backgroundImage: 'url(' + require('@/assets/images/background/2.jpg') + ')' }">
                <div class="card-inner">
                  <h4 class="title">Blog</h4>
                  <div class="news-block">
                    <div class="inner-box">
                      <div class="image">
                        <img src="~assets/images/resource/blog-1.jpg" alt="">
                        <div class="overlay">
                          <a class="link-btn" href="blog-single.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="date"><strong>02</strong> <br>Sep</div>
                      <div class="lower-content">
                        <h4><a href="blog-single.html">Let’s Talk About Design</a></h4>
                        <div class="post-meta">by admin  /  <span>Design</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="news-block">
                    <div class="inner-box">
                      <div class="image">
                        <img src="~assets/images/resource/blog-2.jpg" alt="">
                        <div class="overlay">
                          <a class="link-btn" href="blog-single.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="date"><strong>04</strong> <br>Sep</div>
                      <div class="lower-content">
                        <h4><a href="blog-single.html">Let’s Talk About Design</a></h4>
                        <div class="post-meta">by admin  /  <span>Design</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="news-block">
                    <div class="inner-box">
                      <div class="image">
                        <img src="~assets/images/resource/blog-3.jpg" alt="">
                        <div class="overlay">
                          <a class="link-btn" href="blog-single.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="date"><strong>06</strong> <br>Sep</div>
                      <div class="lower-content">
                        <h4><a href="blog-single.html">Let’s Talk About Design</a></h4>
                        <div class="post-meta">by admin  /  <span>Design</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->
              <!-- card item -->
              <div class="card-contact card-item" id="contact" :style="{backgroundImage: 'url(' + require('@/assets/images/background/2.jpg') + ')' }">
                <div class="card-inner">
                  <h3 class="title">Contact</h3>
                  <h4>Keep In Touch</h4>
                  <div class="row clearfix">
                    <div class="col-md-6">
                      <ul class="list-style-two">
                        <li><span class="icon flaticon-signs"></span>PO Box 16122 Collins Street <br> West Victoria 8007 Canada </li>
                        <li><span class="icon flaticon-smartphone"></span>(+48) 564-334-21-22-34 <br>(+48) 564-334-21-25</li>
                        <li><span class="icon flaticon-note-1"></span>info@cretox.com <br>info@example.com</li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <div class="map-section">
                        <div class="home-google-map">
                          <div
                                  class="google-map"
                                  id="contact-google-map"
                                  data-map-lat="40.700843"
                                  data-map-lng="-74.004012"
                                  data-icon-path="~assets/images/icons/map-marker.png"
                                  data-map-title="Chester"
                                  data-map-zoom="11" >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>How Can I Help?</h4>
                  <!-- Contact Form -->
                  <div class="contact-form">
                    <!--Comment Form-->
                    <form method="post" action="sendemail.php" id="contact-form">
                      <div class="row clearfix">

                        <div class="col-md-6 form-group">
                          <input type="text" name="username" placeholder="Name" required>
                        </div>

                        <div class="col-md-6 form-group">
                          <input type="email" name="email" placeholder="Email" required>
                        </div>

                        <div class="col-md-6 form-group">
                          <input type="text" name="subject" placeholder="Subject" required>
                        </div>

                        <div class="col-md-6 form-group">
                          <input type="text" name="phone" placeholder="Phone" required>
                        </div>

                        <div class="col-lg-12 col-md-12 form-group">
                          <textarea name="message" placeholder="Message"></textarea>
                        </div>

                        <div class="col-lg-12 col-md-12 form-group">
                          <button class="theme-btn btn-style-two" type="submit" name="submit-form">Submit Now </button>
                        </div>

                      </div>
                    </form>

                  </div>
                  <!--End Contact Form -->

                </div>
              </div>
              <!-- end item -->

            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
// import $ from "jquery"
import "bootstrap/dist/js/bootstrap.min"
import "jquery/dist/jquery"
// import "../utils/resume/script"
// import "../utils/resume/jquery-type.js"
export default {
  name: "index",
  mounted() {
  },
}
</script>

<style lang="css" scoped>
@import "~styles/resume_style/bootstrap.css";
@import "~styles/resume_style/style.css";
@import "~styles/resume_style/responsive.css";
</style>
