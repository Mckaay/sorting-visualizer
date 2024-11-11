<script setup>
import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";
import {onBeforeMount, onMounted, ref} from "vue";

const { bar } = defineProps(['bar']);
const sortingVisualizerStore = useSortingVisualizerStore();

const barWidth = ref(0);

const barClasses = (bar) => {
  return {
    'currently-compared': bar.currentlyComparing,
    'already-compared': bar.alreadyCompared,
    'current-minimum': bar.currentMinimum ?? false,
    'pivot': bar.pivot ?? false,
    'left-pointer': bar.leftPointer,
    'right-pointer': bar.rightPointer
  }
}
</script>

<template>
  <div
      class="bar"
      :class="barClasses(bar)"
      :style="`--bar-width: ${sortingVisualizerStore.barWidth}px; height: ${bar.number}px;`"
  ></div></template>


<style scoped>
  .bar {
    width: var(--bar-width);
    background-color: var(--color-dark-navy);
  }

  .pivot {
    background-color: deepskyblue;
  }

  div.left-pointer {
    background-color: black;
  }

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