<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="انتخاب کنید" />
    </SelectTrigger>
    <SelectContent class="w-[180px]">
      <SelectGroup>
        <SelectLabel>میوه ها</SelectLabel>
        <SelectItem value="apple">
          سیب
        </SelectItem>
        <SelectItem value="banana">
          موز
        </SelectItem>
        <SelectItem value="blueberry">
          بلوبری
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
