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

export default {
  components: {
    Layout,
    CardCategory,
    ListCard,
  },
};
</script>
