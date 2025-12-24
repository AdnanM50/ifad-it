import React, { Children } from 'react'

const PrimaryButton = ({children, className,onClick}: {children: React.ReactNode, className?: string, onClick?: () => void}) => {
  return (
    <button
      className={`flex justify-center px-6 py-3 rounded-[8px] cursor-pointer  w-fit bg-[#F36A10] hover:bg-orange-600 duration-500 text-white !font-medium !font-inter  text-xl  whitespace-nowrap items-center ${className}  `}
      type="button"
      onClick={onClick}
    >
        <span className="">
          {children}
     
      </span>
    </button>
  )
}

export default PrimaryButton