
import React from 'react';
import { LogoIcon, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-infiniumBlack text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <LogoIcon className="w-8 h-auto text-infiniumRed" />
            <span className="text-xl font-luxury font-bold tracking-tighter">{BRAND_NAME.toUpperCase()}</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Define your own infinity with pieces that transcend seasons and trends. Luxury, crafted with purpose.
          </p>
          <div className="flex gap-4">
            {['IG', 'FB', 'TW', 'LI'].map(social => (
              <a key={social} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-infiniumRed transition-colors">{social}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8">The Collections</h4>
          <ul className="space-y-4 text-sm text-white/50 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Signature Perfumes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Precision Timepieces</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Luxury Accessories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Limited Editions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8">Brand Universe</h4>
          <ul className="space-y-4 text-sm text-white/50 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Our Heritage</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Art of Craftsmanship</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8">Insider Access</h4>
          <p className="text-sm text-white/50 mb-6 leading-relaxed">Join the inner circle and receive exclusive updates on upcoming launches.</p>
          <div className="flex border-b border-white/20 pb-2">
            <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full outline-none py-1" />
            <button className="text-xs font-bold text-infiniumRed uppercase tracking-widest px-4 hover:translate-x-1 transition-transform">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2024 INFINIUM LUXURY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
