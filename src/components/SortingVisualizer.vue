<script setup>

import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";
import Bar from "@/components/Bar.vue";

const sortingVisualizerStore = useSortingVisualizerStore();
sortingVisualizerStore.generateNewArray(20);

</script>

<template>
  <div class="bar-container" :class="{ 'sorted': sortingVisualizerStore.sorted }">
    <Bar v-for="bar in sortingVisualizerStore.array" :bar="bar"/>
  </div>
</template>

<style scoped>
  .bar-container {
    padding-top: var(--spacing-200);
    display: flex;
    justify-content: center;
    gap: var(--spacing-50);
    max-width: var(--container-max-width);
    margin: auto;
  }

  .sorted {
    .bar {
      background-color: green;
    }
  }
</style>