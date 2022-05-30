<template>
  <div
    class="absolute bottom-0 flex border-solid border-t-2 cursor-pointer h-[120px] w-full flex justify-center items-center"
  >
    <img
      src="https://files.soundon.fm/1611952660711-11c4cb94-968c-43fe-804d-25830fbd0338.jpeg"
      class="w-[80px] h-[80px]"
      @click="play"
    />
    <div>
      <font-awesome-icon :icon="['fas', 'bars']" />
      <audio ref="audioRef" muted controls>
        <source
          src="https://chtbl.com/track/4B4E1D/rss.soundon.fm/rssf/954689a5-3096-43a4-a80b-7810b219cef3/feedurl/17dfa81b-b307-4ac6-aeef-9ac624c41549/rssFileVip.mp3?timestamp=1653732572150"
          type="audio/mpeg"
        />
      </audio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import type { Ref } from "@vue/reactivity";
const props = defineProps({
  id: String,
  title: String,
  publish_date: String,
  imgUrl: String,
  musicUrl: String,
  summary: String,
  author: String,
});
const audioRef: Ref = ref<HTMLAudioElement>();
function play() {
  audioRef.value.play();
}
onMounted(() => {
  console.info("onMounted", audioRef.value.play);
});
</script>
<style scoped></style>
