<template>
  <div class="item">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "@vue/reactivity";
import { data } from "@/resource";

const name: Ref = ref("Mike");

onMounted(() => {
  console.info("hehehe", name);
  name.value = "kkokoko";
  getData();
});

async function getData(): Promise<void> {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data, "text/xml");
  console.info("xmaa", xmlDoc);
}
</script>
<style scoped></style>
