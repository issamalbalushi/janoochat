'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const CipherSphereLogo = () => (
  <div className="p-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-9 md:h-9">
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
              "flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl text-slate-400 hover:bg-primary/20 hover:text-primary transition-all duration-300",
              isActive && "bg-primary/20 text-primary"
            )}
          >
            <Icon className="h-5 w-5 md:h-6 md:w-6" />
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
  const [profileImgSrc, setProfileImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const sessionStr = localStorage.getItem('ciphersphere-session');
    if (sessionStr) {
      const session = JSON.parse(sessionStr);
      setUsername(session.user.name || 'User');
      if (session.user.email) {
        const storedImage = localStorage.getItem(`ciphersphere-profile-pic-${session.user.email}`);
        if (storedImage) {
          setProfileImgSrc(storedImage);
        }
      }
    }
  }, []);

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const sessionStr = localStorage.getItem('ciphersphere-session');
    if (file && sessionStr) {
      const session = JSON.parse(sessionStr);
      const email = session.user.email;
      if (!email) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          const dataUrl = event.target.result;
          localStorage.setItem(`ciphersphere-profile-pic-${email}`, dataUrl);
          setProfileImgSrc(dataUrl);
          window.dispatchEvent(new Event('local-storage'));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ciphersphere-session');
    router.push('/login');
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-24 flex flex-col items-center py-6 bg-slate-900/30 backdrop-blur-xl border-r border-slate-800 z-20">
      <Link href="/general">
         <CipherSphereLogo />
      </Link>

      <nav className="flex flex-col items-center gap-4 mt-10">
        <NavItem href="/general" icon={ChatBubbleLeftRightIcon} label="General Chat" />
        <NavItem href="/ai-chat" icon={SparklesIcon} label="AI Assistant" />
      </nav>

      <div className="mt-auto flex flex-col items-center gap-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <label htmlFor="profile-upload" className="cursor-pointer rounded-full">
                {profileImgSrc ? (
                  <Image
                    src={profileImgSrc}
                    alt={username}
                    width={40}
                    height={40}
                    className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover"
                  />
                ) : (
                  <UserCircleIcon className="h-9 w-9 md:h-10 md:w-10 text-slate-500" />
                )}
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </label>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-slate-900 border-slate-700 text-foreground">
              <p className="font-semibold">{username}</p>
              <p className="text-xs text-muted-foreground">Click to change avatar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl text-slate-400 hover:bg-red-500/20 hover:text-red-500 transition-colors"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5 md:h-6 md:w-6" />
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
