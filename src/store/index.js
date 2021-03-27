import { createStore } from "vuex";
import axios from "axios";
import { SERVER_URI } from "../../env";

const URI = `${SERVER_URI}/user`;

export default createStore({
  state: {
    user: {},
    token: {},
    status: Boolean,
    errors: {},
    loginStatus: Boolean,
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    errors: (state) => state.errors,
    status: (state) => state.status,
    loginStatus: (state) => state.loginStatus,
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload.data;
      state.token = payload.token;
    },
    setStatus: (state, payload) => {
      state.status = payload.success;
    },
    setErrors: (state, payload) => {
      state.errors = payload;
    },
    setLoginStatus: (state, payload) => (state.loginStatus = payload.status),
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await axios.post(`${URI}/login`, payload);
        commit("setUser", response.data);
        commit("setStatus", { success: true });
        commit("setLoginStatus", { status: true });
      } catch (err) {
        commit("setStatus", { success: false });
        commit("setErrors", err.response.data);
        commit("setLoginStatus", { status: false });
      }
    },
    async register({ commit }, payload) {
      try {
        await axios.post(`${URI}`, payload);
        commit("setStatus", { success: true });
      } catch (err) {
        commit("setStatus", { success: false });
        commit("setErrors", err.response.data);
      }
    },
  },
  modules: {},
});
