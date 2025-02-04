<template>
  <Layout>
    <div class="flex overflow-auto mt-6 gap-2">
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </div>
    <ListCard />
    <ListCard />
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import CardCategory from "../components/CardCategory.vue";
import ListCard from "../components/ListCard.vue";
import { ref, onMounted } from "vue";

import imdbService from "../services/imdbService";

export default {
  components: {
    Layout,
    CardCategory,
    ListCard,
  },
  setup() {
    onMounted(async () => {
      await getCategory();
    });

    const getCategory = async () => {
      const response = await imdbService.getCategory();
      if (response.status === 200) {
        console.log(response.data);
      }
    };
  },
};
</script>
