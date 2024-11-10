<script setup>
const { bar } = defineProps(['bar']);

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
  <div class="bar" :class="barClasses(bar)" :style="{ height: `${bar.number}px` }"></div>
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