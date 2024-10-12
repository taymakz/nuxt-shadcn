<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="flex gap-4 max-w-xl w-full">
    <Input dir="ltr" type="password" label="کلمه عبور" />
    <Input  label="شماره موبایل یا ایمیل" />
    <Input with-icon dir="ltr" variant="floating-label"  label="شماره موبایل یا ایمیل">
      <template #icon>
        <Icon name="lucide-check" :size="20" />
      </template>
    </Input>
  </div>
</template>
