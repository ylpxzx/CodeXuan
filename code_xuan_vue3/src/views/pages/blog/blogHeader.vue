<template>
    <div class="q-pa-none">
        <q-toolbar class="bg-black text-white">
            <q-btn flat label="Homepage" />
            <q-space />
            <q-tabs v-model="tab" shrink stretch>
                <q-tab name="home" label="首页" @click="$router.push('/home')" />
                <q-tab name="tab2" label="归档" />
                <q-tab name="tab3" label="分类" @click="$router.push('/category')" />
                <q-tab name="tab4" label="关于我" />
                <q-tab name="tab5" label="留言" />
            </q-tabs>
        </q-toolbar>
    </div>
</template>

<script>
    export default {
        name: "blogHeader",
        data () {
            return {
                tab: 'home'
            }
        }
    }
</script>

<style scoped>

</style>