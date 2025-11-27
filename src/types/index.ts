export type MessageType = "A" | "B";
export type Sender = "user" | "bot";

export interface TextContent {
  text: string;
}

export interface RewardCardContent {
  title: string;
  points: string;
  image: string;
}

export interface Message {
  id: number;
  type: MessageType;
  content: TextContent | RewardCardContent;
  sender: Sender;
  loading?: boolean;
}
