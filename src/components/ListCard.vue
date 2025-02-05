<template>
  <div class="mt-6 font-poppins">
    <hr class="w-20 border-2 border-secondary" />
    <h1 class="mb-2 text-lg font-semibold text-whiteColor">
      {{ titleHeader }}
    </h1>
    <div class="flex gap-3 overflow-auto">
      <div v-for="(val, index) in listMovie" :key="index">
        <RouterLink :to="`/detail/${val.id}`" :key="val.id">
          <CardMovie
            :title="val.original_title"
            :year="val.release_date"
            :rating="val.vote_average"
            :backDropPath="val.backdrop_path"
            :key="val.id" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import CardMovie from "./CardMovie.vue";

export default {
  name: "ListCard",
  components: {
    CardMovie,
    RouterLink,
  },
  props: {
    titleHeader: {
      type: String,
      required: true,
    },
    listMovie: {
      type: Array,
      required: true,
    },
  },
};
</script>
