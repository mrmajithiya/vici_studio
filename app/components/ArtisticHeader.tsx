"use client";
import { Mail, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full py-1 px-5 bg-white text-black relative">
      {/* Left: Logo */}
      <div className="flex-1">
        <button className="text-2xl font-semibold tracking-tight">
          vici.<span className="font-normal">studio</span>
        </button>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex flex-1 justify-center">
        <nav className="flex gap-8 text-sm font-medium">
          <div className="flex gap-13">
            <a href="#" className="hover:text-gray-600 hover:underline transition-colors leading-7 ">
              ABOUT US
            </a>
            <a href="#" className="hover:text-gray-600 hover:underline transition-colors leading-7">
              PACKAGE
            </a>
          {/* </div> */}
          {/* <div className="flex flex-col items-start"> */}
            <a href="#" className="hover:text-gray-600 hover:underline transition-colors leading-7">
              PROJECT
            </a>
            <a href="#" className="hover:text-gray-600 hover:underline transition-colors leading-7">
              TESTIMONIAL
            </a>
          </div>
        </nav>
      </div>

      {/* Right: Contact + Menu */}
      <div className="flex-1 flex justify-end">
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center border-2 border-gray-300 rounded-full p-1 hover:bg-gray-100">
            <button className="flex items-center gap-2 px-3 py-1 text-sm transition-colors rounded-full">
              <Phone className="w-4 h-4 shrink-0" />
              Contact Us
            </button>
          </div>

          <button
            className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <a 
                href="#" 
                className="block text-base font-medium hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                * ABOUT US
              </a>
              <a 
                href="#" 
                className="block text-base font-medium hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                * PROJECT
              </a>
              <a 
                href="#" 
                className="block text-base font-medium hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                * PACKAGE
              </a>
              <a 
                href="#" 
                className="block text-base font-medium hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                * TESTIMONIAL
              </a>
            </div>

            <div className="border-t border-gray-200 space-y-2 pt-4">
              <button 
                className="flex items-center gap-2 w-full text-left text-base hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="w-4 h-4" />
                hello@sansbrothers.com
              </button>
              <button 
                className="flex items-center gap-2 w-full text-left text-base hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}