"use client"

import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  overlayOpacity?: number;
  className?: string;
  objectFit?: 'cover' | 'contain';
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  overlayOpacity = 0.4, 
  className = "",
  objectFit = 'cover'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use HLS.js for .m3u8 support if native support isn't available
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (typeof window !== 'undefined' && (window as any).Hls && (window as any).Hls.isSupported()) {
      const hls = new (window as any).Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }
  }, [src]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full"
        style={{ objectFit }}
      />
      <div 
        className="absolute inset-0 z-1" 
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} 
      />
    </div>
  );
};

export default VideoBackground;
