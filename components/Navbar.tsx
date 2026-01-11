
import React, { useState, useEffect, useRef } from 'react';
import { LogoIcon, BRAND_NAME } from '../constants';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'The Heritage', action: () => console.log('Heritage') },
    { label: 'Bespoke Services', action: () => console.log('Bespoke') },
    { label: 'Global Boutiques', action: () => console.log('Boutiques') },
    { label: 'Sustainability', action: () => console.log('Sustainability') },
    { label: 'Private Appointments', action: () => console.log('Appointments') },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Nav Links (Desktop) */}
        <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
          <button 
            onClick={() => onNavigate('perfumes')} 
            className={`${isScrolled ? 'text-infiniumBlack' : 'text-white'} hover:text-infiniumRed transition-colors`}
          >
            Perfumes
          </button>
          <button 
            onClick={() => onNavigate('watches')} 
            className={`${isScrolled ? 'text-infiniumBlack' : 'text-white'} hover:text-infiniumRed transition-colors`}
          >
            Watches
          </button>
          <button 
            onClick={() => onNavigate('accessories')} 
            className={`${isScrolled ? 'text-infiniumBlack' : 'text-white'} hover:text-infiniumRed transition-colors`}
          >
            Accessories
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex items-center gap-3 cursor-pointer group lg:absolute lg:left-1/2 lg:-translate-x-1/2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={`text-3xl font-sans font-black tracking-tighter transition-colors ${isScrolled ? 'text-infiniumBlack' : 'text-white'}`}>
            {BRAND_NAME}
          </span>
          <LogoIcon className="w-10 h-auto text-infiniumRed transform group-hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Right: Actions */}
        <div className="flex gap-4 md:gap-6 items-center">
          <button 
            onClick={onCartClick}
            className={`relative p-2 transition-transform active:scale-90 ${isScrolled ? 'text-infiniumBlack' : 'text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-infiniumRed text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Three Line Menu (Hamburger) */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-all hover:bg-black/5 rounded-full ${isScrolled ? 'text-infiniumBlack' : 'text-white'}`}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>

            {/* Premium Dropdown Overlay */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-4 w-72 bg-white shadow-2xl rounded-sm border border-gray-100 py-6 animate-fade-in-up origin-top-right overflow-hidden">
                <div className="px-8 pb-4 mb-4 border-b border-gray-50">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-infiniumRed uppercase mb-1">Brand Universe</p>
                  <p className="text-xs text-gray-400 font-light italic">The world of Infinium luxury.</p>
                </div>
                <div className="flex flex-col">
                  {menuItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        item.action();
                        setIsMenuOpen(false);
                      }}
                      className="group flex justify-between items-center px-8 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-infiniumBlack group-hover:text-infiniumRed transition-colors">
                        {item.label}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-300 group-hover:text-infiniumRed transition-colors transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
                <div className="mt-6 px-8 flex gap-4">
                  <button className="flex-1 bg-infiniumBlack text-white py-3 text-[9px] font-bold tracking-widest uppercase hover:bg-infiniumRed transition-colors">
                    Login
                  </button>
                  <button className="flex-1 border border-gray-200 py-3 text-[9px] font-bold tracking-widest uppercase hover:border-infiniumBlack transition-colors">
                    Search
                  </button>
                </div>
                <div className="mt-6 px-8 pt-4 border-t border-gray-50">
                   <p className="text-[8px] text-gray-300 uppercase tracking-widest text-center">Infinium Luxury House • Since 1994</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
