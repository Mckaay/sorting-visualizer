<script setup>
import { useSortingVisualizerStore } from '@/stores/sortingVisualizer.js';
import Select from './Select.vue';
import Button from './Button.vue';

const sortingVisualizerStore = useSortingVisualizerStore();

const updateAlgorithm = (value) => {
  sortingVisualizerStore.currentAlgorithmSelected = value;
};

const updateSpeed = (value) => {
  sortingVisualizerStore.currentSpeedSelected = value;
};
</script>

<template>
  <header>
    <div class="container">
      <div class="wrapper">
        <h1>Sorting Visualizer</h1>
        <div class="options-wrapper">
          <Button @click="sortingVisualizerStore.generateNewArray(20)" text="Generate New Array" />
          <Select
              label="Choose Algorithm"
              name="algorithm"
              :options="sortingVisualizerStore.algorithmOptions"
              @change="updateAlgorithm"
          />
          <Select
              label="Choose Speed"
              name="speed"
              :options="sortingVisualizerStore.speedOptions"
              @change="updateSpeed"
          />
        </div>
        <Button @click="sortingVisualizerStore.startSorting()" text="Sort!" />
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-100);
    flex-wrap: wrap;
    background-color: var(--color-light-bluish);
    padding-top: var(--spacing-150);
    padding-bottom: var(--spacing-150)
  }

  .options-wrapper {
    display: flex;
    gap: 1rem;
  }

  .wrapper {
    display: flex;
    gap: var(--spacing-150);
  }
</style>