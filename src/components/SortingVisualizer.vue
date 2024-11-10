<script setup>

import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";

const sortingVisualizerStore = useSortingVisualizerStore();
sortingVisualizerStore.generateNewArray(20);
</script>

<template>
  <div class="bar-container">
    <div v-for="bar in sortingVisualizerStore.array"
         :class="{ 'currently-compared': bar.currentlyComparing,
          'already-compared': bar.alreadyCompared }"
         :style="{ height: `${bar.number}px` }"
         class="bar">
    </div>
  </div>
</template>

<style scoped>
  .bar {
    width: 20px;
    height: 100px;
    background-color: var(--color-dark-navy);
  }

  .bar-container {
    padding-top: var(--spacing-200);
    display: flex;
    gap: var(--spacing-50);
  }

  .currently-compared {
    background-color: red;
  }

  .already-compared {
    background-color: green;
  }
</style>