<template>
  <div class="flex justify-center">
    <div class="w-[768px] mb-[150px]">
      <template v-for="item in podcastList" :key="item">
        <podcast-card
          :id="item"
          :img-url="data[item]['imgUrl']"
          :title="data[item]['title']"
          :publish_date="data[item]['publish_date']"
          :author="data[item]['author']"
          :summary="data[item]['summary']"
          :music-url="data[item]['musicUrl']"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "@vue/reactivity";
import { getResource } from "@/utils/getResource";
import PodcastCard from "@/components/channel/PodcastCard.vue";
import type { ResourceDataType } from "@/types/ResourceDataType";

const data: Ref = ref<ResourceDataType>();
const podcastList: Ref = ref<Array<string>>();
onMounted(() => {
  data.value = getResource();
  podcastList.value = Object.keys(data.value);
});
</script>
<style scoped></style>
