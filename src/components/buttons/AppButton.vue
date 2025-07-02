<template>
  <div>
    <ElButton type="primary">
      {{ label }}

      <span class="font-bold underline">Hello</span>
    </ElButton>
  </div>
</template>

<script setup lang="ts">
  import { ElButton } from "element-plus";
  import type { T_ButtonLabel } from "../../types";

  if (typeof window !== "undefined") {
    // Runtime style import triggers only when component is used
    // import("element-plus/es/components/button/style/index");
  }

  type AppButtonProps = {
    /**
     * The label of the button
     */
    label?: T_ButtonLabel;
  };

  withDefaults(defineProps<AppButtonProps>(), { label: "Click Me!!" });

  export type { AppButtonProps };
</script>
