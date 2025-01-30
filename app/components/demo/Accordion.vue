<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
</script>

<template>
  <Accordion type="multiple">
    <AccordionItem value="item-1">
      <AccordionTrigger>
        آکوردیون
      </AccordionTrigger>
      <AccordionContent>
        محتوی آکوردیون
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>
        آکوردیون
      </AccordionTrigger>
      <AccordionContent>
        محتوی آکوردیون
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
