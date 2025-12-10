"use client"

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react"

const ContactSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-10 bg-white rounded-xl ">
          {/* Left: Contact Form */}
          <div className="w-full max-w-[841px]">
            <h2 className="text-2xl font-semibold text-gray-900">
              Send Us Message
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Fill out the form below and we’ll get back to you shortly.
            </p>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Type your name"
                  className="mt-2 w-full h-12 px-4 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Type your phone number"
                    className="mt-2 w-full h-12 px-4 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className="mt-2 w-full h-12 px-4 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="mt-2 w-full px-4 py-3 rounded-md bg-gray-100 border border-transparent resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Info Panel */}
          <div className="bg-white rounded-xl max-w-[523px] p-6 lg:p-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              IFAD Information & Technology Limited has been delivering
              innovative IT solutions across Bangladesh since 2015. Whether
              you're planning a new project or need expert consultation, our
              team is ready to help you succeed.
            </p>

            {/* Address */}
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Office Address
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    IFAD Tower, Plot 7(new), Tejgaon Industrial Area, Dhaka-1208
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Phone
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Phone: 09612144444
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Email Us
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    contact@ifadgroup.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h4 className="text-base font-semibold text-gray-900">
                Follow Our Social Media
              </h4>
              <div className="flex items-center gap-4 mt-4">
                <Facebook className="w-5 h-5 text-blue-600 cursor-pointer hover:scale-110 transition" />
                <Instagram className="w-5 h-5 text-pink-500 cursor-pointer hover:scale-110 transition" />
                <Twitter className="w-5 h-5 text-sky-500 cursor-pointer hover:scale-110 transition" />
                <Linkedin className="w-5 h-5 text-blue-700 cursor-pointer hover:scale-110 transition" />
                <Youtube className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
