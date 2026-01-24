// src/components/layout/Header.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="SmartHire Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-emerald-600">SmartHire</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition">
              Home
            </Link>
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition">
              How it Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition">
              About
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-emerald-600 transition">
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-emerald-600 transition">
              Home
            </Link>
            <a href="#features" className="block text-gray-700 hover:text-emerald-600 transition">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-emerald-600 transition">
              How it Works
            </a>
            <a href="#about" className="block text-gray-700 hover:text-emerald-600 transition">
              About
            </a>
            <div className="pt-4 space-y-2">
              <Link 
                href="/login" 
                className="block text-center text-gray-700 border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 transition"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="block text-center bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}