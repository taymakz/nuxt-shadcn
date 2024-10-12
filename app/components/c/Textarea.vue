<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <div class="flex gap-4 max-w-2xl w-full">
    <Textarea label="Type your message here."  />
    <Textarea variant="floating-label" label="Type your message here." />
  </div>
</template>
