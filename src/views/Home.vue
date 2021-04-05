<template>
  <section id="landing-page">
    <div class="container-bg pt-5">
      <header class="container mx-auto">
        <nav class="flex justify-between items-center mx-4">
          <div style="height: 40px">
            <a href="/">
              <img
                src="../assets/img/logo.svg"
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
                style="color: #2b2869"
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
                  <path d="M7 12L0.0717964 0L13.9282 0L7 12Z" fill="#2b2869" />
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
                  >Keluar</a
                >
              </div>
            </div>
          </div>
          <!-- END Authenticate User -->
        </nav>
      </header>
      <div class="container px-4 md:mx-auto">
        <div class="md:flex md:justify-between pt-20 md:pt-60">
          <div class="w-3/4 md:w-1/2">
            <div
              class="w-4/5 md:w-5/12 text-center text-white italic font-light text-lg md:text-xl container-date"
            >
              25 - 29 April 2021
            </div>
            <div class="py-8">
              <img src="../assets/img/cantrik-word.png" alt="cantrik" />
            </div>
            <!-- If not logged in / not buying yet -->
            <div v-if="videoAccess === 'none'" class="pt-2">
              <router-link to="/ticket" tag="a" class="btn-secondary"
                >Beli Tiket</router-link
              >
            </div>
            <!-- If submitted -->
            <div v-if="videoAccess === 'submitted'" class="pt-2">
              <button class="btn-secondary" disabled>
                Menunggu Konfirmasi
              </button>
            </div>
            <!-- If confirmed -->
            <div v-if="videoAccess === 'confirmed'" class="pt-2">
              <router-link to="/watch" tag="a" class="btn-secondary"
                >Lihat Film</router-link
              >
            </div>
          </div>
          <div class="my-20 md:my-auto md:w-1/2 justify-end flex">
            <div class="w-2/3 md:w-5/12 container-trailer">
              <span
                class="container pt-2 md:pt-4 pr-14 md:pr-16 flex justify-end text-white tracking-wider"
              >
                Lihat Trailer
              </span>
              <div class="relative" style="padding-top: 56.25%">
                <iframe
                  class="absolute inset-0 pl-10 md:pl-18 pr-14 md:pr-16 pb-10 pt-2 md:pt-4 w-full h-full"
                  :src="trailerLink"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="nav">
    <nav
      class="w-full"
      style="background-image: linear-gradient(#c32e4e, #da622a)"
    >
      <ul
        class="md:flex text-center justify-center py-5 md:py-6 text-lg text-white"
        id="main-navbar"
      >
        <router-link
          to="/sinopsis"
          active-class="active"
          tag="li"
          class="px-5 nav mx-20 md:mx-1 my-3 md:my-0"
          exact
        >
          Sinopsis
        </router-link>
        <router-link
          to="/pricing"
          active-class="active"
          tag="li"
          class="px-5 nav mx-20 md:mx-1 my-3 md:my-0"
          exact
        >
          Harga Tiket
        </router-link>
        <router-link
          to="/merchandise"
          active-class="active"
          tag="li"
          class="px-5 nav mx-20 md:mx-1 my-3 md:my-0"
          exact
        >
          Merchandise
        </router-link>
        <router-link
          to="/policy"
          active-class="active"
          tag="li"
          class="px-5 nav mx-20 md:mx-1 my-3 md:my-0"
          exact
        >
          Aturan & Regulasi
        </router-link>
        <router-link
          to="/about"
          active-class="active"
          tag="li"
          class="px-5 nav mx-20 md:mx-1 my-3 md:my-0"
          exact
        >
          Tentang Kami
        </router-link>
      </ul>
    </nav>
  </section>

  <section id="main">
    <router-view v-slot="{ Component }">
      <FadeInOut entry="center" exit="bottom" :duration="500" mode="out-in">
        <component :is="Component" />
      </FadeInOut>
    </router-view>
  </section>

  <footer id="footer" style="background-color: #2b2869">
    <div class="container mx-auto px-10">
      <div class="grid gap-4" id="sponsor-medpart">
        <div class="col-span-2 text-white py-10">
          <span class="py-5"> Disponsori Oleh: </span>
          <div
            class="grid grid-cols-5 grid-rows-2 grid-flow-row gap-3 pr-20 py-5"
          >
            <img
              src="../assets/img/sponsor/lensa-jogja-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/sponsor/logo-amoeba-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/sponsor/logop-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/sponsor/logotype-putih-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/sponsor/SCI-RED-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/sponsor/titik-fokus-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/sponsor/wisanggenii-1-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/sponsor/WKEYANG-min.png"
              alt="medpart"
              class="w-full"
            />
          </div>
        </div>
        <div class="text-white py-0 md:py-10 pb-10 md:pb-0 col-span-1">
          <span class="py-5"> Media Partner: </span>
          <div class="grid grid-cols-5 grid-flow-row grid-rows-5 gap-4 py-5">
            <img
              src="../assets/img/medpart/aditv-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/ajr.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/area-jogja-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/crast-png-1-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/dista-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/Event-Boyolali-Black-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/grace-art-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/gudegnet-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/halo-jogjakarta-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/istakalisa.jpg"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/jitv-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/jogja-family-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/jogja-headline-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/jogja-seni-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/jogjapunyaacara-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/magenta-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/medpart-2-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/medpart-3-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/medpart-4-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/medpart-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/mmtc-min.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/motau.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/poster-seni.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/pyy.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/rbtv.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/semarang-panjang.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/seputar-pensi.png"
              alt="medpart"
              class="w-full"
            />
            <img
              src="../assets/img/medpart/swaragama.jpg"
              alt="medpart"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      style="background-image: linear-gradient(#c32e4e, #da622a)"
      class="text-center text-white py-3"
    >
      Copyright &copy; 2021, Nitis Creative. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import { FadeInOut } from "vue3-transitions";
import { mapGetters } from "vuex";
import { TRAILER_YOUTUBE_ID } from "../../env";

export default defineComponent({
  data() {
    return {
      trailerLink: `https://youtube.com/embed/${TRAILER_YOUTUBE_ID}?modestbranding=1&autohide=1&showinfo=0&controls=1`,
      videoAccess: "none",
    };
  },
  components: { FadeInOut },
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
    // Footer style
    if (screen.width >= 768) {
      document
        .getElementById("sponsor-medpart")
        .classList.toggle("grid-cols-3");
    } else {
      document
        .getElementById("sponsor-medpart")
        .classList.toggle("grid-rows-2");
    }
  },
  computed: {
    ...mapGetters(["loginStatus", "user"]),
  },
});
</script>
