<template>
  <Layout>
    <div class="flex mt-20 gap-3">
      <div class="w-40">
        <img src="/image/dummy_img.png" alt="img" />
      </div>
      <div class="flex text-whiteColor flex-col gap-2">
        <p class="font-light text-xs">2024</p>
        <p class="font-normal text-xl">This movie has a title in here</p>
        <p class="font-normal text-xs">
          Action, Science Fiction, Comedy, Family
        </p>
        <p class="font-normal text-xs">1h 50m</p>
      </div>
    </div>
    <div class="mt-6 flex flex-col">
      <hr class="w-11 border-2 border-secondary" />
      <h1 class="font-semibold mb-2 text-lg text-whiteColor">Overview</h1>
    </div>
    <p class="mt-4 text-whiteColor font-light text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div class="mt-6 mb-6 flex flex-col">
      <hr class="w-11 border-2 border-secondary" />
      <h1 class="font-semibold mb-2 text-lg text-whiteColor">Cast</h1>
    </div>
    <div class="flex gap-2 mt-2">
      <CardCast />
      <CardCast />
      <CardCast />
      <CardCast />
      <CardCast />
    </div>
    <ListCard />
    <div class="mt-4"></div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import CardCast from "../components/CardCast.vue";
import ListCard from "../components/ListCard.vue";

export default {
  name: "Detail",
  components: {
    Layout,
    CardCast,
    ListCard,
  },
};
</script>
