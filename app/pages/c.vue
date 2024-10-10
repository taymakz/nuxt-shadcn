<script setup lang="ts">

</script>

<template>
  <div>
    <div
      class="relative flex min-h-screen w-full bg-background "
    >
      <div class="absolute left-2 top-2">
        <CommonToggleTheme />
      </div>
      <div class="container pt-20">
        <CAccordion />
        <div class="mt-10 flex items-center flex-wrap gap-6">
          <CAlert />
          <CBadge />
        </div>
      </div>
    </div>
  </div>
</template>
