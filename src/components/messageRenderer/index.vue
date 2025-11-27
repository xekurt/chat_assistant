<template>
  <component :is="componentToRender" :message="message" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Message } from "../../types";
import TextBubble from "../textBubble/index.vue";
import RewardCard from "../rewardCard/index.vue";

interface Props {
  message: Message;
}

const componentMap: Record<string, any> = {
  A: TextBubble,
  B: RewardCard,
};

const componentToRender = computed(() => {
  return componentMap[props.message.type] || TextBubble;
});

const props = defineProps<Props>();
</script>
