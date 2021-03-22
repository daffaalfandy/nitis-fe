<template>
  <section id="landing-page">
    <div class="container-bg pt-5">
      <header class="container mx-auto">
        <nav class="flex justify-between items-center mx-4">
          <div style="height: 40px">
            <router-link to="/" tag="a">
              <img
                src="../assets/img/logo.svg"
                class="h-full"
                alt="nitis logo"
              />
            </router-link>
          </div>
          <!-- START Unauthenticate User -->
          <ul class="flex items-center text-sm">
            <li>
              <router-link
                to="/login"
                tag="a"
                class="px-4 py-2 hover:underline"
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
            <div class="pt-2">
              <router-link to="/ticket" tag="a" class="btn-secondary"
                >Beli Tiket</router-link
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
                  src="https://youtube.com/embed/SMKPKGW083c?modestbranding=1&autohide=1&showinfo=0&controls=1"
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
        class="md:flex text-center justify-center py-3 md:py-6 text-lg text-white"
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
      <div class="grid-cols-3 grid grid-flow-col gap-4">
        <div class="col-span-2 text-white py-10">
          <span class="py-5"> Disponsori Oleh: </span>
          <div
            class="grid grid-cols-3 grid-rows-3 grid-flow-row gap-3 pr-20 py-5"
          >
            <img
              src="https://picsum.photos/200/150"
              alt="medpart"
              class="w-full"
            />
            <img
              src="https://picsum.photos/200/150"
              alt="medpart"
              class="w-full"
            />
            <img
              src="https://picsum.photos/200/150"
              alt="medpart"
              class="w-full"
            />
            <img
              src="https://picsum.photos/200/150"
              alt="medpart"
              class="w-full"
            />
          </div>
        </div>
        <div class="text-white py-10 col-span-1">
          <span class="py-5"> Media Partner: </span>
          <div class="grid grid-cols-2 grid-flow-row grid-rows-3 gap-4 py-5">
            <img
              src="https://picsum.photos/200/150"
              alt="medpart"
              class="w-full"
            />
            <img
              src="https://picsum.photos/200/150"
              alt="medpart"
              class="w-full"
            />
            <img
              src="https://picsum.photos/200/150"
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

export default defineComponent({
  components: { FadeInOut },
});
</script>
