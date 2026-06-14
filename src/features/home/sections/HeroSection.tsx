import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import heroFactory from '@/assets/images/hero-banner.png';
import heroProducts from '@/assets/images/hero-products.png';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

const slides = [
  {
    image: heroFactory,
    tag: 'SHEFFIELD • UK MANUFACTURING',
    title: 'Precision Engineered',
    highlight: 'Industrial Saw Blades',
    description:
      'Manufacturing Hot Saw, Friction, TCT, HSS and Segmental Saw Blades for steel mills and industrial operations worldwide.',
    bgPosition: 'center center',
    overlayClass: 'from-white via-white/95 lg:via-white/70',
  },
  {
    image: heroProducts,
    tag: 'UK MANUFACTURING • GLOBAL PERFORMANCE',
    title: 'Industrial Saw Blades Engineered For',
    highlight: 'Steel Mills Worldwide',
    description:
      'Manufacturing, refurbishment and servicing of Hot Saw, Friction, TCT and Segmental blades from our UK production facility.',
    bgPosition: 'right center',
    overlayClass: 'from-white via-white/95 lg:via-white/65',
    categories: [
      'Hot Saw Blades',
      'Friction Saws',
      'TCT Blades',
      'Segmental Blades',
    ],
  },
];

const stats = [
  { value: 'UK', label: 'Manufacturing' },
  { value: 'Global', label: 'Supply' },
  { value: 'Custom', label: 'Solutions' },
];

export const HeroSection = ({ onOpenQuote }: HeroSectionProps) => {
  const navigate = useNavigate();
  // const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        .hero-swiper {
          width: 100%;
        }
        .hero-swiper .swiper-pagination {
          bottom: 20px;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          z-index: 20;
        }
        .hero-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0A4A9E;
          opacity: 0.3;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          margin: 0 !important;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }

        .hero-content-enter {
          opacity: 0;
          transform: translateY(16px);
        }
        .hero-content-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hero-tag {
          transition-delay: 0s;
        }
        .hero-title {
          transition-delay: 0.1s;
        }
        .hero-desc {
          transition-delay: 0.2s;
          
        }
        .hero-buttons {
          transition-delay: 0.3s;
        }
        .hero-stats {
          transition-delay: 0.4s;
        }

          @keyframes noticeShake {
  0%, 100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-2px);
  }
  40% {
    transform: translateX(2px);
  }
  60% {
    transform: translateX(-2px);
  }
  80% {
    transform: translateX(2px);
  }
}

.notice-button {
  animation: noticeShake .8s ease-in-out infinite;
}
      `}</style>
      {showAnnouncement && (
        <div className=" z-30 relative bg-[#0A4A9E] text-white lg:absolute w-full">
          <div className="flex-1 pr-2 text-xs leading-6 sm:text-sm md:text-base py-5 px-5 lg:pl-2 ">
            Sheffield Industrial Saws is 100% operational and ready to serve
            customers globally. Effective 15th May 2026, the business operates
            under{' '}
            <span className="font-semibold">Maco Corporation UK Limited</span>.
            <button
              className="inline-flex items-center rounded-lg border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0A4A9E] lg:ml-2 lg:mt-0 mt-5"
              onClick={() => (window.location.href = '/announcement.html')}
            >
              Important Announcement
            </button>
          </div>

          <button
            type="button"
            aria-label="Close announcement"
            onClick={() => setShowAnnouncement(false)}
            className="rounded-md  transition hover:bg-white/10 absolute right-0 top-0  lg:right-0 lg:top--2"
          >
            <X size={18} />
          </button>
        </div>
      )}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={900}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Slide wrapper — full viewport height on mobile, fixed on desktop */}

            <div className="relative flex flex-col min-h-[100svh] md:min-h-0 md:h-[620px] lg:h-[680px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.bgPosition,
                }}
              />

              {/* Overlay — stronger on mobile for readability */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.overlayClass} to-transparent`}
              />
              {/* Mobile-only bottom overlay so text sits cleanly above stats */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 md:hidden" />

              {/* Content Container */}
              <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-5 sm:px-8 lg:px-12 py-16 md:py-0">
                {/* Text Content — max width prevents overlapping image on mid screens */}
                <div className="w-full max-w-[560px] lg:max-w-[640px]">
                  {/* Tag */}
                  <p
                    className={`mb-3 text-[10px] font-bold uppercase tracking-[3px] text-[#0A4A9E] sm:text-xs hero-tag ${
                      isVisible ? 'hero-content-visible' : 'hero-content-enter'
                    }`}
                  >
                    {slide.tag}
                  </p>

                  {/* Heading */}
                  <h1
                    className={`mb-5 text-[2.1rem] font-extrabold leading-[1.13] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] xl:text-6xl hero-title ${
                      isVisible ? 'hero-content-visible' : 'hero-content-enter'
                    }`}
                  >
                    {slide.title}
                    <span className="block text-[#0A4A9E] mt-1">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Description */}
                  <p
                    className={`mb-7 max-w-[500px] text-[0.95rem] leading-[1.75] text-slate-800 sm:text-base sm:leading-relaxed hero-desc ${
                      isVisible ? 'hero-content-visible' : 'hero-content-enter'
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div
                    className={`flex flex-row flex-wrap gap-3 hero-buttons ${
                      isVisible ? 'hero-content-visible' : 'hero-content-enter'
                    }`}
                  >
                    <button
                      onClick={onOpenQuote}
                      className="rounded-lg bg-[#0A4A9E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#083a7c] hover:shadow-md active:scale-[0.98] sm:text-base"
                    >
                      Request Quote
                    </button>
                    <button
                      onClick={() => navigate('/products')}
                      className="rounded-lg border-2 border-[#0A4A9E] bg-white/80 px-6 py-3 text-sm font-semibold text-[#0A4A9E] backdrop-blur-sm transition-all hover:bg-white active:scale-[0.98] sm:text-base"
                    >
                      View Products
                    </button>
                  </div>
                </div>

                {/* Stats — positioned at bottom, visible on all screen sizes */}
                <div
                  className={`mt-10 flex gap-8 sm:gap-12 hero-stats ${
                    isVisible ? 'hero-content-visible' : 'hero-content-enter'
                  }`}
                >
                  {stats.map((stat) => (
                    <div key={stat.value} className="flex flex-col">
                      <span className="text-2xl font-extrabold text-[#0A4A9E] sm:text-3xl lg:text-4xl">
                        {stat.value}
                      </span>
                      <span className="mt-0.5 text-xs font-medium text-slate-500 sm:text-sm">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Category Badges — only on slide 2 (heroProducts), desktop only */}
              {/* {slide.categories && (
                <div className="absolute bottom-10 right-0 z-10 hidden lg:flex">
                  {slide.categories.map((cat, i) => (
                    <div
                      key={cat}
                      className="relative flex flex-col items-center justify-end border-l border-white/40 px-5 pb-6 pt-28"
                      style={{ minWidth: "120px" }}
                    >
                     
                      <div className="absolute inset-x-0 top-0 h-px bg-white/30 -skew-y-3" />
                      <span className="text-center text-xs font-bold uppercase tracking-wider text-white drop-shadow-md">
                        {cat}
                      </span>
                      <span className="mt-1 block h-0.5 w-6 bg-white/70" />
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
