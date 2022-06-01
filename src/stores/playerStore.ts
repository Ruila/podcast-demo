import { defineStore } from "pinia";

export const usePlayerStore = defineStore({
  id: "playerStore",
  state: () => ({
    playing: false,
    musicId: "247",
  }),
  getters: {},
  actions: {
    playMusic() {
      this.playing = !this.playing;
    },
    setMusicId(id: string) {
      this.musicId = id;
    },
  },
});
