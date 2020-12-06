<template>
    <div class="q-pa-md">
        <q-toolbar class="bg-black text-white shadow-2 rounded-borders">
            <q-btn flat label="Homepage" />
            <q-space />
            <q-tabs v-model="tab" shrink stretch>
                <q-tab name="home" label="首页" />
                <q-tab name="tab2" label="归档" />
                <q-tab name="tab3" label="分类" />
                <q-tab name="tab4" label="关于我" />
                <q-tab name="tab5" label="留言" />
                <q-btn
                    round
                    color="primary"
                    size="sm"
                    icon="search"
                />
            </q-tabs>
        </q-toolbar>
    </div>
</template>

<script>
    export default {
        name: "blogHeader",
        data () {
            return {
                tab: ''
            }
        }
    }
</script>

<style scoped>

</style>