<script setup lang="ts">
import { appName } from '~/constants'

defineOgImageComponent('NuxtSeo', {
  title: appName,
})
</script>

<template>
  <div>
    <div
      class="relative flex min-h-screen w-full items-center flex-col justify-center bg-background bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <div
        class="pointer-events-none absolute inset-0 flex  items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <p
        class="relative z-20 bg-gradient-to-b from-primary to-foreground bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"
      >
        Nuxt - Shadcn Starter
      </p>
      <div>
        <NuxtLink to="/c" class="bg-muted py-2 px-4 rounded-lg ">
          Components
        </NuxtLink>
      </div>
      <div class="absolute left-2 top-2">
        <CommonToggleTheme />
      </div>
    </div>
  </div>
</template>
