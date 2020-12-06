<template>
  <div class="blog_container">
    <blog-header></blog-header>
    <blog-home></blog-home>
  </div>
</template>

<script>
import BlogHeader from "./blogHeader";
import BlogHome from "./blogHome";
export default {
  name: "index",
  components: {
    BlogHome,
    BlogHeader
  }
};
</script>

<style lang="sass" scoped>
.blog_container
  background-color: #f5f7f9
</style>
