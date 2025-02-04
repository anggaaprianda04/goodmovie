<template>
  <div class="font-poppins mt-6">
    <hr class="w-20 border-2 border-secondary" />
    <h1 class="font-semibold mb-2 text-lg text-whiteColor">Populer</h1>
    <div class="flex gap-3">
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
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
};
</script>
