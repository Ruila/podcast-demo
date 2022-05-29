<template>
  <div class="flex my-4 shadow-md cursor-pointer" @click="goToPodcastView">
    <img class="w-[100px] h-[100px]" src="props.imgUrl" alt="image" />
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
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  id: String,
  title: String,
  publish_date: String,
  imgUrl: String,
  musicUrl: String,
  summary: String,
  author: String,
});

function goToPodcastView(): void {
  router.push({ name: "podcast", params: { id: props.id } });
}
</script>
<style scoped></style>
