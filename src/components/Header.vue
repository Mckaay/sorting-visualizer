<script setup>
  import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";
  const sortingVisualizerStore = useSortingVisualizerStore();
</script>

<template>
  <header>
    <h1>Sorting Visualizer</h1>
    <div class="options-wrapper">
      <button @click="sortingVisualizerStore.generateNewArray(20)">Generate new array</button>
      <div class="select-wrapper">
        <label for="algorithms">Choose Algorithm</label>
        <select name="algorithms" class="select">
          <option value="bubble" selected>Bubble Sort</option>
          <option value="selection">Selection Sort</option>
        </select>
      </div>
      <div class="select-wrapper">
        <label for="algorithms">Choose Speed</label>
        <select name="speed" class="select">
          <option value="slow" selected>Slow</option>
          <option value="fast">Fast</option>
        </select>
      </div>
    </div>
    <button @click="sortingVisualizerStore.startSorting()">Sort!</button>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-100);
    flex-wrap: wrap;
    padding-top: var(--spacing-100);
  }

  .options-wrapper {
    display: flex;
    align-items: center;
    gap: var(--spacing-100);
  }

  .select-wrapper {
    display: flex;
    align-items: center;
    gap: var(--spacing-50);
  }
</style>