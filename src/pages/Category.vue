<template>
  <Layout>
    <div class="flex justify-end mt-6">
      <div class="flex flex-col items-end">
        <hr class="border-2 w-11 border-secondary" />
        <h1 class="text-2xl font-semibold text-whiteColor">
          {{ categoryName }}
        </h1>
      </div>
    </div>
    <div class="grid grid-cols-10 gap-3 mt-6">
      <div v-for="(val, index) in listMovie" :key="index">
        <RouterLink :to="`/detail/${val.id}`" :key="val.id">
          <CardMovie
            :title="val.original_title"
            :year="val.release_date"
            :rating="val.vote_average"
            :backDropPath="val.backdrop_path" />
        </RouterLink>
      </div>
    </div>
    <div class="flex justify-center mb-4">
      <button
        v-if="currentPage <= 500"
        @click="loadMoreMovies"
        class="px-6 py-2 mt-10 rounded-md bg-primary text-whiteColor">
        Load more
      </button>
      <button
        v-else
        disabled
        class="px-6 py-2 mt-10 bg-gray-400 rounded-md text-whiteColor">
        Load more
      </button>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import CardMovie from "../components/CardMovie.vue";
import { onMounted, ref } from "vue";
import imdbService from "../services/imdbService";
import { RouterLink, useRoute } from "vue-router";
import { useCategoryStore } from "../stores/categoryStore";

export default {
  name: "Category",
  components: {
    Layout,
    CardMovie,
    RouterLink,
  },
  setup() {
    const route = useRoute();
    const categoryId = route.params.id;
    let currentPage = ref(1);
    let listMovie = ref([]);

    const categoryStore = useCategoryStore();

    onMounted(async () => {
      await getMovieByCategory(categoryId, currentPage.value);
      // console.log(categoryStore.categoryName);
    });

    const getMovieByCategory = async (idCategory, page) => {
      try {
        const response = await imdbService.getMoviebyCategory(idCategory, page);
        if (response.status === 200) {
          listMovie.value.push(...response.data.results);
        }
      } catch (error) {
        console.error("Error Fetching", error);
      }
    };

    const loadMoreMovies = async () => {
      currentPage.value++;
      if (currentPage.value <= 500) {
        await getMovieByCategory(categoryId, currentPage.value);
      } else {
        return;
      }
    };

    return {
      listMovie,
      loadMoreMovies,
      currentPage,
      categoryName: categoryStore.categoryName,
    };
  },
};
</script>
