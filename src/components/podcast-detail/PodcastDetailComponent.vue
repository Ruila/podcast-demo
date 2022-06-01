<template>
  <div class="flex justify-center">
    <div class="w-[768px] p-4">
      <div class="flex">
        <img class="w-[150px] h-[150px] mr-8" :src="data.imgUrl" alt="image" />
        <div class="flex-1">
          <div class="text-[16px] font-bold">{{ data.title }}</div>
          <div
            @click="playMusic"
            class="text-center rounded w-[60px] border-[#0aa1ff] border-2 text-[#0aa1ff] text-[12px] mt-4 cursor-pointer hover:text-white hover:bg-[#0aa1ff]"
          >
            {{ store.playing ? "PAUSE" : "PLAY" }}
          </div>
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
import { usePlayerStore } from "@/stores/playerStore";

const route = useRoute();
const store = usePlayerStore();
const data: Ref = ref<ResourceDataItemType>({
  title: "",
  publish_date: "",
  imgUrl: "",
  musicUrl: "",
  summary: "",
  author: "",
});
const resource = getResource();
function playMusic(): void {
  store.setMusicId(route.params.id as string);
}
onMounted(() => {
  data.value = resource[route.params.id as string];
});
</script>
<style scoped></style>
