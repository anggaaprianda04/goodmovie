<template>
  <Layout>
    <div class="flex justify-end mt-6">
      <div class="flex flex-col items-end">
        <hr class="w-11 border-2 border-secondary" />
        <h1 class="font-semibold text-2xl text-whiteColor">Action</h1>
      </div>
    </div>
    <div class="mt-6 grid grid-cols-8 gap-2">
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
    </div>
    <div class="flex justify-center">
      <button class="mt-10 bg-primary px-6 py-2 text-whiteColor rounded-md">
        Load more
      </button>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import CardMovie from "../components/CardMovie.vue";

export default {
  name: "Category",
  components: {
    Layout,
    CardMovie,
  },
};
</script>
