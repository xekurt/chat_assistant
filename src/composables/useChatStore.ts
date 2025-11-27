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

    // Randomly choose between text response or reward card
    const responseType = Math.random() > 0.5 ? "text" : "reward";

    if (responseType === "text") {
      // Random text responses
      const textResponses = [
        "Great question! Let me help you with that.",
        "I've checked your account. Everything looks good!",
        "Your current points balance is looking great!",
        "That's an excellent choice! Here's what I found.",
        "I can definitely help you with that request.",
        "Thanks for asking! Here's what you need to know.",
      ];
      const randomText =
        textResponses[Math.floor(Math.random() * textResponses.length)];

      messages.value.push({
        id: messageId++,
        type: "A",
        content: { text: randomText } as TextContent,
        sender: "bot",
      });
    } else {
      // Random reward cards
      const rewards = [
        {
          title: "Birthday Special",
          points: "500 Points",
          image: "https://picsum.photos/300/150?random=1",
        },
        {
          title: "Welcome Bonus",
          points: "1000 Points",
          image: "https://picsum.photos/300/150?random=2",
        },
        {
          title: "Loyalty Reward",
          points: "750 Points",
          image: "https://picsum.photos/300/150?random=3",
        },
        {
          title: "Special Offer",
          points: "300 Points",
          image: "https://picsum.photos/300/150?random=4",
        },
        {
          title: "Premium Deal",
          points: "1500 Points",
          image: "https://picsum.photos/300/150?random=5",
        },
      ];
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

      messages.value.push({
        id: messageId++,
        type: "B",
        content: randomReward as RewardCardContent,
        sender: "bot",
      });
    }

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
