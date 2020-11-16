<template>
  <div class="card-outer">
    <div class="row">
      <div class="col-12 col-md-2 animated" :class="left_in" :style="{display:(display_item?'block':'none')}">
        <div>
          <div style="height:200px;background-color: green"></div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div>
          <div style="height:200px;background-color: blue"></div>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div>
          <div style="width: 400px; height:200px;background-color: red"></div>
        </div>
      </div>
    </div>
    <button @click="test_button">test</button>
  </div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
export default {
  name: "index",
  data() {
    return {
      display_item: true,
      slide: "style",
      left_in: 'animate__fadeInLeft',
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
  methods: {
    test_button() {
      this.display_item = !this.display_item
      if (this.display_item) {
        this.left_in = 'animate__fadeInLeft'
      } else {
        this.left_in = 'animate__backOutLeft'
      }
      console.log(this.display_item, this.left_in)
    }
  }
};
</script>

<style lang="sass" scoped>
.card-outer
  position: fixed
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center
  height: 100%
  width: 100%
  top: 0
  left: 0
</style>
