import type { ReactNode } from 'react';
import React from 'react';
import ThemeToggle from './ThemeToggle';

interface StickyNavbarProps {
  children: ReactNode;
  className?: string;
}

/**
 * @description StickyNavbar component renders a sticky navigation bar.
 * @param {Object} props - Props object for StickyNavbar component.
 * @param {ReactNode} props.children - Child elements to be rendered inside the StickyNavbar.
 * @param {string} [props.className=''] - Additional CSS classes for styling.
 */
export default function StickyNavbar({ children, className = '' }: StickyNavbarProps) {
  return (
    <div className={`sticky top-0 z-50 w-full border-b border-gray-300 bg-whitte ${className}`} data-testid='Sticky-div'>
    <div className="container mx-auto  flex justify-between  items-center">
      {children}
      <div className=" absolute lg:right-12 z-50 md:right-12 sm:right-0">
        <ThemeToggle />
      </div>
    </div>
  </div>
    
  );
}
