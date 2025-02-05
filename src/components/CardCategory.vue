<template>
  <div class="flex items-end w-auto rounded-md h-14 bg-primary font-poppins">
    <div class="w-auto text-end">
      <p class="mb-2 mr-2 font-medium ml-9 text-whiteColor">
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
