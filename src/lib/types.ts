
export interface User {
  email: string;
  name: string;
  avatar: string;
}

export type Message = {
  id: string;
  author: string;
  authorEmail?: string;
  type: 'text' | 'image' | 'audio';
  content: string;
  timestamp: number;
  read?: boolean;
};

export type Chat = {
  id: string;
  name: string;
  messages: Message[];
};
