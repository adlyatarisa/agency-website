import React from 'react'

export default function Achievement() {
  return (
    <div className="w-full h-[464px] flex justify-center items-center flex-col bg-blue-primary mt-20 mb-20">
      <div className="w-[533px] h-[51px] text-center text-white text-4xl font-bold font-space leading-[44px]">
        We Help To GrowYour Business
      </div>
      <div className="w-[526px] h-[52px] opacity-70 text-center text-white text-base font-normal font-inter leading-normal mt-5">
        Quisque fermentum porta tincidunt. Interdum semper. Pellentesque
        facilisis augue dolor mollis suscipit erat libero fermentum.
      </div>
      <div className="flex flex-row gap-[220px]">
        <div className="w-[119px] flex flex-col mt-[40px]">
          <div className="w-[109.91px] text-white text-5xl font-bold font-space leading-[60px]">
            142
          </div>
          <div className="w-[119px] text-white text-lg font-thin font-jakarta leading-7">
            New Features
          </div>
        </div>
        <div className="w-[119px] flex flex-col mt-[40px]">
          <div className="w-[109.91px] text-white text-5xl font-bold font-space leading-[60px]">
            28K
          </div>
          <div className="w-[119px] text-white text-lg font-thin font-['Plus Jakarta Sans'] leading-7">
            APP Download
          </div>
        </div>
        <div className="w-[119px] flex flex-col mt-[40px]">
          <div className="w-[109.91px] text-white text-5xl font-bold font-space leading-[60px]">
            53M
          </div>
          <div className="w-[119px] text-white text-lg font-thin font-['Plus Jakarta Sans'] leading-7">
            Active Users
          </div>
        </div>
        <div className="w-[119px] flex flex-col mt-[40px]">
          <div className="w-[109.91px] text-white text-5xl font-bold font-space leading-[60px]">
            90%
          </div>
          <div className="w-[119px] text-white text-lg font-thin font-['Plus Jakarta Sans'] leading-7">
            Positive Rates
          </div>
        </div>
      </div>
    </div>
  )
}
