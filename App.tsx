
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import { PRODUCTS } from './constants';
import { Product, Category, CartItem } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification(`${product.name} added to collection`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const scrollToShop = () => {
    const shop = document.getElementById('shop-section');
    if (shop) shop.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-infiniumRed selection:text-white">
      <Navbar 
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={(cat) => {
          setActiveCategory(cat as Category);
          scrollToShop();
        }}
      />
      
      <main>
        <Hero />

        {/* Featured Section */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-infiniumRed/5 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Lifestyle" 
                className="relative z-10 w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div>
              <span className="text-infiniumRed font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-infiniumBlack mb-8 leading-tight">Beyond Time, Within Elegance.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light italic">
                "Infinium was born from the desire to capture the intangible essence of confidence. Our pieces aren't just objects; they are an extension of one's identity — timeless, resilient, and infinitely elegant."
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
                <div>
                  <h4 className="text-infiniumBlack font-bold text-lg mb-2">Heritage</h4>
                  <p className="text-gray-500 text-sm">Decades of mastery in artisanal craftsmanship.</p>
                </div>
                <div>
                  <h4 className="text-infiniumBlack font-bold text-lg mb-2">Purity</h4>
                  <p className="text-gray-500 text-sm">Only the rarest materials for eternal quality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop-section" className="py-24 px-6 bg-infiniumOffWhite scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-luxury font-bold text-infiniumBlack mb-4">Curated Selections</h2>
              <p className="text-gray-500 font-light tracking-wide">Select your statement from our signature departments.</p>
            </div>

            <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                  onViewDetails={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Statement Banner */}
        <section className="bg-infiniumBlack py-32 text-center text-white px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-luxury font-light italic leading-snug mb-12">
              “Elegance is the only beauty that never fades.”
            </h3>
            <div className="w-16 h-px bg-infiniumRed mx-auto mb-10"></div>
            <p className="text-white/40 uppercase tracking-[0.5em] text-xs font-bold">Infinium Signature</p>
          </div>
        </section>
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen} 
        items={cartItems} 
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onUpdateQty={handleUpdateQty}
      />

      <ProductDetails 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-infiniumBlack text-white px-8 py-4 rounded-full shadow-2xl border border-white/10 flex items-center gap-4 animate-fade-in-up">
          <div className="w-2 h-2 bg-infiniumRed rounded-full"></div>
          <span className="text-xs font-bold tracking-widest uppercase">{notification}</span>
        </div>
      )}
    </div>
  );
};

export default App;
