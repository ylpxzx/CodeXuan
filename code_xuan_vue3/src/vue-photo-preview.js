import Vue from "vue"

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

let options = {
    fullscreenEl: false,
}

// 图片预览插件
Vue.use(preview, options)
//或者
//var option={....} option配置请查看 http://photoswipe.com/documentation/options.html
//Vue.use(preview,option)