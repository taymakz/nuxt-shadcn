<script setup lang="ts">
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { useField, useForm } from 'vee-validate'
import { schemaUsername } from '~/utils/yup/schema'

import Button from '../ui/button/Button.vue'
import Input from '../ui/input/Input.vue'

const { meta, setValues, validate, handleSubmit, setFieldError, defineField }
  = useForm<{
    username: string
  }>({ validationSchema: schemaUsername })
const [usernameInput, usernameInputProps] = defineField('username', {
  validateOnBlur: true,
  validateOnInput: true,
})
</script>

<template>
  <div>
    <Card class=" relative mx-auto  max-w-100 ">
      <CardContent class="relative w-full p-0">
        <!-- Go Back -->
        <div class="absolute top-6 right-4">
          <a href="#" class="xs:text-sm text-card-muted hover:text-card-foreground flex items-center gap-0.5 duration-300 hover:gap-1.5">
            <LucideChevronRight :size="16" />
            صفحه اصلی
          </a>
        </div>
        <div class="flex flex-col items-center justify-center gap-1 px-4 py-6">
          <div class="bg-secondary mb-3 flex size-14 items-center justify-center rounded-full">
            <LucideUser :size="28" />
          </div>

          <h1 class="text-card-foreground text-lg font-semibold">
            ورود یا ثبت نام
          </h1>
          <p class="text-center text-neutral-500">
            خوش آمدید. لطفا اطلاعات زیر را پر کنید
          </p>
        </div>

        <div class="px-6 pb-6">
          <Input
            v-model="usernameInput" v-bind="usernameInputProps" with-error-message
            label="شماره موبایل و یا ایمیل" name="username"
            dir="ltr" @input="validate"
          />
        </div>
        <div class="border-t p-6">
          <Button type="submit" class="w-full">
            ادامه
          </Button>
        </div>

        <div class="border-t px-6 py-4">
          <div class="text-card-muted text-center text-sm">
            با ورود به فروشگاه, کلیه
            <a href="#" class="text-brand hover:text-brand-lighter font-medium">قوانین</a>
            را می‌پذیرم.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
