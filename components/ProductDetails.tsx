
import React from 'react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${star <= Math.round(rating) ? 'text-infiniumRed' : 'text-gray-200'}`}
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
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-infiniumBlack/95 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all shadow-sm border border-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Showcase Section */}
          <div className="lg:w-1/2 bg-infiniumOffWhite sticky top-0 h-[50vh] lg:h-auto">
            <div className="h-full w-full overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>

          {/* Content & Layout Section */}
          <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col">
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-infiniumRed/10 text-infiniumRed font-bold tracking-[0.2em] uppercase text-[9px] px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center gap-2">
                  {renderStars(product.rating)}
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{product.rating} / 5.0</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-infiniumBlack mb-3 leading-tight">
                {product.name}
              </h2>
              <p className="text-2xl font-light text-infiniumRed tracking-tight font-luxury italic border-b border-gray-100 pb-6">
                ${product.price.toLocaleString()}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {/* Left Column: Sensory Story */}
              <div className="space-y-6">
                <h3 className="text-[11px] uppercase font-bold tracking-[0.3em] text-infiniumBlack/40">The Experience</h3>
                <p className="text-infiniumBlack text-base font-luxury italic leading-relaxed border-l-2 border-infiniumRed pl-5 py-1">
                  "{product.tagline}"
                </p>
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  {product.description}
                </p>
              </div>

              {/* Right Column: Technical Excellence */}
              <div className="space-y-6">
                <h3 className="text-[11px] uppercase font-bold tracking-[0.3em] text-infiniumBlack/40">Specifications</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Origin', value: 'Artisanal Heritage' },
                    { label: 'Materials', value: 'Premium Grade' },
                    { label: 'Availability', value: 'Limited Series' },
                    { label: 'Craftsmanship', value: 'Hand-finished' },
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">{spec.label}</span>
                      <span className="text-xs font-bold text-infiniumBlack">{spec.value}</span>
                    </div>
                  ))}
                  <div className="p-4 bg-infiniumOffWhite rounded-lg border border-gray-100 mt-2">
                    <p className="text-[10px] text-gray-500 leading-relaxed italic">
                      Includes 2-year international warranty and a certificate of authenticity signed by the lead artisan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full sm:flex-grow bg-infiniumBlack hover:bg-infiniumRed text-white py-5 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Acquire Piece
                </button>
                <button className="w-full sm:w-auto px-8 py-5 border border-gray-200 hover:border-infiniumBlack text-infiniumBlack text-xs font-bold tracking-[0.2em] uppercase transition-all">
                  Find in Store
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                <span>Free Express Shipping</span>
                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                <span>Gift Wrapping Included</span>
                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
