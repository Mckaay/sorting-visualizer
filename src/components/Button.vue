<script setup>
 const { text } = defineProps(['text']);
</script>

<template>
  <button class="primary"> {{ text }}</button>
</template>

<style scoped>
  .primary {
    color: var(--color-dark-navy);
    background-color: white;
    font-weight: var(--font-weight-bold);
    border: 0;
    padding-inline: 2rem;
    padding-block: .75rem;
    border-radius: 15px;
  }

  .primary:hover {
    cursor: pointer;
    background-color: var(--color-light-gray);
  }
</style>