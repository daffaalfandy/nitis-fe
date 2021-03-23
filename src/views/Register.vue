<template>
  <section id="register">
    <div class="flex flex-row" style="min-height: 100vh">
      <div class="md:flex-initial md:w-2/3 mx-0 px-0 hidden md:block">
        <div class="auth-bg w-full h-full pt-10 pl-20">
          <div style="height: 40px">
            <a href="/">
              <img src="../assets/img/logo.svg" alt="logo" class="h-full" />
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
          <h3 class="auth-title">Buat akun baru</h3>
          <!-- Line -->
          <div class="w-3/5">
            <hr style="border-top: 4px solid #da622a" />
          </div>
          <div class="w-2/5"></div>
          <!-- End Line -->
          <form @submit.prevent="onSubmit" style="display: contents">
            <label for="name" class="input-label">Nama</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="form.fullname"
              required
            />
            <label for="email" class="input-label">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              required
              v-model="form.user_email"
            />
            <label for="password" class="input-label">Kata Sandi</label>
            <input
              type="password"
              id="password"
              class="form-control required"
              v-model="form.password"
            />
            <span v-if="wrong" class="italic text-sm text-red-500 w-full py-2">
              Password tidak cocok.
            </span>

            <label for="password_confirm" class="input-label"
              >Konfirmasi Kata Sandi</label
            >
            <input
              type="password"
              id="password_confirm"
              class="form-control"
              required
              v-model="form.password_conf"
            />
            <span v-if="wrong" class="italic text-sm text-red-500 w-full py-2">
              Password tidak cocok.
            </span>

            <div class="w-3/5 pt-10">
              <span class="text-white text-xs"
                >Sudah memiliki akun? <br />Silahkan
                <router-link to="/login" tag="a" class="underline">
                  masuk.
                </router-link>
              </span>
            </div>
            <div class="w-2/5 pt-10">
              <button type="submit" class="btn-auth w-full">Daftar</button>
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
  name: "Register",
  data() {
    return {
      form: {
        fullname: "",
        user_email: "",
        password: "",
        password_conf: "",
      },
      wrong: false,
    };
  },
  methods: {
    async onSubmit() {
      if (this.form.password === this.form.password_conf) {
        this.wrong = false;
        // handle register action
        await this.$store.dispatch("register", this.form); // post register
        if (!this.status) {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: this.errors.message,
          });
        } else {
          this.$swal.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
            icon: "success",
            title: "Registrasi berhasil, silahkan login untuk melanjutkan.",
          });
          this.$router.push({ path: "/login" }); // route to login page
        }
      } else {
        this.wrong = true;
      }
    },
  },
  computed: {
    ...mapGetters(["errors", "status"]),
  },
};
</script>
