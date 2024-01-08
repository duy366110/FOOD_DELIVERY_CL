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
    },
    loader: {
      status: false
    },
    header: {
      status: false
    },
    message: {
      status: false,
      content: ""
    },
    categories: [],
    dishs: {}
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
    },
    // LOADER
    toggleLoader(state) {
      state.loader.status = !state.loader.status;
    },
    // HEADER
    toggleHeader(state, payload) {
      state.header.status = payload;
    },
    // MESSAGE
    toggleMessage(state, payload) {
      state.message.content = payload;
      state.message.status = !state.message.status;
    },
    // MENU
    setInitCategory(state, payload) {
      state.categories = payload;
    },
    updateDishInCategory(state, payload) {
      let { category, menu: {dishs}} = payload;
      state.dishs[category] = dishs;
    }
  },
  actions: {
  },
  modules: {
  }
})
