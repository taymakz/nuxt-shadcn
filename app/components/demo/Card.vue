<script setup lang="ts">
import Button from '../ui/button/Button.vue';

</script>

<template>
  <div>
    <div class="bg-card relative mx-auto rounded-xl border">
      <div class="relative w-full">
        <!-- Go Back -->
        <div class="absolute top-6 right-4">
          <a href="#" class="xs:text-sm text-card-muted hover:text-card-foreground flex items-center gap-0.5 duration-300 hover:gap-1.5">
            <LucideChevronRight :size="16"/>
            صفحه اصلی
          </a>
        </div>
        <div class="flex flex-col items-center justify-center gap-1 px-4 py-6">
          <div class="bg-secondary mb-3 flex size-14 items-center justify-center rounded-full">
       
            <LucideUser :size="28"/>
          </div>

          <h1 class="text-card-foreground text-lg font-semibold">
            ورود یا ثبت نام
          </h1>
          <p class="text-center text-neutral-500">
            خوش آمدید. لطفا اطلاعات زیر را پر کنید
          </p>
        </div>
        <form>
          <div class="px-6">
            <Button type="button" variant="outline" class="w-full">
              <span class="ps-2">ورود با حساب گوگل</span>
            </Button>
          
            <div class="text-card-muted my-4 text-center text-sm">
              یا
            </div>
          </div>
          <div class="px-6 pb-6">
            <div class="space-y-2">
              <label for="username" class="sr-only">
                شماره موبایل و یا ایمیل
              </label>
              <input id="username" dir="ltr" class="bg-card text-card-foreground focus:border-border-lighter hover:border-border-lighter placeholder:text-card-muted relative block w-full rounded-lg border px-5 py-2.5 duration-200 placeholder:text-sm placeholder:duration-200 placeholder:select-none focus:placeholder:-translate-x-2 disabled:opacity-50 ltr:text-left ltr:placeholder:text-right" placeholder="شماره موبایل یا ایمیل">
              <p class="text-warning h-5 text-sm">
                مقدار وارد شده نا معتبر است
              </p>
            </div>
          </div>
          <div class="border-t p-6">
            <button type="submit" class="btn-primary w-full">
              ادامه
            </button>
          </div>
        </form>

        <div class="border-t px-6 py-4">
          <div class="text-card-muted text-center text-sm">
            با ورود به فروشگاه, کلیه
            <a href="#" class="text-brand hover:text-brand-lighter font-medium">قوانین</a>
            را می‌پذیرم.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
