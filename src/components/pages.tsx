import Image from 'next/image'
import React from 'react'

export default function Pages() {
  return (
    <div className="w-full h-full items-center">
      <div className="w-full h-[44px] text-blue-dark font-space font-bold text-4xl text-center mt-[157px] leading-[44px]">
        How To Grow Your Business
      </div>
      <div className="w-[495px] h-[48px] opacity-60 text-blue-dark font-inter text-base text-center ml-[470px] mt-[10px]">
        Class aptent taciti sociosqu ad litora torquen conubia nostramase
        inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
      </div>
      <div className="flex flex-row ml-[120px] mt-[40px]">
        <div
          className="w-[370px] h-[326px] bg-white shadow-xl flex flex-col-reverse transition duration-300 ease-in-out hover:scale-105"
          style={{ boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="w-[267px] opacity-70 text-center text-blue-dark text-lg font-inter leading-loose ml-[51px] mb-[53px]">
            Class aptent taciti sociosqu litora torquen conubia nostram.
          </div>
          <div className="w-full text-blue-dark text-[21px] text-center font-bold font-space leading-[44px]">
            Active User Analytics
          </div>
          <div className="w-full flex justify-center mb-[24px]">
            <Image
              src="/pages/icon1.svg"
              width={70}
              height={70}
              alt="Active User Analytics icon"
            />
          </div>
        </div>
        <div
          className="w-[370px] h-[326px] bg-white shadow-xl ml-[30px] flex flex-col-reverse transition duration-300 ease-in-out hover:scale-105"
          style={{ boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="w-[267px] opacity-70 text-center text-blue-dark text-lg font-inter leading-loose ml-[51px] mb-[53px]">
            Morbi eget aliquet finibus, best condimentum aliquet quam.
          </div>
          <div className="w-full text-blue-dark text-[21px] text-center font-bold font-space leading-[44px]">
            Smart Coding Development
          </div>
          <div className="w-full flex justify-center mb-[24px]">
            <Image
              src="/pages/icon2.svg"
              width={70}
              height={70}
              alt="Smart Coding Development icon"
            />
          </div>
        </div>
        <div
          className="w-[370px] h-[326px] bg-white shadow-xl ml-[30px] flex flex-col-reverse transition duration-300 ease-in-out hover:scale-105"
          style={{ boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="w-[267px] opacity-70 text-center text-blue-dark text-lg font-inter leading-loose ml-[51px] mb-[53px]">
            Quisque magna, sollicitudin vitae, lobortis feugiat arcu.
          </div>
          <div className="w-full text-blue-dark text-[21px] text-center font-bold font-space leading-[44px]">
            User Friendly Interface
          </div>
          <div className="w-full flex justify-center mb-[24px]">
            <Image
              src="/pages/icon3.svg"
              width={70}
              height={70}
              alt="User Friendly Interface icon"
            />
          </div>
        </div>
      </div>
      <div className="w-full opacity-70 text-center mt-[96px]">
        <span
          style={{
            color: '#141f39',
            fontSize: 'text-base',
            fontWeight: 'normal',
            fontFamily: 'Inter',
            lineHeight: 'normal',
          }}
        >
          Approx{' '}
        </span>
        <span
          style={{
            color: '#3921f5',
            fontSize: 'text-xl',
            fontWeight: 'bold',
            fontFamily: 'Inter',
            lineHeight: 'normal',
          }}
        >
          875+
        </span>
        <span
          style={{
            color: '#141f39',
            fontSize: 'text-base',
            fontWeight: 'normal',
            fontFamily: 'Inter',
            lineHeight: 'normal',
          }}
        >
          {' '}
          team members ready to online support for you
        </span>
      </div>
    </div>
  )
}
