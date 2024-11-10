<script setup>
import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";
import {onMounted, ref} from "vue";

const { bar } = defineProps(['bar']);
const sortingVisualizerStore = useSortingVisualizerStore();

const barWidth = ref(0);

onMounted(() => {
  const barContainer = document.querySelector('.bar-container');
  const barContainerWidth = barContainer.offsetWidth;
  const arrayLength = sortingVisualizerStore.array.length;
  const gapSpace = (arrayLength - 1) * 8;

  barWidth.value = (barContainerWidth - gapSpace) / arrayLength;
})

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
  <div class="bar" :class="barClasses(bar)"  :style="{ height: `${bar.number}px`, width: `${barWidth}px` }"></div>
</template>


<style scoped>
  .bar {
    width: 20px;
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