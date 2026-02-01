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
