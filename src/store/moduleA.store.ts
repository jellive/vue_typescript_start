// Class Style (with vuex-module-decorators)
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'

@Module({namespaced: true, name: 'moduleA'})
export default class ModuleA extends VuexModule {
  data: string = 'moduleA'

  @Mutation
  setData (data: string) {
    this.data = data
  }

  @Action
  editData (data: string) {
    this.context.commit('setData', data)
  }

  get moduleAData() {
    return this.data
  }
}

// Object Style (basic)

// import { Module } from "vuex";
// import { RootState } from './store'

// interface moduleA {
//     data: string
// }

// const module: Module<moduleA, RootState> = {
//     namespaced: true,
//     state: {
//         data: 'moduleA'
//     },
//     mutations: {
//       setData(state, data: string) { // state의 자료형은 이미 정의되어 있어서 안 넣어도 됨.
//         state.data = data
//       }
//     },
//     actions: {
//       setRootData({commit}, data: string) {
//         commit('setData', data)
//       }
//     },
//     getters: {
//       data: (state) => state.data
//     }
// }

// export default module