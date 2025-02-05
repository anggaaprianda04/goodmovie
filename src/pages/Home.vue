<template>
  <Layout>
    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="20"
      :pagination="{ clickable: true }"
      style="">
      <SwiperSlide v-for="n in 5" :key="n">
        <div class="p-6 bg-white rounded-xl h-44">Slide {{ n }}</div>
      </SwiperSlide>
    </Swiper>

    <div class="relative flex flex-row gap-4 mt-4 overflow-auto">
      <div v-for="(val, index) in listCategory" :key="index">
        <RouterLink
          :to="`/category/${val.id}`"
          :key="val.id"
          @click="storeCategory(val.id, val.name)">
          <CardCategory :category-name="val.name" />
        </RouterLink>
      </div>
    </div>
    <ListCard title-header="Popular" :list-movie="listPopularMovie" />
    <ListCard title-header="Top Movie" :list-movie="listTopMovie" />
    <div class="mt-8"></div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import CardCategory from "../components/CardCategory.vue";
import ListCard from "../components/ListCard.vue";
import { ref, onMounted } from "vue";

import imdbService from "../services/imdbService";
import { RouterLink } from "vue-router";
import { useCategoryStore } from "../stores/categoryStore";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Layout,
    CardCategory,
    ListCard,
    RouterLink,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const categoryStore = useCategoryStore();

    const storeCategory = (id, name) => {
      categoryStore.setCategory(id, name);
    };

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
      storeCategory,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style>
.swiper {
  margin-top: 18px;
  width: 100%;
  height: 140px;
  position: relative;
  padding-bottom: 220px;
  overflow: visible;
}

.swiper-pagination-bullet {
  background-color: #d9d9d9;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 5px;
  opacity: 0.7;
  transition: background-color 0.3s, transform 0.3s;
}

.swiper-pagination-bullet-active {
  background-color: #944ffa;
  width: 22px;
  border-radius: 4px;
}
</style>
