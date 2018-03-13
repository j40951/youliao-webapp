import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const now = new Date();
const state = {
    user: {
    },
    messages: [
        {
            "content": "Hello World",
            "date": now,
            "self": true
        }
    ],
    
    // 会话列表
    sessions: [
        {
         "id":1,
         "user":{"id":"ddd", "name": "jack.ju", "img":"images/1.jpg"}
        }
    ],
    // 当前选中的会话
    currentSessionId: 1,
    messageDBVersion: 1,
    // 过滤出只包含这个key的会话
    filterKey: '',

    messageDB: null,
    storeDB: null
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})

