<template>
    <div class="row justify-center">
        <div class="col-9 q-pa-sm">
            <div>
                <q-banner inline-actions rounded class="bg-orange text-white">
                    You have lost connection to the internet. This app is offline.
                </q-banner>
            </div>
        </div>
        <div class="col-9">
            <div class="row">
                <div class="col-12 col-md-9">
                    <div class="row">
                        <div class="col-12 col-md-8 q-pa-sm">
                            <q-carousel
                                    v-model="slide"
                                    transition-prev="jump-right"
                                    transition-next="jump-left"
                                    swipeable
                                    animated
                                    control-color="white"
                                    prev-icon="arrow_left"
                                    next-icon="arrow_right"
                                    navigation-icon="radio_button_unchecked"
                                    navigation
                                    padding
                                    arrows
                                    infinite
                                    :autoplay="autoplay"
                                    @mouseenter="autoplay = false"
                                    @mouseleave="autoplay = true"
                                    height="310px"
                                    class="bg-purple text-white shadow-1 rounded-borders"
                            >
                                <q-carousel-slide name="style" class="column no-wrap flex-center">
                                    <q-icon name="style" size="56px" />
                                    <div class="q-mt-md text-center">
                                        {{ lorem }}
                                    </div>
                                </q-carousel-slide>
                                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                                    <q-icon name="live_tv" size="56px" />
                                    <div class="q-mt-md text-center">
                                        {{ lorem }}
                                    </div>
                                </q-carousel-slide>
                                <q-carousel-slide name="layers" class="column no-wrap flex-center">
                                    <q-icon name="layers" size="56px" />
                                    <div class="q-mt-md text-center">
                                        {{ lorem }}
                                    </div>
                                </q-carousel-slide>
                                <q-carousel-slide name="map" class="column no-wrap flex-center">
                                    <q-icon name="terrain" size="56px" />
                                    <div class="q-mt-md text-center">
                                        {{ lorem }}
                                    </div>
                                </q-carousel-slide>
                            </q-carousel>
                        </div>
                        <div class="col-12 col-md-4 q-pa-sm">
                            <div class="column">
                                <q-scroll-area
                                        :thumb-style="thumbStyle"
                                        :bar-style="barStyle"
                                        style="height: 310px;"
                                >
                                    <div class="col q-pb-sm">
                                        <q-card flat>
                                            <q-card-section horizontal>
                                                <q-card-section class="col-4">
                                                    <q-img
                                                            class="rounded-borders"
                                                            :ratio="4/3"
                                                            src="https://placeimg.com/500/300/nature"
                                                    />
                                                </q-card-section>
                                                <q-card-section>
                                                    <div class="text-caption text-grey">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                                    </div>
                                                </q-card-section>
                                            </q-card-section>
                                        </q-card>
                                    </div>
                                    <div class="col q-pb-sm">
                                        <q-card flat>
                                            <q-card-section horizontal>
                                                <q-card-section class="col-4">
                                                    <q-img
                                                            class="rounded-borders"
                                                            :ratio="4/3"
                                                            src="https://placeimg.com/500/300/nature"
                                                    />
                                                </q-card-section>
                                                <q-card-section>
                                                    <div class="text-caption text-grey">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                                    </div>
                                                </q-card-section>
                                            </q-card-section>
                                        </q-card>
                                    </div>
                                    <div class="col q-pb-sm">
                                        <q-card flat>
                                            <q-card-section horizontal>
                                                <q-card-section class="col-4">
                                                    <q-img
                                                            class="rounded-borders"
                                                            :ratio="4/3"
                                                            src="https://placeimg.com/500/300/nature"
                                                    />
                                                </q-card-section>
                                                <q-card-section>
                                                    <div class="text-caption text-grey">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                                    </div>
                                                </q-card-section>
                                            </q-card-section>
                                        </q-card>
                                    </div>
                                    <div class="col q-pb-sm">
                                        <q-card flat>
                                            <q-card-section horizontal>
                                                <q-card-section class="col-4">
                                                    <q-img
                                                            class="rounded-borders"
                                                            :ratio="4/3"
                                                            src="https://placeimg.com/500/300/nature"
                                                    />
                                                </q-card-section>
                                                <q-card-section>
                                                    <div class="text-caption text-grey">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                                    </div>
                                                </q-card-section>
                                            </q-card-section>
                                        </q-card>
                                    </div>
                                </q-scroll-area>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="q-pa-sm">
                                <q-card flat>
                                    <q-tabs
                                            v-model="tab"
                                            dense
                                            class="text-grey"
                                            active-color="primary"
                                            indicator-color="primary"
                                            align="left"
                                            narrow-indicator
                                    >
                                        <q-tab name="mails" label="Mails" />
                                        <q-tab name="alarms" label="Alarms" />
                                        <q-tab name="movies" label="Movies" />
                                    </q-tabs>

                                    <q-separator />

                                    <q-tab-panels v-model="tab" animated>
                                        <q-tab-panel name="mails">
                                            <div class="text-h6">Mails</div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </q-tab-panel>

                                        <q-tab-panel name="alarms">
                                            <div class="text-h6">Alarms</div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </q-tab-panel>

                                        <q-tab-panel name="movies">
                                            <div class="text-h6">Movies</div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </q-tab-panel>
                                    </q-tab-panels>
                                </q-card>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="q-pa-sm">
                                <q-card flat>
                                    <q-card-section horizontal>
                                        <q-card-section class="col-4">
                                            <q-img
                                                class="rounded-borders"
                                                :ratio="16/9"
                                                src="https://placeimg.com/500/300/nature"
                                            />
                                        </q-card-section>
                                        <q-card-section class="q-pt-xs">
                                            <div class="text-overline float-right">
                                                <q-badge color="blue" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                                <q-badge color="yellow" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                            </div>
                                            <div class="text-h6 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </q-card-section>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="q-pa-sm">
                                <q-card flat>
                                    <q-card-section horizontal>
                                        <q-card-section class="col-4">
                                            <q-img
                                                    class="rounded-borders"
                                                    :ratio="16/9"
                                                    src="https://placeimg.com/500/300/nature"
                                            />
                                        </q-card-section>
                                        <q-card-section class="q-pt-xs">
                                            <div class="text-overline float-right">
                                                <q-badge color="blue" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                                <q-badge color="yellow" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                            </div>
                                            <div class="text-h6 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </q-card-section>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="q-pa-sm">
                                <q-card flat>
                                    <q-card-section horizontal>
                                        <q-card-section class="col-4">
                                            <q-img
                                                    class="rounded-borders"
                                                    :ratio="16/9"
                                                    src="https://placeimg.com/500/300/nature"
                                            />
                                        </q-card-section>
                                        <q-card-section class="q-pt-xs">
                                            <div class="text-overline float-right">
                                                <q-badge color="blue" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                                <q-badge color="yellow" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                            </div>
                                            <div class="text-h6 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </q-card-section>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="q-pa-sm">
                                <q-card flat>
                                    <q-card-section horizontal>
                                        <q-card-section class="col-4">
                                            <q-img
                                                    class="rounded-borders"
                                                    :ratio="16/9"
                                                    src="https://placeimg.com/500/300/nature"
                                            />
                                        </q-card-section>
                                        <q-card-section class="q-pt-xs">
                                            <div class="text-overline float-right">
                                                <q-badge color="blue" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                                <q-badge color="yellow" class="q-mr-sm">
                                                    Python
                                                </q-badge>
                                            </div>
                                            <div class="text-h6 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </q-card-section>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="q-pa-lg">
                            <q-pagination
                                v-model="current"
                                color="purple"
                                :max="10"
                                :max-pages="6"
                                :boundary-numbers="true"
                            >
                            </q-pagination>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 q-pa-sm">
                    <div class="row q-pb-md">
                        <q-card>
                            <q-item>
                                <q-item-section avatar>
                                    <q-avatar>
                                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                    </q-avatar>
                                </q-item-section>

                                <q-item-section>
                                    <q-item-label>名片</q-item-label>
                                    <q-item-label caption>
                                        Mr.XZX
                                    </q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-separator />

                            <q-card-section horizontal>
                                <q-card-section>
                                    {{ lorem }}
                                </q-card-section>

                                <q-separator vertical />

                                <q-card-section class="col-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elits.
                                    Lorem ipsum dolor sit amet,
                                </q-card-section>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="row q-pb-md">
                        <q-card dark class="bg-grey-9">
                            <q-card-section>
                                <div class="text-h7">公告</div>
                            </q-card-section>

                            <q-separator dark inset />

                            <q-card-section>
                                {{ lorem }}
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="row q-pb-md">
                        <q-tab-panels
                            v-model="panel"
                            animated
                            swipeable
                            infinite
                            class="bg-purple text-white shadow-2 rounded-borders"
                        >
                            <q-tab-panel name="mails">
                                <div class="text-h7">点击排行</div>
                                <div class="text-subtitle2">滑动切换</div>
                                <q-list dense class="rounded-borders">
                                    <q-item clickable v-ripple>
                                        <q-item-section>
                                            {{lorem}}
                                        </q-item-section>
                                    </q-item>

                                    <q-item clickable v-ripple>
                                        <q-item-section>
                                            {{lorem}}
                                        </q-item-section>
                                    </q-item>

                                </q-list>
                            </q-tab-panel>

                            <q-tab-panel name="alarms">
                                <div class="text-h7">图文推荐</div>
                                <q-list dense class="rounded-borders">
                                    <q-item clickable v-ripple>
                                        <q-item-section>
                                            {{lorem}}
                                        </q-item-section>
                                    </q-item>

                                    <q-item clickable v-ripple>
                                        <q-item-section>
                                            {{lorem}}
                                        </q-item-section>
                                    </q-item>

                                </q-list>
                            </q-tab-panel>

                            <q-tab-panel name="movies">
                                <div class="text-h7">最新文章</div>
                                <q-list dense class="rounded-borders">
                                    <q-item clickable v-ripple>
                                        <q-item-section>
                                            {{lorem}}
                                        </q-item-section>
                                    </q-item>

                                    <q-item clickable v-ripple>
                                        <q-item-section>
                                            {{lorem}}
                                        </q-item-section>
                                    </q-item>

                                </q-list>
                            </q-tab-panel>
                        </q-tab-panels>
                    </div>
                    <div class="row q-pb-md">
                        <q-card dark class="bg-grey-9 my-card">
                            <q-card-section>
                                <div class="text-h7">标签云</div>
                            </q-card-section>

                            <q-separator dark inset />

                            <q-card-section>
                                {{ lorem }}
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="row q-pb-md">
                        <q-card dark class="bg-grey-9">
                            <q-card-section>
                                <div class="text-h7">分类</div>
                            </q-card-section>

                            <q-separator dark inset />

                            <q-card-section>
                                {{ lorem }}
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="row q-pb-md">
                        <q-card>
                            <q-card-section>
                                <div class="text-h7">友情链接</div>
<!--                                <div class="text-subtitle2">by John Doe</div>-->
                            </q-card-section>

                            <q-separator inset />

                            <q-card-section>
                                {{ lorem }}
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogHome",
        data () {
            return {
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
                tab: 'mails',
                autoplay: true,
                slide: 'style',
                lorem: 'Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>