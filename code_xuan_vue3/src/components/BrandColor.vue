<template>
  <div class="q-gutter-sm q-ma-none">
    <q-badge
      color="blue"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#1976D2')"
    />
    <q-badge
      color="blue-12"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#448aff')"
    />
    <q-badge
      color="blue-14"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#2962ff')"
    />
    <q-badge
      color="blue-10"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#0d47a1')"
    />
    <q-badge
      color="light-blue-9"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#0277bd')"
    />
    <q-badge
      color="deep-purple-6"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#673ab7')"
    />
    <q-badge
      color="deep-purple-8"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#512da8')"
    />
    <q-badge
      color="pink-10"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#880e4f')"
    />
    <q-badge
      color="indigo"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', 'indigo')"
    />
    <q-badge
      color="indigo-6"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#3f51b5')"
    />
    <q-badge
      color="indigo-9"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#283593')"
    />
    <q-badge
      color="cyan-10"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#006064')"
    />
    <q-badge
      color="teal"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', 'teal')"
    />
    <q-badge
      color="teal-10"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#004d40')"
    />
    <q-badge
      color="green-10"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#1b5e20')"
    />
    <q-badge
      color="brown"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', 'brown')"
    />
    <q-badge
      color="brown-7"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#6d4c41')"
    />
    <q-badge
      color="brown-10"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#3e2723')"
    />
    <q-badge
      color="blue-grey-8"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#455a64')"
    />
    <q-badge
      color="dark"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#263238')"
    />
    <q-badge
      color="deep-orange-9"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#d84315')"
    />
    <q-badge
      color="deep-orange-10"
      text-color="black"
      class="skin-color"
      @click="setBrand('primary', '#bf360c')"
    />
  </div>
</template>

<script>
import { colors } from 'quasar'
export default {
  name: 'BrandColor',
  methods: {
    setBrand: colors.setBrand
  }
}
</script>

<style lang="sass" scoped>
.skin-color
  padding: 8px
  border-radius: 50%
</style>
