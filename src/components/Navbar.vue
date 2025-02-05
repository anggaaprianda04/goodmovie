<template>
  <div class="px-6 bg-blackColor h-14">
    <div class="flex items-center">
      <RouterLink to="/" class="mt-2">
        <img class="h-8 w-28" src="/image/logo.png" alt="Logo" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
  components: {
    RouterLink,
  },
};
</script>
