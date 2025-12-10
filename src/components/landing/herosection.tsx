
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
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full items-center flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce mt-2" width="15" height="21" viewBox="0 0 15 21" fill="none">
  <g clip-path="url(#clip0_2204_1082)">
    <path d="M7.26867 20.8406C7.0928 20.8354 6.92549 20.7635 6.80076 20.6394L0.848912 14.8279C0.715507 14.6976 0.639328 14.5197 0.637134 14.3332C0.63494 14.1468 0.70691 13.967 0.837213 13.8336C0.967517 13.7002 1.14548 13.6241 1.33195 13.6219C1.51842 13.6197 1.69812 13.6916 1.83153 13.8219L7.75997 19.638C7.89141 19.7697 7.96524 19.9481 7.96524 20.1341C7.96524 20.3201 7.89141 20.4985 7.75997 20.63C7.69611 20.696 7.6198 20.7485 7.53546 20.7846C7.4511 20.8208 7.36043 20.8398 7.26867 20.8406Z" fill="white"/>
    <path d="M7.26868 20.8406C7.17535 20.8411 7.08288 20.8227 6.99684 20.7865C6.9108 20.7503 6.83297 20.6971 6.76801 20.63C6.63658 20.4985 6.56274 20.3201 6.56274 20.1341C6.56274 19.9481 6.63658 19.7697 6.76801 19.638L12.7059 13.8219C12.8393 13.6916 13.0189 13.6197 13.2054 13.6219C13.3919 13.6241 13.5698 13.7002 13.7002 13.8336C13.8305 13.967 13.9024 14.1468 13.9002 14.3332C13.898 14.5197 13.8218 14.6976 13.6884 14.8279L7.75999 20.6394C7.69535 20.7036 7.61869 20.7545 7.53438 20.789C7.45007 20.8234 7.35978 20.841 7.26868 20.8406Z" fill="white"/>
    <path d="M7.26864 20.8406C7.08249 20.8406 6.90397 20.7667 6.77234 20.6351C6.64071 20.5035 6.56677 20.3249 6.56677 20.1388V0.701746C6.56677 0.515599 6.64071 0.337076 6.77234 0.20545C6.90397 0.0738249 7.08249 -0.00012207 7.26864 -0.00012207C7.45478 -0.00012207 7.63331 0.0738249 7.76493 0.20545C7.89656 0.337076 7.9705 0.515599 7.9705 0.701746V20.1388C7.9705 20.3249 7.89656 20.5035 7.76493 20.6351C7.63331 20.7667 7.45478 20.8406 7.26864 20.8406Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_2204_1082">
      <rect width="14.3684" height="21" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
      </div>
    </section>
  )
}
