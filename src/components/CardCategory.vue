<template>
  <div class="flex items-end rounded-md w-28 h-14 bg-primary font-poppins">
    <div class="w-full">
      <p class="mb-2 mr-2 font-medium text-whiteColor text-end">
        {{ categoryName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCategory",
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
};
</script>
