<script setup lang="ts">
import { OTPInput } from 'vue-input-otp'
import Slot from './Slot.vue'
</script>

<template>
  <OTPInput
    v-slot="{ slots }"
    :maxlength="4"
    container-class="group flex items-center has-[:disabled]:opacity-30"
    inputmode="numeric"
    auto-focus
  >
    <div class="flex w-full  justify-evenly gap-2">
      <Slot v-for="(slot, idx) in slots" v-bind="slot" :key="idx" />
    </div>
  </OTPInput>
</template>
