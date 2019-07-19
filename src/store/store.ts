import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';
import moduleA from './moduleA.store'
import moduleB from './moduleB.store'

Vue.use(Vuex);

// single interface

interface State {
  count: number
}

// module
export interface RootState {
  data: string
}

const rootStore: StoreOptions<RootState, State> = {
  modules: {
    moduleA,
    moduleB
  },
  state: {
    data: 'root'
  },
  mutations: {
    setData(state, data: string) { // state의 자료형은 이미 정의되어 있어서 안 넣어도 됨.
      state.data = data
    }
  },
  actions: {
    setRootData({commit}, data: string) {
      commit('setData', data)
    }
  },
  getters: {
    data: (state) => state.data
  }
}


// single store

const store: StoreOptions<State> = {
  modules: {
    rootStore
  },
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
export const RootStore = new Vuex.Store(rootStore)