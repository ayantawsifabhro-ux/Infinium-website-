
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, items, onClose, onRemove, onUpdateQty }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-luxury font-bold uppercase tracking-widest">Your Collection</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto space-y-8 pr-2">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 font-light mb-6">Your collection is empty.</p>
                <button onClick={onClose} className="text-infiniumRed font-bold uppercase tracking-widest text-xs">Start Browsing</button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-gray-100 overflow-hidden rounded-md flex-shrink-0">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow py-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-luxury font-bold text-sm">{item.name}</h4>
                      <span className="text-sm font-medium">${item.price * item.quantity}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-sm">
                        <button 
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="px-2 py-1 hover:bg-gray-50 disabled:opacity-30"
                          disabled={item.quantity <= 1}
                        >-</button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="px-2 py-1 hover:bg-gray-50"
                        >+</button>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-[10px] uppercase font-bold tracking-tighter text-gray-400 hover:text-infiniumRed"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest text-gray-500">Subtotal</span>
              <span className="text-xl font-luxury font-bold">${total}</span>
            </div>
            <button 
              disabled={items.length === 0}
              className="w-full bg-infiniumBlack hover:bg-infiniumRed text-white py-5 text-sm font-bold tracking-widest uppercase transition-colors disabled:bg-gray-300"
            >
              Secure Checkout
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-tighter italic">
              Experience the infinity of Infinium.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
