
import React, { useEffect, useRef, useState } from 'react';

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
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fade in on load
    const handleCanPlay = () => {
      setOpacity(1);
    };

    // Fade out before loop, fade in after
    const handleTimeUpdate = () => {
      if (video.duration > 0) {
        const timeLeft = video.duration - video.currentTime;
        if (timeLeft < 1) {
          setOpacity(0);
        } else if (video.currentTime < 1) {
          setOpacity(1);
        }
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Use HLS.js for .m3u8 support if native support isn't available
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if ((window as any).Hls && (window as any).Hls.isSupported()) {
      const hls = new (window as any).Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [src]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full transition-opacity duration-1000"
        style={{ objectFit, opacity }}
      />
      <div 
        className="absolute inset-0 z-1" 
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} 
      />
    </div>
  );
};

export default VideoBackground;
