<template>
  <div class="page-wrapper default-version">
    <div class="card-outer">
      <div class="scroll-box">
        <div
          class="container"
          data-animation-in="fadeInLeft"
          data-animation-out="fadeOutLeft"
        >
          <div class="card-wrapper">
            <div
              class="author-info"
              :style="{
                backgroundImage:
                  'url(' + require('@/assets/images/background/3.jpg') + ')'
              }"
            >
              <div class="image">
                <img src="~assets/images/resource/user.png" alt="" />
              </div>
              <div class="author">
                <div class="column items-center">
                  <div class="col">
                    <h3>{{ resumeInfo.name }}</h3>
                  </div>
                  <div class="col">
                    <div class="designation" style="margin-bottom: 7px">
                      {{ resumeInfo.shortOpen }}
                      <div class="typing-title">
                        <vue-typed-js
                          :strings="resumeInfo.introduce"
                          :loop="true"
                        >
                          <p><strong class="typing"></strong></p>
                        </vue-typed-js>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="link-btn">
                <a
                  href="http://www.17sucai.com/"
                  class="theme-btn btn-style-one"
                  >Download CV
                </a>
              </div>
              <ul class="social-icon-two">
                <li>
                  <a href="#">
                    <q-icon name="fa fa-facebook">
                      <q-tooltip
                        transition-show="flip-right"
                        transition-hide="flip-left"
                        content-class="bg-indigo"
                        :offset="[10, 10]"
                      >
                        提示
                      </q-tooltip>
                    </q-icon>
                  </a>
                </li>
                <li>
                  <a href="#"><q-icon name="fa fa-twitter"></q-icon></a>
                </li>
                <li>
                  <a href="#"><q-icon name="fa fa-pinterest"></q-icon></a>
                </li>
                <li>
                  <a href="#"><q-icon name="fa fa-google-plus"></q-icon></a>
                </li>
                <li>
                  <a href="#"><q-icon name="fa fa-dribbble"></q-icon></a>
                </li>
              </ul>
            </div>
            <div class="card-inner-box">
              <header class="header wow fadeInLeft" data-wow-duration="1.5s">
                <ul class="main-menu">
                  <li class="active home">
                    <a class="logo" href="#home">
                      <img src="~assets/images/logo1.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#about"><i class="flaticon-social"></i>简介</a>
                  </li>
                  <li>
                    <a href="#resume">
                      <i class="flaticon-curriculum"></i>经验
                    </a>
                  </li>
                  <!--<li><a href="#services"><i class="flaticon-layers-1"></i>待定</a></li>-->
                  <li>
                    <a href="#work"><i class="flaticon-tools"></i>项目</a>
                  </li>
                  <li>
                    <a href="#blog"><i class="flaticon-blog"></i>博文</a>
                  </li>
                  <li>
                    <a href="#test"><i class="flaticon-send-mail"></i>兴趣</a>
                  </li>
                  <li>
                    <a href="#contact">
                      <i class="flaticon-send-mail"></i>联系
                    </a>
                  </li>
                </ul>
              </header>

              <!-- card item -->
              <div
                class="card-home card-item active"
                id="home"
                :style="{
                  backgroundImage:
                    'url(' + require('@/assets/images/background/1.jpg') + ')'
                }"
              >
                <div class="card-inner wow fadeInUp" data-wow-duration="2s">
                  <div class="image">
                    <img src="~assets/images/resource/user.png" alt="" />
                  </div>
                  <div class="author">
                    <div class="column items-center">
                      <div class="col">
                        <h3>{{ resumeInfo.name }}</h3>
                      </div>
                      <div class="col">
                        <div class="designation">
                          {{ resumeInfo.shortOpen }}
                          <div class="typing-title">
                            <vue-typed-js
                              :strings="resumeInfo.introduce"
                              :loop="true"
                            >
                              <p><strong class="typing"></strong></p>
                            </vue-typed-js>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text" style="margin-bottom: 0px">
                    {{ resumeInfo.motto }}
                  </div>
                  <div class="link-btn">
                    <a href="#" class="theme-btn btn-style-one">Download CV</a>
                    <a href="#" class="theme-btn btn-style-two">Hire Me</a>
                  </div>
                  <ul class="social-icon-two">
                    <li>
                      <a href="#"><q-icon name="fa fa-facebook"></q-icon></a>
                    </li>
                    <li>
                      <a href="#"><q-icon name="fa fa-twitter"></q-icon></a>
                    </li>
                    <li>
                      <a href="#"><q-icon name="fa fa-pinterest"></q-icon></a>
                    </li>
                    <li>
                      <a href="#"><q-icon name="fa fa-google-plus"></q-icon></a>
                    </li>
                    <li>
                      <a href="#"><q-icon name="fa fa-dribbble"></q-icon></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- end item -->

              <!-- card item -->
              <div class="card-about card-item" id="about">
                <div class="card-inner">
                  <h4 class="title">介绍</h4>
                  <div class="text">{{ authorInfo.introduce }}</div>
                  <div class="info-list">
                    <div class="row">
                      <div class="col-md-6">
                        <ul class="list-style-one">
                          <li><strong>Name:</strong> {{ authorInfo.name }}</li>
                          <li>
                            <strong>Phone:</strong> {{ authorInfo.phone }}
                          </li>
                          <li>
                            <strong>Address:</strong> {{ authorInfo.address }}
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <ul class="list-style-one">
                          <li>
                            <strong>Email:</strong> {{ authorInfo.email }}
                          </li>
                          <li>
                            <strong>Professional:</strong>
                            {{ authorInfo.professional }}
                          </li>
                          <li>
                            <strong>Hobby:</strong> {{ authorInfo.hobby }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 class="title">专业能力</h4>
                  <div class="q-pb-md">
                    <q-list>
                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label>Content filtering</q-item-label>
                          <q-item-label caption>
                            Set the content filtering level to restrict apps
                            that can be downloaded
                          </q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label>Password</q-item-label>
                          <q-item-label caption>
                            Require password for purchase or use password to
                            restrict purchase
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                  <h4 class="title">技能占比</h4>
                  <div class="row">
                    <!-- About Block -->
                    <div
                      class="col-md-12"
                      v-for="(item, index) in authorInfo.skill"
                      :key="index"
                    >
                      <q-card flat>
                        <q-card-section>
                          <div class="text-h5">
                            <strong>{{ item.type }}</strong>
                          </div>
                        </q-card-section>
                        <q-separator inset />
                        <q-card-section class="q-pt-md">
                          <div class="row">
                            <div
                              class="skill-block col-md-3 q-pt-sm"
                              v-for="(skill, key) in item.category"
                              :key="key"
                            >
                              <div class="inner-box">
                                <div class="graph-outer">
                                  <q-circular-progress
                                    show-value
                                    font-size="18px"
                                    :value="skill.value"
                                    size="80px"
                                    :thickness="0.18"
                                    :color="skill.color"
                                    track-color="grey-3"
                                    class="q-mb-sm"
                                  >
                                    {{ skill.value }}%
                                  </q-circular-progress>
                                </div>
                                <h3 style="margin-top: 0px">
                                  {{ skill.name }}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->

              <!-- card item -->
              <div class="card-resume card-item" id="resume">
                <div class="card-inner">
                  <h4 class="title">Work Experience</h4>
                  <div class="row">
                    <div class="q-px-lg q-pb-md">
                      <q-timeline :layout="layout" color="secondary">
                        <q-timeline-entry heading>
                          Timeline heading
                          <br />
                          ({{
                            $q.screen.lt.sm
                              ? "Dense"
                              : $q.screen.lt.md
                              ? "Comfortable"
                              : "Loose"
                          }}
                          layout)
                        </q-timeline-entry>

                        <q-timeline-entry
                          title="Event Title"
                          subtitle="February 22, 1986"
                          side="left"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                          title="Event Title"
                          subtitle="February 21, 1986"
                          side="right"
                          icon="delete"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </q-timeline-entry>

                        <q-timeline-entry heading>
                          November, 2017
                        </q-timeline-entry>

                        <q-timeline-entry
                          title="Event Title"
                          subtitle="February 22, 1986"
                          side="left"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                          title="Event Title"
                          subtitle="February 22, 1986"
                          side="right"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                          title="Event Title"
                          subtitle="February 22, 1986"
                          side="left"
                          color="orange"
                          icon="done_all"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                          title="Event Title"
                          subtitle="February 22, 1986"
                          side="right"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </q-timeline-entry>
                        <q-timeline-entry
                          title="Event Title"
                          subtitle="February 22, 1986"
                          side="left"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </q-timeline-entry>
                      </q-timeline>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->
              <!-- card item -->
              <div class="card-services card-item" id="services">
                <div class="card-inner">
                  <h4 class="title">Skills</h4>
                  <div class="row">
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box">
                          <span class="icon flaticon-layers-1"></span>
                        </div>
                        <h4><a href="blog-single.html">Logo Design</a></h4>
                        <div class="text">
                          Lorem ipsum dolor amet constur adipisicing elit
                        </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box">
                          <span class="icon flaticon-layers-1"></span>
                        </div>
                        <h4><a href="blog-single.html">Logo Design</a></h4>
                        <div class="text">
                          Lorem ipsum dolor amet constur adipisicing elit
                        </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box">
                          <span class="icon flaticon-layers-1"></span>
                        </div>
                        <h4><a href="blog-single.html">Logo Design</a></h4>
                        <div class="text">
                          Lorem ipsum dolor amet constur adipisicing elit
                        </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box">
                          <span class="icon flaticon-layers-1"></span>
                        </div>
                        <h4><a href="blog-single.html">Logo Design</a></h4>
                        <div class="text">
                          Lorem ipsum dolor amet constur adipisicing elit
                        </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box">
                          <span class="icon flaticon-web-design"></span>
                        </div>
                        <h4><a href="blog-single.html">Apps Design</a></h4>
                        <div class="text">
                          Lorem ipsum dolor amet constur adipisicing elit
                        </div>
                      </div>
                    </div>
                    <div class="services-block col-md-6">
                      <div class="inner-box">
                        <div class="icon-box">
                          <span class="icon flaticon-photo-camera"></span>
                        </div>
                        <h4><a href="blog-single.html">Photography</a></h4>
                        <div class="text">
                          Lorem ipsum dolor amet constur adipisicing elit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->
              <!-- card item -->
              <div class="card-projects card-item" id="work">
                <div class="card-inner">
                  <h4 class="title">Projects</h4>
                  <div class="row">
                    <div class="projects-block col-md-6">
                      <div class="inner-box">
                        <figure class="image">
                          <img src="~assets/images/gallery/1.jpg" alt="image" />
                          <div class="overlay">
                            <a
                              class="lightbox-image option-btn"
                              title="Image Caption Here"
                              data-fancybox-group="example-gallery"
                              href="~assets/images/gallery/1.jpg"
                            >
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
                          <img src="~assets/images/gallery/2.jpg" alt="image" />
                          <div class="overlay">
                            <a
                              class="lightbox-image option-btn"
                              title="Image Caption Here"
                              data-fancybox-group="example-gallery"
                              href="~assets/images/gallery/2.jpg"
                            >
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
                          <img src="~assets/images/gallery/3.jpg" alt="image" />
                          <div class="overlay">
                            <a
                              class="lightbox-image option-btn"
                              title="Image Caption Here"
                              data-fancybox-group="example-gallery"
                              href="~assets/images/gallery/3.jpg"
                            >
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
                          <img src="~assets/images/gallery/4.jpg" alt="image" />
                          <div class="overlay">
                            <a
                              class="lightbox-image option-btn"
                              title="Image Caption Here"
                              data-fancybox-group="example-gallery"
                              href="~assets/images/gallery/4.jpg"
                            >
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
                          <img src="~assets/images/gallery/5.jpg" alt="image" />
                          <div class="overlay">
                            <a
                              class="lightbox-image option-btn"
                              title="Image Caption Here"
                              data-fancybox-group="example-gallery"
                              href="~assets/images/gallery/5.jpg"
                            >
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
                          <img src="~assets/images/gallery/6.jpg" alt="image" />
                          <div class="overlay">
                            <a
                              class="lightbox-image option-btn"
                              title="Image Caption Here"
                              data-fancybox-group="example-gallery"
                              href="~assets/images/gallery/6.jpg"
                            >
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
              <div class="card-blog card-item" id="blog">
                <div class="card-inner">
                  <h4 class="title">Blog</h4>
                  <div class="news-block">
                    <div class="inner-box">
                      <div class="image">
                        <img src="~assets/images/resource/blog-1.jpg" alt="" />
                        <div class="overlay">
                          <a class="link-btn" href="blog-single.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="date"><strong>02</strong> <br />Sep</div>
                      <div class="lower-content">
                        <h4>
                          <a href="blog-single.html">Let’s Talk About Design</a>
                        </h4>
                        <div class="post-meta">
                          by admin / <span>Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="news-block">
                    <div class="inner-box">
                      <div class="image">
                        <img src="~assets/images/resource/blog-2.jpg" alt="" />
                        <div class="overlay">
                          <a class="link-btn" href="blog-single.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="date"><strong>04</strong> <br />Sep</div>
                      <div class="lower-content">
                        <h4>
                          <a href="blog-single.html">Let’s Talk About Design</a>
                        </h4>
                        <div class="post-meta">
                          by admin / <span>Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="news-block">
                    <div class="inner-box">
                      <div class="image">
                        <img src="~assets/images/resource/blog-3.jpg" alt="" />
                        <div class="overlay">
                          <a class="link-btn" href="blog-single.html">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="date"><strong>06</strong> <br />Sep</div>
                      <div class="lower-content">
                        <h4>
                          <a href="blog-single.html">Let’s Talk About Design</a>
                        </h4>
                        <div class="post-meta">
                          by admin / <span>Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->
              <!-- card item -->
              <div class="card-contact card-item" id="contact">
                <div class="card-inner">
                  <h3 class="title">Contact</h3>
                  <h4>Keep In Touch</h4>
                  <div class="row clearfix">
                    <div class="col-md-6">
                      <ul class="list-style-two">
                        <li>
                          <span class="icon flaticon-signs"></span>
                          PO Box 16122 Collins Street <br />
                          West Victoria 8007 Canada
                        </li>
                        <li>
                          <span class="icon flaticon-smartphone"></span>
                          (+48) 564-334-21-22-34 <br />(+48) 564-334-21-25
                        </li>
                        <li>
                          <span class="icon flaticon-note-1"></span>
                          info@cretox.com <br />info@example.com
                        </li>
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
                            data-map-zoom="11"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>How Can I Help?</h4>
                  <!-- Contact Form -->
                  <div class="contact-form">
                    <!--Comment Form-->
                    <form
                      method="post"
                      action="sendemail.php"
                      id="contact-form"
                    >
                      <div class="row clearfix">
                        <div class="col-md-6 form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div class="col-md-6 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div class="col-md-6 form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div class="col-md-6 form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                          />
                        </div>
                        <div class="col-lg-12 col-md-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div class="col-lg-12 col-md-12 form-group">
                          <button
                            class="theme-btn btn-style-two"
                            type="submit"
                            name="submit-form"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!--End Contact Form -->
                </div>
              </div>
              <!-- end item -->

              <!-- card item -->
              <div class="card-contact card-item" id="test">
                <div class="card-inner">
                  <h3 class="title">Interest</h3>
                  <div class="q-pa-md">
                    <div class="q-col-gutter-md row items-start">
                      <div class="col-6">
                        <q-img
                          src="https://cdn.quasar.dev/img/parallax2.jpg"
                          style="width: 100%"
                        >
                          <div
                            class="absolute-bottom text-subtitle1 text-center"
                          >
                            Caption
                          </div>
                        </q-img>
                      </div>

                      <div class="col-6">
                        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                          <div class="absolute-top text-center">
                            Caption
                          </div>
                        </q-img>
                      </div>

                      <div class="col-6">
                        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                          <div class="absolute-bottom-right text-subtitle2">
                            Caption
                          </div>
                        </q-img>
                      </div>

                      <div class="col-6">
                        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                          <div
                            class="absolute-full text-subtitle2 flex flex-center"
                          >
                            Caption
                          </div>
                        </q-img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end item -->
            </div>
          </div>
        </div>
      </div>
      <div class="fixed-bottom-right q-pa-lg">
          <q-fab
            color="amber"
            text-color="black"
            icon="keyboard_arrow_left"
            v-model="fab1"
            label-position="top"
            label-class="bg-grey-3 text-purple"
            external-label
            direction="left"
          >
            <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="primary" @click="onClick" icon="mail" label="博文" />
            <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="secondary" @click="onClick" icon="alarm" label="项目" />
            <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="orange" @click="onClick" icon="airplay" label="兴趣" />
            <q-fab-action label-class="bg-grey-3 text-grey-8" external-label label-position="top" color="accent" @click="onClick" icon="room" label="简历" />

          </q-fab>
        </div>
    </div>
  </div>
</template>

<script>
import "jquery";
import $ from "jquery";
import "jquery.nicescroll";
export default {
  name: "index",
  data() {
    return {
      fab1: true,
      fab2: true,
      check1: true,
      check2: false,
      check3: false,
      notif1: true,
      notif2: true,
      notif3: false,
      volume: 6,
      brightness: 3,
      mic: 8,
      resumeInfo: {
        name: "Mr.XZX",
        shortOpen: "Hi i'm xzx",
        motto:
          "If you wish to succeed, you should use persistence as your good friend,experience as your reference, prudence as your brother and hope as your sentry.",
        introduce: [
          "A lustful, affectionate, dashing and happy,",
          "despicable and shameless good man."
        ]
      },
      authorInfo: {
        name: "谢宗鑫",
        email: "794859685@qq.com",
        phone: "5201314xxxx",
        professional: "Coder",
        address: "The world ---> China",
        hobby: "看书、打球、绘画、睡觉、偷懒",
        introduce:
          "年轻那会儿,喜欢阅读、喜欢绘画、喜欢球类运动,幻想着未来保守会成为一名有格调的艺术家. 但现实中,由于对黑客人物的崇拜,对新奇技术的向往,穿上了有”格调“的衬衫,走进了代码的世界.",
        skill: [
          {
            type: "Python",
            category: [
              {
                name: "Python",
                color: "blue",
                value: 78
              },
              {
                name: "Django",
                color: "green",
                value: 70
              },
              {
                name: "Flask",
                color: "orange",
                value: 60
              },
              {
                name: "Pandas",
                color: "teal",
                value: 50
              },
              {
                name: "爬虫",
                color: "yello",
                value: 60
              }
            ]
          },
          {
            type: "Java",
            category: [
              {
                name: "Java",
                color: "blue",
                value: 50
              },
              {
                name: "JSP",
                color: "green",
                value: 70
              },
              {
                name: "Spring",
                color: "orange",
                value: 60
              },
              {
                name: "SpringMVC",
                color: "teal",
                value: 50
              },
              {
                name: "SpringBoot",
                color: "yello",
                value: 50
              }
            ]
          },
          {
            type: "前端",
            category: [
              {
                name: "Vue",
                color: "blue",
                value: 78
              },
              {
                name: "HTML+CSS",
                color: "green",
                value: 70
              },
              {
                name: "JavaScript",
                color: "orange",
                value: 60
              },
              {
                name: "Webpack",
                color: "teal",
                value: 40
              },
              {
                name: "Node",
                color: "yello",
                value: 30
              }
            ]
          },
          {
            type: "数据库",
            category: [
              {
                name: "MySQL",
                color: "blue",
                value: 79
              },
              {
                name: "MongDB",
                color: "green",
                value: 70
              },
              {
                name: "Redis",
                color: "orange",
                value: 60
              },
              {
                name: "ELS",
                color: "teal",
                value: 50
              },
              {
                name: "图数据库",
                color: "yello",
                value: 10
              }
            ]
          }
        ]
      },
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  mounted() {
    const container = $(".card-outer .container");
    const innerbox = $(".card-outer .card-inner-box");
    const card_items = $(".card-item");
    const animation_in = container.data("animation-in");
    const animation_out = container.data("animation-out");
    $(".main-menu").on("click", "a", function() {
      console.log("test:dds");
      /* vars */
      const id = $(this).attr("href");
      const card_item = $(id);
      const menu_items = $(".main-menu li");
      const menu_item_home = $(".main-menu li.home");
      const menu_item = $(this).closest("li");

      /* if desktop */
      if (!menu_item.hasClass("active") & $("#home").length) {
        /* close card items */
        menu_items.removeClass("active");
        container.find(card_items).removeClass("animated " + animation_in);

        if ($(container).hasClass("opened")) {
          container.find(card_items).addClass("animated " + animation_out);
        }

        /* open card item */
        menu_item.addClass("active");
        container.addClass(" ");
        container.find(card_item).removeClass("animated " + animation_out);
        container.find(card_item).addClass("animated " + animation_in);

        $(card_items).addClass("hide-item");

        $(card_item).removeClass("hide-item");
        $(card_item).addClass("active");
      }

      if (!menu_item_home.hasClass("active")) {
        $(innerbox).addClass("offsetleft");
      } else {
        $(innerbox).removeClass("offsetleft");
      }

      return false;
    });
    $(".card-inner").niceScroll({ autohidemode: "scroll" });
    $("#test-box").niceScroll();
  },
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    }
  },
  methods: {
      moveFab (ev) {
          this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

          this.fabPos = [
              this.fabPos[0] - ev.delta.x,
              this.fabPos[1] - ev.delta.y
          ]
      }
  }
};
</script>

<style lang="css" scoped>
@import "~styles/resume_style/bootstrap.css";
@import "~styles/resume_style/style.css";
@import "~styles/resume_style/responsive.css";
.my-card {
  width: 100%;
  max-width: 350px;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
