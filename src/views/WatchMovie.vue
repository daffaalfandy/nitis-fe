<template>
  <h1>Nonton Cantrik</h1>
  <!-- If its not the right time yet -->
  <div>
    <h1>{{ movie.errMsg }}</h1>
  </div>
  <!-- iFrame Movie, set class hidden or up to u if cannot watch movie -->
  <div v-if="movie.canWatch">
    <iframe
      class="absolute inset-0 pl-10 md:pl-18 pr-14 md:pr-16 pb-10 pt-2 md:pt-4 w-full h-full"
      width="560"
      height="315"
      :src="movie.url"
      title="Cantrik"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
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
    ...mapGetters(["user"]),
  },
  mounted() {
    let date = moment().format("YYYY-MM-DD");
    let movieDate = moment(this.user.ticket.movie_date).format("YYYY-MM-DD");

    if (date !== movieDate) {
      this.movie.errMsg = `Cantrik bisa dilihat pada : ${moment(
        movieDate
      ).format("LLLL")}`;
    } else {
      this.movie.canWatch = true;
    }
  },
};
</script>
