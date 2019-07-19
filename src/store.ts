import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';

Vue.use(Vuex);

interface State {
  count: number
}

const store: StoreOptions<State> = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count
    },
  },
  actions: {
    increase({state, commit}: ActionContext<State, State>) { // dispatch로 다른 액션을 실행할 수 있음.
      commit('setCount', state.count + 1)
    },
    decrease({state, commit}: ActionContext<State, State>) {
      commit('setCount', state.count - 1)
    },
  },
  getters: {
    count: (state: State) => state.count,
  },
}

export default new Vuex.Store(store)
