<template>
  <section id="ticket-feedback">
    <div class="flex flex-row" style="max-height: 100vh">
      <div
        class="flex-initial mx-0 px-0 bg-white w-2/3 bg-feedback-left hidden md:block"
      >
        <div class="w-full pt-5 px-20 h-full">
          <div class="h-1/6" style="height: 40px">
            <a href="/">
              <img src="../assets/img/logo.svg" class="h-full" alt="logo" />
            </a>
          </div>
        </div>
      </div>
      <div class="md:flex-initial mx-0 px-0 md:w-1/3">
        <div
          class="block md:hidden absolute align-top mx-4 my-4"
          style="height: 40px"
        >
          <a href="/">
            <img src="../assets/img/logo-white.svg" class="h-full" alt="logo" />
          </a>
        </div>
        <div
          class="bg-feedback-right w-full h-full items-center px-4 md:px-20 flex flex-wrap content-center justify-center align-middle"
        >
          <div class="w-full">
            <h3 class="auth-title">Terima Kasih</h3>
            <div class="w-2/3 pt-2">
              <hr style="border-top: 4px solid #da622a" />
            </div>
          </div>

          <!-- START: INVOICE -->
          <div
            class="w-full my-5 rounded-tl-2xl rounded-br-2xl bg-white p-5 text-sm"
          >
            <p>Pembayaran melalui:</p>
            <p><b>BCA - 037 4384 313 a/n Alifia Gresiana R</b></p>
            <p>Nominal yang dibayarkan:</p>
            <p><b>Rp15.000,00</b></p>
            <p>Dibayar melalui:</p>
            <p><b>BNI - 037 4384 313 a/n Tatang Suratang</b></p>
          </div>
          <!-- END: INVOICE -->

          <div class="w-full">
            <div class="rounded-tl-2xl rounded-br-2xl bg-white p-5 text-sm">
              <span class="w-full">
                Pemesanan Anda sedang kami proses. Apablia pembayaran Anda belum
                terkonfirmasi setelah 1x24 jam kerja (Senin - Jumat,
                08:00-17:00), Anda dapat menghubungi kontak dibawah ini.
                <br />
              </span>
              <span class="w-full">
                *<strong>
                  Silahkan logout kemudian login ulang untuk mengecek status
                  pembayaran.</strong
                >
              </span>
              <div class="pt-5">
                <a
                  href="https://api.whatsapp.com/send?phone=6287738256964&text=Halo%20nitis,%20mau%20tanya-tanya%20nih."
                  target="_blank"
                >
                  <button class="btn-auth">
                    <img
                      src="../assets/img/whatsapp-logo.svg"
                      alt="whatsapp"
                      class="float-left pr-3"
                    /><span class="w-1/2 clear-none"> Nitis Creative </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full pt-8">
            <a href="/">
              <button class="btn-auth" style="font-size: 0.75rem">
                Kembali Ke Halaman Utama
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
