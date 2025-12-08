// Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-10 lg:px-20">
      {/* Desktop Layout */}
      <div className="container  hidden md:flex flex-row items-start">

        {/* Left Column - 505px wide */}
        <div className="w-[505px]">
          <div className="flex items-center mb-6">
            <Image
              src="/logo.png"
              alt="IFAD Information & Technology Ltd."
              width={500}
              height={500}
              className="mr-2 w-[100px] h-[37px]"
            />
            <h2 className="text-2xl font-semibold whitespace-pre xl:flex hidden amiko-regular">Information & Technology Ltd.</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            IFAD IT LTD is a trusted IT company in Bangladesh, offering smart digital solutions that include vehicle tracking, MIS & BI systems, software development, and IT security services.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-red-500 transition-colors">
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        {/* Middle Column - 275px gap + auto width */}
        <div className="ml-[275px] w-[200px]">
          <h3 className="font-semibold text-lg mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Right Column - 275px gap + auto width */}
        <div className="ml-[275px] w-[200px]">
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-start">
              <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
              IFAD Tower, Plot 7 (new),<br />
              Tejgaon Industrial Area,<br />
              Dhaka-1208
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 flex-shrink-0" size={18} />
              09812114444
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 flex-shrink-0" size={18} />
              contact@ifadit.com
            </p>
          </div>
        </div>

      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col space-y-8">

        {/* Left Column */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/ifad-logo.png"
              alt="IFAD Information & Technology Ltd."
              width={40}
              height={40}
              className="mr-2"
            />
            <h2 className="text-lg font-semibold">IFAD Information & Technology Ltd.</h2>
          </div>
          <p className="text-xs leading-relaxed mb-4">
            IFAD IT LTD is a trusted IT company in Bangladesh, offering smart digital solutions that include vehicle tracking, MIS & BI systems, software development, and IT security services.
          </p>
          <div className="flex space-x-3">
            <Link href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
              <Facebook size={18} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-red-500 transition-colors">
              <Youtube size={18} />
            </Link>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="font-semibold text-base mb-3">Important Links</h3>
          <ul className="space-y-1 text-xs">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="font-semibold text-base mb-3">Get In Touch</h3>
          <div className="space-y-2 text-xs">
            <p className="flex items-start">
              <MapPin className="mr-2 mt-0.5 flex-shrink-0" size={16} />
              IFAD Tower, Plot 7 (new),<br />
              Tejgaon Industrial Area,<br />
              Dhaka-1208
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 flex-shrink-0" size={16} />
              09812114444
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 flex-shrink-0" size={16} />
              contact@ifadit.com
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar - Always Full Width */}
      <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>Copyright ©2015 - 2025 By IFAD IT Ltd. | Designed & Developed by Khan IT</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;