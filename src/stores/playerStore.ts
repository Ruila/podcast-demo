import { defineStore } from "pinia";

export const usePlayerStore = defineStore({
  id: "playerStore",
  state: () => ({
    musicId: "247",
  }),
  actions: {
    setMusicId(id: string) {
      this.musicId = id;
    },
  },
});
