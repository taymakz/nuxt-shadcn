<script setup lang="ts">
import { appTitle } from './constants'

useHead({
  title: appTitle,
})
</script>

<template>
  <div vaul-drawer-wrapper>
    <NuxtLayout>
      <NuxtLoadingIndicator :size="3" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
