
import React from 'react';
import { Product, Category } from './types';

export const BRAND_NAME = "infinium";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Essence No. 1',
    category: Category.PERFUMES,
    price: 185,
    tagline: 'A luminous breath of eternal spring.',
    description: 'Essence No. 1 is an olfactory journey through a sun-drenched Mediterranean garden. It opens with the crystalline purity of Sicilian bergamot and neroli, cascading into a heart of rare white jasmine and morning dew. The dry-down reveals a whispered base of silk musk and translucent amber, creating a sillage that is both ethereal and unforgettable. It is the scent of effortless grace.',
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 'p2',
    name: 'Crimson Oud',
    category: Category.PERFUMES,
    price: 215,
    tagline: 'The seductive heartbeat of the night.',
    description: 'A masterpiece of shadows and light, Crimson Oud commands attention without uttering a word. This complex blend features the deep, resonant soul of sustainable Cambodian Oud, wrapped in the velvet embrace of dark damask rose and charred vanilla. Smoldering notes of leather and saffron provide a daring edge, evoking the mystery of a midnight encounter in a timeless city. Bold, hypnotic, and profoundly confident.',
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: 'w1',
    name: 'The Chronos Infinity',
    category: Category.WATCHES,
    price: 1250,
    tagline: 'Where heritage meets the horizon.',
    description: 'The Chronos Infinity is a testament to the art of horology. Housed in a meticulously brushed 40mm surgical steel case, the charcoal sunray dial captures light in a dance of infinite reflections. Beneath the sapphire crystal lies a Swiss-made automatic movement, calibrated for a lifetime of precision. Each tick is a heartbeat of engineering excellence, finished with a handmade Italian leather strap that contours to the wrist like a second skin.',
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    reviewCount: 42
  },
  {
    id: 'w2',
    name: 'Obsidian Voyager',
    category: Category.WATCHES,
    price: 3400,
    tagline: 'Master the dark, command the light.',
    description: 'Forged for the modern pioneer, the Obsidian Voyager is a bold exploration of minimalist power. Its matte black ceramic bezel and deep-vortex dial are punctuated by signature Infinium red accents, ensuring legibility in the most demanding environments. This GMT timepiece allows you to track multiple horizons simultaneously, powered by a high-frequency movement with a 72-hour power reserve. It is not just a tool; it is a declaration of intent.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviewCount: 31
  },
  {
    id: 'a1',
    name: 'Infinite Cufflinks',
    category: Category.ACCESSORIES,
    price: 150,
    tagline: 'The punctuation of a perfect silhouette.',
    description: 'Small in scale but immense in impact, these cufflinks are the ultimate signature for the discerning gentleman. Hand-cast from solid sterling silver and inlaid with deep crimson enamel, the infinity motif represents a legacy without end. The toggle mechanism is engineered with a satisfying, tactile click, ensuring security while adding a subtle brilliance to the cuff of a bespoke shirt. Elegance, distilled.',
    imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: 'a2',
    name: 'Sovereign Leather Wallet',
    category: Category.ACCESSORIES,
    price: 280,
    tagline: 'A tactile sanctuary for your essentials.',
    description: 'The Sovereign Wallet is an exercise in restrained luxury. Crafted from rare, full-grain European calfskin that develops a unique patina over time, it feels exceptionally supple to the touch. The exterior is a study in matte obsidian, while the interior reveals a vibrant flash of signature Infinium red. Each edge is hand-painted and polished by master leatherworkers, resulting in a razor-thin profile that disappears into a tailored jacket while holding everything you need for the journey ahead.',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewCount: 204
  }
];

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="overlap-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#5a0000', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8e1b1b', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path 
      fill="currentColor" 
      d="M449.4,384.8L350.6,286L449.4,187.2c16.2-16.2,16.2-42.5,0-58.7c-16.2-16.2-42.5-16.2-58.7,0L256,263.2L121.3,128.5c-16.2-16.2-42.5-16.2-58.7,0c-16.2,16.2-16.2,42.5,0,58.7L161.4,286L62.6,384.8v98.7L256,289.5l193.4,194V384.8z" 
    />
    <path 
      fill="url(#overlap-shadow)" 
      opacity="0.3" 
      d="M256,263.2L350.6,286l22.6-22.6L256,150.2L138.8,263.4L161.4,286L256,263.2z"
    />
  </svg>
);
