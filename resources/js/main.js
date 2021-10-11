import Vue from 'vue'
import store from './store'

import { createInertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
import { Link } from '@inertiajs/inertia-vue'
import SvgIcon from '@/components/SvgIcon'

import Layout from '@/layout'

import 'normalize.css/normalize.css'
import './styles/element-variables.scss'
import '@/styles/index.scss' 

require('element-ui/lib/theme-chalk/index.css');

Vue.use(require('element-ui'))

Vue.mixin({ methods: { laRoute: window.route } })

Vue.component('inertia-link', Link)
Vue.component('svg-icon', SvgIcon)

InertiaProgress.init()

createInertiaApp({
    resolve: name => {
        const page = require(`./views/${name}`).default
        page.layout = page.layout || Layout

        return page
    },
    setup({ el, App, props }) {
        new Vue({
            store,
            render: h => h(App, props),
        }).$mount(el)
    },
})

