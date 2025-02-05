<template>
  <div
    :style="{ width: setWidth || '100%', height: setHeigt || '320px' }"
    class="flex items-center justify-center bg-gray-400 rounded-lg animate-pulse dark:bg-color-secondary">
    <div role="status"></div>
  </div>
</template>

<script>
export default {
  name: "CardShimmer",
  props: {
    setHeigt: String,
    setWidth: String,
  },
};
</script>
