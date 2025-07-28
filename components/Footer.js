"use client";

import { useState } from "react";
import { X } from 'lucide-react';

export default function Footer() {
    return (
      <footer className="bg-white pt-16 pb-8 border-t border-gray-200 font-sans">
  
        <div className="max-w-[1440px] mx-auto px-4 md:px-20">
  
          {/* Top Section */}
          <div className="flex flex-wrap justify-between mb-16 pb-10 border-b border-gray-200">
  
            {/* Logo & Vision */}
            <div className="max-w-sm mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-primary mb-4 text-blue-700">MORENT</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
  
            {/* Links */}
            <div className="flex flex-wrap gap-20">
  
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-dark mb-4">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">How it works</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Featured</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Partnership</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Bussiness Relation</a></li>
                </ul>
              </div>
  
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-dark mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Events</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Blog</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Podcast</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Invite a friend</a></li>
                </ul>
              </div>
  
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-dark mb-4">Socials</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Discord</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Instagram</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Twitter</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary transition">Facebook</a></li>
                </ul>
              </div>
  
            </div>
  
          </div>
  
          {/* Bottom Section */}
          <div className="flex flex-wrap justify-between items-center text-dark text-sm font-semibold">
            <p>© 2025 MORENT. All rights reserved</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy & Policy</a>
              <a href="#" className="hover:text-primary transition">Terms & Condition</a>
            </div>
          </div>
  
        </div>
  
      </footer>
    );
  }
  