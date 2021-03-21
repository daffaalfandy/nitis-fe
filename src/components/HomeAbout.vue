<template>
  <section id="about" class="sinopsis-section">
    <div class="container mx-auto">
      <div class="block w-full items-center pl-4 md:pl-24">
        <h1 class="section-title" style="text-align: start; color: #2b2869">
          Nitis Creative
        </h1>
        <hr class="section-line" style="margin-left: 15%; margin-right: 85%" />
      </div>
      <!-- START About Us -->
      <div class="flex pt-0 md:pt-20 pl-24">
        <div
          class="w-1/3 flex-initial items-center text-center hidden md:block"
        >
          <img src="../assets/img/main-logo.svg" alt="nitis logo" />
        </div>
        <div class="w-2/3 flex-1 hidden md:block">
          <img src="../assets/img/about-pict-large.png" alt="about" />
        </div>
      </div>
      <div class="flex pt-0 md:pt-10 pl-24">
        <div class="flex-1 w-3/5 my-auto hidden md:block">
          <img src="../assets/img/about-tagline.svg" alt="tagline" />
        </div>
        <div class="flex-initial w-2/5 hidden md:block">
          <img src="../assets/img/about-pict.png" alt="about picture" />
        </div>
      </div>
      <!-- END About Us -->

      <!-- START About Us Mobile -->
      <div class="pl-2 pt-10 block md:hidden">
        <img src="../assets/img/about-pict-large-mobile.png" alt="about" />
        <div class="pt-10 flex justify-center align-middle">
          <div
            class="text-white p-5 rounded-tl-2xl rounded-br-2xl w-max"
            style="background-color: #2b2869"
          >
            <h3 class="justify-center align-middle">
              Ikuti media sosial kami:
            </h3>
          </div>
        </div>
      </div>
      <!-- END About Us Mobile -->
      <div
        class="space-x-4 flex justify-center items-center content-center mx-auto text-center py-5 md:py-20"
      >
        <div
          class="text-white p-5 rounded-tl-2xl rounded-br-2xl hidden md:block"
          style="background-color: #2b2869"
        >
          <h3 class="justify-center align-middle">Ikuti media sosial kami:</h3>
        </div>
        <div>
          <a href="#" target="_blank" class="align-middle">
            <img
              src="../assets/img/instagram-logo.svg"
              alt="instagram-logo"
              class="h-20 w-auto"
            />
          </a>
        </div>
        <div>
          <a href="#" target="_blank" class="align-middle">
            <img
              src="../assets/img/youtube-logo.svg"
              class="h-20 w-auto"
              alt="instagram-logo"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
