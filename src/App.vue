<script setup lang="ts">
import ChatWindow from "./components/chatWindow/chatWindow.vue";
</script>

<template>
  <div id="app">
    <ChatWindow />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}
</style>
