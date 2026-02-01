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

    Object.keys(projectFiles).forEach(path => {
      // @ts-ignore
      zip.file(path, projectFiles[path]);
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
