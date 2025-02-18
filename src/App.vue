<script setup>
import BaseNavigation from "@/components/BaseNavigation.vue";
import SortingVisualizer from "@/components/SortingVisualizer.vue";
</script>

<template>
  <div class="min-h-screen container flex gap-12 direction flex-col items-center">
    <BaseNavigation/>
    <main class="w-full">
      <SortingVisualizer/>
    </main>
  </div>
</template>

<style scoped>
</style>
