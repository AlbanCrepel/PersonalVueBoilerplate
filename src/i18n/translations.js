import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './en.js';

Vue.use(VueI18n);

let translations = {
    en
};

export default new VueI18n({
    locale: 'en',
    messages : translations
});