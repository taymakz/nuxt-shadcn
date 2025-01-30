<script setup lang="ts">
import { ClientOnly } from '#components';


</script>

<template>
  <ClientOnly>
    <div class="container py-20 space-y-10">
    <DemoButton />
    <DemoAccordion />
    <DemoAlertDialog />
    <DemoAvatar />
    <DemoBadge />
    <DemoBreadcrumb />
    <div class="flex gap-4">
      <DemoCombobox />
      <DemoSelect />
    </div>
    <div class="flex gap-4">
      <DemoDialog />
      <DemoPopover />
      <DemoDropdown />
      <DemoTooltip />
    </div>
    <DemoCard />
  </div>
  </ClientOnly>
</template>
