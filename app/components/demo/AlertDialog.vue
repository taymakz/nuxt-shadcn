<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import Button from '../ui/button/Button.vue'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button>
        Alert Dialog
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          آیا از حذف مطمئنید؟
        </AlertDialogTitle>
        <AlertDialogDescription>
          این عمل قابل بازگشت نمیباشد!
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>بستن</AlertDialogCancel>
        <AlertDialogAction>ادامه</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
