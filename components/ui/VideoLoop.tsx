"use client";
import { useRef, useEffect, useState } from "react";

const CROSSFADE_S = 0.8;

export default function VideoLoop() {
  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<1 | 2>(1);

  useEffect(() => {
    const v1 = video1.current;
    const v2 = video2.current;
    if (!v1 || !v2) return;

    let transitioning = false;

    const crossfadeTo = (
      next: HTMLVideoElement,
      prev: HTMLVideoElement,
      which: 1 | 2
    ) => {
      if (transitioning) return;
      transitioning = true;
      next.currentTime = 0;
      next.play();
      setActive(which);
      setTimeout(() => {
        prev.pause();
        prev.currentTime = 0;
        transitioning = false;
      }, CROSSFADE_S * 1000 + 300);
    };

    const handleV1 = () => {
      if (v1.duration && v1.currentTime >= v1.duration - CROSSFADE_S) {
        crossfadeTo(v2, v1, 2);
      }
    };

    const handleV2 = () => {
      if (v2.duration && v2.currentTime >= v2.duration - CROSSFADE_S) {
        crossfadeTo(v1, v2, 1);
      }
    };

    v1.addEventListener("timeupdate", handleV1);
    v2.addEventListener("timeupdate", handleV2);

    return () => {
      v1.removeEventListener("timeupdate", handleV1);
      v2.removeEventListener("timeupdate", handleV2);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={video1}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-800 ${
          active === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/home/video.mp4" type="video/mp4" />
      </video>
      <video
        ref={video2}
        muted
        playsInline
        preload="auto"
        className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-800 ${
          active === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/home/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
