
'use client';

import { Message as MessageType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { UserCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const AuthorAvatar = ({ author }: { author: string }) => {
  const commonClasses = "h-8 w-8 rounded-full flex-shrink-0";
  if (author === 'ai') {
    return <SparklesIcon className={cn(commonClasses, "text-accent")} />;
  }
  return <UserCircleIcon className={cn(commonClasses, "text-slate-500")} />;
};

export function Message({ message, currentUser }: { message: MessageType, currentUser: string | null }) {
  const isUser = message.author === currentUser;

  const renderContent = () => {
    switch (message.type) {
      case 'text':
        return <p className="whitespace-pre-wrap">{message.content}</p>;
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
    <div className={cn('flex items-end gap-3', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && <AuthorAvatar author={message.author} />}
      <div
        className={cn(
          'max-w-md lg:max-w-xl rounded-3xl p-4 flex flex-col',
          isUser
            ? 'bg-primary rounded-br-lg text-primary-foreground'
            : 'bg-slate-800 rounded-bl-lg text-slate-200'
        )}
      >
        {!isUser && message.author !== 'ai' && (
            <p className="text-xs font-bold mb-1 text-accent-foreground capitalize">{message.author}</p>
        )}
        {renderContent()}
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
