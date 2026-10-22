"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Preview Container */}
      <div className="relative aspect-[16/10] w-full bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
        <Image
          src={images[currentIndex]}
          alt={`${title} - slika ${currentIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-contain sm:object-cover bg-black/40 transition-all duration-300"
          unoptimized
        />

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-md text-zinc-200 text-xs font-mono px-3 py-1.5 rounded-lg border border-zinc-700/60 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8ea47c]" />
          <span>
            Slika {currentIndex + 1} od {images.length}
          </span>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/75 backdrop-blur-md text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors"
          title="Povećaj sliku"
        >
          <Maximize2 size={16} />
        </button>

        {/* Previous / Next Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-white flex items-center justify-center hover:bg-[#3a492f] hover:border-[#526643] transition-all opacity-90 hover:opacity-100 hover:scale-105"
              aria-label="Prethodna slika"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-white flex items-center justify-center hover:bg-[#3a492f] hover:border-[#526643] transition-all opacity-90 hover:opacity-100 hover:scale-105"
              aria-label="Sljedeća slika"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-20 w-32 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? "border-[#8ea47c] ring-2 ring-[#526643]/50 scale-102"
                  : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-700"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="128px"
                className="object-cover"
                unoptimized
              />
              <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] font-mono px-1.5 py-0.5 rounded text-zinc-300">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal View */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800"
            aria-label="Zatvori puni ekran"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`${title} - Puni ekran`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {images.length > 1 && (
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white hover:bg-[#3a492f]"
              >
                Prethodna
              </button>
              <span className="text-zinc-400 font-mono text-sm">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white hover:bg-[#3a492f]"
              >
                Sljedeća
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
