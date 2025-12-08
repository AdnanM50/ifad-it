
import PrimaryButton from "../common/primary-button"

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[815px] pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl arial-font lg:text-6xl font-bold text-white mb-4 max-w-4xl text-balance">
          Smart Solutions for a Connected & Secure Future
        </h1>
        <p className="text-xl md:text-2xl text-white/90 !font-inter mb-8 max-w-2xl">
          Vehicle Tracking | Analytics | Software Development
        </p>
        <PrimaryButton >
          Get in Touch
        </PrimaryButton>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
