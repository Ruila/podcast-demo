import { defineStore } from "pinia";

export const usePlayerStore = defineStore({
  id: "playerStore",
  state: () => ({
    musicId: 246,
  }),
  actions: {
    setMusicId(id: number) {
      this.musicId = id;
    },
  },
});
