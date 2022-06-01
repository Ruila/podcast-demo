<template>
  <div
    class="fixed bg-white bottom-0 flex border-solid border-t-2 h-[120px] w-full flex justify-center items-center"
  >
    <img
      src="https://files.soundon.fm/1611952660711-11c4cb94-968c-43fe-804d-25830fbd0338.jpeg"
      class="w-[80px] h-[80px] mr-4"
      alt="image"
    />
    <div class="mr-4 cursor-pointer" @click="playerController">
      <font-awesome-icon
        v-if="!playing"
        size="2x"
        :icon="['fas', 'circle-play']"
      />
      <font-awesome-icon v-else size="2x" :icon="['fas', 'circle-pause']" />
    </div>
    <div>{{ currentTime }}</div>
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
    <div>{{ totalTime }}</div>
    <audio
      ref="audioRef"
      controls
      @error="audioErrorHandler"
      class="hidden"
      @canplay="canPlayHandler"
      @timeupdate="timeUpdateHandler"
    >
      <source
        :src="`${
          resource[store.musicId] ? resource[store.musicId].musicUrl : ''
        }`"
        type="audio/mpeg"
      />
      Error with source file!
    </audio>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "@vue/reactivity";
import { convertToTime } from "@/utils/convertToTime";
import { usePlayerStore } from "@/stores/playerStore";
import { getResource } from "@/utils/getResource";
const store = usePlayerStore();
const audioRef: Ref = ref<HTMLAudioElement>();
const dragging: Ref = ref<boolean>(false);
const playing: Ref = ref<boolean>(false);
const loaded: Ref = ref<boolean>(false);
const progressBarValue: Ref = ref<number>(0);
const progressBarMaxValue: Ref = ref<number>(0);
const recordCurrentTime: Ref = ref<number>(0);
const currentTime: Ref = ref<string>("00:00");
const totalTime: Ref = ref<string>("00:00");
const resource = getResource();
function playerController() {
  if (!playing.value) {
    audioRef.value.play();
  } else {
    audioRef.value.pause();
  }
  playing.value = !playing.value;
}
function canPlayHandler(): void {
  console.info("canPlayHandler");
  loaded.value = true;
  totalTime.value = convertToTime(audioRef.value.duration);
  progressBarMaxValue.value = Math.trunc(audioRef.value.duration);
}
function timeUpdateHandler(e: Event): void {
  if (!dragging.value) {
    progressBarValue.value = (e.target as HTMLAudioElement).currentTime;
    currentTime.value = convertToTime(
      (e.target as HTMLAudioElement).currentTime
    );
  }
}
function onInput(e: Event): void {
  console.info("onInput");
  recordCurrentTime.value = (e.target as HTMLInputElement).value;
}
function MouseDown(): void {
  dragging.value = true;
}
function MouseUp(): void {
  audioRef.value.currentTime = recordCurrentTime.value;
  dragging.value = false;
}
function audioErrorHandler(e) {
  console.info("audioErrorHandlerxxxxxxx", e);
}
watch(store.$state, (newValue) => {
  console.info("music", newValue);
});
</script>
<style scoped></style>
