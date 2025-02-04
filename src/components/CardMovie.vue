<template>
  <div class="w-40 font-poppins">
    <div class="relative">
      <img class="object-cover h-56" :src="fullImgUrl" alt="img" />
      <div class="absolute bottom-0 right-0 w-8 bg-black bg-opacity-50 h-7">
        <p class="mt-1 text-sm text-center text-whiteColor">{{ rating }}</p>
      </div>
    </div>
    <p class="mt-1 text-sm text-whiteColor line-clamp-1">
      {{ title }}
    </p>
    <p class="mt-1 text-sm text-whiteColor line-clamp-1">{{ year }}</p>
  </div>
</template>

<script>
export default {
  name: "CardMovie",
  props: {
    title: String,
    year: String,
    rating: [String, Number],
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
