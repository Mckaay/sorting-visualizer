<script setup>
import Header from "@/components/Header.vue";
import SortingVisualizer from "@/components/SortingVisualizer.vue";
import Footer from "@/components/Footer.vue";
import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";

const sortingVisualizerStore = useSortingVisualizerStore();

sortingVisualizerStore.generateNewArray(10);
</script>

<template>
  <div class="body-wrapper">
    <div class="container">
      <Header/>
      <main>
        <SortingVisualizer/>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
</style>
