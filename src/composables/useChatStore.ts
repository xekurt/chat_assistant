import { ref } from "vue";
import type { Message, TextContent, RewardCardContent } from "../types";

let messageId = 0;

// Create singleton store instance
const messages = ref<Message[]>([]);
const isLoading = ref(false);

export function useChatStore() {
  const initializeHistory = () => {
    messages.value = [
      {
        id: messageId++,
        type: "A",
        content: {
          text: "Hello! I'm your Dashboard Assistant. I help you manage your loyalty programs.",
        } as TextContent,
        sender: "bot",
      },
      {
        id: messageId++,
        type: "A",
        content: {
          text: "You can ask me about rewards, points, or special offers.",
        } as TextContent,
        sender: "bot",
      },
    ];
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    messages.value.push({
      id: messageId++,
      type: "A",
      content: { text: text.trim() } as TextContent,
      sender: "user",
    });
    console.log("Messages after user message:", messages.value);

    // Show loading state
    isLoading.value = true;
    messages.value.push({
      id: messageId++,
      type: "A",
      content: { text: "Bot is typing..." } as TextContent,
      sender: "bot",
      loading: true,
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Remove loading message
    messages.value = messages.value.filter((m) => !m.loading);

    // Add bot reward card response
    messages.value.push({
      id: messageId++,
      type: "B",
      content: {
        title: "Birthday Special",
        points: "500 Points",
        image: "https://picsum.photos/300/150",
      } as RewardCardContent,
      sender: "bot",
    });
    console.log("Messages after bot response:", messages.value);
    isLoading.value = false;
  };

  return {
    messages,
    isLoading,
    sendMessage,
    initializeHistory,
  };
}
