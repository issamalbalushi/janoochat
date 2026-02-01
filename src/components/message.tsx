
'use client';

import { Message as MessageType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { UserCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Check, CheckCheck } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const AuthorAvatar = ({ author, authorEmail }: { author: string; authorEmail?: string }) => {
  const commonClasses = "h-8 w-8 rounded-full flex-shrink-0";
  const [profileImgSrc, setProfileImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const readImage = () => {
      if (authorEmail) {
        const storedImage = window.localStorage.getItem(`ciphersphere-profile-pic-${authorEmail}`);
        setProfileImgSrc(storedImage);
      } else {
        setProfileImgSrc(null);
      }
    };

    readImage();

    window.addEventListener('local-storage', readImage);
    return () => {
      window.removeEventListener('local-storage', readImage);
    };
  }, [authorEmail]);

  if (author === 'ai') {
    return <SparklesIcon className={cn(commonClasses, "text-accent")} />;
  }

  if (profileImgSrc) {
    return (
      <Image
        src={profileImgSrc}
        alt={author}
        width={32}
        height={32}
        className={cn(commonClasses, "object-cover")}
      />
    );
  }

  return <UserCircleIcon className={cn(commonClasses, "text-slate-500")} />;
};

export function Message({ message, currentUser, chatType }: { message: MessageType, currentUser: string | null, chatType: 'human' | 'ai' }) {
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
      {!isUser && <AuthorAvatar author={message.author} authorEmail={message.authorEmail} />}
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
        <div className="flex items-center self-end mt-2 gap-1">
          <span className={cn(
            "text-xs",
            isUser ? 'text-indigo-200' : 'text-slate-400'
          )}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          {isUser && chatType === 'human' && (
             message.read ? (
              <CheckCheck size={16} className="text-sky-400" />
            ) : (
              <Check size={16} className="text-indigo-200" />
            )
          )}
        </div>
      </div>
    </div>
  );
}
