"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import PrimaryButton from "../common/primary-button"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev)

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 w-full bg-[#FFFFFF] backdrop-blur-md z-50 border-b border-border">
      <nav className="container xl:px-0 px-4 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-[131px] h-[37px] object-fill"
          />
          <span className="mt-2 xl:flex hidden amiko-regular">
            Information & Technology Ltd.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-xl font-inter">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`transition-colors ${
                isActive(path) ? "text-[#F36A10]" : "text-[#1A1A1A] hover:text-primary"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <PrimaryButton>Contact Us</PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isActive(path) ? "text-[#F36A10]" : "text-foreground hover:text-primary"
                  }`}
                >
                  {name}
                </Link>
              ))}
              <PrimaryButton className="w-full">Contact Us</PrimaryButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
