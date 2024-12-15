"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CircularLogo } from '../CircularLogo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({
    transform: 'translateY(0)',
    transition: 'transform 0.3s ease-in-out'
  });
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const propertiesSection = document.querySelector('.properties-section');
      
      if (propertiesSection) {
        const propertiesSectionTop = propertiesSection.getBoundingClientRect().top + window.scrollY;
        
        // If we haven't reached the properties section yet
        if (currentScrollY < propertiesSectionTop) {
          // Calculate how much to move the header based on scroll
          const scrollDiff = currentScrollY - lastScrollY;
          const newTransform = Math.max(-100, Math.min(0, scrollDiff));
          
          setHeaderStyle({
            transform: `translateY(${newTransform}px)`,
            transition: 'transform 0.3s ease-in-out'
          });
        } else {
          // Fix the header at its hidden position when properties section is reached
          setHeaderStyle({
            transform: 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out'
          });
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className="bg-header shadow-sm fixed w-full top-0 z-50"
      style={headerStyle}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-primary-900 hover:text-accent transition-colors">
            <CircularLogo text="YELLOW ESTATE" size={80} color="currentColor" />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden p-2 relative w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[0.35rem]' : ''
                }`}
              />
              <span 
                className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[0.35rem]' : ''
                }`}
              />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-white hover:text-accent">
              Properties
            </Link>
            <Link href="/about" className="text-white hover:text-accent">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-accent">
              Contact
            </Link>
            <Link href="/login" className="btn-primary">
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              href="/properties" 
              className="text-white hover:text-accent px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-accent px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-accent px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/login" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}; 