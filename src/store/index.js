import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [],
    },
    mutations: {
        addlist(state, payload) {
            state.lists.push({ title:payload.title, cards:[] }) // stateを更新
        },
    },
    actions: {
        addlist(context, payload) {
            context.commit('addlist', payload) // mutationsをコミット（実行）
        },
    },
    getters: {
    }
})
