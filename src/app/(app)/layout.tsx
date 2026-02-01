'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { ReactNode, useEffect, useRef, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AppLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const session = localStorage.getItem('ciphersphere-session');
    if (session) {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
  }, [router]);


  const logout = useCallback(() => {
    localStorage.removeItem('ciphersphere-session');
    router.push('/login');
  }, [router]);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    inactivityTimer.current = setTimeout(logout, 10 * 60 * 1000); // 10 minutes
  }, [logout]);

  useEffect(() => {
    if (isAuthenticated) {
        const events: (keyof WindowEventMap)[] = ['mousemove', 'keydown', 'click', 'scroll'];
        const handleActivity = () => resetInactivityTimer();
        
        events.forEach(event => window.addEventListener(event, handleActivity));
        resetInactivityTimer();

        return () => {
            if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
            events.forEach(event => window.removeEventListener(event, handleActivity));
        };
    }
  }, [isAuthenticated, resetInactivityTimer]);

  if (!isClient || !isAuthenticated) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground">Initializing CipherSphere...</p>
          </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppSidebar />
      <main className="pl-24">
        {children}
      </main>
    </div>
  );
}
