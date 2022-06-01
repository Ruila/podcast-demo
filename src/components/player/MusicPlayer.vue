<template>
  <div
    class="fixed bg-white bottom-0 flex border-solid border-t-2 h-[120px] w-full flex justify-center items-center"
  >
    <img
      src="https://files.soundon.fm/1611952660711-11c4cb94-968c-43fe-804d-25830fbd0338.jpeg"
      class="w-[80px] h-[80px] mr-4"
      alt="image"
    />
    <div class="mr-4 cursor-pointer" @click="store.togglePlay()">
      <font-awesome-icon
        v-if="!store.playing"
        size="2x"
        :icon="['fas', 'circle-play']"
      />
      <font-awesome-icon v-else size="2x" :icon="['fas', 'circle-pause']" />
    </div>
    <div>{{ minTime }}</div>
    <input
      :value="progressBarValue"
      @input="onInput"
      @mousedown="MouseDown"
      @mouseup="MouseUp"
      class="mx-4 w-[600px] cursor-pointer"
      type="range"
      min="0"
      :max="progressBarMaxValue"
    />
    <div>{{ maxTime }}</div>
    <audio
      ref="audioRef"
      controls
      class="hidden"
      @canplay="canPlayHandler"
      @timeupdate="timeUpdateHandler"
    >
      <source
        src="https://chtbl.com/track/4B4E1D/rss.soundon.fm/rssf/954689a5-3096-43a4-a80b-7810b219cef3/feedurl/17dfa81b-b307-4ac6-aeef-9ac624c41549/rssFileVip.mp3?timestamp=1653732572150"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "@vue/reactivity";
import { convertToTime } from "@/utils/convertToTime";
import { usePlayerStore } from "@/stores/playerStore";
const store = usePlayerStore();
const audioRef: Ref = ref<HTMLAudioElement>();
const dragging: Ref = ref<boolean>(false);
const progressBarValue: Ref = ref<number>(0);
const progressBarMaxValue: Ref = ref<number>(0);
const currentTime: Ref = ref<number>(0);
const minTime: Ref = ref<string>("0:00");
const maxTime: Ref = ref<string>("0:00");
function playerController(status: boolean) {
  if (status) {
    audioRef.value.play();
  } else {
    audioRef.value.pause();
  }
}
function canPlayHandler(): void {
  maxTime.value = convertToTime(audioRef.value.duration);
  progressBarMaxValue.value = Math.trunc(audioRef.value.duration);
}
function timeUpdateHandler(e: Event): void {
  if (!dragging.value) {
    progressBarValue.value = (e.target as HTMLAudioElement).currentTime;
  }
}
function onInput(e: Event): void {
  currentTime.value = (e.target as HTMLInputElement).value;
}
function MouseDown(): void {
  dragging.value = true;
}
function MouseUp(): void {
  audioRef.value.currentTime = currentTime.value;
  dragging.value = false;
}
watch(store.$state, (newValue) => {
  playerController(newValue.playing);
});
</script>
<style scoped></style>
