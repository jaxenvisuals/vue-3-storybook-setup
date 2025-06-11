<script setup lang="ts">
  import { en } from "element-plus/es/locales.mjs";
  import AppButton from "@/components/buttons/AppButton.vue";
</script>

<template>
  <ElConfigProvider :locale="en"><AppButton></AppButton></ElConfigProvider>
</template>
