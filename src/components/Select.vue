<script setup>
import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";

const props = defineProps(['name', 'label', 'options']);
const emit = defineEmits(['change']);

const sortingVisualizerStore = useSortingVisualizerStore();

const handleSelectChange = (event) => {
  emit('change', event.target.value);
};
</script>

<template>
  <div class="select-wrapper">
    <label :for="name">{{ label }}</label>
    <select :disabled="sortingVisualizerStore.currentlySorting" :name="name" class="select" @change="handleSelectChange">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
  .select-wrapper {
    display: flex;
    align-items: center;
    gap: var(--spacing-50);
  }
</style>