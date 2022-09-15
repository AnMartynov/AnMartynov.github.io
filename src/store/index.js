import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseUrl: document.location.href.slice(0, document.location.href.indexOf('#', 0)),
        menu: 1,
    },
})
