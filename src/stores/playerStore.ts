import { defineStore } from "pinia";

export const usePlayerStore = defineStore({
  id: "playerStore",
  state: () => ({
    playing: false,
  }),
  getters: {
    currentState: (state) => state.playing,
  },
  actions: {
    togglePlay() {
      this.playing = !this.playing;
    },
  },
});
