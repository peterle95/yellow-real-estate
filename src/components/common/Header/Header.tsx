"use client";

import Link from 'next/link';
import { useState } from 'react';
import { CircularLogo } from '../CircularLogo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-primary-900 hover:text-accent transition-colors">
            <CircularLogo text="YELLOW ESTATE" size={80} color="currentColor" />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-primary-600 hover:text-primary-900">
              Properties
            </Link>
            <Link href="/about" className="text-primary-600 hover:text-primary-900">
              About
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-900">
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
              className="text-primary-600 hover:text-primary-900 px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              href="/about" 
              className="text-primary-600 hover:text-primary-900 px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-primary-600 hover:text-primary-900 px-2 py-1"
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