
import React, { useState } from 'react';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

// Cinnamon-inspired color palette
const CINNAMON_BROWN = '#A0522D';
const CINNAMON_ORANGE = '#D2691E';
const CINNAMON_CREAM = '#FFF8E7';

// Only the required navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0); // Placeholder for cart logic

  return (
  <header className="sticky top-0 z-50 shadow-lg backdrop-blur-md" style={{ background: '#8B4513', color: '#fff', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', boxShadow: '0 4px 24px rgba(112,45,30,0.10)' }}>
      {/* Semantic nav element for accessibility */}
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Main navigation">
        {/* Logo on the left */}
  <a href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" aria-label="CinnaCeylon Home">
          <img
            src={logo}
            alt="CinnaCeylon Logo"
            className="h-20 md:h-24 w-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
            style={{ maxHeight: 110, display: 'block', filter: 'drop-shadow(0 4px 22px rgba(255,255,255,0.18))' }}
          />
        </a>
        {/* Navigation links in the center (desktop) */}
  <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 shadow-md tracking-wide"
              style={{ color: '#8B4513', background: '#fff', margin: '0 0.25rem', letterSpacing: '0.04em' }}
              onMouseOver={e => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }}
              onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Right side: search, cart, profile */}
  <div className="flex items-center space-x-4">
          {/* Search Bar (optional, can be removed if not needed) */}
          <form className="hidden sm:flex" role="search" aria-label="Site search">
            <input
              type="search"
              placeholder="Search..."
              className="rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              style={{ border: '1px solid #fff', background: '#fff', color: '#8B4513', fontFamily: 'inherit' }}
              aria-label="Search"
            />
            <button type="submit" className="px-4 py-2 rounded-r font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 shadow-md"
              style={{ background: '#8B4513', color: 'white', fontFamily: 'inherit' }} aria-label="Submit search"
              onMouseOver={e => e.currentTarget.style.background = '#D47E30'}
              onMouseOut={e => e.currentTarget.style.background = '#8B4513'}>
              Search
            </button>
          </form>
          {/* Cart Icon */}
          <button className="relative focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-200 hover:scale-110" aria-label="View cart">
            <FaShoppingCart className="text-2xl" style={{ color: '#fff' }} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
            )}
          </button>
          {/* Login/Profile */}
          <button className="focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-200 hover:scale-110" aria-label="Login or profile">
            <FaUserCircle className="text-2xl" style={{ color: '#fff' }} />
          </button>
          {/* Hamburger menu for mobile */}
          <button
            className={`md:hidden ml-2 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-200 ${menuOpen ? 'rotate-90 scale-110' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes className="text-3xl" style={{ color: '#fff', transition: 'color 0.2s' }} /> : <FaBars className="text-3xl" style={{ color: '#fff', transition: 'color 0.2s' }} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 py-2 space-y-2" style={{ background: '#8B4513' }} role="menu" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block px-2 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-white"
              style={{ color: '#8B4513', background: '#fff', margin: '0.25rem 0', letterSpacing: '0.04em' }}
              onMouseOver={e => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }}
              onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}
              aria-label={link.name}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* Optional: search bar in mobile menu */}
          <form className="flex mt-2" role="search" aria-label="Site search">
            <input
              type="search"
              placeholder="Search..."
              className="rounded-l px-2 py-1 focus:outline-none focus:ring-2 focus:ring-white w-full"
              style={{ border: '1px solid #fff', background: '#fff', color: '#8B4513' }}
              aria-label="Search"
            />
            <button type="submit" className="px-3 py-1 rounded-r font-medium focus:outline-none focus:ring-2 focus:ring-white"
              style={{ background: '#8B4513', color: 'white' }} aria-label="Submit search">
              Search
            </button>
          </form>
        </nav>
      )}
    </header>
  );
}

export default Header;
