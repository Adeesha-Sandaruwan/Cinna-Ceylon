
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

// Cinnamon-inspired color palette
const CINNAMON_BROWN = '#A0522D';
const CINNAMON_ORANGE = '#D2691E';
const CINNAMON_CREAM = '#FFF8E7';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

function Footer() {
  return (
  <footer style={{ background: '#8B4513', color: '#fff', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', boxShadow: '0 -4px 24px rgba(112,45,30,0.10)', backdropFilter: 'blur(8px)' }} aria-label="Site footer">
      {/* Top Row: Logo and About */}
  <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/20">
  <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
          {/* Logo - highlighted with cream background, border, and shadow */}
          <img
            src={logo}
            alt="CinnaCeylon Logo"
            className="h-32 md:h-40 w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            style={{ maxHeight: 180, display: 'block', filter: 'drop-shadow(0 4px 22px rgba(255,255,255,0.18))' }}
          />
          {/* About Text */}
          <div className="text-base font-medium tracking-wide" style={{ color: '#fff' }}>
            CinnaCeylon brings you the finest Ceylon cinnamon and spices, sourced directly from Sri Lanka. Quality and authenticity in every product.
          </div>
        </div>
      </div>
      {/* Middle Row: Links and Contact */}
  <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide" style={{ color: '#fff' }}>Quick Links</h2>
          <ul aria-label="Quick links">
            {quickLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-5 py-3 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 shadow-md tracking-wide"
                  style={{ color: '#8B4513', background: '#fff', margin: '0.25rem 0', letterSpacing: '0.04em' }}
                  onMouseOver={e => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }}
                  onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide" style={{ color: '#fff' }}>Contact Us</h2>
          <ul className="text-base space-y-3" aria-label="Contact information">
            <li>Email: <a href="mailto:info@cinnaceylon.com" className="rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 shadow-md px-4 py-2" style={{ color: '#8B4513', background: '#fff' }} onMouseOver={(e) => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}>info@cinnaceylon.com</a></li>
            <li>Phone: <a href="tel:+94112223344" className="rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 shadow-md px-4 py-2" style={{ color: '#8B4513', background: '#fff' }} onMouseOver={(e) => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}>+94 11 222 3344</a></li>
            <li style={{ color: '#fff' }}>Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      {/* Bottom Row: Social and Copyright */}
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/20">
        {/* Social Media Icons */}
        <div className="flex space-x-4" aria-label="Social media links">
          <a href="https://facebook.com" aria-label="Facebook" className="rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-200 hover:scale-110" style={{ color: '#8B4513', background: '#fff', padding: '0.75rem', borderRadius: '2rem', boxShadow: '0 2px 8px rgba(255,255,255,0.10)' }} onMouseOver={e => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }} onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}><FaFacebook size={26} /></a>
          <a href="https://twitter.com" aria-label="Twitter" className="rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-200 hover:scale-110" style={{ color: '#8B4513', background: '#fff', padding: '0.75rem', borderRadius: '2rem', boxShadow: '0 2px 8px rgba(255,255,255,0.10)' }} onMouseOver={e => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }} onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}><FaTwitter size={26} /></a>
          <a href="https://instagram.com" aria-label="Instagram" className="rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-200 hover:scale-110" style={{ color: '#8B4513', background: '#fff', padding: '0.75rem', borderRadius: '2rem', boxShadow: '0 2px 8px rgba(255,255,255,0.10)' }} onMouseOver={e => { e.currentTarget.style.background = '#F7E8D3'; e.currentTarget.style.color = '#D47E30'; }} onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#8B4513'; }}><FaInstagram size={26} /></a>
        </div>
        {/* Copyright */}
        <div className="text-xs" style={{ color: CINNAMON_CREAM }} aria-label="Copyright">
          &copy; {new Date().getFullYear()} CinnaCeylon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
