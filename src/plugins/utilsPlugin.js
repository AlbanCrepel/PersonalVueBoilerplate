export default {
    install(Vue, options) {
        Vue.prototype.$apiEndpoint = "https://swapi.co/api/"
    }
};