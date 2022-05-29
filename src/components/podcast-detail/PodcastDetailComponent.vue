<template>
  <div class="flex justify-center">
    <div class="w-[768px] p-4">
      <div class="flex">
        <img class="w-[150px] h-[150px] mr-8" :src="data.imgUrl" alt="image" />
        <div class="flex-1">
          <div class="text-[16px] font-bold">{{ data.title }}</div>
          <div>PLAY</div>
        </div>
      </div>
      <div class="text-[18px] my-8">Episode Description</div>
      <div>{{ data.summary }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getResource } from "@/utils/getResource";
import { useRoute } from "vue-router";
import type { Ref } from "@vue/reactivity";
import type { ResourceDataItemType } from "@/types/ResourceDataItemType";

const route = useRoute();
const data: Ref = ref<ResourceDataItemType>({
  title: "",
  publish_date: "",
  imgUrl: "",
  musicUrl: "",
  summary: "",
  author: "",
});
const resource = getResource();
onMounted(() => {
  data.value = resource[route.params.id as string];
});
</script>
<style scoped></style>
