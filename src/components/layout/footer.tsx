"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { FacebookSVG, InstagramSVG, LinkedinSVG, PrinterstSVG, TwitterSVG, YoutubeSVG } from "./social-icons"


const socialMap: any = {
  facebook: FacebookSVG,
  instagram: InstagramSVG,
  twitter: TwitterSVG,
  linkdin: LinkedinSVG,
  youtube: YoutubeSVG,
  pinterest: PrinterstSVG,
}

const Footer = ({ data }: { data: any }) => {
  if (!data) return null

  return (
    <footer className="bg-[#141414] text-white font-inter pt-[79px] xl:px-0 px-4">
      <div className="container grid gap-12 md:grid-cols-2 pb-8 lg:grid-cols-3">

        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={data.logo.image.url}
              alt={data.logo.image.alternativeText}
              width={100}
              height={40}
            />
            <h2 className="text-lg sm:text-xl font-semibold hidden sm:block">
              {data.logo.logoText}
            </h2>
          </div>

          <p className="text-xl font-normal mb-6">
            {data.description}
          </p>

          <div className="flex gap-3 items-center">
            {Object.entries(data.social).map(([key, url]: any) => {
              const Icon = socialMap[key]
              if (!Icon) return null
              return (
                <Link key={key} href={url} target="_blank">
                  <Icon />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Links */}
        <div className="lg:ml-auto">
          <h3 className="font-semibold text-lg mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            {data.navigation.map((item: any) => (
              <li className="text-base" key={item.id}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:ml-auto">
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
          <div className="space-y-3 text-base">
            <p className="flex gap-2">
              <MapPin size={18} />
              <span className="whitespace-pre-line">
                {data.contact.adress}
              </span>
            </p>
            <p className="flex gap-2">
              <Phone size={18} />{data.contact.call}
            </p>
            <p className="flex gap-2">
              <Mail size={18} />{data.contact.email}
            </p>
          </div>
        </div>
      </div>

      <div className="py-6 border-t container border-gray-700 flex flex-col sm:flex-row gap-3 justify-between">
        <p>{data.copyright} | <a target="https://www.khanit.com.bd/" href="https://www.khanit.com.bd/">Designed & Developed by Khan IT</a></p>
        <div className="flex gap-4">
          {data.policyLinks.map((item: any) => (
            <Link key={item.id} href={item.href}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
