'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const social = [
  { Icon: Facebook, color: 'hover:text-blue-400' },
  { Icon: Instagram, color: 'hover:text-pink-400' },
  { Icon: Twitter, color: 'hover:text-blue-300' },
  { Icon: Linkedin, color: 'hover:text-blue-500' },
  { Icon: Youtube, color: 'hover:text-red-500' },
]

const links = ['Home', 'About Us', 'Contact Us', 'Services', 'Gallery', 'Blog']

const Footer = () => {
  return (
    <footer className="bg-black text-white px-5 sm:px-10 font-inter lg:px-20 py-12">
      <div className="container grid gap-12 md:grid-cols-2 lg:grid-cols-3">

        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="IFAD IT" width={100} height={40} />
            <h2 className="text-lg sm:text-xl font-semibold hidden sm:block">Information & Technology Ltd.</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            IFAD IT LTD is a trusted IT company in Bangladesh, offering smart digital solutions including vehicle tracking, MIS & BI systems, software development, and IT security.
          </p>
          <div className="flex gap-4">
            {social.map(({ Icon, color }, i) => (
              <Link key={i} href="#" className={`${color} transition`}>
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Middle */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            {links.map((item, i) => (
              <li key={i}>
                <Link href={`/${item.toLowerCase().replace(/ /g, '')}`} className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2"><MapPin size={18} /><span className='max-w-[193px]'>IFAD Tower, Plot 7 (new), Tejgaon Industrial Area, Dhaka-1208</span></p>
            <p className="flex items-center gap-2"><Phone size={18} />09812114444</p>
            <p className="flex items-center gap-2"><Mail size={18} />contact@ifadit.com</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-gray-300">
        <p>© 2015–2025 IFAD IT Ltd. | Designed & Developed by Khan IT</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
