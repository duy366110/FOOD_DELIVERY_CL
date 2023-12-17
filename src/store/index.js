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
  },
  actions: {
  },
  modules: {
  }
})
