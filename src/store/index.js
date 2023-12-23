import { createStore } from 'vuex'

export default createStore({
  state: {
    authForm: {
      bg: {
        main: "url('/assets/images/form/form_01.png')",
        top: "url('/assets/images/form/form_02.png')",
        bottom: "url('/assets/images/form/form_03.png')"
      }
    },
    auth: {
      _id: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      accessToken: "",
      refreshToken: ""
    }
  },
  getters: {
  },
  mutations: {
    signin(state, payload) {
      Object.keys(state.auth).forEach((key) => {
        state.auth[key] = payload.user[key];
      })

      state.auth.accessToken = payload.accessToken;
      state.auth.refreshToken = payload.refreshToken;
      localStorage.setItem("user", JSON.stringify(state.auth));
    },
    signout(state) {
      localStorage.clear();
      Object.keys(state.auth).forEach((key) => {
        state.auth[key] = "";
      })
    },
    reload(state, payload) {
      Object.keys(state.auth).forEach((key) => {
        state.auth[key] = payload[key];
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
