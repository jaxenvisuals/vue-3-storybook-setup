<template>
  <div>{{ label }}</div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      /**
       * The label of the button
       */
      label?: string;
    }>(),
    { label: "Click Me!" }
  );
</script>
