<template>
  <div class="q-pa-md test" style="width: 35%; min-width: 375px">
    <div class="row">
      <div class="col-12" style="height: 190px; width: 100%; margin-bottom: 10px">
        <q-img class="rounded-borders shadow-24" style="height: 100%;background: #aa4b6b;background: -webkit-linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);background: linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);"></q-img>
      </div>
    </div>
    <div class="row">
      <div class="col-3" style="height: 380px; margin-right: 10px">
        <q-img class="rounded-borders shadow-24" style="height: 100%; background: #c94b4b;background: -webkit-linear-gradient(to right, #c94b4b, #4b134f);background: linear-gradient(to right, #c94b4b, #4b134f)"></q-img>
      </div>
      <div class="col">
        <div class="row">
          <div class="col" style="height: 230px; margin-bottom: 10px">
            <div class="q-pa-md">
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
                      class="bg-purple text-white rounded-borders"
              >
                <q-carousel-slide name="style" class="text-center">
                  <q-scroll-area class="fit">
                    <q-icon name="style" size="56px" />
                    <div class="q-mt-md">
                      {{ lorem }}
                    </div>
                  </q-scroll-area>
                </q-carousel-slide>

                <q-carousel-slide name="tv" class="text-center">
                  <q-scroll-area class="fit">
                    <q-icon name="live_tv" size="56px" />
                    <div class="q-mt-md">
                      {{ lorem }}
                    </div>
                  </q-scroll-area>
                </q-carousel-slide>

                <q-carousel-slide name="layers" class="text-center">
                  <q-scroll-area class="fit">
                    <q-icon name="layers" size="56px" />
                    <div class="q-mt-md">
                      {{ lorem }}
                    </div>
                  </q-scroll-area>
                </q-carousel-slide>

                <q-carousel-slide name="map" class="text-center">
                  <q-scroll-area class="fit">
                    <q-icon name="terrain" size="56px" />
                    <div class="q-mt-md">
                      {{ lorem }}
                    </div>
                  </q-scroll-area>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col" style="height: 140px; margin-right: 10px">
              <q-img class="rounded-borders shadow-24"
                     style="
                     height: 100%;
                     background: #23074d;
                     background: -webkit-linear-gradient(to right, #23074d, #cc5333);
                     background: linear-gradient(to right, #23074d, #cc5333)">
              </q-img>
            </div>
            <div class="col" style="height: 140px">
              <q-img class="rounded-borders shadow-24"
                     style="
                     height: 100%;
                     background: #355c7d;
                     background: -webkit-linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);
                     background: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)">
              </q-img>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.test
  position: absolute
  top: 50%
  left: 50%
  -webkit-transform: translate(-50%, -50%)
  -moz-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  -o-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
.q-pa-md
  padding: 0
</style>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      slide: 'style',
      autoplay: true,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  watch: {
    vertical (val) {
      this.navPos = val === true
              ? 'right'
              : 'bottom'
    }
  }
};
</script>
