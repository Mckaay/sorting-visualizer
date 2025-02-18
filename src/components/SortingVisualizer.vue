<script setup>
import {useSortingVisualizer} from "@/composables/sortingVisualizer.js";
import {onMounted} from "vue";

const sortingVisualizer = useSortingVisualizer();

onMounted(() => {
  sortingVisualizer.generateArray();
})
</script>

<template>
  <section
      class="w-full h-[400px] bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
    <div class="flex h-full flex-auto items-end justify-center gap-1">
      <div v-for="(item, index) in sortingVisualizer.state.array"
           :key="index"
           class="w-full transition-all duration-200 bg-black dark:bg-gray-300"
           :class="{
            'bg-green-500 dark:bg-green-400': item.state === 'sorted' || item.state === 'comparisonWinner',
            'bg-red-500 dark:bg-red-400': item.state === 'comparing',
            'bg-yellow-300 dark: bg-yellow-100 animate-pulse': item.state === 'swapping',
            'bg-blue-300 dark: bg-blue-100 animate-pulse': item.state === 'minimum',
           }"
           :style="{ height: `${item.number}%`}"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 200ms cubic-bezier(0.4, 0, 0.6, 1) infinite !important;
}
</style>