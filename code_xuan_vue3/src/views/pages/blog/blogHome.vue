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
                            <div class="col-12 col-md-3 q-pa-sm">
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
                                        <q-card-section class="text-caption text-grey text-weight-medium">
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
    tab: 'mails',
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
    }
  }
};
</script>

<style lang="sass" scoped></style>
