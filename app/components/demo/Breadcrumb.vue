<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          صفحه اصلی
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          دوم
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>جزئیات</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
