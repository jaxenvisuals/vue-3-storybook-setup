<template>
  <div class="font-bold text-red-500">{{ label }}</div>
</template>

<script setup lang="ts">
  import type { T_ButtonLabel } from "../../types";

  type AppButtonProps = {
    /**
     * The label of the button
     */
    label?: T_ButtonLabel;
  };

  withDefaults(defineProps<AppButtonProps>(), { label: "Click Me!!" });

  export type { AppButtonProps };
</script>
