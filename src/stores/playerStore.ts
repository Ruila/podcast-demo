import { defineStore } from "pinia";
import { getResource } from "@/utils/getResource";

export const usePlayerStore = defineStore({
  id: "playerStore",
  state: () => ({
    resource: getResource(),
    musicId: 246,
  }),
  actions: {
    setMusicId(id: number) {
      this.musicId = id;
    },
  },
});
