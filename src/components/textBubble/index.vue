<template>
  <div class="text-bubble">
    {{ textContent.text }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Message, TextContent } from "../../types";

interface Props {
  message: Message;
}

const props = defineProps<Props>();

const textContent = computed(() => props.message.content as TextContent);
</script>

<style scoped>
.text-bubble {
  max-width: 400px;
  padding: 12px 16px;
  border-radius: 12px;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 14px;
}

.message-bot .text-bubble {
  background: #e8e8e8;
  color: #333;
}

.message-user .text-bubble {
  background: #667eea;
  color: white;
}
</style>
