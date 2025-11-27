<script setup lang="ts">
import { computed, ref } from "vue";
import type { Message, RewardCardContent } from "../../types";

interface Props {
  message: Message;
}

const props = defineProps<Props>();

const cardContent = computed(() => props.message.content as RewardCardContent);
const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};
</script>

<template>
  <div class="reward-card">
    <img
      v-if="!imageError"
      :src="cardContent.image"
      :alt="cardContent.title"
      class="reward-image"
      @error="handleImageError"
    />
    <div v-else class="reward-image reward-placeholder">
      <span>🎁</span>
    </div>
    <div class="reward-info">
      <h3>{{ cardContent.title }}</h3>
      <p class="points">{{ cardContent.points }}</p>
      <button class="claim-btn">Claim Reward</button>
    </div>
  </div>
</template>

<style scoped>
.reward-card {
  width: 300px;
  min-width: 300px;
  background: white;
  border: 2px solid #667eea;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.reward-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
}

.reward-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}

.reward-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-size: 48px;
}

.reward-info {
  padding: 16px;
}

.reward-info h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
}

.points {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: bold;
  color: #667eea;
}

.claim-btn {
  width: 100%;
  padding: 10px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.claim-btn:hover {
  background: #764ba2;
}
</style>
