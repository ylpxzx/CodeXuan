<template>
    <div class="q-pa-none">
        <q-toolbar class="bg-primary text-white">
            <q-btn flat label="Homepage" />
            <q-space />
            <q-tabs v-model="tab" shrink stretch>
                <q-tab name="home" label="首页" @click="$router.push('/home')" />
                <q-tab name="tab2" label="归档" />
                <q-tab name="tab3" label="分类" @click="$router.push('/category')" />
                <q-tab name="tab4" label="关于我" />
                <q-tab name="tab5" label="留言" />
                <q-btn-dropdown
                    flat
                    no-caps
                    stretch
                    auto-close
                    size="sm"
                >
                    <template v-slot:label>
                        <q-icon color="white" size="26px" name="person">
                        </q-icon>
                    </template>
                    <div class="row no-wrap q-pa-md">
                        <div
                            class="column"
                            style="min-width: 200px;max-width: 200px;"
                        >
                            <div class="text-h6 q-mb-md">Settings</div>
                            <div class="text-subtitle2 text-weight-bold q-pl-sm">主题颜色</div>
                            <brand-color />
                        </div>
                        <q-separator
                            vertical
                            inset
                            class="q-mx-lg"
                        />
                        <div class="column items-center">
                            <q-avatar size="80px">
                                <img src="~assets/images/test_img/avater.jpg" preview="6">
                            </q-avatar>
                            <div class="text-subtitle1 q-mt-md q-mb-xs">{{this.$store.getters.name||'狼性书生'}}</div>
                        </div>
                    </div>
                </q-btn-dropdown>
            </q-tabs>
        </q-toolbar>
    </div>
</template>

<script>
import BrandColor from 'components/BrandColor'
export default {
    name: "blogHeader",
    components: {
        BrandColor
    },
    data () {
        return {
            tab: 'home'
        }
    }
}
</script>

<style scoped>
</style>