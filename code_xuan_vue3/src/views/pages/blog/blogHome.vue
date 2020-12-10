<template>
    <div>
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
                                v-model="sidTab"
                                dense
                                class="text-grey"
                                active-color="primary"
                                indicator-color="primary"
                                align="left"
                                narrow-indicator
                        >
                            <q-tab name="record" label="记录" />
                            <q-tab name="reprinted" label="转载" />
                            <q-tab name="book" label="书荐" />
                        </q-tabs>

                        <q-separator />

                        <q-tab-panels v-model="sidTab" animated>
                            <q-tab-panel name="record">
                                <div class="row">
                                    <div class="col-12 col-md-4 q-pr-md">
                                        <div class="q-pb-sm">
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    :ratio="16/9"
                                                    style="height: 135px"
                                                    class="rounded-borders"
                                            >
                                                <div class="absolute-full text-subtitle2 flex flex-center">
                                                    Caption
                                                </div>
                                            </q-img>
                                        </div>
                                        <div class="q-pb-sm">
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    :ratio="16/9"
                                                    style="height: 135px"
                                                    class="rounded-borders"
                                            >
                                                <div class="absolute-full text-subtitle2 flex flex-center">
                                                    Caption
                                                </div>
                                            </q-img>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-8 q-pl-md" style="height: 270px">
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
                                    </div>
                                </div>
                            </q-tab-panel>

                            <q-tab-panel name="reprinted">
                                <div class="row" style="height: 270px">
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-card-section>
                                                <q-chip dense square color="primary" text-color="white" icon="bookmark">
                                                    Python
                                                </q-chip>
                                                <div class="text-overline text-orange-9 ellipsis ellipsis-2-lines">
                                                    OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                                                        OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    </q-tooltip>
                                                </div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="信息" />
                                                <q-space />
                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section>
                                                        <q-chip square>作者：蓝星书生</q-chip>
                                                        <q-chip square>来源：知乎</q-chip>
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-card-section>
                                                <q-chip dense square color="primary" text-color="white" icon="bookmark">
                                                    Python
                                                </q-chip>
                                                <div class="text-overline text-orange-9 ellipsis ellipsis-2-lines">
                                                    OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                                                        OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    </q-tooltip>
                                                </div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="信息" />
                                                <q-space />
                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section>
                                                        <q-chip square>作者：蓝星书生</q-chip>
                                                        <q-chip square>来源：知乎</q-chip>
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-card-section>
                                                <q-chip dense square color="primary" text-color="white" icon="bookmark">
                                                    Python
                                                </q-chip>
                                                <div class="text-overline text-orange-9 ellipsis ellipsis-2-lines">
                                                    OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                                                        OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    </q-tooltip>
                                                </div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="信息" />
                                                <q-space />
                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section>
                                                        <q-chip square>作者：蓝星书生</q-chip>
                                                        <q-chip square>来源：知乎</q-chip>
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-card-section>
                                                <q-chip dense square color="primary" text-color="white" icon="bookmark">
                                                    Python
                                                </q-chip>
                                                <div class="text-overline text-orange-9 ellipsis ellipsis-2-lines">
                                                    OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                                                        OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    </q-tooltip>
                                                </div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="信息" />
                                                <q-space />
                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section>
                                                        <q-chip square>作者：蓝星书生</q-chip>
                                                        <q-chip square>来源：知乎</q-chip>
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-card-section>
                                                <q-chip dense square color="primary" text-color="white" icon="bookmark">
                                                    Python
                                                </q-chip>
                                                <div class="text-overline text-orange-9 ellipsis ellipsis-2-lines">
                                                    OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                                                        OverlineOverlineOverlineOverlineOverlineOverlineOverlineOverlineOverline
                                                    </q-tooltip>
                                                </div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="信息" />
                                                <q-space />
                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section>
                                                        <q-chip square>作者：蓝星书生</q-chip>
                                                        <q-chip square>来源：知乎</q-chip>
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                </div>
                            </q-tab-panel>

                            <q-tab-panel name="book">
                                <div class="row" style="height: 320px">
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    style="height:110px"
                                            />

                                            <q-card-section class="q-pb-none">
                                                <div class="text-overline text-orange-9">莫言</div>
                                                <div class="text-subtitle2 text-weight-bold q-mb-xs ellipsis">平凡的世界</div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="Share" />
                                                <q-btn flat color="primary" label="Book" />

                                                <q-space />

                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section class="text-subitle2">
                                                        {{ lorem }}
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    style="height:110px"
                                            />

                                            <q-card-section class="q-pb-none">
                                                <div class="text-overline text-orange-9">莫言</div>
                                                <div class="text-subtitle2 text-weight-bold q-mb-xs ellipsis">平凡的世界</div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="Share" />
                                                <q-btn flat color="primary" label="Book" />

                                                <q-space />

                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section class="text-subitle2">
                                                        {{ lorem }}
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    style="height:110px"
                                            />

                                            <q-card-section class="q-pb-none">
                                                <div class="text-overline text-orange-9">莫言</div>
                                                <div class="text-subtitle2 text-weight-bold q-mb-xs ellipsis">平凡的世界</div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="Share" />
                                                <q-btn flat color="primary" label="Book" />

                                                <q-space />

                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section class="text-subitle2">
                                                        {{ lorem }}
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    style="height:110px"
                                            />

                                            <q-card-section class="q-pb-none">
                                                <div class="text-overline text-orange-9">莫言</div>
                                                <div class="text-subtitle2 text-weight-bold q-mb-xs ellipsis">平凡的世界</div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="Share" />
                                                <q-btn flat color="primary" label="Book" />

                                                <q-space />

                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section class="text-subitle2">
                                                        {{ lorem }}
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    style="height:110px"
                                            />

                                            <q-card-section class="q-pb-none">
                                                <div class="text-overline text-orange-9">莫言</div>
                                                <div class="text-subtitle2 text-weight-bold q-mb-xs ellipsis">平凡的世界</div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="Share" />
                                                <q-btn flat color="primary" label="Book" />

                                                <q-space />

                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section class="text-subitle2">
                                                        {{ lorem }}
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                    <div class="col-6 col-md-3 q-pa-sm">
                                        <q-card flat bordered>
                                            <q-img
                                                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                                                    style="height:110px"
                                            />

                                            <q-card-section class="q-pb-none">
                                                <div class="text-overline text-orange-9">莫言</div>
                                                <div class="text-subtitle2 text-weight-bold q-mb-xs ellipsis">平凡的世界</div>
                                                <div class="text-caption text-grey">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </q-card-section>

                                            <q-card-actions>
                                                <q-btn flat color="dark" label="Share" />
                                                <q-btn flat color="primary" label="Book" />

                                                <q-space />

                                                <q-btn
                                                        color="grey"
                                                        round
                                                        flat
                                                        dense
                                                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                        @click="expanded = !expanded"
                                                />
                                            </q-card-actions>

                                            <q-slide-transition>
                                                <div v-show="expanded">
                                                    <q-separator />
                                                    <q-card-section class="text-subitle2">
                                                        {{ lorem }}
                                                    </q-card-section>
                                                </div>
                                            </q-slide-transition>
                                        </q-card>
                                    </div>
                                </div>
                            </q-tab-panel>
                        </q-tab-panels>
                    </q-card>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12" v-for="(value, index) in 4" :key="index">
                <div class="q-pa-sm">
                    <q-card flat>
                        <q-card-section class="q-pb-none">
                            <div class="text-h6 q-mt-sm q-mb-xs ellipsis" style="cursor: pointer" @click="BlogDetail(index)">
                                <q-chip size="sm" square color="primary" text-color="white" icon="bookmark">
                                    Python
                                </q-chip>
                                Go语言从入门到入土
                            </div>
                        </q-card-section>
                        <q-card-section class="q-pb-sm">
                            <div class="row">
                                <div class="col-12 col-md-3 q-pr-md">
                                    <q-img
                                            class="rounded-borders"
                                            :ratio="16/9"
                                            style="height: 160px"
                                            src="https://placeimg.com/500/300/nature"
                                    />
                                </div>
                                <div class="col-12 col-md-9">
                                    <q-item-label lines="8">
                                        <div class="text-body2 text-grey q-pt-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </q-item-label>
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-actions align="right" class="q-pt-none">
                            <div class="q-pr-sm">
                                <q-chip dense>
                                    <q-avatar icon="person" color="red" text-color="white" />
                                    xzxxxx
                                </q-chip>
                            </div>
                            <div class="q-pr-sm">
                                <q-chip dense>
                                    <q-avatar icon="bookmark" color="primary" text-color="white" />
                                    2020-12-05
                                </q-chip>
                            </div>
                            <div class="q-pr-sm">
                                <q-chip dense>
                                    <q-avatar icon="visibility" color="green" text-color="white" />
                                    253
                                </q-chip>
                            </div>
                            <div class="q-pr-sm">
                                <q-chip>
                                    <q-avatar color="red" text-color="white" size="sm">字</q-avatar>
                                    1520
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
</template>

<script>
export default {
  name: "blogHome",
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
};
</script>

<style lang="sass" scoped></style>
