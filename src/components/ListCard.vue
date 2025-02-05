<template>
  <div class="mt-6 font-poppins">
    <hr class="w-20 border-2 border-secondary" />
    <h1 class="mb-2 text-lg font-semibold text-whiteColor">
      {{ titleHeader }}
    </h1>
    <div v-if="!isLoading" class="flex gap-3 overflow-auto">
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
    <div v-else class="flex gap-3 overflow-auto">
      <div v-for="(val, index) in 8" :key="index">
        <CardShimmer setWidth="160px" setHeigt="220px" />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import CardMovie from "./CardMovie.vue";
import CardShimmer from "./CardShimmer.vue";

export default {
  name: "ListCard",
  components: {
    CardMovie,
    RouterLink,
    CardShimmer,
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
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
