"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";

export interface CarouselImage {
  src: string;
  caption?: string;
  alt?: string;
}

export function Carousel({ images }: { images: CarouselImage[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <figure key={i} className="relative min-w-full cursor-pointer" onClick={() => openLightbox(i)}>
              <img src={img.src} alt={img.alt ?? img.caption ?? ""} className="w-full h-auto object-contain" />
              {img.caption && (
                <figcaption className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          open={lightboxIndex !== null}
          index={lightboxIndex ?? 0}
          close={closeLightbox}
          plugins={[Captions]}
          slides={images.map((img) => ({
            src: img.src,
            description: img.caption,
            alt: img.alt,
          }))}
        />
      )}
    </>
  );
}
