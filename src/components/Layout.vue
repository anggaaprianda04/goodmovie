<template>
  <div class="bg-bgColor min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 font-poppins px-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
