// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Style
import './styles/index.scss';

// Store
import store from './store';

//translation (i18n)
import i18n from "./i18n/translations";

//plugins
import utilsPlugin from "./plugins/utilsPlugin";
Vue.use(utilsPlugin);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
