"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-[#FFFFFF] backdrop-blur-md z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          {/* <span className="text-primary text-3xl">🚀</span> */}
          <Image src="/logo.png" alt="Logo" width={1000} height={1000} className="w-[131px] h-[37px] object-fill" />
          <span className="text-foreground amiko-regular">Information & Technology Ltd.</span>
          {/* <span className="text-primary">IT</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden text-xl md:flex items-center text-[#1A1A1A] gap-8">
          <Link href="#" className=" hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#" className=" hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className=" hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link href="#" className=" hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="#" className=" hover:text-primary transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Solutions
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">Contact Us</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}