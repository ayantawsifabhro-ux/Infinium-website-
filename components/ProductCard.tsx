
import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3 w-3 ${star <= Math.round(rating) ? 'text-infiniumRed' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 rounded-lg flex flex-col">
      {/* Three Dot Menu Button */}
      <div className="absolute top-4 right-4 z-20" ref={menuRef}>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white shadow-sm transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-infiniumBlack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 animate-fade-in-up z-30">
            <button className="w-full text-left px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-infiniumRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Add to Wishlist
            </button>
            <button className="w-full text-left px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-infiniumRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Piece
            </button>
            <button className="w-full text-left px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-infiniumRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zM9 19h6m-6 0l6-6m0 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" />
              </svg>
              Compare
            </button>
          </div>
        )}
      </div>

      <div 
        className="relative aspect-[4/5] overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-infiniumBlack/0 group-hover:bg-infiniumBlack/20 transition-colors duration-500"></div>
        
        {/* Quick Actions Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="flex-1 bg-white text-infiniumBlack py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-infiniumBlack hover:text-white transition-all duration-300 shadow-lg"
          >
            Quick View
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="flex-1 bg-infiniumRed text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-infiniumCharcoal transition-all duration-300 shadow-lg"
          >
            Add to Bag
          </button>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-luxury font-bold text-infiniumBlack group-hover:text-infiniumRed transition-colors">
            {product.name}
          </h3>
          <span className="text-sm font-semibold">${product.price}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          {renderStars(product.rating)}
          <span className="text-[10px] text-gray-400 font-bold">({product.reviewCount})</span>
        </div>
        <p className="text-gray-500 text-xs tracking-wide uppercase mb-4">{product.category}</p>
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed font-light">
          {product.tagline}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
