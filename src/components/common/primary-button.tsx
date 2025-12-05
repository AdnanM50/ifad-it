import React, { Children } from 'react'

const PrimaryButton = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <button
      className={`flex justify-center px-6 py-3 rounded-[8px]  w-fit bg-[#F36A10] text-white !font-medium !font-inter  text-xl  whitespace-nowrap items-center ${className}  `}
      type="button"
    >
      {/* <span className="inline-flex gap-1.5 flex-[0_0_auto] items-center relative"> */}
        <span className="">
          {children}
        {/* </span> */}
      </span>
    </button>
  )
}

export default PrimaryButton