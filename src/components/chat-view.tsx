
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import useLocalStorage from '@/hooks/use-local-storage';
import { Message as MessageType } from '@/lib/types';
import { Message } from './message';
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  CameraIcon,
  MicrophoneIcon,
  StopCircleIcon,
  PhotoIcon,
} from '@heroicons/react/24/solid';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CameraModal } from './camera-modal';
import { askAiChatbot } from '@/ai/flows/ask-ai-chatbot';
import { SparklesIcon } from '@heroicons/react/24/outline';

type ChatViewProps = {
  chatId: string;
  chatType: 'human' | 'ai';
  title: string;
};

export function ChatView({ chatId, chatType, title }: ChatViewProps) {
  const [messages, setMessages] = useLocalStorage<MessageType[]>(`chat-${chatId}`, []);
  const [input, setInput] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const session = sessionStorage.getItem('ciphersphere-session');
    if (session) {
      const parsedSession = JSON.parse(session);
      setCurrentUser(parsedSession.user.name);
      setCurrentUserEmail(parsedSession.user.email);
    }
  }, []);

  const addMessage = useCallback((message: Omit<MessageType, 'id' | 'timestamp' | 'read'>) => {
    const newMessage: MessageType = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      read: false,
      ...message,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    return newMessage;
  }, [setMessages]);

  useEffect(() => {
    if (chatType === 'human' && currentUser && messages.length > 0) {
      let madeChanges = false;
      const updatedMessages = messages.map(msg => {
        if (msg.author !== currentUser && !msg.read) {
          madeChanges = true;
          return { ...msg, read: true };
        }
        return msg;
      });

      if (madeChanges) {
        setMessages(updatedMessages);
      }
    }
  }, [messages, chatType, currentUser, setMessages]);


  const scrollToBottom = () => {
    scrollAreaRef.current?.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);


  const handleSend = async () => {
    if (input.trim() === '' || isAiThinking || !currentUser) return;
    const userInput = input;
    setInput('');
    addMessage({ author: currentUser, authorEmail: currentUserEmail, type: 'text', content: userInput });

    if (chatType === 'ai') {
      setIsAiThinking(true);
      try {
        const aiResponse = await askAiChatbot({ question: userInput });
        addMessage({ author: 'ai', type: 'text', content: aiResponse.answer });
      } catch (error) {
        console.error("AI Error:", error);
        addMessage({ author: 'ai', type: 'text', content: "Sorry, I encountered an error." });
      } finally {
        setIsAiThinking(false);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/') && currentUser) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          addMessage({ author: currentUser, authorEmail: currentUserEmail, type: 'image', content: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        if (currentUser) {
            addMessage({ author: currentUser, authorEmail: currentUserEmail, type: 'audio', content: audioUrl });
        }
        audioChunksRef.current = [];
        stream.getTracks().forEach(track => track.stop());
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleCapture = (dataUrl: string) => {
    if (currentUser) {
      addMessage({ author: currentUser, authorEmail: currentUserEmail, type: 'image', content: dataUrl });
    }
  }

  return (
    <div className="flex flex-col h-screen bg-slate-950">
      <header className="flex-shrink-0 h-20 flex items-center px-8 border-b border-slate-800 bg-slate-900/50 backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      </header>
      
      <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-8 space-y-6">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} currentUser={currentUser} chatType={chatType} />
        ))}
        {isAiThinking && (
           <div className="flex items-end gap-3 justify-start">
             <div className="h-8 w-8 rounded-full flex-shrink-0 text-accent flex items-center justify-center">
                <SparklesIcon className="h-6 w-6 animate-pulse" />
             </div>
             <div className="max-w-md lg:max-w-xl rounded-3xl p-4 flex flex-col bg-slate-800 rounded-bl-lg text-slate-400">
                Thinking...
             </div>
           </div>
        )}
      </div>

      <footer className="flex-shrink-0 p-4 sm:p-6 bg-background border-t border-slate-800">
        <div className="relative flex items-end gap-2">
           <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full flex-shrink-0 hover:bg-primary/20">
                <PaperClipIcon className="h-6 w-6 text-primary" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 bg-slate-800 border-slate-700">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="relative overflow-hidden" asChild>
                  <label>
                    <PhotoIcon className="h-6 w-6" />
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                  </label>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsCameraOpen(true)}>
                  <CameraIcon className="h-6 w-6" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message... (Shift+Enter for new line)"
            className="flex-1 min-h-[48px] max-h-48 resize-none bg-slate-800 border-slate-700 rounded-2xl text-base px-4 py-3 focus:ring-primary"
            rows={1}
          />
          
          {isRecording ? (
             <Button variant="ghost" size="icon" onClick={handleStopRecording} className="h-12 w-12 rounded-full flex-shrink-0 bg-red-500/20 hover:bg-red-500/30">
                <StopCircleIcon className="h-7 w-7 text-red-500" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" onClick={handleStartRecording} className="h-12 w-12 rounded-full flex-shrink-0 hover:bg-primary/20">
                <MicrophoneIcon className="h-6 w-6 text-primary" />
            </Button>
          )}

          <Button onClick={handleSend} disabled={!input.trim() || isAiThinking} size="icon" className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 flex-shrink-0">
            <PaperAirplaneIcon className="h-6 w-6 text-primary-foreground" />
          </Button>
        </div>
      </footer>

      <CameraModal isOpen={isCameraOpen} onClose={() => setIsCameraOpen(false)} onCapture={handleCapture} />
    </div>
  );
}
