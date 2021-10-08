import Vue from 'vue'
import store from './store'

import { createInertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
require('element-ui/lib/theme-chalk/index.css');

Vue.use(require('element-ui'))

Vue.mixin({ methods: { laRoute: window.route } })

InertiaProgress.init()

createInertiaApp({
    resolve: name => require(`./views/${name}`),
    setup({ el, App, props }) {
        new Vue({
            store,
            render: h => h(App, props),
        }).$mount(el)
    },
})

