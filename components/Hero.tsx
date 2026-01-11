
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=2000',
    title: 'Pure Essence',
    subtitle: 'Perfumes'
  },
  {
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=2000',
    title: 'Precision Time',
    subtitle: 'Watches'
  },
  {
    url: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=2000',
    title: 'Modern Craft',
    subtitle: 'Accessories'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Cinematic Background Slideshow */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img 
            src={slide.url} 
            alt={slide.subtitle} 
            className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear brightness-[0.85]"
            style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)' }}
          />
          {/* Soft overlay to ensure text readability while maintaining a clean look */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <span className="text-white uppercase tracking-[0.5em] text-xs font-bold mb-6 block drop-shadow-md">
          {SLIDES[currentSlide].subtitle} • The Infinite Collection
        </span>
        <h1 className="text-white text-5xl md:text-8xl font-luxury font-semibold leading-tight mb-8 drop-shadow-lg">
          Time is <span className="italic">Eternal.</span><br />
          Style is <span className="text-infiniumRed">Infinium.</span>
        </h1>
        <p className="text-white text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Discover a symphony of elegance and precision. Crafted for those who define their own legacy through confidence and timeless sophistication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-infiniumRed hover:bg-red-800 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            Explore Collection
          </button>
          <button className="backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-xl">
            Our Legacy
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide ? 'w-12 bg-infiniumRed' : 'w-6 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-scroll-down">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
