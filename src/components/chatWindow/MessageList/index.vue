<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import { useChatStore } from "../../../composables/useChatStore";
import MessageRenderer from "../../messageRenderer/index.vue";

const { messages, initializeHistory } = useChatStore();
const listContainer = ref<HTMLDivElement | null>(null);

// Initialize on mount
initializeHistory();

// Auto-scroll to bottom on new messages
watch(
  messages,
  async () => {
    await nextTick();

    if (listContainer.value) {
      listContainer.value.scrollTop = listContainer.value.scrollHeight;
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="message-list" ref="listContainer">
    <div class="messages">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['message', `message-${message.sender}`]"
      >
        <MessageRenderer :message="message" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #fafafa;
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  display: flex;
  animation: slideIn 0.3s ease-out;
}

.message-user {
  justify-content: flex-end;
}

.message-bot {
  justify-content: flex-start;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
