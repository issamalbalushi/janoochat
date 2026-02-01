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
  const [error, setError] = useState('');

  const mockUsers = [
    { email: 'sam@example.com', password: 'sam@1234', name: 'sam' },
    { email: 'row@example.com', password: 'row@1234', name: 'row' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) return;

    setIsLoggingIn(true);

    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const session = {
          user: {
            email: user.email,
            name: user.name,
          },
          isAuthenticated: true,
        };
        sessionStorage.setItem('ciphersphere-session', JSON.stringify(session));
        router.push('/general');
      } else {
        setError('Invalid email or password.');
        setIsLoggingIn(false);
      }
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
              {error && <p className="text-center text-sm text-red-500">{error}</p>}
              <div className="relative">
                <AtSymbolIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email (e.g. sam@example.com)"
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
          Use sam@example.com (pw: sam@1234) or row@example.com (pw: row@1234).
        </p>
      </div>
    </main>
  );
}
