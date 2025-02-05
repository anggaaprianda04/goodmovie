<template>
  <Layout>
    <div v-if="!isLoading" class="overflow-hidden">
      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :pagination="{ clickable: true }"
        :breakpoints="{
          420: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        style="">
        <SwiperSlide v-for="(val, index) in listUpcoming" :key="index">
          <div class="bg-white rounded-xl h-44" :key="val.id">
            <img
              class="object-cover w-full rounded-md h-44"
              :src="fullImgUrl"
              alt="img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div v-else>
      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :pagination="{ clickable: true }"
        :breakpoints="{
          420: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        style="">
        <SwiperSlide v-for="n in 3" :key="n">
          <div class="p-6 bg-white rounded-xl h-44"></div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div v-if="isLoading" class="flex gap-4 mt-4 overflow-auto">
      <div v-for="(val, index) in 5" :key="index">
        <CardShimmer setWidth="100px" setHeigt="56px" />
      </div>
    </div>
    <div v-else class="relative flex flex-row gap-4 mt-4 overflow-auto">
      <div v-for="(val, index) in listCategory" :key="index">
        <RouterLink
          :to="`/category/${val.id}`"
          :key="val.id"
          @click="storeCategory(val.id, val.name)">
          <CardCategory :category-name="val.name" />
        </RouterLink>
      </div>
    </div>

    <ListCard
      title-header="Popular"
      :list-movie="listPopularMovie"
      :isLoading="isLoading" />
    <ListCard
      title-header="Top Movie"
      :list-movie="listTopMovie"
      :isLoading="isLoading" />
    <div class="mt-8"></div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import CardCategory from "../components/CardCategory.vue";
import CardShimmer from "../components/CardShimmer.vue";
import ListCard from "../components/ListCard.vue";
import { ref, onMounted, computed } from "vue";

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
    CardShimmer,
  },
  setup() {
    const categoryStore = useCategoryStore();

    const storeCategory = (id, name) => {
      categoryStore.setCategory(id, name);
    };

    let listCategory = ref([]);
    let listPopularMovie = ref([]);
    let listTopMovie = ref([]);
    let listUpcoming = ref([]);
    let isLoading = ref(false);

    onMounted(async () => {
      await getCategory();
      await getPopularMovie();
      await getTopMovie();
      await getMovieUpcoming();
    });

    const getMovieUpcoming = async () => {
      isLoading.value = true;
      try {
        const response = await imdbService.getMovieUpcoming();
        if (response.status === 200) {
          listUpcoming.value = response.data.results;
        }
      } catch (error) {
        console.error("Error feching");
      } finally {
        isLoading.value = false;
      }
    };

    const getCategory = async () => {
      isLoading.value = true;
      try {
        const response = await imdbService.getCategory();
        if (response.status === 200) {
          listCategory.value = response.data.genres;
        }
      } catch (error) {
      } finally {
        isLoading.value = false;
      }
    };

    const getPopularMovie = async () => {
      isLoading.value = true;
      try {
        const response = await imdbService.getPopularMovie();
        if (response.status === 200) {
          listPopularMovie.value = response.data.results;
        }
      } catch (error) {
      } finally {
        isLoading.value = false;
      }
    };

    const getTopMovie = async () => {
      const response = await imdbService.getTopMovie();
      if (response.status === 200) {
        listTopMovie.value = response.data.results;
      }
    };

    const fullImgUrl = computed(() => {
      const baseUrl = "https://image.tmdb.org/t/p/w400";
      return listUpcoming.value.poster_path
        ? `${baseUrl}${dataMovie.value.poster_path}`
        : "/image/dummy_img.png";
    });

    return {
      listCategory,
      listPopularMovie,
      listTopMovie,
      listUpcoming,
      isLoading,
      fullImgUrl,
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
