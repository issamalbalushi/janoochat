export interface User {
  email: string;
  name: string;
  avatar: string;
}

export type Message = {
  id: string;
  author: 'user' | 'peer' | 'ai';
  type: 'text' | 'image' | 'audio';
  content: string;
  timestamp: number;
};

export type Chat = {
  id: string;
  name: string;
  messages: Message[];
};
