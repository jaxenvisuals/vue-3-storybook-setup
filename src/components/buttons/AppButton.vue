<template>
  <div>
    <ElButton type="primary">{{ label }}</ElButton>
  </div>
</template>

<script setup lang="ts">
  import { ElButton } from "element-plus";
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
