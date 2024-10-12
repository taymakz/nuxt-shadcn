<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { appDesktopStartMinWidth, appTitle } from './constants'

const color = useColorMode()
const isDesktop = useMediaQuery(appDesktopStartMinWidth)
useHead({
  title: appTitle,
})
</script>

<template>
  <div vaul-drawer-wrapper>
    <NuxtLayout>
      <NuxtLoadingIndicator :size="3" />
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
    <!-- Toast -->
    <div class="fixed z-50">
      <ClientOnly>
        <Toaster
          :theme="(color.value as 'dark') || 'light'"
          :position="!isDesktop ? 'top-center' : 'bottom-left'"
          close-button
          rich-colors
          :toast-options="{
            style: {
              padding: '24px 32px',
              fontSize: '14px',
              fontFamily: 'IRANYekan',
            },
            duration: 5000,
          }"
        />
      </ClientOnly>
    </div>
  </div>
</template>
