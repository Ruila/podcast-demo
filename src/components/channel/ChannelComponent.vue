<template>
  <div class="flex justify-center">
    <div class="w-[768px] mb-[150px]">
      <div v-for="(item, index) in podcastList" :key="item">
        <div v-if="index === podcastList.length - 5" ref="lastElement">
          <podcast-card
            :id="item"
            :img-url="data[item]['imgUrl']"
            :title="data[item]['title']"
            :publish_date="data[item]['publish_date']"
            :author="data[item]['author']"
            :summary="data[item]['summary']"
            :music-url="data[item]['musicUrl']"
          />
        </div>
        <div v-else>
          <podcast-card
            :id="item"
            :img-url="data[item]['imgUrl']"
            :title="data[item]['title']"
            :publish_date="data[item]['publish_date']"
            :author="data[item]['author']"
            :summary="data[item]['summary']"
            :music-url="data[item]['musicUrl']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUpdate, onMounted, onUpdated, ref, watch } from "vue";
import type { Ref } from "@vue/reactivity";
import PodcastCard from "@/components/channel/PodcastCard.vue";
import type { ResourceDataType } from "@/types/ResourceDataType";
import { usePlayerStore } from "@/stores/playerStore";
const { resource } = usePlayerStore();
const data: Ref = ref<ResourceDataType>();
const lastElement: Ref = ref(null);
const observer: Ref = ref<IntersectionObserver>();
const podcastList: Ref = ref<Array<string>>();
const currentNum: Ref = ref<number>(20);

function elementObserved(entries: Array<IntersectionObserverEntry>) {
  if (
    entries[0].isIntersecting &&
    podcastList.value.length < Object.keys(data.value).length
  ) {
    currentNum.value += 20;
  }
}

onMounted(() => {
  data.value = resource;
  podcastList.value = Object.keys(data.value).slice(0, currentNum.value);
  observer.value = new IntersectionObserver(elementObserved);
});

onBeforeUpdate(() => {
  observer.value.disconnect();
});

onUpdated(() => {
  observer.value = new IntersectionObserver(elementObserved);
  observer.value.observe(lastElement.value[0]);
});

watch(currentNum, () => {
  podcastList.value = Object.keys(data.value).slice(
    0,
    currentNum.value > data.value.length ? data.value.length : currentNum.value
  );
});
</script>
<style scoped></style>
