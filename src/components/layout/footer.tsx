'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/logo.svg" // Your company logo (place in public/logo.svg)
              alt="IFAD IT LTD"
              className="h-8 mr-2"
            />
            <span className="font-bold text-lg">Information & Technology Ltd.</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            IFAD IT LTD is a trusted IT company in Bangladesh, offering smart digital solutions that include vehicle tracking, MIS & BI systems, software development, and IT security services.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M22.675 0H1.325C.593 0 0 .576 0 1.28v21.44c0 .704.593 1.28 1.325 1.28h21.35c.732 0 1.325-.576 1.325-1.28V1.28C24 .576 23.407 0 22.675 0zm-11.789 21.44h-2.958V11.79H4.97v-3.331h2.958V5.64c0-2.967 1.856-4.503 4.537-4.503 1.275 0 2.392.104 2.726.152v3.16l-1.874.01c-1.472 0-1.758.704-1.758 1.74v2.552h3.515l-.002 3.331h-3.513v9.65z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M22.46 0H1.54C.69 0 0 .69 0 1.54v20.92c0 .85.69 1.54 1.54 1.54h20.92c.85 0 1.54-.69 1.54-1.54V1.54C24 .69 23.31 0 22.46 0zM7.11 20.63H4.7V10.25H7.11v10.38zm-1.21-11.7c-.8 0-1.45-.65-1.45-1.45s.65-1.45 1.45-1.45 1.45.65 1.45 1.45-.65 1.45-1.45 1.45zm12.64 11.7h-2.41V15.5c0-1.28-.46-2.15-1.6-2.15-1.13 0-1.6.87-1.6 2.15v5.13h-2.41V10.25h2.41v1.41c.8-.78 1.6-1.08 2.41-1.08 1.45 0 2.41.87 2.41 2.41v7.64z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M16.806 0H7.194C3.224 0 0 3.224 0 7.194v9.612C0 20.776 3.224 24 7.194 24h9.612c3.97 0 7.194-3.224 7.194-7.194V7.194C24 3.224 20.776 0 16.806 0zm-4.803 17.675c-4.153 0-7.52-3.367-7.52-7.52s3.367-7.52 7.52-7.52 7.52 3.367 7.52 7.52-3.367 7.52-7.52 7.52z"/>
                <path d="M12 4.78c-2.52 0-4.56 2.04-4.56 4.56s2.04 4.56 4.56 4.56 4.56-2.04 4.56-4.56-2.04-4.56-4.56-4.56z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M16.806 0H7.194C3.224 0 0 3.224 0 7.194v9.612C0 20.776 3.224 24 7.194 24h9.612c3.97 0 7.194-3.224 7.194-7.194V7.194C24 3.224 20.776 0 16.806 0zm-4.803 17.675c-4.153 0-7.52-3.367-7.52-7.52s3.367-7.52 7.52-7.52 7.52 3.367 7.52 7.52-3.367 7.52-7.52 7.52z"/>
                <path d="M12 4.78c-2.52 0-4.56 2.04-4.56 4.56s2.04 4.56 4.56 4.56 4.56-2.04 4.56-4.56-2.04-4.56-4.56-4.56z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M16.806 0H7.194C3.224 0 0 3.224 0 7.194v9.612C0 20.776 3.224 24 7.194 24h9.612c3.97 0 7.194-3.224 7.194-7.194V7.194C24 3.224 20.776 0 16.806 0zm-4.803 17.675c-4.153 0-7.52-3.367-7.52-7.52s3.367-7.52 7.52-7.52 7.52 3.367 7.52 7.52-3.367 7.52-7.52 7.52z"/>
                <path d="M12 4.78c-2.52 0-4.56 2.04-4.56 4.56s2.04 4.56 4.56 4.56 4.56-2.04 4.56-4.56-2.04-4.56-4.56-4.56z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M16.806 0H7.194C3.224 0 0 3.224 0 7.194v9.612C0 20.776 3.224 24 7.194 24h9.612c3.97 0 7.194-3.224 7.194-7.194V7.194C24 3.224 20.776 0 16.806 0zm-4.803 17.675c-4.153 0-7.52-3.367-7.52-7.52s3.367-7.52 7.52-7.52 7.52 3.367 7.52 7.52-3.367 7.52-7.52 7.52z"/>
                <path d="M12 4.78c-2.52 0-4.56 2.04-4.56 4.56s2.04 4.56 4.56 4.56 4.56-2.04 4.56-4.56-2.04-4.56-4.56-4.56z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 mt-1">
                <path d="M12 2C8.686 2 6 4.686 6 8c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zm0 10.2c-2.3 0-7 1.1-7 3.2v4h14v-4c0-2.1-4.7-3.2-7-3.2z"/>
              </svg>
              <span>IFAD Tower, Plot 7 (new), Tejgaon Industrial Area, Dhaka-1208</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2">
                <path d="M16.5 14.5L12 10l-4.5 4.5V12H5V7h5V5h2v2h5v5h-2v2.5z"/>
              </svg>
              <span>0981211444</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2">
                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm-8-2v2c0 4.42 3.58 8 8 8s8-3.58 8-8V8c0-4.42-3.58-8-8-8s-8 3.58-8 8z"/>
              </svg>
              <span>contact@ifadit.com</span>
            </div>
          </div>
        </div>

        {/* Empty column for spacing / future use */}
        <div></div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div>
          Copyright ©2015 - 2025 By IFAD IT Ltd. | Designed & Developed by Khan IT
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;