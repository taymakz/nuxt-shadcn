<script setup lang="ts">
import type { SlotProps } from 'vue-input-otp'

defineProps<SlotProps>()
</script>

<template>
  <div
    :class="cn(
      'relative size-14 text-xl',
      'flex items-center justify-center',
      'transition-all duration-300',
      'border rounded-lg',
      { 'border-primary': isActive },
    )"
    
  >
    <div v-if="char !== null">
      {{ char }}
    </div>

    <!-- Emulate a Fake Caret -->
    <div v-if="char === null && isActive" class="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div class="w-px h-8 bg-white rounded-full" />
    </div>
  </div>
</template>
