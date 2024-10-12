<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/cn'
import { type TextareaVariants, textareaVariants } from '.'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  variant?: TextareaVariants['variant']
  label?: string
  withErrorMessage?: boolean
}>(), {
  variant: 'default',
})

const modelValue = defineModel<string | number>({ required: false })
const randomId = useId()
const { errorMessage } = useField(randomId, undefined)
</script>

<template>
  <div class="w-full">
    <template v-if="variant === 'default'">
      <textarea
        v-model="modelValue"
        :class="cn(textareaVariants({ variant }), props.class)"
        :placeholder="label"
      />
    </template>
    <template v-if="variant === 'floating-label'">
      <label
        :for="randomId"
        :class="cn(textareaVariants({ variant }), props.class)"
      >
        <textarea
          :id="randomId"
          v-model="modelValue"
          class="peer"
          :placeholder="label"
        />

        <span
          class="pointer-events-none absolute start-2.5 top-0 px-2 -translate-y-1/2 bg-background py-0.5 text-muted-foreground text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:text-primary peer-focus:top-0 peer-focus:text-xs rounded-lg"
        >
          {{ label }}
        </span>
      </label>
    </template>
    <p v-if="withErrorMessage" class="mt-3 h-5 text-sm text-warning">
      <span v-show="errorMessage">
        {{ errorMessage }}
      </span>
    </p>
  </div>
</template>
