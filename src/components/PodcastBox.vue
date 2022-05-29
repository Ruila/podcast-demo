<template>
  <div class="flex my-4 shadow-md cursor-pointer">
    <img class="w-[100px] h-[100px]" :src="props.imgUrl" alt="image" />
    <div class="ml-4">
      <div class="text-[16px]">
        {{ props.title }}
      </div>
      <div class="text-[12px] text-[#0000007d]">
        <div>author: {{ props.author }}</div>
        <div>publish date: {{ props.publish_date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const props = defineProps({
  title: String,
  publish_date: String,
  imgUrl: String,
  musicUrl: String,
  summary: String,
  author: String,
});
onMounted(() => {
  console.info("props", props);
});
</script>
<style scoped></style>
