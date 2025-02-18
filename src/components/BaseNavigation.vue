<script setup>
import {onMounted, ref} from "vue";
import {useSortingVisualizer} from "@/composables/sortingVisualizer.js";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
}

onMounted(() => {
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }
})

const sortingVisualizer = useSortingVisualizer();
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-10 ml-5">Sorting Visualizer</h1>
      <button
          @click="toggleDarkMode"
          class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Toggle dark mode"
      >
        <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      </button>
    </header>
    <nav class="px-8 py-6 flex flex-col md:flex-row gap-4 md:items-end justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div class="flex-[1] md:max-w-md">
        <label for="array-size" class="text-sm font-medium text-gray-700 dark:text-gray-300">Array Size</label>
        <input
            id="array-size"
            type="range"
            :disabled="sortingVisualizer.state.currentlySorting"
            v-model="sortingVisualizer.state.arraySize"
            min="10"
            max="100"
            step="1"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="algorithm" class="text-sm font-medium text-gray-700 dark:text-gray-300">Algorithm</label>
        <select
            id="algorithm"
            :disabled="sortingVisualizer.state.currentlySorting"
            v-model="sortingVisualizer.state.algorithm"
            class="w-full p-2 bg-white dark:bg-gray-700 dark:text-black border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label for="speed" class="text-sm font-medium text-gray-700 dark:text-gray-300">Speed</label>
        <select
            id="speed"
            :disabled="sortingVisualizer.state.currentlySorting"
            v-model="sortingVisualizer.state.speed"
            class="w-full p-2 bg-white dark:bg-gray-700 dark:text-black border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        >
          <option value="500">Slow</option>
          <option value="100">Medium</option>
          <option value="50">Fast</option>
        </select>
      </div>
      <div class="flex items-end gap-4">
        <button
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            :disabled="sortingVisualizer.state.currentlySorting"
            @click="sortingVisualizer.generateArray()"
        >
          Generate Array
        </button>
        <button
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            :disabled="sortingVisualizer.state.currentlySorting || sortingVisualizer.state.sorted"
            @click="sortingVisualizer.sort()"
        >
          Sort!
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>