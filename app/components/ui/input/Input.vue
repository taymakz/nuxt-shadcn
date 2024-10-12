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
  withIcon?: boolean
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
    <!-- Reveal Password Eye icon  -->
    <span v-if="props.type === 'password' && ((modelValue && variant === 'floating-label') || (variant === 'default')) " class="absolute end-4 inset-y-0 flex items-center justify-center z-10">
      <span class="text-muted-foreground cursor-pointer flex items-center justify-center" @click="passwordRevealed = !passwordRevealed">
        <Icon v-show="!passwordRevealed" name="lucide-eye-off" :size="20" />
        <Icon v-show="passwordRevealed" name="lucide-eye" :size="20" />
      </span>
    </span>
    <!-- Icon -->
    <div v-if="withIcon" class="absolute start-4 inset-y-0 flex items-center justify-center z-10 pointer-events-none">
      <span class="text-muted-foreground cursor-pointer flex items-center justify-center">
        <slot name="icon" />
      </span>
    </div>
    <template v-if="variant === 'default'">
      <UiLabel :for="name || randomId" class="sr-only">
        {{ label }}
      </UiLabel>
      <input
        :id="name || randomId"
        v-model="modelValue"
        :name
        :autofocus
        :disabled
        :readonly
        :placeholder="label"
        :type="passwordRevealed ? 'text' : props.type"
        :class="cn(inputVariants({ variant }), props.class,
                   { 'pe-12': props.type === 'password' },
                   { 'ps-12': withIcon },
        )"
        @input="handleInput"
      >
    </template>
    <template v-else-if="variant === 'floating-label'">
      <label
        :for="name || randomId"
        :class="cn(inputVariants({ variant }), props.class,

        )"
      >
        <input
          :id="name || randomId"
          v-model="modelValue"
          :name
          :autofocus
          :disabled
          :readonly
          :type="passwordRevealed ? 'text' : props.type"
          class="peer "
          :class="[
            { '!pe-12': props.type === 'password' },
            { '!ps-12': withIcon },

          ]"

          :placeholder="label"
          @input="handleInput"
        >
        <span
          class="pointer-events-none absolute right-2.5 top-0 px-2 -translate-y-1/2 bg-background py-0.5 text-muted-foreground text-xs transition-all rounded-lg duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm"
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
