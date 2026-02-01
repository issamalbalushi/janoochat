'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { ReactNode, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function AppLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);

  const logout = useCallback(() => {
    sessionStorage.removeItem('ciphersphere-session');
    router.push('/login');
  }, [router]);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    inactivityTimer.current = setTimeout(logout, 10 * 60 * 1000); // 10 minutes
  }, [logout]);

  useEffect(() => {
    const events: (keyof WindowEventMap)[] = ['mousemove', 'keydown', 'click', 'scroll'];

    const handleActivity = () => {
      resetInactivityTimer();
    };

    const session = sessionStorage.getItem('ciphersphere-session');
    if (!session) {
        router.push('/login');
        return;
    }

    events.forEach(event => {
      window.addEventListener(event, handleActivity);
    });
    
    resetInactivityTimer();

    return () => {
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      events.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [resetInactivityTimer, router]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppSidebar />
      <main className="pl-24">
        {children}
      </main>
    </div>
  );
}
