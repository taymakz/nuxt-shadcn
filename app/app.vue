<script setup lang="ts">
import { appTitle } from './constants';

useHead({
  title: appTitle,
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :size="3" />
    <NuxtPage />
  </NuxtLayout>
</template>
