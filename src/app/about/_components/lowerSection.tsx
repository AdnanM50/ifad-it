import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  bgImageUrl?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Let's Build Something Great Together",
  subtitle = "Ready to transform your business with innovative IT solutions? We're here to help you succeed.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
}) => {
  return (
    <div
      className="relative  py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 z-50"
    >
      <div className="absolute bg-[url('/background.png')] bg-cover bg-center bg-no-repeat inset-0 bg-orange-500 bg-opacity-90"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] arial-font font-bold text-white mb-3 sm:mb-4 leading-tight md:leading-snug">
          {title}
        </h2>
        <p className="sm:text-lg text-base text-white  mb-6 sm:mb-8 font-inter mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonLink}
          className="inline-block bg-white text-orange-500 font-medium font-inter py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg  hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm sm:text-base"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CTASection;