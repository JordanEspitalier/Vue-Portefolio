import { createStore } from "vuex";

export default createStore({
  state: {
    showNav : false,
  },
  mutations: {
    toggleNav(state, newValue){
      state.showNav = newValue
    }
  },
  actions: {},
  modules: {},
});
