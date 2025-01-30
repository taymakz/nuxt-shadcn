<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex items-center gap-2">
    <Avatar>
      <AvatarImage src="apple-touch-icon.png" alt="Taymakz" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="apple-touch-icon.png" alt="Taymakz" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="" alt="Taymakz" />
      <AvatarFallback>TA</AvatarFallback>
    </Avatar>
  </div>
</template>
