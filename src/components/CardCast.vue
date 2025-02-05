<template>
  <div class="w-20 font-poppins">
    <img class="object-cover h-28" :src="fullImgUrl" alt="Cast" />
    <p class="mt-1 text-xs text-center text-whiteColor">{{ name }}</p>
  </div>
</template>
<script>
export default {
  name: "CardCast",
  props: {
    name: String,
    backDropPath: String,
  },
  computed: {
    fullImgUrl() {
      const baseUrl = "https://image.tmdb.org/t/p/w400";
      return this.backDropPath
        ? `${baseUrl}/${this.backDropPath}`
        : "/image/dummy_img.png";
    },
  },
};
</script>
