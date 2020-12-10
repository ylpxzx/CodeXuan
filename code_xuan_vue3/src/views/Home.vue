<template>
  <div class="q-pa-md index-style">
    <div class="row">
      <div
        class="col-12 blog-style rounded-borders shadow-up-23"
        style="height: 210px;width: 100%;margin-bottom: 10px"
      >
        <router-link :to="{ name: content[0].url_name }">
          <q-img
            v-bind:style="background_style(content[0].name)"
            v-bind:src="content[0].img"
          >
            <span class="absolute-full text-h6 text-bold flex flex-center">
              {{ content[0].name }}
            </span>
          </q-img>
          <div class="box-content">
            <h3 class="title">{{ content[0].title }}</h3>
            <span class="post">
              {{ content[0].post }}
            </span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        class="col-3 blog-style rounded-borders shadow-24"
        style="height: 380px; margin-right: 10px"
      >
        <router-link :to="{ name: content[1].url_name }">
          <q-img
            v-bind:style="background_style(content[1].name)"
            v-bind:src="content[1].img"
          >
            <span class="absolute-full text-h6 text-bold flex flex-center">
              Code
            </span>
          </q-img>
          <div class="box-content">
            <h3 class="title">{{ content[1].title }}</h3>
            <span class="post">{{ content[1].post }}</span>
          </div>
        </router-link>
      </div>
      <div class="col">
        <div class="row">
          <div class="col" style="height: 230px; margin-bottom: 10px">
            <div class="q-pa-md shadow-24">
              <q-carousel
                v-model="slide"
                swipeable
                animated
                padding
                :autoplay="autoplay"
                navigation
                navigation-icon="radio_button_unchecked"
                @mouseenter="autoplay = false"
                @mouseleave="autoplay = true"
                height="230px"
                class="text-white rounded-borders"
              >
                <q-carousel-slide
                  v-for="(swiper, item) in index_swiper"
                  :key="item"
                  v-bind:name="swiper['slide_name']"
                  class="text-center"
                  v-bind:class="
                    swiper['icon']['icon_state'] ? swiper['color'] : ''
                  "
                  v-bind:img-src="
                    swiper['icon']['icon_state'] ? '' : swiper['img']
                  "
                >
                  <q-scroll-area class="fit">
                    <q-icon
                      v-bind:name="
                        swiper['icon']['icon_state']
                          ? swiper['icon']['icon_str']
                          : ''
                      "
                      size="56px"
                    />
                    <div class="q-mt-md">
                      {{ swiper["content"] }}
                    </div>
                  </q-scroll-area>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col blog-style rounded-borders shadow-24"
            style="height: 140px; margin-right: 10px"
          >
            <router-link :to="{ name: content[2].url_name }">
              <q-img
                v-bind:style="background_style(content[2].name)"
                v-bind:src="content[2].img"
              >
                <span class="absolute-full text-h6 text-bold flex flex-center">
                  Interest
                </span>
              </q-img>
              <div class="box-content">
                <h3 class="title">{{ content[2].title }}</h3>
                <span class="post">{{ content[2].post }}</span>
              </div>
            </router-link>
          </div>
          <div
            class="col blog-style rounded-borders shadow-24"
            style="height: 140px"
          >
            <router-link :to="{ name: content[3].url_name }">
              <q-img
                v-bind:style="background_style(content[3].name)"
                v-bind:src="content[3].img"
              >
                <span class="absolute-full text-h6 text-bold flex flex-center">
                  Resume
                </span>
              </q-img>
              <div class="box-content">
                <h3 class="title">{{ content[3].title }}</h3>
                <span class="post">{{ content[3].post }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: "style",
      autoplay: true,
      background_color: {
        // Home页在没有提供图片的前提下，采用渐变色
        Blog: {
          left: "#00ffee",
          top: "#07b8ac",
          state: true
        },
        Code: {
          left: "#ffaa54",
          top: "#d66f09",
          state: true
        },
        Interest: {
          left: "#bfff5e",
          top: "#97eb1a",
          state: true
        },
        Resume: {
          left: "#64d2fa",
          top: "#14ace3",
          state: true
        }
      },
      content: [
        // Home页各组件模块数据信息
        {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          name: "Blog",
          url_name: "home",
          title: "码轩博文",
          post: "记录经验，包括遇到的问题、学到的知识"
        },
        {
          img: "",
          name: "Code",
          url_name: "code",
          title: "码轩项目",
          post: "分享有趣的项目"
        },
        {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          name: "Interest",
          url_name: "interest",
          title: "码轩兴趣",
          post: "记录美好与兴趣"
        },
        {
          img: "",
          name: "Resume",
          url_name: "resume",
          title: "码轩简历",
          post: "记录个人简历"
        }
      ],
      index_swiper: [
        // Home页轮播数据信息
        {
          slide_name: "style",
          color: "bg-blue",
          icon: { icon_state: true, icon_str: "style" },
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          img: "https://placeimg.com/500/300/nature"
        },
        {
          slide_name: "tv",
          color: "bg-green",
          icon: { icon_state: false, icon_str: "layers" },
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          img: "https://cdn.quasar.dev/img/mountains.jpg"
        },
        {
          slide_name: "layers",
          color: "bg-red",
          icon: { icon_state: true, icon_str: "terrain" },
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          img: "https://placeimg.com/500/300/nature"
        },
        {
          slide_name: "map",
          color: "bg-cyan",
          icon: { icon_state: true, icon_str: "live_tv" },
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          img: "https://cdn.quasar.dev/img/mountains.jpg"
        }
      ]
    };
  },
  methods: {
    background_style(name) {
      // 在v-bind中使用的方法，尽量不要用计算属性，因为会无效，暂时未找到原因
      let background_result = "";
      if (this.background_color[name].state) {
        const left_color = this.background_color[name].left;
        const top_color = this.background_color[name].top;
        background_result = `background: linear-gradient(to left top,${left_color},${top_color})`; // ``符号为es6的字符格式化方法
      } else {
        background_result = "";
      }
      return background_result;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "styles/sass_style/home"
</style>
