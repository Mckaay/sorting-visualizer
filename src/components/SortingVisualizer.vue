<script setup>

import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";

const sortingVisualizerStore = useSortingVisualizerStore();
sortingVisualizerStore.generateNewArray(20);
</script>

<template>
  <div class="bar-container" :class="{ 'sorted': sortingVisualizerStore.sorted }">
    <div v-for="bar in sortingVisualizerStore.array"
         :class="{
           'currently-compared': bar.currentlyComparing,
           'already-compared': bar.alreadyCompared,
           'current-minimum': bar.currentMinimum ?? false,
           'pivot': bar.pivot ?? false,
           'left-pointer': bar.leftPointer,
           'right-pointer': bar.rightPointer
         }"
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

  /* Style for elements with the pivot */
  .pivot {
    background-color: deepskyblue;
  }

  /* Style for the left pointer */
  div.left-pointer {
    background-color: black;
  }

  /* Style for the right pointer */
  div.right-pointer {
    background-color: orange;
  }

  .currently-compared {
    background-color: red;
  }

  .already-compared {
    background-color: green;
  }
</style>