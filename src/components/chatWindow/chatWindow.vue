<script setup lang="ts">
import MessageList from "./MessageList/index.vue";
import MessageInput from "./MessageInput/index.vue";
</script>
<template>
  <div class="chat-window">
    <div class="chat-header">
      <h1>Dashboard Assistant</h1>
    </div>
    <MessageList />
    <MessageInput />
  </div>
</template>
<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 90vh;
  max-height: 700px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.chat-header {
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.chat-header h1 {
  margin: 0;
  font-size: 1.25rem;
}
</style>
