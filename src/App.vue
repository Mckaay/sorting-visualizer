<script setup>
import Header from "@/components/Header.vue";
import SortingVisualizer from "@/components/SortingVisualizer.vue";
import Footer from "@/components/Footer.vue";
import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";

const sortingVisualizerStore = useSortingVisualizerStore();
</script>

<template>
  <div class="body-wrapper">
    <Header/>
    <main>
      <SortingVisualizer/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>
</style>
