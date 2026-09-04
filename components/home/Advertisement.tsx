"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const advertisements = [
  {
    id: 1,
    image: "/ads/pub1.jpg",
    alt: "Publicidade 1",
  },
  {
    id: 2,
    image: "/ads/pub2.jpg",
    alt: "Publicidade 2",
  },
  {
    id: 3,
    image: "/ads/pub3.jpg",
    alt: "Publicidade 3",
  },
];

type AdvertisementProps = {
  contained?: boolean;
};

export function Advertisement({
  contained = false,
}: AdvertisementProps) {
  return (
    <section
      className={
        contained
          ? "my-8 w-full min-w-0"
          : "mx-auto my-8 w-full max-w-7xl px-6"
      }
    >
      <div className="relative h-28 w-full min-w-0 max-w-full overflow-hidden border border-theme bg-surface-secondary transition-colors">
        
        <span className="absolute left-3 top-3 z-20 bg-black/70 px-2 py-1 text-[10px] tracking-widest text-white">
          PUBLICIDADE
        </span>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full min-w-0"
        >
          {advertisements.map((ad) => (
            <SwiperSlide key={ad.id}>
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={ad.image}
                  alt={ad.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}