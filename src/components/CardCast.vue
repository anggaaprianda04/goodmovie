<template>
  <div class="w-24 font-poppins">
    <img
      class="object-fill w-full rounded-lg hover:scale-105 hover:duration-200 h-36"
      :src="fullImgUrl"
      alt="Cast" />
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
