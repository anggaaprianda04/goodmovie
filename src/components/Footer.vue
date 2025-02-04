<template>
  <div class="w-full font-poppins bg-black p-6">
    <div class="flex justify-end">
      <img class="w-28 h-8" src="/image/logo.png" alt="Logo" />
    </div>
    <div class="mt-11 text-whiteColor flex justify-between">
      <div class="flex flex-col gap-1 text-sm">
        <p>@ {{ date }} goodmoov</p>
        <p>All right reserved</p>
      </div>
      <div class="flex flex-col items-end">
        <p>Privacy Policy</p>
        <p>Legal Information</p>
        <p>About</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

let date = ref("");

export default {
  name: "Footer",
  setup() {
    const date = ref("");
    onMounted(() => {
      date.value = new Date().getFullYear();
    });
    return {
      date,
    };
  },
};
</script>
