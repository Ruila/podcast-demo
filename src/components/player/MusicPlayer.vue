<template>
  <div
    class="fixed bg-white bottom-0 flex border-solid border-t-2 cursor-pointer h-[120px] w-full flex justify-center items-center"
  >
    <img
      src="https://files.soundon.fm/1611952660711-11c4cb94-968c-43fe-804d-25830fbd0338.jpeg"
      class="w-[80px] h-[80px] mr-4"
      alt="image"
      @click="showCurrent"
    />
    <div class="mr-4" @click="togglePlay">
      <font-awesome-icon
        v-if="!playing"
        size="2x"
        :icon="['fas', 'circle-play']"
      />
      <font-awesome-icon v-else size="2x" :icon="['fas', 'circle-pause']" />
    </div>
    <div>{{ minTime }}</div>
    <input
      v-model="progressBarValue"
      class="mx-4"
      type="range"
      min="0"
      max="100"
    />
    <div>{{ maxTime }}</div>
    <div>
      <audio ref="audioRef" muted controls @canplay="canPlay">
        <source
          src="https://chtbl.com/track/4B4E1D/rss.soundon.fm/rssf/954689a5-3096-43a4-a80b-7810b219cef3/feedurl/17dfa81b-b307-4ac6-aeef-9ac624c41549/rssFileVip.mp3?timestamp=1653732572150"
          type="audio/mpeg"
        />
      </audio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "@vue/reactivity";
import { convertToTime } from "@/utils/convertToTime";
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
const playing: Ref = ref<boolean>(false);
const progressBarValue: Ref = ref<number>(0);
const minTime: Ref = ref<string>("0:00");
const maxTime: Ref = ref<string>("0:00");
function togglePlay() {
  if (playing.value) {
    audioRef.value.pause();
  } else {
    audioRef.value.play();
  }
  playing.value = !playing.value;
}
function showCurrent(): void {
  console.info(
    "showCurrent",
    audioRef.value.currentTime,
    typeof audioRef.value.duration
  );
}
function canPlay(): void {
  maxTime.value = convertToTime(audioRef.value.duration);
}
onMounted(() => {
  console.info(
    "onMounted",
    audioRef.value.currentTime,
    audioRef.value.duration
  );
});
</script>
<style scoped></style>
