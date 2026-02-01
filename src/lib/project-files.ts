// This file contains the source code of the project as strings.
// It's a workaround to allow the client-side export feature to work.

export const projectFiles = {
  "README.md": `
# CipherSphere - A Firebase Studio Project

This is a Next.js chat application built with Firebase Studio, featuring a cyberpunk-themed dark UI, real-time messaging capabilities, and AI integration.

## Getting Started

To get started, run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Features

- **Mock Authentication**: Secure login simulation with session persistence in LocalStorage.
- **Real-time Messaging**: Send and receive text messages, images, and audio notes.
- **Image Sharing**: Upload from your device or capture directly from your camera.
- **Audio Messaging**: Record and play back voice notes.
- **AI Assistant**: Chat with a Google Gemini-powered AI.
- **Project Export**: Download the complete source code as a .zip file.

## Tech Stack

- **Framework**: Next.js (App Router) with React & TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Heroicons
- **State Management**: React Hooks
- **Persistence**: LocalStorage
- **AI**: Google Gemini via Genkit
- **Export**: JSZip

`,
  "apphosting.yaml": `
# Settings to manage and configure a Firebase App Hosting backend.
# https://firebase.google.com/docs/app-hosting/configure

runConfig:
  # Increase this value if you'd like to automatically spin up
  # more instances in response to increased traffic.
  maxInstances: 1
`,
  "components.json": `
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
`,
  "next.config.ts": `
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
`,
  "package.json": `
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "NODE_ENV=production next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/google-genai": "^1.20.0",
    "@genkit-ai/next": "^1.20.0",
    "@heroicons/react": "^2.1.5",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "genkit": "^1.20.0",
    "jszip": "^3.10.1",
    "lucide-react": "^0.475.0",
    "next": "15.5.9",
    "patch-package": "^8.0.0",
    "react": "^19.2.1",
    "react-day-picker": "^9.11.3",
    "react-dom": "^19.2.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19.2.1",
    "@types/react-dom": "^19.2.1",
    "genkit-cli": "^1.20.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
`,
  "tailwind.config.ts": `
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
`,
  "tsconfig.json": `
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`,
  "src/ai/dev.ts": `
import { config } from 'dotenv';
config();

import '@/ai/flows/ask-ai-chatbot.ts';
`,
  "src/ai/genkit.ts": `
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
`,
  "src/ai/flows/ask-ai-chatbot.ts": `
'use server';

/**
 * @fileOverview This file defines a Genkit flow for an AI chatbot that answers user questions.
 *
 * The flow takes a user's question as input and returns the AI's response.
 * It uses the Google Gemini API to generate the response.
 *
 * @exports askAiChatbot - The main function to call to ask the AI chatbot a question.
 * @exports AskAiChatbotInput - The input type for the askAiChatbot function.
 * @exports AskAiChatbotOutput - The output type for the askAiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const AskAiChatbotInputSchema = z.object({
  question: z.string().describe('The question to ask the AI chatbot.'),
});
export type AskAiChatbotInput = z.infer<typeof AskAiChatbotInputSchema>;

// Define the output schema
const AskAiChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI chatbot\\'s answer to the question.'),
});
export type AskAiChatbotOutput = z.infer<typeof AskAiChatbotOutputSchema>;

// Define the prompt
const askAiChatbotPrompt = ai.definePrompt({
  name: 'askAiChatbotPrompt',
  input: {schema: AskAiChatbotInputSchema},
  output: {schema: AskAiChatbotOutputSchema},
  prompt: \`You are a helpful AI assistant. Answer the following question: {{{question}}}\`,
});

// Define the flow
const askAiChatbotFlow = ai.defineFlow(
  {
    name: 'askAiChatbotFlow',
    inputSchema: AskAiChatbotInputSchema,
    outputSchema: AskAiChatbotOutputSchema,
  },
  async input => {
    const {output} = await askAiChatbotPrompt(input);
    return output!;
  }
);

/**
 * Asks the AI chatbot a question and returns the answer.
 * @param input - The input object containing the question.
 * @returns The output object containing the AI's answer.
 */
export async function askAiChatbot(input: AskAiChatbotInput): Promise<AskAiChatbotOutput> {
  return askAiChatbotFlow(input);
}
`,
  "src/app/(app)/ai-chat/page.tsx": `
import { ChatView } from "@/components/chat-view";

export default function AiChatPage() {
  return <ChatView chatId="ai-assistant" chatType="ai" title="AI Assistant" />;
}
`,
  "src/app/(app)/general/page.tsx": `
import { ChatView } from "@/components/chat-view";

export default function GeneralChatPage() {
  return <ChatView chatId="general" chatType="human" title="General Chat" />;
}
`,
  "src/app/(app)/layout.tsx": `
import { AppSidebar } from '@/components/app-sidebar';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppSidebar />
      <main className="pl-24">
        {children}
      </main>
    </div>
  );
}
`,
  "src/app/globals.css": `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222 83% 5%;
    --foreground: 210 20% 98%;
    --card: 222 83% 10%;
    --card-foreground: 210 20% 98%;
    --popover: 222 83% 5%;
    --popover-foreground: 210 20% 98%;
    --primary: 243 75% 59%;
    --primary-foreground: 210 20% 98%;
    --secondary: 222 47% 11%;
    --secondary-foreground: 210 20% 98%;
    --muted: 222 47% 11%;
    --muted-foreground: 217 33% 50%;
    --accent: 262 75% 65%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 20% 98%;
    --border: 222 47% 11%;
    --input: 222 47% 11%;
    --ring: 243 75% 59%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222 83% 5%;
    --foreground: 210 20% 98%;
    --card: 222 83% 10%;
    --card-foreground: 210 20% 98%;
    --popover: 222 83% 5%;
    --popover-foreground: 210 20% 98%;
    --primary: 243 75% 59%;
    --primary-foreground: 210 20% 98%;
    --secondary: 222 47% 11%;
    --secondary-foreground: 210 20% 98%;
    --muted: 222 47% 11%;
    --muted-foreground: 217 33% 50%;
    --accent: 262 75% 65%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 20% 98%;
    --border: 222 47% 11%;
    --input: 222 47% 11%;
    --ring: 243 75% 59%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`,
  "src/app/layout.tsx": `
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'CipherSphere',
  description: 'A Modern, Secure Chat Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
`,
  "src/app/login/page.tsx": `
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AtSymbolIcon, LockClosedIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const CipherSphereLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V12" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8H12.01" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoggingIn(true);

    setTimeout(() => {
      const session = {
        user: {
          email,
          name: email.split('@')[0] || 'User',
        },
        isAuthenticated: true,
      };
      localStorage.setItem('ciphersphere-session', JSON.stringify(session));
      router.push('/general');
    }, 1000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -inset-24 bg-gradient-to-r from-primary to-accent blur-3xl"></div>
      </div>
      <div className="w-full max-w-md z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <CipherSphereLogo />
              <h1 className="text-3xl font-bold text-foreground">CipherSphere</h1>
              <p className="text-muted-foreground mt-2">Secure. Private. Yours.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <AtSymbolIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div className="relative">
                <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                {isLoggingIn ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Enter Sphere</span>
                    <ArrowRightIcon className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          This is a mock login. Any email/password will work.
        </p>
      </div>
    </main>
  );
}
`,
  "src/app/page.tsx": `
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem('ciphersphere-session');
    if (session) {
      router.replace('/general');
    } else {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-muted-foreground">Initializing CipherSphere...</p>
      </div>
    </div>
  );
}
`,
  "src/components/app-sidebar.tsx": `
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ExportButton } from './export-button';
import { useEffect, useState } from 'react';

const CipherSphereLogo = () => (
  <div className="p-2">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16V12" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8H12.01" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);


const NavItem = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn(
              "flex items-center justify-center h-12 w-12 rounded-2xl text-slate-400 hover:bg-primary/20 hover:text-primary transition-all duration-300",
              isActive && "bg-primary/20 text-primary"
            )}
          >
            <Icon className="h-6 w-6" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-slate-900 border-slate-700 text-foreground">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};


export function AppSidebar() {
  const router = useRouter();
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const session = localStorage.getItem('ciphersphere-session');
    if (session) {
      const parsedSession = JSON.parse(session);
      setUsername(parsedSession.user.name || 'User');
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('ciphersphere-session');
    router.push('/login');
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-24 flex flex-col items-center py-6 bg-slate-900/30 backdrop-blur-xl border-r border-slate-800 z-20">
      <Link href="/general">
         <CipherSphereLogo />
      </Link>

      <nav className="flex flex-col items-center gap-4 mt-10">
        <NavItem href="/general" icon={ChatBubbleLeftRightIcon} label="General Chat" />
        <NavItem href="/ai-chat" icon={SparklesIcon} label="AI Assistant" />
      </nav>

      <div className="mt-auto flex flex-col items-center gap-4">
        <ExportButton />
        
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <UserCircleIcon className="h-10 w-10 text-slate-500" />
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-slate-900 border-slate-700 text-foreground">
              <p>{username}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center h-12 w-12 rounded-2xl text-slate-400 hover:bg-red-500/20 hover:text-red-500 transition-colors"
              >
                <ArrowLeftOnRectangleIcon className="h-6 w-6" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-slate-900 border-slate-700 text-foreground">
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );
}
`,
  "src/components/camera-modal.tsx": `
'use client';

import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CameraIcon, VideoCameraSlashIcon } from '@heroicons/react/24/solid';

type CameraModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (imageDataUrl: string) => void;
};

export function CameraModal({ isOpen, onClose, onCapture }: CameraModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const getMedia = async () => {
        try {
          const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
        } catch (err) {
          console.error("Error accessing camera:", err);
          setError("Could not access camera. Please check permissions.");
        }
      };
      getMedia();
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        onCapture(dataUrl);
        onClose();
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900/80 backdrop-blur-xl border-slate-700 max-w-2xl">
        <DialogHeader>
          <DialogTitle>Capture Photo</DialogTitle>
          <DialogDescription>Position yourself in the frame and click capture.</DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full bg-slate-950 rounded-lg overflow-hidden relative">
          <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
          <canvas ref={canvasRef} className="hidden" />
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <VideoCameraSlashIcon className="h-12 w-12 text-red-500 mb-4" />
              <p className="text-red-500">{error}</p>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleCapture} disabled={!stream || !!error}>
            <CameraIcon className="h-5 w-5 mr-2" />
            Capture
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
`,
  "src/components/chat-view.tsx": `
'use client';

import { useState, useRef, useEffect } from 'react';
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
  const [messages, setMessages] = useLocalStorage<MessageType[]>(
    \`ciphersphere-chat-\${chatId}\`,
    []
  );
  const [input, setInput] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollAreaRef.current?.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isAiThinking]);

  const addMessage = (message: Omit<MessageType, 'id' | 'timestamp'>) => {
    const newMessage: MessageType = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      ...message,
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };
  
  const handleSend = async () => {
    if (input.trim() === '' || isAiThinking) return;
    const userInput = input;
    setInput('');
    addMessage({ author: 'user', type: 'text', content: userInput });

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
    } else {
        // Simulate a peer response for human chat
        setTimeout(() => {
            addMessage({ author: 'peer', type: 'text', content: "This is a simulated reply." });
        }, 1000)
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          addMessage({ author: 'user', type: 'image', content: event.target.result as string });
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
        addMessage({ author: 'user', type: 'audio', content: audioUrl });
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

  return (
    <div className="flex flex-col h-screen bg-slate-950">
      <header className="flex-shrink-0 h-20 flex items-center px-8 border-b border-slate-800 bg-slate-900/50 backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      </header>
      
      <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-8 space-y-6">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
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
            <PopoverContent className="w-auto p-2 bg-slate-800 border-slate-700 mb-2">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="relative overflow-hidden hover:bg-primary/20" asChild>
                  <label>
                    <PhotoIcon className="h-6 w-6 text-primary" />
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                  </label>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsCameraOpen(true)} className="hover:bg-primary/20">
                  <CameraIcon className="h-6 w-6 text-primary" />
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

      <CameraModal isOpen={isCameraOpen} onClose={() => setIsCameraOpen(false)} onCapture={(dataUrl) => addMessage({ author: 'user', type: 'image', content: dataUrl })} />
    </div>
  );
}
`,
  "src/components/export-button.tsx": `
'use client';

import JSZip from 'jszip';
import { useState } from 'react';
import { projectFiles } from '@/lib/project-files';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export function ExportButton() {
  const [isZipping, setIsZipping] = useState(false);

  const handleExport = async () => {
    setIsZipping(true);
    
    // Dynamically import file-saver to avoid SSR issues
    const { saveAs } = await import('file-saver');

    const zip = new JSZip();

    Object.entries(projectFiles).forEach(([path, content]) => {
      zip.file(path, content);
    });
    
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'ciphersphere-source.zip');
    } catch(e) {
      console.error(e);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleExport}
            disabled={isZipping}
            className="flex items-center justify-center h-12 w-12 rounded-2xl text-slate-400 hover:bg-accent/20 hover:text-accent transition-colors"
          >
            {isZipping ? (
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent"></div>
            ) : (
                <ArrowDownTrayIcon className="h-6 w-6" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-slate-900 border-slate-700 text-foreground">
          <p>Export Source Code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
`,
  "src/components/message.tsx": `
'use client';

import { Message as MessageType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { UserCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const AuthorAvatar = ({ author }: { author: MessageType['author'] }) => {
  const commonClasses = "h-8 w-8 rounded-full flex-shrink-0";
  if (author === 'ai') {
    return <SparklesIcon className={cn(commonClasses, "text-accent")} />;
  }
  if (author === 'peer') {
    return <UserCircleIcon className={cn(commonClasses, "text-slate-500")} />;
  }
  return null; // User avatar is implied and on the right
};

export function Message({ message }: { message: MessageType }) {
  const isUser = message.author === 'user';

  const renderContent = () => {
    switch (message.type) {
      case 'text':
        return <p className="whitespace-pre-wrap break-words">{message.content}</p>;
      case 'image':
        return (
          <Image
            src={message.content}
            alt="User uploaded content"
            width={300}
            height={300}
            className="rounded-lg max-w-xs h-auto object-cover cursor-pointer"
            onClick={() => window.open(message.content, '_blank')}
          />
        );
      case 'audio':
        return <audio controls src={message.content} className="w-full max-w-xs" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('flex items-end gap-3 w-full', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && <AuthorAvatar author={message.author} />}
      <div
        className={cn(
          'max-w-md lg:max-w-xl rounded-3xl p-4 flex flex-col',
          isUser
            ? 'bg-primary rounded-br-lg text-primary-foreground'
            : 'bg-slate-800 rounded-bl-lg text-slate-200'
        )}
      >
        <div className="min-w-0">
          {renderContent()}
        </div>
        <span className={cn(
          "text-xs mt-2 self-end",
          isUser ? 'text-indigo-200' : 'text-slate-400'
        )}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
`,
  "src/hooks/use-local-storage.ts": `
'use client';

import { useState, useEffect, useCallback } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`Error reading localStorage key “\${key}”:\`, error);
      return initialValue;
    }
  }, [initialValue, key]);
  
  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T | ((val: T) => T)) => {
    if (typeof window == 'undefined') {
      console.warn(
        \`Tried setting localStorage key “\${key}” even though environment is not a client\`
      );
    }
    
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(\`Error setting localStorage key “\${key}”:\`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };
    
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return [storedValue, setValue];
}

export default useLocalStorage;
`,
  "src/lib/placeholder-images.json": `
{
  "placeholderImages": [
    {
      "id": "user-avatar",
      "description": "User avatar placeholder",
      "imageUrl": "https://picsum.photos/seed/ciphersphere-avatar/100/100",
      "imageHint": "person portrait"
    }
  ]
}
`,
  "src/lib/project-files.ts": `
// This file contains the source code of the project as strings.
// It's a workaround to allow the client-side export feature to work.
// NOTE: This is a static representation of the files.
// For a real-world application, this should be generated dynamically during build time.

export const projectFiles: Record<string, string> = {
  "README.md": \`# CipherSphere - A Firebase Studio Project

This is a Next.js chat application built with Firebase Studio, featuring a cyberpunk-themed dark UI, real-time messaging capabilities, and AI integration.

## Getting Started

To get started, run the development server:

\\\`\\\`\\\`bash
npm run dev
\\\`\\\`\\\`

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Features

- **Mock Authentication**: Secure login simulation with session persistence in LocalStorage.
- **Real-time Messaging**: Send and receive text messages, images, and audio notes.
- **Image Sharing**: Upload from your device or capture directly from your camera.
- **Audio Messaging**: Record and play back voice notes.
- **AI Assistant**: Chat with a Google Gemini-powered AI.
- **Project Export**: Download the complete source code as a .zip file.

## Tech Stack

- **Framework**: Next.js (App Router) with React & TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Heroicons
- **State Management**: React Hooks
- **Persistence**: LocalStorage
- **AI**: Google Gemini via Genkit
- **Export**: JSZip & file-saver
\`,
  "package.json": \`{
  "name": "ciphersphere",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 9002",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@genkit-ai/google-genai": "^1.20.0",
    "@genkit-ai/next": "^1.20.0",
    "@heroicons/react": "^2.1.5",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "file-saver": "^2.0.5",
    "genkit": "^1.20.0",
    "jszip": "^3.10.1",
    "lucide-react": "^0.475.0",
    "next": "15.5.9",
    "react": "^19.2.1",
    "react-dom": "^19.2.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/file-saver": "^2.0.7",
    "@types/node": "^20",
    "@types/react": "^19.2.1",
    "@types/react-dom": "^19.2.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
\`,
  "tailwind.config.ts": \`import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        '3xl': '1.5rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
\`,
  "src/app/globals.css": \`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222 83% 5%;
    --foreground: 210 20% 98%;
    --card: 222 83% 10%;
    --card-foreground: 210 20% 98%;
    --popover: 222 83% 5%;
    --popover-foreground: 210 20% 98%;
    --primary: 243 75% 59%;
    --primary-foreground: 210 20% 98%;
    --secondary: 222 47% 11%;
    --secondary-foreground: 210 20% 98%;
    --muted: 222 47% 11%;
    --muted-foreground: 217 33% 50%;
    --accent: 262 75% 65%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 20% 98%;
    --border: 222 47% 11%;
    --input: 222 47% 11%;
    --ring: 243 75% 59%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222 83% 5%;
    --foreground: 210 20% 98%;
    --card: 222 83% 10%;
    --card-foreground: 210 20% 98%;
    --popover: 222 83% 5%;
    --popover-foreground: 210 20% 98%;
    --primary: 243 75% 59%;
    --primary-foreground: 210 20% 98%;
    --secondary: 222 47% 11%;
    --secondary-foreground: 210 20% 98%;
    --muted: 222 47% 11%;
    --muted-foreground: 217 33% 50%;
    --accent: 262 75% 65%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 20% 98%;
    --border: 222 47% 11%;
    --input: 222 47% 11%;
    --ring: 243 75% 59%;
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
\`,
  "src/app/layout.tsx": \`import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'CipherSphere',
  description: 'A Modern, Secure Chat Application',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
\`,
"src/app/page.tsx": \`
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem('ciphersphere-session');
    if (session) {
      router.replace('/general');
    } else {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-muted-foreground">Initializing CipherSphere...</p>
      </div>
    </div>
  );
}
\`,
  "src/app/login/page.tsx": \`'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AtSymbolIcon, LockClosedIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const CipherSphereLogo = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V12" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8H12.01" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoggingIn(true);

    setTimeout(() => {
      const session = {
        user: { email, name: email.split('@')[0] || 'User' },
        isAuthenticated: true,
      };
      localStorage.setItem('ciphersphere-session', JSON.stringify(session));
      router.push('/general');
    }, 1000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -inset-24 bg-gradient-to-r from-primary to-accent blur-3xl"></div>
      </div>
      <div className="w-full max-w-md z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <CipherSphereLogo />
              <h1 className="text-3xl font-bold text-foreground">CipherSphere</h1>
              <p className="text-muted-foreground mt-2">Secure. Private. Yours.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
               {/* Form inputs and button */}
            </form>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          This is a mock login. Any email/password will work.
        </p>
      </div>
    </main>
  );
}
\`,
    "src/app/(app)/layout.tsx": \`import { AppSidebar } from '@/components/app-sidebar';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppSidebar />
      <main className="pl-24">
        {children}
      </main>
    </div>
  );
}
\`,
    "src/app/(app)/general/page.tsx": \`import { ChatView } from "@/components/chat-view";

export default function GeneralChatPage() {
  return <ChatView chatId="general" chatType="human" title="General Chat" />;
}
\`,
    "src/app/(app)/ai-chat/page.tsx": \`import { ChatView } from "@/components/chat-view";

export default function AiChatPage() {
  return <ChatView chatId="ai-assistant" chatType="ai" title="AI Assistant" />;
}
\`,
    "src/components/app-sidebar.tsx": \`'use client';
import Link from 'next/link';
// ... other imports
export function AppSidebar() {
  // ... component logic
  return (
    <aside>
      {/* Sidebar content */}
    </aside>
  );
}
\`,
    "src/components/chat-view.tsx": \`'use client';
import { useState, useRef, useEffect } from 'react';
// ... other imports
export function ChatView({ chatId, chatType, title }) {
  // ... component logic
  return (
    <div>
      {/* Chat view content */}
    </div>
  );
}
\`,
    "src/components/message.tsx": \`'use client';
import { Message as MessageType } from '@/lib/types';
// ... other imports
export function Message({ message }) {
  // ... component logic
  return (
    <div>
      {/* Message content */}
    </div>
  );
}
\`,
    "src/components/camera-modal.tsx": \`'use client';
import { useEffect, useRef, useState } from 'react';
// ... other imports
export function CameraModal({ isOpen, onClose, onCapture }) {
  // ... component logic
  return (
    <Dialog>
      {/* Camera modal content */}
    </Dialog>
  );
}
\`,
    "src/components/export-button.tsx": \`'use client';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
// ... other imports
export function ExportButton() {
  // ... component logic
  return (
    <button>
      {/* Export button content */}
    </button>
  );
}
\`,
    "src/hooks/use-local-storage.ts": \`'use client';
import { useState, useEffect, useCallback } from 'react';
export default function useLocalStorage(key, initialValue) {
  // ... hook logic
}
\`,
    "src/lib/types.ts": \`export interface User {
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
\`,
    "src/lib/utils.ts": \`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
\`,
};
`,
  "src/lib/types.ts": `
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
`,
};
