<template>
  <section id="ticket-confirmation">
    <div class="flex flex-col md:flex-row" style="max-height: 100vh">
      <div class="md:flex-initial mx-0 px-0 bg-white md:w-2/3">
        <div class="w-full pt-5 px-4 md:px-20 h-full" style="max-height: 100%">
          <div class="h-1/6" style="height: 40px">
            <a href="/">
              <img src="../assets/img/logo.svg" class="h-full" alt="logo" />
            </a>
          </div>
          <div class="h-5/6 content-center py-4 md:py-10">
            <div
              class="text-white content-center px-auto py-4 md:py-10 text-center"
            >
              <p
                style="background-color: #da622a"
                class="px-5 py-1 md:py-8 w-full"
              >
                Jangan tutup halaman ini sebelum menyelesaikan pembayaran
              </p>
            </div>
            <div class="w-full py-5">
              <h3 class="auth-title" style="color: black">
                Rekening Pembayaran
              </h3>
              <div class="w-1/3 pt-2 md:pb-10">
                <hr style="border-top: 4px solid #da622a" />
              </div>
            </div>
            <div class="w-full">
              <div
                class="md:flex md:space-x-4 space-y-4 md:space-y-0 justify-between"
              >
                <div class="md:w-1/3 flex space-x-2">
                  <div
                    class="rounded-tl-2xl flex-initial rounded-br-2xl bg-white w-32 h-32"
                    style="box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25)"
                  ></div>
                  <div class="flex flex-col justify-center">
                    <div
                      class="rounded-tl-2xl rounded-br-2xl px-2 py-2 text-center text-sm text-white"
                      style="background-color: #2b2869"
                    >
                      0374384313
                    </div>
                    <div class="px-5 text-sm">a/n ALIFIA GRESIANA R</div>
                  </div>
                </div>
                <div class="md:w-1/3 flex space-x-2">
                  <div
                    class="rounded-tl-2xl flex-initial rounded-br-2xl bg-white w-32 h-32 object-center"
                    style="box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25)"
                  >
                    <img
                      src="../assets/img/pricing-logo-gopay.png"
                      class="object-center object-cover my-auto"
                      alt="gopay logo"
                    />
                  </div>
                  <div class="flex flex-col justify-center">
                    <div
                      class="rounded-tl-2xl rounded-br-2xl px-2 py-2 text-center text-sm text-white"
                      style="background-color: #2b2869"
                    >
                      087738256964
                    </div>
                    <div class="px-5 text-sm">a/n ALIFIA</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full pt-8 md:pt-16">
              <span class="w-full">Nominal yang harus dibayarkan:</span>
              <div class="w-full py-2">
                <div
                  class="rounded-tl-2xl text-white w-min rounded-br-2xl px-5 py-2 tracking-wider"
                  style="
                    background-color: #da622a;
                    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
                  "
                >
                  {{ ticketInformation.ticket_price }}
                </div>
              </div>
              <div class="w-full py-8 md:py-10">
                <div
                  class="items-center flex rounded-tl-2xl text-white md:w-3/5 rounded-br-2xl px-5 py-2 font-light"
                  style="
                    background-color: #2b2869;
                    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
                  "
                >
                  <div class="flex-initial w-auto">
                    <img src="../assets/img/info-icon.svg" alt="info" />
                  </div>
                  <span class="flex-1 pl-5"
                    >Pembayaran Anda akan kami proses dalam kurun waktu paling
                    lama 1x24 jam kerja (Senin - Jumat, 08:00 - 17:00)</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex-initial mx-0 px-0 md:w-1/3">
        <div
          class="ticket-bg-right w-full h-full items-center px-4 md:px-20 flex flex-wrap content-center justify-center align-middle"
          style="background-color: #2b2869"
        >
          <div class="w-full">
            <h3 class="auth-title">Pembayaran</h3>
            <div class="w-2/3 pt-2 pb-10">
              <hr style="border-top: 4px solid #da622a" />
            </div>
          </div>
          <div class="w-full">
            <div
              class="rounded-tl-2xl rounded-br-2xl bg-white p-5 font-normal text-sm"
            >
              Setelah melakukan pembayaran, masukkan informasi asal rekening
              pembayaran untuk proses konfirmasi. Kami menjamin kerahasiaan data
              yang Anda kirimkan.
            </div>
          </div>
          <form
            @submit.prevent="onSubmit"
            class="w-full"
            style="display: contents"
          >
            <label class="input-label" for="bank_destination"
              >Bank Tujuan</label
            >
            <select
              name="bank_destination"
              id="bank_destination"
              class="form-control"
              v-model="form.bank_destination"
            >
              <template v-for="bank in bank_destination" :key="bank">
                <option :value="bank">{{ bank }}</option>
              </template>
            </select>
            <label for="bank_source" class="input-label">Asal Bank</label>
            <input
              type="text"
              class="form-control"
              id="bank_source"
              name="bank_source"
              v-model="form.bank_source"
              placeholder="Asal pembayaran"
            />
            <label for="norek" class="input-label">Nomor Rekening</label>
            <input
              type="text"
              class="form-control"
              id="norek"
              name="norek"
              v-model="form.account_number"
              placeholder="Isikan nomor telp jika menggunakan Gopay"
            />
            <label for="name" class="input-label">Atas Nama</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              v-model="form.name"
              placeholder="Atas nama"
            />
            <div class="w-full pt-7">
              <button type="submit" class="btn-auth">Konfirmasi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-unreachable */
import { mapGetters } from "vuex";

const bankDestination = ["BCA", "Gopay"];

export default {
  name: "Ticket Confirmation",
  data() {
    return {
      form: {
        bank_source: "",
        account_number: "",
        name: "",
        bank_destination: "",
      },
      bank_destination: bankDestination,
    };
  },
  methods: {
    async onSubmit() {
      if (
        this.form.bank_source === "" &&
        this.form.account_number === "" &&
        this.form.name === ""
      ) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Silahkan isi semua baris dengan benar!",
        });
      } else {
        // handle post to backend
        let loader = this.useLoading();
        loader.show();

        let ticketInformation = {};
        ticketInformation = this.ticketInformation;
        ticketInformation.ticket_id = this.user.ticket_id;

        Object.assign(ticketInformation, this.form);

        this.$store.commit("setTicketInformation", ticketInformation);
        await this.$store.dispatch("updateTicketSubmitted");

        if (!this.status) {
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
            icon: "error",
            title:
              "Pemesanan gagal, silahkan coba lagi. Jika tetap gagal silahkan hubungi panitia.",
          });
          loader.hide();
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
            title: "Pemesanan tiket berhasil",
          });

          loader.hide();

          this.$router.push({ name: "Ticket Feedback" });
        }
      }
    },
  },
  computed: {
    ...mapGetters(["ticketInformation", "status", "user"]),
  },
};
</script>
