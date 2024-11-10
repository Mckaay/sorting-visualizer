<script setup>
const props = defineProps(['name', 'label', 'options']);
const emit = defineEmits(['change']);

// Emit selected value on change
const handleSelectChange = (event) => {
  emit('change', event.target.value);
};
</script>

<template>
  <div class="select-wrapper">
    <label :for="name">{{ label }}</label>
    <select :name="name" class="select" @change="handleSelectChange">
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