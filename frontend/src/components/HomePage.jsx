import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BeakerIcon, GlobeAltIcon, LockClosedIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Header from './Header'; // Assuming you have these components
import Footer from './Footer'; // Assuming you have these components

// A luxurious, modern color palette
const COLORS = {
  RICH_GOLD: '#c5a35a',
  DEEP_CINNAMON: '#CC7722',
  WARM_BEIGE: '#F5EFE6',
  DARK_SLATE: '#2d2d2d',
  SOFT_WHITE: '#FCFBF8',
};

// High-quality images for a premium feel
const carouselImages = [
  { src: 'https://images.unsplash.com/photo-1558961363-fa8fdfc50d0e?auto=format&fit=crop&w=1200&q=80', alt: 'Ceylon cinnamon quills bundled together', caption: 'Authentic Ceylon Cinnamon Quills' },
  { src: 'https://images.unsplash.com/photo-1629837234228-71b63c780503?auto=format&fit=crop&w=1200&q=80', alt: 'Aromatic spices in rustic bowls', caption: 'A Symphony of Spices' },
  { src: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80', alt: 'Finely ground cinnamon powder', caption: 'Pure & Potent Powder' },
];

const featuredProducts = [
  { name: 'Heirloom Cinnamon Sticks (50g)', img: 'https://images.unsplash.com/photo-1556910110-a5a6350d39fa?auto=format&fit=crop&w=400&q=80', price: '$14.99' },
  { name: 'Organic Cinnamon Powder (100g)', img: 'https://images.unsplash.com/photo-1629837234228-71b63c780503?auto=format&fit=crop&w=400&q=80', price: '$10.99' },
  { name: 'Spiced Chai Tea Blend', img: 'https://images.unsplash.com/photo-1597318181433-2c529f7f4594?auto=format&fit=crop&w=400&q=80', price: '$18.50' },
  { name: 'Luxury Spice Gift Box', img: 'https://images.unsplash.com/photo-1579488069253-6a21a4f8d553?auto=format&fit=crop&w=400&q=80', price: '$39.99' },
];

// Reusable animated section component
const AnimatedSection = ({ children, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Main HomePage Component
function HomePage() {
  return (
    <div style={{ backgroundColor: COLORS.SOFT_WHITE, fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1652209804572-91b24a2bbb97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative text-center p-8"
          >
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.SOFT_WHITE }}
            >
              The Soul of Ceylon Spices
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ color: COLORS.WARM_BEIGE }}>
              Discover the world's finest cinnamon and aromatic treasures, sourced directly from the heart of Sri Lanka.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/products"
                className="px-8 py-3 font-semibold text-white transition-all duration-300 transform hover:scale-105 rounded-full shadow-lg"
                style={{ backgroundColor: COLORS.RICH_GOLD }}
              >
                Explore Collection
              </a>
              <a
                href="/about"
                className="px-8 py-3 font-semibold text-white transition-colors duration-300 border border-white/50 rounded-full hover:bg-white/10"
              >
                Our Story
              </a>
            </div>
          </motion.div>
        </section>

        {/* Intro/Benefits Section */}
        <AnimatedSection className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
               <p className="font-semibold" style={{ color: COLORS.RICH_GOLD }}>Our Promise</p>
               <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.DARK_SLATE }}>
                 Essence of Purity & Tradition
               </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <GlobeAltIcon className="h-10 w-10 mb-4" style={{ color: COLORS.RICH_GOLD }}/>
                <h3 className="text-lg font-semibold" style={{ color: COLORS.DEEP_CINNAMON }}>Directly Sourced</h3>
                <p className="mt-2 text-gray-600">From the lush groves of Sri Lanka to your kitchen, ensuring unparalleled freshness.</p>
              </div>
              <div className="flex flex-col items-center">
                <SparklesIcon className="h-10 w-10 mb-4" style={{ color: COLORS.RICH_GOLD }}/>
                <h3 className="text-lg font-semibold" style={{ color: COLORS.DEEP_CINNAMON }}>Certified Authentic</h3>
                <p className="mt-2 text-gray-600">Only true Ceylon Cinnamon (Cinnamomum verum), celebrated for its delicate flavor.</p>
              </div>
              <div className="flex flex-col items-center">
                <BeakerIcon className="h-10 w-10 mb-4" style={{ color: COLORS.RICH_GOLD }}/>
                <h3 className="text-lg font-semibold" style={{ color: COLORS.DEEP_CINNAMON }}>Ethically Harvested</h3>
                <p className="mt-2 text-gray-600">Supporting local communities and sustainable farming practices with every purchase.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Featured Products Section */}
        <AnimatedSection className="py-24 sm:py-32" style={{ backgroundColor: COLORS.WARM_BEIGE }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.DARK_SLATE }}>
                        Curated for the Connoisseur
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        A selection of our finest products, chosen to inspire your culinary adventures.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <div key={product.name} className="group relative text-center">
                            <div className="overflow-hidden rounded-lg">
                                <img src={product.img} alt={product.name} className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                            </div>
                            <h3 className="mt-4 text-md font-semibold" style={{ color: COLORS.DEEP_CINNAMON }}>{product.name}</h3>
                            <p className="mt-1 text-lg font-bold" style={{ color: COLORS.RICH_GOLD }}>{product.price}</p>
                            <button 
                                className="mt-4 px-6 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                                style={{ backgroundColor: COLORS.DEEP_CINNAMON }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

        {/* Brand Story Section */}
        <AnimatedSection className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.DARK_SLATE }}>
                 From Our Groves to Your Table
               </h2>
               <p className="mt-6 text-gray-700 leading-relaxed">
                  For generations, our family has cultivated spices in the misty highlands of Ceylon. We follow time-honored traditions, hand-peeling our cinnamon and sun-drying our cloves to capture the potent, authentic flavors of our island home. We believe in a connection to the earth and a commitment to quality that you can taste in every pinch.
               </p>
               <a href="/about" className="inline-block mt-8 px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-full shadow-lg" style={{ backgroundColor: COLORS.DEEP_CINNAMON, color: COLORS.SOFT_WHITE }}>
                  Discover Our Heritage
               </a>
             </div>
             <div className="order-1 md:order-2">
                
                <img src="https://images.unsplash.com/photo-1590088789013-09733a75960a?auto=format&fit=crop&w=800&q=80" alt="Lush cinnamon plantation in Sri Lanka" className="rounded-lg shadow-2xl"/>
             </div>
          </div>
        </AnimatedSection>


        {/* Newsletter Section */}
        <section className="py-24 sm:py-32 text-center" style={{ backgroundColor: COLORS.DEEP_CINNAMON }}>
           <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.SOFT_WHITE }}>
                Join the Spice Route
              </h2>
              <p className="mt-4 text-lg" style={{ color: COLORS.WARM_BEIGE }}>
                Receive exclusive offers, recipes, and stories from the world of Ceylon spices.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                 <input 
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 text-black rounded-full border-none focus:outline-none focus:ring-2"
                    style={{ backgroundColor: COLORS.SOFT_WHITE, '::placeholder': { color: '#9ca3af' }, ringColor: COLORS.RICH_GOLD }}
                    required
                 />
                 <button type="submit" className="px-8 py-3 font-semibold text-white transition-transform duration-300 transform hover:scale-105 rounded-full" style={{ backgroundColor: COLORS.RICH_GOLD }}>
                    Subscribe
                 </button>
              </form>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default HomePage;