<template>
  <Layout>
    <button class="mt-20 mb-6" @click="goBack">
      <img class="w-6 h-6" src="/image/icon_back.png" alt="icon" />
    </button>
    <div v-if="!isLoading" class="flex gap-3">
      <div class="w-40">
        <img :src="fullImgUrl" alt="img" />
      </div>
      <div class="flex flex-col gap-2 text-whiteColor">
        <p class="text-xs font-light">{{ dataMovie.release_date }}</p>
        <p class="text-xl font-normal">{{ dataMovie.original_title }}</p>
        <p class="text-xs font-normal">{{ listGenres }}</p>
        <p class="text-xs font-normal">{{ dataMovie.runtime }} minutes</p>
      </div>
    </div>
    <div v-else class="flex gap-3">
      <CardShimmer setWidth="160px" setHeigt="240px" />
      <div class="flex flex-col items-start justify-start gap-2">
        <CardShimmer setWidth="60px" setHeigt="8px" />
        <CardShimmer setWidth="60px" setHeigt="8px" />
        <CardShimmer setWidth="60px" setHeigt="8px" />
        <CardShimmer setWidth="60px" setHeigt="8px" />
      </div>
    </div>
    <div class="flex flex-col mt-6">
      <hr class="border-2 w-11 border-secondary" />
      <h1 class="mb-2 text-lg font-semibold text-whiteColor">Overview</h1>
    </div>
    <p v-if="!isLoading" class="text-lg font-light text-whiteColor">
      {{ dataMovie.overview }}
    </p>
    <p v-else class="flex flex-col gap-3">
      <CardShimmer setWidth="200px" setHeigt="8px" />
      <CardShimmer setWidth="200px" setHeigt="8px" />
      <CardShimmer setWidth="200px" setHeigt="8px" />
      <CardShimmer setWidth="200px" setHeigt="8px" />
    </p>
    <div class="flex flex-col mt-6 mb-2">
      <hr class="border-2 w-11 border-secondary" />
      <h1 class="mb-2 text-lg font-semibold text-whiteColor">Cast</h1>
    </div>
    <div v-if="!isLoading" class="flex gap-3 overflow-auto">
      <div v-for="(val, index) in listCast" :key="index">
        <CardCast
          :name="val.name"
          :back-drop-path="val.profile_path"
          :key="val.id" />
      </div>
    </div>
    <div v-else class="flex gap-1 overflow-auto">
      <div v-for="(val, index) in 20" :key="index">
        <CardShimmer setWidth="80px" setHeigt="112px" />
      </div>
    </div>
    <ListCard
      title-header="Recomendation"
      :list-movie="listRecomendation"
      :isLoading="isLoading" />
    <div class="mt-4"></div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import CardCast from "../components/CardCast.vue";
import ListCard from "../components/ListCard.vue";
import { computed, onMounted, ref } from "vue";
import imdbService from "../services/imdbService";
import { useRoute } from "vue-router";
import CardShimmer from "../components/CardShimmer.vue";

export default {
  name: "Detail",
  components: {
    Layout,
    CardCast,
    ListCard,
    CardShimmer,
  },
  setup() {
    const route = useRoute();
    const movieId = route.params.id;
    let dataMovie = ref({});
    let listGenres = ref([]);
    let listRecomendation = ref([]);
    let listCast = ref([]);
    let isLoading = ref(false);

    function goBack() {
      window.history.back();
    }

    onMounted(async () => {
      await getDetailMovie(movieId);
    });

    const getDetailMovie = async (id) => {
      isLoading.value = true;
      try {
        const response = await imdbService.getDetailMovie(id);
        if (response.status === 200) {
          dataMovie.value = response.data;
          parseDataGenre(dataMovie.value);
          await getMovieRecomendation(dataMovie.value.id);
          await getCastMovie(dataMovie.value.id);
        }
      } catch (error) {
        console.error("Error fetching");
      } finally {
        isLoading.value = false;
      }
    };

    const getCastMovie = async (idMovie) => {
      isLoading.value = true;
      try {
        const response = await imdbService.getCastMovieById(idMovie);
        if (response.status === 200) {
          listCast.value = response.data.cast;
        }
      } catch (error) {
        console.error("Error Fetching");
      } finally {
        isLoading.value = false;
      }
    };

    const getMovieRecomendation = async (idMovie) => {
      isLoading.value = true;
      try {
        const response = await imdbService.getMovieRecommendation(idMovie);
        if (response.status === 200) {
          listRecomendation.value = response.data.results;
        }
      } catch (error) {
        console.error("Error Fetching");
      } finally {
        isLoading.value = false;
      }
    };

    const parseDataGenre = (data) => {
      const checkData = data == null ? [] : data;
      const result = checkData.genres.map((result) => {
        return result.name;
      });
      return (listGenres.value = result.join(", "));
    };

    const fullImgUrl = computed(() => {
      const baseUrl = "https://image.tmdb.org/t/p/w400";
      return dataMovie.value.poster_path
        ? `${baseUrl}${dataMovie.value.poster_path}`
        : "/image/dummy_img.png";
    });

    return {
      dataMovie,
      listGenres,
      listRecomendation,
      listCast,
      fullImgUrl,
      isLoading,
      goBack,
    };
  },
};
</script>
