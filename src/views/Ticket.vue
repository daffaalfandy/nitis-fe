<template>
  <section id="ticket">
    <div
      style="height: 100vh; max-height: 100vh"
      class="flex flex-col md:flex-row"
    >
      <div class="flex-initial mx-0 px-0 w-full md:w-2/3 bg-white">
        <div class="w-full pt-4 px-4 md:px-20 h-full">
          <div class="h-1/6" style="height: 40px">
            <a href="/">
              <img src="../assets/img/logo.svg" class="h-full" alt="logo" />
            </a>
          </div>
          <div
            class="h-5/6 w-full items-center pt-24 flex flex-wrap content-center align-middle"
          >
            <div class="w-full">
              <h3 class="auth-title" style="color: black">
                Pilih tanggal penayangan
              </h3>
              <div class="w-2/6 pt-2 pb-1">
                <hr style="border-top: 4px solid #da622a" />
              </div>
            </div>
            <div class="flex">
              <div class="flex-initial pr-10">
                <img
                  src="../assets/img/date-pict.svg"
                  alt="date"
                  class="h-full"
                />
              </div>
              <div class="flex-1">
                <div class="w-full py-2">
                  <button
                    class="ticket-option w-full"
                    @click.prevent="
                      onClickDate('Minggu, 25 April 2021', $event)
                    "
                  >
                    Minggu, 25 April 2021
                  </button>
                </div>
                <div class="w-full py-2">
                  <button
                    class="ticket-option w-full"
                    @click.prevent="onClickDate('Senin, 26 April 2021', $event)"
                  >
                    Senin, 26 April 2021
                  </button>
                </div>
                <div class="w-full py-2">
                  <button
                    class="ticket-option w-full"
                    @click.prevent="
                      onClickDate('Selasa, 27 April 2021', $event)
                    "
                  >
                    Selasa, 27 April 2021
                  </button>
                </div>
                <div class="w-full py-2">
                  <button
                    class="ticket-option w-full"
                    @click.prevent="onClickDate('Rabu, 28 April 2021', $event)"
                  >
                    Rabu, 28 April 2021
                  </button>
                </div>
                <div class="w-full py-2">
                  <button
                    class="ticket-option w-full"
                    @click.prevent="onClickDate('Kamis, 29 April 2021', $event)"
                  >
                    Kamis, 29 April 2021
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full pt-10">
              <h3 class="auth-title" style="color: black">Pilih jenis tiket</h3>
              <div class="w-1/6 pt-2 pb-10">
                <hr style="border-top: 4px solid #da622a" />
              </div>
              <div class="flex flex-row gap-x-5 md:w-4/6">
                <button
                  @click.prevent="onClickBundle(1, $event)"
                  class="ticket-bundle bundle-1 w-40 h-40"
                ></button>
                <button
                  @click.prevent="onClickBundle(2, $event)"
                  class="ticket-bundle bundle-2 w-40 h-40"
                ></button>
                <button
                  @click.prevent="onClickBundle(3, $event)"
                  class="ticket-bundle bundle-3 w-40 h-40"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-initial mx-0 px-0 w-full md:w-1/3">
        <div
          class="ticket-bg-right w-full h-full items-center px-5 md:px-20 flex flex-wrap content-center justify-center align-middle"
          style="background-color: #2b2869"
        >
          <div class="w-full">
            <h3 class="auth-title">Pembelian Tiket</h3>
            <div class="w-2/3 pt-2 pb-10">
              <hr style="border-top: 4px solid #da622a" />
            </div>
          </div>
          <!-- Ticket bills -->
          <div
            class="w-full bg-white rounded-tl-2xl rounded-br-2xl shadow-2xl p-6 hidden"
            id="ticket-bills-container"
          >
            <!-- Ticket information -->
            <h5 class="text-base" id="ticket-information"></h5>
            <span
              class="font-light text-gray-400 text-sm"
              id="additional-ticket-information"
            ></span>
            <!-- Additional info -->
            <div class="flex pt-5 items-center" id="additional-information">
              <div class="flex-initial w-1/6">
                <img src="../assets/img/img-info.svg" alt="info" />
              </div>
              <div class="flex-1 w-5/6 leading-3 text-sm font-light">
                Untuk pembelian bundle, kami akan mengirimkan form pemesanan
                merchandise ke email anda
              </div>
            </div>
            <div class="pt-8 pb-3">
              <hr style="border-top: 2px solid #da622a" />
            </div>
            <!-- Price -->
            <div class="flex justify-between">
              <span class="text-lg font-medium">Total</span>
              <span class="text-lg font-medium" id="ticket-price"></span>
            </div>
            <!-- End -->
            <div class="w-full pt-8">
              <button class="btn-auth" type="button" @click.prevent="onSubmit">
                Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const bundleInformation = [
  {
    title: "Bundle T-shirt",
    desc: "( 1 T-Shirt - 1 Tiket )",
    price: "Rp75.000,00",
  },
  {
    title: "Bundle Totebag",
    desc: "( 1 Totebag - 1 Tiket )",
    price: "Rp55.000,00",
  },
  {
    title: "Hanya Tiket",
    desc: "( 1 Tiket )",
    price: "Rp15.000,00",
  },
];

export default {
  name: "Ticket",
  data() {
    return {
      datepick: "",
      bundleType: 0,
      bundlePrice: "",
    };
  },
  methods: {
    onClickDate(message, event) {
      this.datepick = message;
      let oldOption = document.querySelector(".ticket-option-active");

      if (oldOption) {
        oldOption.classList.remove("ticket-option-active");
        oldOption.classList.add("ticket-option");
      }

      event.target.classList.remove("ticket-option");
      event.target.classList.add("ticket-option-active");

      this.sumTicket();
    },
    onClickBundle(type, event) {
      this.bundleType = type;
      this.bundlePrice = bundleInformation[Number(type) - 1].price;

      let oldOption = document.querySelector(".ticket-bundle-active");

      if (oldOption) {
        oldOption.classList.remove("ticket-bundle-active");
        oldOption.classList.add("ticket-bundle");
      }

      event.target.classList.add("ticket-bundle-active");
      event.target.classList.remove("ticket-bundle");

      this.sumTicket();
    },
    sumTicket() {
      let billsContainer = document.getElementById("ticket-bills-container");
      if (this.datepick !== "" && this.bundleType !== 0) {
        let titleBundleContainer = document.getElementById(
          "ticket-information"
        );
        let descBundleContainer = document.getElementById(
          "additional-ticket-information"
        );
        let priceBundleContainer = document.getElementById("ticket-price");

        billsContainer.classList.remove("hidden");
        titleBundleContainer.innerHTML = `${
          bundleInformation[this.bundleType - 1].title
        } - ${this.datepick}`;
        descBundleContainer.innerHTML =
          bundleInformation[this.bundleType - 1].desc;
        priceBundleContainer.innerHTML =
          bundleInformation[this.bundleType - 1].price;
      } else {
        billsContainer.classList.add("hidden");
      }
    },
    onSubmit() {
      // handle post to backend
      this.datepick = this.datepick.split(",");
      this.$store.commit("setTicketInformation", {
        movie_date: this.datepick[1].trim(),
        ticket_bundle: this.bundleType,
        ticket_price: this.bundlePrice,
      });

      this.$router.push({ name: "Ticket Confirmation" });
    },
  },
};
</script>
