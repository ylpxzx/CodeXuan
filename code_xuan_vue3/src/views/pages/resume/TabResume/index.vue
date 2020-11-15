<template>
  <div class="row q-pa-md">
    <div class="col">
      <div class="card-outer animated animate__fadeInLeft">
        <q-card class="my-card">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            :height="150"
          />
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1170px
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
