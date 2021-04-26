<template>
  <section id="watch">
    <div class="pt-5" id="watch-bg">
      <header class="container mx-auto">
        <nav class="flex justify-between items-center mx-4">
          <div style="height: 40px">
            <a href="/">
              <img
                src="../assets/img/logo-white.svg"
                class="h-full"
                alt="nitis logo"
              />
            </a>
          </div>
          <!-- START Unauthenticate User -->
          <ul class="flex items-center text-sm" v-if="!loginStatus">
            <li>
              <router-link
                to="/login"
                tag="a"
                class="px-4 py-2 hover:underline"
                style="color: #2b2869"
              >
                Masuk</router-link
              >
            </li>
            <li>
              <router-link to="/register" tag="a" class="px-2 md:px-4 py-2">
                <button class="btn-primary">Daftar</button>
              </router-link>
            </li>
          </ul>
          <!-- END Unauthenticate User -->
          <!-- START Authenticate User -->
          <div class="relative inline-block text-right" v-if="loginStatus">
            <div>
              <button
                class="dropbtn inline-flex justify-center w-full font-medium text-sm md:text-base focus:outline-none"
                @click.prevent="dropdownToogle"
                style="color: white"
                id="profile-menu"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {{ user.fullname }}
                <svg
                  class="mt-1.5 ml-2"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 12L0.0717964 0L13.9282 0L7 12Z" fill="white" />
                </svg>
              </button>
            </div>

            <div
              class="dropdown-content origin-top-right absolute right-0 mt-2 w-48 rounded-tl-2xl rounded-br-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none hidden"
              id="profile-dropdown"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="profile-menu"
            >
              <div class="py-1" role="none">
                <span
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  >Status Pembayaran:</span
                >
                <!-- Confirmed Payment -->
                <span
                  class="block px-4 py-2 text-sm font-medium text-green-600"
                  role="menuitem"
                  v-if="
                    user.ticket.is_confirmed === 1 &&
                    user.ticket.is_submitted === 1
                  "
                  >Terkonfirmasi</span
                >
                <!-- Unconfirmed Payment -->
                <span
                  class="block px-4 py-2 text-sm font-medium text-yellow-400"
                  role="menuitem"
                  v-if="
                    user.ticket.is_confirmed === 0 &&
                    user.ticket.is_submitted === 1
                  "
                  >Belum Terkonfirmasi</span
                >
                <!-- Not buying yet -->
                <span
                  class="block px-4 py-2 text-sm font-medium text-red-600"
                  role="menuitem"
                  v-if="
                    user.ticket.is_confirmed === 0 &&
                    user.ticket.is_submitted === 0
                  "
                  >Belum Melakukan Pembelian</span
                >
              </div>
              <div class="py-1" role="none">
                <a
                  @click.prevent="onLogout"
                  class="block px-4 py-2 text-sm rounded-br-2xl text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  style="cursor: pointer"
                  >Keluar</a
                >
              </div>
            </div>
          </div>
          <!-- END Authenticate User -->
        </nav>
      </header>
      <div class="container px-4 md:mx-auto flex-col justify-center center">
        <div class="py-8 px-10 md:px-0 flex justify-center">
          <img src="../assets/img/cantrik-word2.png" alt="cantrik" />
        </div>
        <!-- If its not the right time yet -->
        <div v-if="!movie.canWatch">
          <div class="py-0 md:py-8 px-8 md:px-0 flex justify-center">
            <h1 class="watch-error-container px-4 py-4 text-white text-center">
              {{ movie.errMsg }}
            </h1>
          </div>
        </div>
        <!-- iFrame Movie, set class hidden or up to u if cannot watch movie -->
        <div v-if="movie.canWatch">
          <div class="px-4 md:px-56 flex justify-center h-56 md:h-96">
            <iframe
              class="w-full"
              height="auto"
              :src="movie.url"
              title="Cantrik"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="text-center p-5 text-white">
            <p>Catatan : Gunakan headphone untuk pengalaman menonton yang lebih baik.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { YOUTUBE_ID } from "../../env";

moment.locale("id-ID");

export default {
  data() {
    return {
      movie: {
        canWatch: false,
        errMsg: "",
        url: `https://www.youtube.com/embed/${YOUTUBE_ID}?controls=0`,
      },
    };
  },
  computed: {
    ...mapGetters(["loginStatus", "user"]),
  },
  methods: {
    dropdownToogle() {
      // Dropdown Toggle
      let dropdown = document.getElementById("profile-dropdown");
      if (dropdown.classList.contains("hidden")) {
        dropdown.classList.toggle("block");
        dropdown.classList.remove("hidden");
      } else {
        dropdown.classList.toggle("hidden");
        dropdown.classList.remove("block");
      }
    },
    onLogout() {
      this.$cookie.removeCookie("user");
      this.$cookie.removeCookie("token");
      window.location.href = "/";
      this.$store.commit("setLoginStatus", { status: false });
      this.$store.commit("setUser", { user: {}, token: {} });
    },
  },
  mounted() {
    let date = moment().format("YYYY-MM-DD");
    let movieDate = moment(this.user.ticket.movie_date).format("YYYY-MM-DD");

    if (date !== movieDate) {
      this.movie.errMsg = `Cantrik dapat dilihat pada : ${moment(
        movieDate
      ).format("dddd, DD MMMM YYYY")}`;
    } else {
      this.movie.canWatch = true;
    }

    window.onclick = function (event) {
      // Close the dropdown menu if the user clicks outside of it
      if (
        !event.target.matches(".dropbtn") &&
        !event.target.matches(".dropdown-content")
      ) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("block")) {
            openDropdown.classList.remove("block");
            openDropdown.classList.toggle("hidden");
          }
        }
      }
    };
    if (this.loginStatus) {
      if (
        this.user.ticket.is_submitted === 1 &&
        this.user.ticket.is_confirmed === 1
      ) {
        this.videoAccess = "confirmed";
      } else if (this.user.ticket.is_submitted === 1) {
        this.videoAccess = "submitted";
      } else {
        this.videoAccess = "none";
      }
    } else {
      this.videoAccess = "none";
    }

    // Movie Background
    if (screen.width >= 768) {
      document.getElementById("watch-bg").classList.toggle("watch-bg");
    } else {
      document.getElementById("watch-bg").classList.toggle("bg-feedback-right");
    }
  },
};
</script>
