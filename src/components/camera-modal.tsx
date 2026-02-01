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
