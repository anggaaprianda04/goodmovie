<template>
  <div class="mt-6 font-poppins">
    <hr class="w-20 border-2 border-secondary" />
    <h1 class="mb-2 text-lg font-semibold text-whiteColor">
      {{ titleHeader }}
    </h1>
    <div class="flex gap-3 overflow-auto">
      <div v-for="(val, index) in listMovie" :key="index">
        <CardMovie
          :title="val.original_title"
          :year="val.release_date"
          :rating="val.vote_average"
          :backDropPath="val.backdrop_path"
          :key="val.id" />
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "./CardMovie.vue";

export default {
  name: "ListCard",
  components: {
    CardMovie,
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
