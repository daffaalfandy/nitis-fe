<template>
  <section id="login">
    <div class="flex flex-row" style="min-height: 100vh">
      <div class="md:flex-initial md:w-2/3 mx-0 px-0 hidden md:block">
        <div class="auth-bg w-full h-full pt-10 pl-20">
          <div style="height: 40px">
            <a href="/">
              <img src="../assets/img/logo.svg" class="h-full" alt="logo" />
            </a>
          </div>
        </div>
      </div>
      <div class="md:flex-initial md:w-1/3 mx-0 px-0">
        <div
          class="block md:hidden absolute align-top mx-4 my-4"
          style="height: 40px"
        >
          <a href="/">
            <img src="../assets/img/logo-white.svg" class="h-full" alt="logo" />
          </a>
        </div>
        <div
          class="auth-bg-right w-full h-full items-center px-4 md:px-20 flex flex-wrap content-center justify-center align-middle"
        >
          <h3 class="auth-title">Masuk <br />ke akun anda</h3>
          <!-- Line -->
          <div class="w-3/5">
            <hr style="border-top: 4px solid #da622a" />
          </div>
          <div class="w-2/5"></div>
          <!-- End Line -->
          <form @submit.prevent="onSubmit" style="display: contents">
            <label for="email" class="input-label">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              required
              v-model="form.email"
            />
            <label for="password" class="input-label">Kata Sandi</label>
            <input
              type="password"
              id="password"
              class="form-control"
              required
              v-model="form.password"
            />
            <div class="w-3/5 pt-10">
              <span class="text-white text-xs"
                >Belum memiliki akun? <br />Silahkan
                <router-link tag="a" to="/register" class="underline"
                  >mendaftar dahulu.</router-link
                >
              </span>
            </div>
            <div class="w-2/5 pt-10">
              <button type="submit" class="btn-auth w-full">Masuk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      // Handle login action
      let loader = this.useLoading(); // adding page loader
      loader.show(); // show page loader
      await this.$store.dispatch("login", this.form);

      if (!this.status) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: this.errors.message,
        });
      } else {
        this.$cookie.setCookie("user", this.user); // set cookies
        this.$cookie.setCookie("token", this.token); // set cookies
        this.axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${this.token}`; // set http request header
        this.$router.push({ path: "/" }); // route back to home
      }
      loader.hide(); // hide page loader
    },
  },
  computed: {
    ...mapGetters(["user", "status", "errors", "token", "loginStatus"]),
  },
};
</script>
