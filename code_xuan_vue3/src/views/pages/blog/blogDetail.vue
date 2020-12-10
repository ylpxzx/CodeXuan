<template>
    <div class="q-pa-sm q-gutter-md">
        <q-card flat>
            <q-parallax :height="300" :speed="0.8" >
                <template v-slot:media>
                    <img src="~assets/images/test_img/2001597.jpg" preview="10" />
                </template>
<!--                <h1 class="text-white">Docks</h1>-->
            </q-parallax>
            <q-card-section class="q-pb-xs">
                <div class="text-h5 q-mt-sm q-mb-xs">Django实现推荐系统加模糊算法搜索{{ id }}</div>
            </q-card-section>
            <q-card-section horizontal class="q-pt-none q-pb-md">
                <div class="q-pl-md">
                    作者： <q-badge color="primary">狼性书生</q-badge>
                </div>
                <div class="q-pl-md">
                    发表： <q-badge color="primary">2020-12-10</q-badge>
                </div>
                <div class="q-pl-md">
                    分类： <q-badge color="primary">Python</q-badge>
                </div>
                <div class="q-pl-md">
                    阅读次数： <q-badge color="primary">45</q-badge>
                </div>
                <div class="q-pl-md">
                    字数： <q-badge color="primary">1250</q-badge>
                </div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
                <div>
                    markdown内容
                </div>
            </q-card-section>
            <q-card-section align="center">
                <div class="q-pa-md q-gutter-md">
                    <q-avatar rounded color="red" text-color="white" icon="directions" />
                    <q-avatar rounded color="primary" text-color="white">J</q-avatar>
                </div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
                分页
            </q-card-section>

        </q-card>
        <q-card flat>
            <q-card-section>
                <div>评论</div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
    export default {
        name: "blogDetail",
        data () {
            return {
                id: null,
                expanded: false,
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            }
        },
        mounted() {
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped>

</style>