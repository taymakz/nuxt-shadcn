<script setup lang="ts">
import type { HTMLAttributes, InputHTMLAttributes } from 'vue'
import { cn } from '@/utils/cn'
import { useField } from 'vee-validate'
import { type InputVariants, inputVariants } from '.'

type RegexType = 'ONLY_DIGIT' | 'ONLY_ALPHABET' | 'ONLY_DIGIT_ALPHABET'

const props = withDefaults(defineProps<{
  defaultValue?: string | number
  class?: HTMLAttributes['class']
  variant?: InputVariants['variant']
  type?: HTMLInputElement['type']
  mode?: RegexType
  label?: string
  name?: string
  disabled?: boolean
  readonly?: boolean
  autofocus?: boolean
  withErrorMessage?: boolean
}>(), {
  type: 'text',
  variant: 'default',
})

const regexPatterns: Record<RegexType, RegExp> = {
  ONLY_DIGIT: /^\d*$/,
  ONLY_ALPHABET: /^[a-z]*$/i,
  ONLY_DIGIT_ALPHABET: /^[a-z0-9]*$/i,
}
const modelValue = defineModel<string | number>({ required: false })
const randomId = useId()
// Event handler to validate input based on mode
function handleInput(event: Event) {
  const input = event.target as HTMLInputElement
  const currentValue = input.value

  if (props.mode && regexPatterns[props.mode]) {
    const regex = regexPatterns[props.mode]
    if (!regex.test(currentValue)) {
      // Remove invalid characters
      input.value = currentValue.slice(0, -1)
    }
  }
}
const { errorMessage } = useField(props.name || randomId!, undefined)
const passwordRevealed = ref(false)
</script>

<template>
  <div class="relative w-full">
    <span v-if="props.type === 'password'" class="absolute end-4 inset-y-0 flex items-center justify-center">
      <span class="text-muted-foreground cursor-pointer flex items-center justify-center" @click="passwordRevealed = !passwordRevealed">
        <Icon v-show="!passwordRevealed" name="lucide-eye-off" :size="20" />
        <Icon v-show="passwordRevealed" name="lucide-eye" :size="20" />
      </span>
    </span>
    <template v-if="variant === 'default'">
      <UiLabel class="sr-only">
        {{ label }}
      </UiLabel>
      <input
        v-model="modelValue"
        :name
        :autofocus
        :disabled
        :readonly
        :placeholder="label"
        :type="passwordRevealed ? 'text' : props.type"
        :class="cn(inputVariants({ variant }), props.class,
                   { 'pe-12': props.type === 'password' },
        )"
        @input="handleInput"
      >
    </template>
    <template v-else-if="variant === 'floating-label'">
    
    </template>
    <p v-if="withErrorMessage" class="mt-3 h-5 text-sm text-warning">
      <span v-show="errorMessage">
        {{ errorMessage }}
      </span>
    </p>
  </div>
</template>
