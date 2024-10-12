<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { logger } from 'nuxt/kit'
</script>

<template>
  <div class="flex gap-4 max-w-xl w-full">
    <Input dir="ltr" type="password" label="شماره موبایل یا ایمیل" />
    <Input variant="floating-label" label="شماره موبایل یا ایمیل"  />
  </div>
</template>
