import Vue from "vue"
import Vuex from "vuex"
import tap from "./tap"

Vue.use(Vuex)

// 创建VueX 的实例
export default new Vuex.Store({
    modules: {
        tap
    }
})