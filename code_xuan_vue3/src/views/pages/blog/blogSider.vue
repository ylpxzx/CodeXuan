<template>
    <div>
        <div class="row q-pb-md">
            <q-card flat style="width: 100%">
                <q-item>
                    <q-item-section avatar>
                        <q-avatar size="80px">
                            <img src="~assets/images/test_img/avater.jpg" preview="6">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label class="text-weight-bold">狼性书生</q-item-label>
                        <q-item-label caption class="text-weight-medium">
                            Mr.XZX
                        </q-item-label>
                        <q-item-label caption class="text-weight-medium">
                            {{ record1 }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-card-section class="text-caption text-grey text-weight-medium q-pt-none">
                    {{ record }}
                </q-card-section>
                <q-card-section align="center" class="q-pt-none">
                    <q-chip dense size="md" clickable href="#" color="primary" text-color="white">
                        Github
                    </q-chip>
                    <q-chip dense size="md" clickable href="#" color="primary" text-color="white">
                        CSDN
                    </q-chip>
                    <q-chip dense size="md" clickable href="#" color="primary" text-color="white">
                        知乎
                    </q-chip>
                    <q-chip dense size="md" clickable href="#" color="primary" text-color="white">
                        掘金
                    </q-chip>
                </q-card-section>
                <q-card-section align="center" class="q-pt-none">
                    <q-chip dense square>
                        <q-avatar rounded style="width: 29px" color="red" text-color="white">1520</q-avatar>
                        文章
                    </q-chip>
                    <q-chip dense square>
                        <q-avatar rounded style="width: 29px" color="primary" text-color="white">50</q-avatar>
                        分类
                    </q-chip>
                    <q-chip dense square>
                        <q-avatar rounded style="width: 29px" color="deep-orange" text-color="white">50</q-avatar>
                        标签
                    </q-chip>
                    <q-chip dense square>
                        <q-avatar rounded style="width: 29px" color="deep-purple" text-color="white">150</q-avatar>
                        转载
                    </q-chip>
                </q-card-section>
                <q-card-section align="center" class="q-pt-none">
                    <q-btn round color="primary" icon="search" />
                </q-card-section>
            </q-card>
        </div>
        <div class="row q-pb-md">
            <q-card flat style="width: 100%">
                <q-tabs
                        v-model="tab"
                        dense
                        class="text-grey"
                        active-color="primary"
                        indicator-color="primary"
                        align="justify"
                        narrow-indicator
                >
                    <q-tab name="mails" label="点击排行" />
                    <q-tab name="alarms" label="图文推荐" />
                    <q-tab name="movies" label="最新文章" />
                </q-tabs>

                <q-separator />

                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="mails">
                        <q-list>
                            <q-item clickable v-ripple>
                                <q-item-section side class="q-pr-none">
                                    <q-icon size="sm" name="looks_one" color="red" class="q-pr-sm"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-badge color="teal" label="10121" />
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section side class="q-pr-none">
                                    <q-icon size="sm" name="looks_two" color="orange" class="q-pr-sm"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-badge color="teal" label="10121" />
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section side class="q-pr-none">
                                    <q-icon size="sm" name="looks_3" color="yellow" class="q-pr-sm"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-badge color="teal" label="10121" />
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section side class="q-pr-none">
                                    <q-icon size="sm" name="looks_4" color="grey" class="q-pr-sm"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-badge color="teal" label="10121" />
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section side class="q-pr-none">
                                    <q-icon size="sm" name="looks_5" color="grey" class="q-pr-sm"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-badge color="teal" label="10121" />
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section side class="q-pr-none">
                                    <q-icon size="sm" name="looks_6" color="grey" class="q-pr-sm"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item</q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-badge color="teal" label="10121" />
                                </q-item-section>
                            </q-item>

                        </q-list>
                    </q-tab-panel>

                    <q-tab-panel name="alarms">
                        <q-list class="q-pr-none q-pl-none">
                            <q-item clickable>
                                <q-item-section top thumbnail class="q-ml-none">
                                    <img src="~assets/images/test_img/2007035.jpg" preview="7" class="q-img rounded-borders" style="height: 100%">
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item Single line item Single line item Single line item</q-item-label>
                                    <q-item-label>
                                        <q-chip dense size="sm">
                                            <q-avatar color="teal" text-color="white" />
                                            Python
                                        </q-chip>
                                        <q-chip dense size="sm">
                                            <q-avatar color="primary" text-color="white" />
                                            2020-12-07
                                        </q-chip>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item clickable>
                                <q-item-section top thumbnail class="q-ml-none">
                                    <img src="~assets/images/test_img/2020126.jpg" preview="7" class="q-img rounded-borders" style="height: 100%">
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item Single line item Single line item Single line item</q-item-label>
                                    <q-item-label>
                                        <q-chip dense size="sm">
                                            <q-avatar color="teal" text-color="white" />
                                            Python
                                        </q-chip>
                                        <q-chip dense size="sm">
                                            <q-avatar color="primary" text-color="white" />
                                            2020-12-07
                                        </q-chip>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item clickable>
                                <q-item-section top thumbnail class="q-ml-none">
                                    <img src="~assets/images/test_img/2008524.jpg" preview="7" class="q-img rounded-borders" style="height: 100%">
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Single line item Single line item Single line item Single line item</q-item-label>
                                    <q-item-label>
                                        <q-chip dense size="sm">
                                            <q-avatar color="teal" text-color="white" />
                                            Python
                                        </q-chip>
                                        <q-chip dense size="sm">
                                            <q-avatar color="primary" text-color="white" />
                                            2020-12-07
                                        </q-chip>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-tab-panel>

                    <q-tab-panel name="movies">
                        <q-list>
                            <q-item clickable>
                                <q-item-section>
                                    <q-item-label overline lines="1">OVERLINEOVERLINEOVE</q-item-label>
                                    <q-item-label caption lines="3">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                                    <q-item-label align="right" side caption lines="1" class="text-weight-medium">
                                        <q-chip dense size="sm" outline color="primary">
                                            February 22nd, 2019
                                        </q-chip>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-separator inset />
                            <q-item clickable>
                                <q-item-section>
                                    <q-item-label overline lines="1">OVERLINEOVERLINEOVE</q-item-label>
                                    <q-item-label caption lines="3">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                                    <q-item-label align="right" side caption lines="1" class="text-weight-medium">
                                        <q-chip dense size="sm" outline color="primary">
                                            February 22nd, 2019
                                        </q-chip>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-separator inset />
                            <q-item clickable>
                                <q-item-section>
                                    <q-item-label overline lines="1">OVERLINEOVERLINEOVE</q-item-label>
                                    <q-item-label caption lines="3">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                                    <q-item-label align="right" side caption lines="1" class="text-weight-medium">
                                        <q-chip dense size="sm" outline color="primary">
                                            February 22nd, 2019
                                        </q-chip>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-separator inset />
                            <q-item clickable>
                                <q-item-section>
                                    <q-item-label overline lines="1">OVERLINEOVERLINEOVE</q-item-label>
                                    <q-item-label caption lines="3">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                                    <q-item-label align="right" side caption lines="1" class="text-weight-medium">
                                        <q-chip dense size="sm" outline color="primary">
                                            February 22nd, 2019
                                        </q-chip>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div>
        <div class="row q-pb-md">
            <q-card flat style="width: 100%">
                <q-card-section class="bg-primary text-white">
                    <div class="text-h7">
                        网站公告
                    </div>
                </q-card-section>
                <q-card-section>
                    <q-list>
                        <q-expansion-item
                                group="somegroup"
                                icon="explore"
                                label="First"
                                header-class="text-primary"
                        >
                            <q-card>
                                <q-card-section>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                                    eveniet doloribus ullam aliquid.
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>

                        <q-separator />

                        <q-expansion-item group="somegroup" icon="perm_identity" label="Second" header-class="text-teal">
                            <q-card>
                                <q-card-section>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                                    eveniet doloribus ullam aliquid.
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>

                        <q-separator />

                        <q-expansion-item group="somegroup" icon="shopping_cart" label="Third" header-class="text-purple">
                            <q-card>
                                <q-card-section>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                                    eveniet doloribus ullam aliquid.
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>

                        <q-separator />

                        <q-expansion-item
                                group="somegroup"
                                icon="bluetooth"
                                label="Fourth"
                                header-class="text-red"
                        >
                            <q-card>
                                <q-card-section>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                                    eveniet doloribus ullam aliquid.
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </div>
        <div class="row q-pb-md">
            <q-card flat style="width: 100%">
                <q-card-section class="bg-purple text-white">
                    <div class="text-h7">标签云</div>
                </q-card-section>
                <q-card-section>
                    <q-chip clickable @click="onClick" color="primary" text-color="white">
                        C++
                    </q-chip>
                    <q-chip clickable @click="onClick" color="teal" text-color="white">
                        Python
                    </q-chip>
                    <q-chip clickable @click="onClick" color="red" text-color="white">
                        Java
                    </q-chip>
                    <q-chip clickable @click="onClick" color="yellow" text-color="white">
                        Go
                    </q-chip>
                    <q-chip clickable @click="onClick" color="purple" text-color="white">
                        Vue
                    </q-chip>
                    <q-chip clickable @click="onClick" color="pink" text-color="white">
                        Rust
                    </q-chip>
                </q-card-section>
            </q-card>
        </div>
        <div class="row q-pb-md">
            <q-card flat style="width: 100%">
                <q-card-section class="bg-teal text-white">
                    <div class="text-h7">分类</div>
                </q-card-section>
                <q-card-section>
                    <q-chip clickable outline color="primary" text-color="white">
                        心情记录
                    </q-chip>
                    <q-chip clickable outline color="teal" text-color="white">
                        后端
                    </q-chip>
                    <q-chip clickable outline color="purple" text-color="white">
                        前端
                    </q-chip>
                    <q-chip clickable outline color="pink" text-color="white">
                        算法
                    </q-chip>
                    <q-chip clickable outline color="red" text-color="white">
                        数据分析
                    </q-chip>
                    <q-chip clickable outline color="yellow" text-color="white">
                        面试心得
                    </q-chip>
                </q-card-section>
            </q-card>
        </div>
        <div class="row q-pb-md">
            <q-card flat style="width: 100%">
                <q-card-section class="bg-grey-8 text-white">
                    <div class="text-h7">友情链接</div>
                    <!--                                <div class="text-subtitle2">by John Doe</div>-->
                </q-card-section>
                <q-card-section>
                    {{ lorem }}
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogSider",
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
    }
</script>

<style scoped>

</style>