"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import PrimaryButton from "../common/primary-button"

export function Header({ data }: { data: any }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  if (!data) return null

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 w-full bg-[#FFFFFF] backdrop-blur-md z-50 border-b border-border">
      <nav className="container xl:px-0 px-4 py-6 flex items-center justify-between">

        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          <Image
            src={data.logo.image.url}
            alt={data.logo.image.alternativeText || "Logo"}
            width={1000}
            height={1000}
            className="w-[131px] h-[37px] object-fill"
          />
          <span className="mt-2 xl:flex hidden amiko-regular">
            {data.logo.logoText}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-xl font-inter">
          {data.navigation.map((item: any) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-[#F36A10]"
                  : "text-[#1A1A1A] hover:text-primary"
              }`}
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href={data.cta.href}
            target={data.cta.isExternal ? "_blank" : "_self"}
          >
            <PrimaryButton>{data.cta.text}</PrimaryButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {data.navigation.map((item: any) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-[#F36A10]"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.text}
                </Link>
              ))}

              <Link href={data.cta.href}>
                <PrimaryButton className="w-full">
                  {data.cta.text}
                </PrimaryButton>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
