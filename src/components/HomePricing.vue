<template>
  <section id="price" class="price-section">
    <div class="container mx-auto">
      <div class="w-full items-center block">
        <h1 class="section-title">Daftar Harga Tiket</h1>
        <div class="block items-center">
          <hr class="section-line" />
        </div>
        <!-- Price Card -->
        <div id="price-card">
          <div class="pt-10 md:pt-20 w-full px-4 md:px-0 items-center">
            <div class="price-card" id="price-card-1">
              <div
                class="price-card-left place-content-center"
                style="background-image: linear-gradient(#da622a, #c32e4e)"
              >
                <img src="../assets/img/bundle-1.png" alt="bundle t-shirt" />
              </div>
              <div class="w-2/3">
                <h4 class="price-card-title">Paket Single "Yakali sendiri"</h4>
                <h5 class="price-card-subtitle">(1 Tiket)</h5>
                <span class="price-card-price">Rp15.000,00</span>
              </div>
            </div>
          </div>
          <div class="pt-10 md:pt-20 w-full px-4 md:px-0 items-center">
            <div class="price-card" id="price-card-2">
              <div
                class="price-card-left"
                style="background-image: linear-gradient(#da622a, #c32e4e)"
              >
                <img src="../assets/img/bundle-2.png" alt="bundle totebag" />
              </div>
              <div class="w-2/3">
                <h4 class="price-card-title">Orang Ketiga "Asik kali ya"</h4>
                <h5 class="price-card-subtitle">(3 Tiket)</h5>
                <span class="price-card-price"
                  ><s>Rp45.000,00</s> Rp40.000,00</span
                >
              </div>
            </div>
          </div>
          <div class="pt-10 md:pt-20 w-full px-4 md:px-0 items-center mb-10">
            <div class="price-card" id="price-card-3">
              <div
                class="price-card-left"
                style="background-image: linear-gradient(#da622a, #c32e4e)"
              >
                <img src="../assets/img/bundle-3.png" alt="hanya tiket" />
              </div>
              <div class="w-2/3">
                <h4 class="price-card-title">Paket Ramean Sekampung</h4>
                <h5 class="price-card-subtitle">(5 Tiket)</h5>
                <span class="price-card-price"
                  ><s>Rp75.000,00</s> Rp65.000,00</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="items-center pb-10 pt-5">
          <div class="text-center">
            <router-link to="/ticket" tag="a" class="btn-secondary">
              Beli Tiket
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    if (screen.width >= 768) {
      document.getElementById("price-card-1").classList.toggle("price-card-1");
      document.getElementById("price-card-2").classList.toggle("price-card-2");
      document.getElementById("price-card-3").classList.toggle("price-card-3");
    }
  },
};
</script>
