# Chat Assistant - Dashboard Loyalty Program

A modern, interactive chat assistant built with Vue 3, TypeScript, and Vite. This application provides a conversational interface for managing loyalty programs, displaying rewards, and engaging with users through different message types.

## 🚀 Features

- **Real-time Chat Interface**: Smooth, responsive chat experience with message animations
- **Multiple Message Types**:
  - Text messages (Type A)
  - Reward cards with images (Type B)
- **Loading States**: Visual feedback while bot processes responses
- **Auto-scroll**: Automatically scrolls to latest messages
- **Reactive State Management**: Singleton composable pattern for shared state
- **TypeScript Support**: Full type safety across the application
- **Modern UI**: Gradient themes and smooth animations

## 📁 Project Structure

```
chat_assistant/
├── src/
│   ├── App.vue                          # Root component
│   ├── main.ts                          # Application entry point
│   ├── style.css                        # Global styles
│   ├── components/
│   │   ├── chatWindow/
│   │   │   ├── chatWindow.vue          # Main chat container
│   │   │   ├── MessageInput/
│   │   │   │   └── index.vue           # Text input component
│   │   │   └── MessageList/
│   │   │       └── index.vue           # Messages display container
│   │   ├── messageRenderer/
│   │   │   └── index.vue               # Dynamic component renderer
│   │   ├── rewardCard/
│   │   │   └── index.vue               # Reward card display
│   │   └── textBubble/
│   │       └── index.vue               # Text message bubble
│   ├── composables/
│   │   └── useChatStore.ts             # Singleton state management
│   └── types/
│       └── index.ts                    # TypeScript type definitions
├── public/                              # Static assets
├── index.html                           # HTML entry point
├── package.json                         # Dependencies and scripts
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite configuration
└── README.md                            # Project documentation
```

## 🛠️ Technical Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Scoped CSS with animations

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd chat_assistant
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🏗️ Architecture

### State Management

The application uses a **singleton composable pattern** for state management:

```typescript
// useChatStore.ts - Singleton pattern
const messages = ref<Message[]>([]);
const isLoading = ref(false);

export function useChatStore() {
  // Returns shared state across all components
  return { messages, isLoading, sendMessage, initializeHistory };
}
```

**Key Benefits**:

- Shared state across components
- No external dependencies required
- Simple and lightweight
- Full TypeScript support

### Message Types

The application supports two message types:

#### Type A: Text Messages

```typescript
{
  id: number;
  type: "A";
  content: { text: string };
  sender: "user" | "bot";
  loading?: boolean;
}
```

#### Type B: Reward Cards

```typescript
{
  id: number;
  type: "B";
  content: {
    title: string;
    points: string;
    image: string;
  }
  sender: "bot";
}
```

### Component Breakdown

#### 1. **ChatWindow** (`chatWindow.vue`)

- Main container component
- Provides structure and layout
- Includes header, message list, and input

#### 2. **MessageList** (`MessageList/index.vue`)

- Displays all messages
- Handles auto-scrolling with deep watch
- Initializes chat history on mount

#### 3. **MessageInput** (`MessageInput/index.vue`)

- Text input for user messages
- Send button with disabled state
- Enter key support

#### 4. **MessageRenderer** (`messageRenderer/index.vue`)

- Dynamic component selector
- Routes to TextBubble or RewardCard based on message type
- Uses computed properties for efficiency

#### 5. **TextBubble** (`textBubble/index.vue`)

- Displays text messages
- Different styles for user/bot messages
- Responsive max-width

#### 6. **RewardCard** (`rewardCard/index.vue`)

- Displays reward offers
- Image, title, points display
- Interactive claim button
- Hover effects

## 🎨 Styling Features

- **Gradient Themes**: Purple-blue gradient for headers and buttons
- **Smooth Animations**: Slide-in effects for new messages
- **Hover States**: Interactive feedback on buttons and cards
- **Responsive Design**: Adapts to different screen sizes
- **Scoped Styles**: Component-level styling isolation

## 🔄 Message Flow

1. User types message in `MessageInput`
2. `sendMessage()` adds user message to shared state
3. Loading indicator appears
4. Simulated API delay (1 second)
5. Bot response (reward card) added to state
6. MessageList automatically scrolls to bottom
7. All components reactively update

## 🧩 Key Concepts

### Reactivity

- Uses Vue 3's `ref` for reactive state
- Deep watchers for complex object changes
- Computed properties for derived state

### TypeScript

- Strict type checking
- Interface definitions for all message types
- Props validation with TypeScript

### Composition API

- `<script setup>` syntax for cleaner code
- Composable pattern for reusable logic
- Clear separation of concerns

## 🐛 Common Issues & Solutions

### Issue: Messages not updating in UI

**Solution**: Ensure `useChatStore()` returns refs directly, not wrapped in computed(). The singleton pattern (refs outside the function) ensures shared state.

### Issue: Auto-scroll not working

**Solution**: Use deep watch on messages array:

```typescript
watch(
  messages,
  async () => {
    /* scroll logic */
  },
  { deep: true }
);
```

### Issue: Multiple store instances

**Solution**: Move refs outside the composable function to create singleton pattern.

## 📝 Future Enhancements

- [ ] Real API integration
- [ ] Message persistence (localStorage)
- [ ] User authentication
- [ ] More message types (images, links, etc.)
- [ ] Typing indicators
- [ ] Message timestamps
- [ ] Dark mode support
- [ ] Accessibility improvements (ARIA labels)
- [ ] Unit tests with Vitest
- [ ] E2E tests with Playwright

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with Vue 3 and Vite
- Inspired by modern chat interfaces
- Uses placeholder images from placeholder.com

---
