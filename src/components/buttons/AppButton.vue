<template>
  <div class="font-bold text-red-500">{{ label }}</div>
</template>

<script setup lang="ts">
  import type { T_ButtonLabel } from "../../types";

  withDefaults(
    defineProps<{
      /**
       * The label of the button
       */
      label?: T_ButtonLabel;
    }>(),
    { label: "Click Me!!" }
  );
</script>
