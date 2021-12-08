import { createStore } from "vuex";

export default createStore({
  state: {
    showNav : false,
    screenWidth : window.innerWidth,
  },
  mutations: {
    toggleNav(state, newValue){
      state.showNav = newValue
    },
    changeScreenWidth(state, newValue){
      state.screenWidth = newValue
    }
  },
  actions: {},
  modules: {},
});
