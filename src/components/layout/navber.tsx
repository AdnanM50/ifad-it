"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PrimaryButton from "../common/primary-button";

export function Header({ data }: { data: any }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false); // For desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // For mobile
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  if (!data) return null;

  const isActive = (path: string) => pathname === path;

  // Helper to safely clear timeout
  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[#FFFFFF] backdrop-blur-md z-50 border-b border-border">
      <nav className="container xl:px-0 px-4 py-6 flex items-center justify-between">
        {/* Logo */}
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

          {/* Services Dropdown (Desktop) */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimeout();
              setServiceDropdownOpen(true);
            }}
            onMouseLeave={() => {
              closeTimeoutRef.current = setTimeout(() => {
                setServiceDropdownOpen(false);
              }, 300);
            }}
          >
            <button
              className={`transition-colors ${
                serviceDropdownOpen
                  ? "text-[#F36A10]"
                  : "text-[#1A1A1A] hover:text-primary"
              }`}
              onClick={() => {
                setServiceDropdownOpen(!serviceDropdownOpen);
                clearCloseTimeout();
              }}
            >
              Services
            </button>

            {serviceDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-border z-50"
                onMouseEnter={() => {
                  clearCloseTimeout();
                }}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(() => {
                    setServiceDropdownOpen(false);
                  }, 300);
                }}
              >
                <div className="py-2">
                  {data.services.map((service: any) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      target={service.isExternal ? "_blank" : "_self"}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(service.href)
                          ? "text-[#F36A10] font-inter bg-[#F9F9F9]"
                          : "text-[#1A1A1A] hover:bg-[#F9F9F9]"
                      }`}
                      onClick={() => {
                        setServiceDropdownOpen(false);
                        clearCloseTimeout();
                      }}
                    >
                      {service.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
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
                  className={`transition-colors font-inter ${
                    isActive(item.href)
                      ? "text-[#F36A10]"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.text}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <div className="">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex justify-between font-inter items-center w-full py-2 text-foreground hover:text-primary  ${
                    mobileServicesOpen ? "text-[#F36A10]" : ""
                  }`}
                >
                  Services
                  <span className={`transform transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 py-2 space-y-2 ">
                    {data.services.map((service: any) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className={`block text-sm font-inter transition-colors ${
                          isActive(service.href)
                            ? "text-[#F36A10]"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {service.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CTA */}
              <Link
                href={data.cta.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <PrimaryButton className="w-full">
                  {data.cta.text}
                </PrimaryButton>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}