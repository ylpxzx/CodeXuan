<template>
    <q-layout view="lhh LpR lff">
        <q-page-container>
            <q-page>
                <div class="row justify-center">
                    <div class="col-12 col-md-9 q-pa-sm">
                        <div>
                            <q-banner inline-actions rounded class="bg-primary text-white">
                                You have lost connection to the internet. This app is offline.
                            </q-banner>
                        </div>
                    </div>
                    <div class="col-12 col-md-9">
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
                                                    style="height: 311px;"
                                            >
                                                <div class="col q-pb-sm">
                                                    <q-card flat>
                                                        <q-card-section horizontal>
                                                            <q-card-section class="col-4">
                                                                <img src="~assets/images/test_img/2001597.jpg" preview="1" class="q-img rounded-borders" style="height: 100%">
<!--                                                                <q-img-->
<!--                                                                        class="rounded-borders"-->
<!--                                                                        :ratio="4/3"-->
<!--                                                                        src="https://placeimg.com/500/300/nature"-->
<!--                                                                />-->
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
                                                                <img src="~assets/images/test_img/2001746.jpg" preview="2" class="q-img rounded-borders" style="height: 100%">
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
                                                                <img src="~assets/images/test_img/2003345.jpg" preview="3" class="q-img rounded-borders" style="height: 100%">
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
                                                                <img src="~assets/images/test_img/2005678.jpg" preview="4" class="q-img rounded-borders" style="height: 100%">
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
                                                <q-card-section class="q-pb-none">
                                                    <div class="text-h6 q-mt-sm q-mb-xs">
                                                        <q-chip square  color="primary" text-color="white" icon="bookmark">
                                                            Python
                                                        </q-chip>
                                                        Title2222
                                                    </div>
                                                </q-card-section>
                                                <q-card-section horizontal>
                                                    <q-card-section class="col-4 q-pb-none">
                                                        <q-img
                                                                class="rounded-borders"
                                                                :ratio="16/9"
                                                                src="https://placeimg.com/500/300/nature"
                                                        />
                                                    </q-card-section>
                                                    <q-card-section class="q-pt-md q-pb-none">
                                                        <div class="text-caption text-grey">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </q-card-section>
                                                </q-card-section>
                                                <q-card-actions align="right" class="q-pt-none">
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="person"></q-icon>
                                                            作者:
                                                            <q-badge outline align="middle" color="primary">
                                                                XZX
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="book"></q-icon>
                                                            文章字数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="visibility"></q-icon>
                                                            阅读次数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <q-chip dense>
                                                            <q-avatar icon="bookmark" color="primary" text-color="white" />
                                                            2020-12-05
                                                        </q-chip>
                                                    </div>
                                                </q-card-actions>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="q-pa-sm">
                                            <q-card flat>
                                                <q-card-section class="q-pb-none">
                                                    <div class="text-h6 q-mt-sm q-mb-xs">
                                                        <q-chip square  color="primary" text-color="white" icon="bookmark">
                                                            Python
                                                        </q-chip>
                                                        Title2222
                                                    </div>
                                                </q-card-section>
                                                <q-card-section horizontal>
                                                    <q-card-section class="col-4 q-pb-none">
                                                        <q-img
                                                                class="rounded-borders"
                                                                :ratio="16/9"
                                                                src="https://placeimg.com/500/300/nature"
                                                        />
                                                    </q-card-section>
                                                    <q-card-section class="q-pt-md q-pb-none">
                                                        <div class="text-caption text-grey">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </q-card-section>
                                                </q-card-section>
                                                <q-card-actions align="right" class="q-pt-none">
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="person"></q-icon>
                                                            作者:
                                                            <q-badge outline align="middle" color="primary">
                                                                XZX
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="book"></q-icon>
                                                            文章字数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="visibility"></q-icon>
                                                            阅读次数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <q-chip dense>
                                                            <q-avatar icon="bookmark" color="primary" text-color="white" />
                                                            2020-12-05
                                                        </q-chip>
                                                    </div>
                                                </q-card-actions>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="q-pa-sm">
                                            <q-card flat>
                                                <q-card-section class="q-pb-none">
                                                    <div class="text-h6 q-mt-sm q-mb-xs">
                                                        <q-chip square  color="primary" text-color="white" icon="bookmark">
                                                            Python
                                                        </q-chip>
                                                        Title2222
                                                    </div>
                                                </q-card-section>
                                                <q-card-section horizontal>
                                                    <q-card-section class="col-4 q-pb-none">
                                                        <q-img
                                                                class="rounded-borders"
                                                                :ratio="16/9"
                                                                src="https://placeimg.com/500/300/nature"
                                                        />
                                                    </q-card-section>
                                                    <q-card-section class="q-pt-md q-pb-none">
                                                        <div class="text-caption text-grey">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </q-card-section>
                                                </q-card-section>
                                                <q-card-actions align="right" class="q-pt-none">
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="person"></q-icon>
                                                            作者:
                                                            <q-badge outline align="middle" color="primary">
                                                                XZX
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="book"></q-icon>
                                                            文章字数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="visibility"></q-icon>
                                                            阅读次数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <q-chip dense>
                                                            <q-avatar icon="bookmark" color="primary" text-color="white" />
                                                            2020-12-05
                                                        </q-chip>
                                                    </div>
                                                </q-card-actions>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="q-pa-sm">
                                            <q-card flat>
                                                <q-card-section class="q-pb-none">
                                                    <div class="text-h6 q-mt-sm q-mb-xs">
                                                        <q-chip square  color="primary" text-color="white" icon="bookmark">
                                                            Python
                                                        </q-chip>
                                                        Title2222
                                                    </div>
                                                </q-card-section>
                                                <q-card-section horizontal>
                                                    <q-card-section class="col-4 q-pb-none">
                                                        <q-img
                                                                class="rounded-borders"
                                                                :ratio="16/9"
                                                                src="https://placeimg.com/500/300/nature"
                                                        />
                                                    </q-card-section>
                                                    <q-card-section class="q-pt-md q-pb-none">
                                                        <div class="text-caption text-grey">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </q-card-section>
                                                </q-card-section>
                                                <q-card-actions align="right" class="q-pt-none">
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="person"></q-icon>
                                                            作者:
                                                            <q-badge outline align="middle" color="primary">
                                                                XZX
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="book"></q-icon>
                                                            文章字数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="visibility"></q-icon>
                                                            阅读次数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <q-chip dense>
                                                            <q-avatar icon="bookmark" color="primary" text-color="white" />
                                                            2020-12-05
                                                        </q-chip>
                                                    </div>
                                                </q-card-actions>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="q-pa-sm">
                                            <q-card flat>
                                                <q-card-section class="q-pb-none">
                                                    <div class="text-h6 q-mt-sm q-mb-xs">
                                                        <q-chip square  color="primary" text-color="white" icon="bookmark">
                                                            Python
                                                        </q-chip>
                                                        Title2222
                                                    </div>
                                                </q-card-section>
                                                <q-card-section horizontal>
                                                    <q-card-section class="col-4 q-pb-none">
                                                        <q-img
                                                                class="rounded-borders"
                                                                :ratio="16/9"
                                                                src="https://placeimg.com/500/300/nature"
                                                        />
                                                    </q-card-section>
                                                    <q-card-section class="q-pt-md q-pb-none">
                                                        <div class="text-caption text-grey">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </q-card-section>
                                                </q-card-section>
                                                <q-card-actions align="right" class="q-pt-none">
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="person"></q-icon>
                                                            作者:
                                                            <q-badge outline align="middle" color="primary">
                                                                XZX
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="book"></q-icon>
                                                            文章字数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <div class="text-subtitle2">
                                                            <q-icon name="visibility"></q-icon>
                                                            阅读次数:
                                                            <q-badge outline align="middle" color="primary">
                                                                1250
                                                            </q-badge>
                                                        </div>
                                                    </div>
                                                    <div class="q-pr-sm">
                                                        <q-chip dense>
                                                            <q-avatar icon="bookmark" color="primary" text-color="white" />
                                                            2020-12-05
                                                        </q-chip>
                                                    </div>
                                                </q-card-actions>
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
                                    <q-card flat>
                                        <q-item>
                                            <q-item-section avatar>
                                                <q-avatar size="80px">
                                                    <img src="~assets/images/test_img/avater.jpg" preview="6">
                                                </q-avatar>
                                            </q-item-section>

                                            <q-item-section>
                                                <q-item-label>狼性书生</q-item-label>
                                                <q-item-label caption>
                                                    Mr.XZX
                                                </q-item-label>
                                                <q-item-label caption>
                                                    {{ record1 }}
                                                </q-item-label>
                                            </q-item-section>
                                        </q-item>
                                        <q-card-section class="text-caption text-grey">
                                            {{ record }}
                                        </q-card-section>
                                        <q-card-section align="center" class="q-pt-none">
                                            <q-chip dense size="sm" clickable href="#" color="primary" text-color="white">
                                                Github
                                            </q-chip>
                                            <q-chip dense size="sm" clickable href="#" color="primary" text-color="white">
                                                CSDN
                                            </q-chip>
                                            <q-chip dense size="sm" clickable href="#" color="primary" text-color="white">
                                                知乎
                                            </q-chip>
                                            <q-chip dense size="sm" clickable href="#" color="primary" text-color="white">
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
                                    </q-card>
                                </div>
                                <div class="row q-pb-md">
                                    <q-card flat dark class="bg-grey-9">
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
                                            class="bg-purple text-white rounded-borders"
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
                                    <q-card flat dark class="bg-grey-9 my-card">
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
                                    <q-card flat dark class="bg-grey-9">
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
                                    <q-card flat>
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
                <q-page-sticky position="bottom-right" :offset="fabPos">
                    <q-fab
                            icon="add"
                            direction="up"
                            color="accent"
                            :disable="draggingFab"
                            v-touch-pan.prevent.mouse="moveFab"
                    >
                        <q-fab-action @click="onClick" color="primary" icon="person_add" :disable="draggingFab" />
                        <q-fab-action @click="onClick" color="primary" icon="mail" :disable="draggingFab" />
                    </q-fab>
                </q-page-sticky>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: "blogHome",
        data () {
            return {
                icons: [
                    'navigation',
                    'add_a_photo',
                    'camera',
                    'camera_front',
                    'my_location'
                ],
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
                tab: 'mails',
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
                this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

                this.fabPos = [
                    this.fabPos[0] - ev.delta.x,
                    this.fabPos[1] - ev.delta.y
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>