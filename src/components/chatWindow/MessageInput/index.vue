<script setup lang="ts">
import { ref } from "vue";
import { useChatStore } from "../../../composables/useChatStore";

const inputText = ref("");
const { sendMessage, isLoading } = useChatStore();

const handleSend = async () => {
  await sendMessage(inputText.value);
  inputText.value = "";
};
</script>

<template>
  <div class="message-input">
    <textarea
      v-model="inputText"
      @keydown.enter.prevent="handleSend"
      placeholder="Type your message..."
      class="input-field"
    />
    <button
      @click="handleSend"
      :disabled="isLoading || !inputText.trim()"
      class="send-btn"
    >
      Send
    </button>
  </div>
</template>

<style scoped>
.message-input {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.input-field {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  resize: none;
  max-height: 100px;
  min-height: 40px;
  transition: border-color 0.2s;
}

.input-field:focus {
  outline: none;
  border-color: #667eea;
}

.send-btn {
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.send-btn:hover:not(:disabled) {
  background: #764ba2;
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
