<template>
  <div class="item">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "@vue/reactivity";
import { getResource } from "@/utils/getResource";

const name: Ref = ref("Mike");

onMounted(() => {
  name.value = "kkokoko";
  const data = getResource();
  console.info("hehehe", data);
});
</script>
<style scoped></style>
