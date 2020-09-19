<template>
  <div class="q-pa-md index-style">
    <div class="row">
      <div
        class="col-12 blog-style rounded-borders shadow-up-23"
        style="height: 190px;width: 100%;margin-bottom: 10px"
      >
        <q-img
          v-bind:style="background_style('Blog')"
          v-bind:src="content['Blog'].img"
        >
          <span class="absolute-full text-h6 text-bold flex flex-center">
            {{ content["Blog"]["name"] }}
          </span>
        </q-img>
        <div class="box-content">
          <h3 class="title">{{ content["Blog"]["title"] }}</h3>
          <span class="post">
            {{ content["Blog"]["post"] }}
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-3 blog-style rounded-borders shadow-24"
        style="height: 380px; margin-right: 10px"
      >
        <q-img
          v-bind:style="background_style('Code')"
          v-bind:src="content['Code'].img"
        >
          <span class="absolute-full text-h6 text-bold flex flex-center">
            Code
          </span>
        </q-img>
        <div class="box-content">
          <h3 class="title">{{ content["Code"]["title"] }}</h3>
          <span class="post">{{ content["Code"]["post"] }}</span>
        </div>
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
            <q-img
              v-bind:style="background_style('Interest')"
              v-bind:src="content['Interest'].img"
            >
              <span class="absolute-full text-h6 text-bold flex flex-center">
                Interest
              </span>
            </q-img>
            <div class="box-content">
              <h3 class="title">{{ content["Interest"]["title"] }}</h3>
              <span class="post">{{ content["Interest"]["post"] }}</span>
            </div>
          </div>
          <div
            class="col blog-style rounded-borders shadow-24"
            style="height: 140px"
          >
            <q-img
              v-bind:style="background_style('Resume')"
              v-bind:src="content['Resume'].img"
            >
              <span class="absolute-full text-h6 text-bold flex flex-center">
                Resume
              </span>
            </q-img>
            <div class="box-content">
              <h3 class="title">{{ content["Resume"]["title"] }}</h3>
              <span class="post">{{ content["Resume"]["post"] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "../styles/sass_style/index"
</style>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      slide: "style",
      autoplay: true,
      background_color: {
        Blog: {
          left: "#00ffee",
          top: "#07b8ac"
        },
        Code: {
          left: "#ffaa54",
          top: "#d66f09"
        },
        Interest: {
          left: "#bfff5e",
          top: "#97eb1a"
        },
        Resume: {
          left: "#64d2fa",
          top: "#14ace3"
        }
      },
      content: {
        Blog: {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          name: "Blog",
          title: "码轩博文",
          post: "记录经验，包括遇到的问题、学到的知识"
        },
        Code: {
          img: "",
          name: "Code",
          title: "码轩项目",
          post: "分享有趣的项目"
        },
        Interest: {
          img: "https://cdn.quasar.dev/img/parallax2.jpg",
          name: "Interest",
          title: "码轩兴趣",
          post: "记录美好与兴趣"
        },
        Resume: {
          img: "",
          name: "Resume",
          title: "码轩简历",
          post: "记录个人简历"
        }
      },
      index_swiper: [
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
      const left_color = this.background_color[name].left;
      const top_color = this.background_color[name].top;
      return `background: linear-gradient(to left top,${left_color},${top_color})`;
    }
  }
};
</script>
