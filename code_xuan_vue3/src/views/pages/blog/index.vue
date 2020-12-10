<template>
  <div class="blog_container">
    <blog-header></blog-header>
      <q-page-container>
        <q-page>
          <div class="row justify-center">
            <div class="col-12 col-md-9 q-pa-sm">
              <div>
                <q-banner inline-actions rounded class="bg-primary text-white">
                  如果发现界面排版很紧凑的情况，请刷新页面.
                </q-banner>
              </div>
            </div>
            <div class="col-12 col-md-9">
              <div class="row">
                <div class="col-12 col-md-9">
                  <router-view></router-view>
                </div>
                <div class="col-12 col-md-3 q-pa-sm">
                  <blog-sider></blog-sider>
                </div>
              </div>
            </div>
          </div>
          <q-page-scroller position="bottom-left" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
          <q-page-sticky position="bottom-right" :offset="fabPos">
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
          </q-page-sticky>
        </q-page>
      </q-page-container>
  </div>
</template>

<script>
import BlogHeader from "./blogHeader";
import BlogSider from "./blogSider";
export default {
  name: "index",
  components: {
    BlogHeader,
    BlogSider
  },
  data () {
    return {
      fab1: true,
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ],
      expanded: false,
      record1: '努力变强, 然后越来越嚣张.',
      record: '  Mr.XZX 个人站点, 记录点滴, 记录成长, 分享经验, 拥抱爱和正义, 维护世界和平!',
      fabPos: [ 18, 18 ],
      draggingFab: false,
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      },
      current: 6,
      panel: 'mails',
      tab: 'alarms',
      sidTab: 'record',
      autoplay: true,
      slide: 'style',
      lorem: 'Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    },
    moveFab (ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;
      this.fabPos = [this.fabPos[0] - ev.delta.x, this.fabPos[1] - ev.delta.y];
    },
    BlogDetail (id) {
      this.$router.push('/detail/' + id)
    }
  }
};
</script>

<style lang="sass" scoped>
.blog_container
  min-width: 300px
  background-color: #f5f7f9
</style>
