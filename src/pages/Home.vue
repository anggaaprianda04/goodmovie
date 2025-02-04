<template>
  <Layout>
    <div class="flex flex-row gap-4 mt-6 overflow-auto">
      <div v-for="(val, index) in listCategory" :key="index">
        <CardCategory :category-name="val.name" :key="val.id" />
      </div>
    </div>
    <ListCard title-header="Popular" :list-movie="listPopularMovie" />
    <ListCard title-header="Top Movie" :list-movie="listTopMovie" />
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
    let listCategory = ref([]);
    let listPopularMovie = ref([]);
    let listTopMovie = ref([]);

    onMounted(async () => {
      await getCategory();
      await getPopularMovie();
      await getTopMovie();
    });

    const getCategory = async () => {
      const response = await imdbService.getCategory();
      if (response.status === 200) {
        listCategory.value = response.data.genres;
      }
    };

    const getPopularMovie = async () => {
      const response = await imdbService.getPopularMovie();
      if (response.status === 200) {
        console.log(response.data);
        listPopularMovie.value = response.data.results;
      }
    };

    const getTopMovie = async () => {
      const response = await imdbService.getTopMovie();
      if (response.status === 200) {
        listTopMovie.value = response.data.results;
      }
    };

    return {
      listCategory,
      listPopularMovie,
      listTopMovie,
    };
  },
};
</script>
