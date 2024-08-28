import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="hero relative">
      <div className="flex flex-row items-center">
        <div className="group1">
          <div className="flex flex-row items-center ml-[130px] mt-[140px]">
            <div className="red-ellipse ml-[58px] mt-[43px]">
              <Image
                src="/hero/red-ellipse.svg"
                width={20}
                height={20}
                alt="red-ellipse"
              />
            </div>
            <div className="ml-[430px]">
              <Image
                src="/hero/Vector.svg"
                width={48}
                height={63}
                alt="green-vector"
              />
            </div>
          </div>
          <div className="w-[675px] h-[160px] text-blue-dark text-[70px] leading-[80px] font-bold font-space ml-[120px] mt-[28px]">
            Smart-Thinking & Innovative Solution.
          </div>
          <div className="w-[571px] opacity-70 text-[#4f4f4f] text-lg font-normal font-['Inter'] leading-loose ml-[120px] mt-[24px]">
            Class aptent taciti sociosqu ad litora torquent conubia nostrama
            inceptos himenaeos. Donec tristique nibh ipsum dignissim.
          </div>
          <div className="flex flex-row items-center ml-[120px] mt-[36px]">
            <Link
              href="/pages"
              className="bg-blue-primary rounded-xl py-[16px] px-[20px] items-center flex text-white text-base font-inter leading-normal hover:bg-[#7784ee]"
            >
              Discover More
            </Link>
            <div className="text-blue-dark text-base font-semibold font-inter leading-normal ml-[30px] mr-[9px]">
              Explore Service
            </div>
            <Link href="/pricing">
              <Image src="/hero/arrow.svg" width={24} height={24} alt="arrow" />
            </Link>
          </div>
          <div className="flex flex-row items-center ml-[120px] mt-[26px]">
            <Image src="/hero/check.svg" width={24} height={24} alt="arrow" />
            <div className="opacity-60 text-[#141f39] text-base font-normal font-inter leading-normal ml-[8px] mr-[20px]">
              Get 15 days free trial
            </div>
            <Image src="/hero/check.svg" width={24} height={24} alt="arrow" />
            <div className="opacity-60 text-[#141f39] text-base font-normal font-inter leading-normal ml-[8px] mr-[20px]">
              No credit card is required
            </div>
            <Image src="/hero/check.svg" width={24} height={24} alt="arrow" />
            <div className="opacity-60 text-[#141f39] text-base font-normal font-inter leading-normal ml-[8px]">
              Cancel anytime
            </div>
          </div>
        </div>
        <div className="group2 ml-[180px]">
          <div className="absolute w-[381px] h-[381px] opacity-40 bg-green-light rounded-full blur-[300px]" />
          <div className="absolute w-[298px] h-[281px] opacity-5 bg-[#4732b9] rounded-[19px] mt-[-100px]" />
          <div className="kotak1 absolute w-[236.85px] h-[222.32px] bg-white rounded-lg shadow-sm mt-[-190px] ml-[-165px]">
            <div className="absolute graph ml-[24.8px] mt-[110.62px]">
              <Image
                src="/hero/graph.svg"
                width={180}
                height={88.6}
                alt="graph"
              />
            </div>
            <div className="absolute w-[46.17px] h-[56.43px] bg-[#3921f5] rounded-[10.26px] mt-[25.65px] ml-[25.65px]">
              <div className="profile-icon mt-[12px] ml-[8px]">
                <Image
                  src="/hero/icon.svg"
                  width={30}
                  height={30}
                  alt="profile-icon"
                />
              </div>
            </div>
            <div className="absolute font-inter text-[#4f4f4f] text-xs font-light ml-[90px] mt-[35px]">
              User Active Possibility
            </div>
            <div className="w-[124px] h-[25px] ml-[90px] mt-[55px]">
              <span
                style={{
                  color: '#3921f5',
                  fontSize: '2xl',
                  fontWeight: 'bold',
                  fontFamily: 'Inter',
                  letterSpacing: 'wide',
                }}
              >
                $
              </span>
              <span
                style={{
                  color: '#141f39',
                  fontSize: '2xl',
                  fontWeight: 'bold',
                  fontFamily: 'Inter',
                  letterSpacing: 'wide',
                }}
              >
                44.3578
              </span>
            </div>
          </div>
          <div className="kotak2 absolute w-[353.97px] h-[353.97px] bg-white rounded-[21.71px] shadow-lg mt-[63px] ml-[-65px]">
            <div className="w-[316.21px] h-[201.53px] left-[18.88px] top-[133.57px] absolute">
              <div className="w-[316.21px] h-[0px] left-0 top-0 absolute opacity-20 border border-dashed border-[#141f39]"></div>
              <div className="w-[316.21px] h-[0px] left-[-0px] top-[28.79px] absolute opacity-20 border border-dashed border-[#141f39]"></div>
              <div className="w-[316.21px] h-[0px] left-[-0px] top-[57.58px] absolute opacity-20 border border-dashed border-[#141f39]"></div>
              <div className="w-[316.21px] h-[0px] left-[-0px] top-[86.37px] absolute opacity-20 border border-dashed border-[#141f39]"></div>
              <div className="w-[316.21px] h-[0px] left-[-0px] top-[115.16px] absolute opacity-20 border border-dashed border-[#141f39]"></div>
              <div className="w-[316.21px] h-[0px] left-[-0px] top-[143.95px] absolute opacity-20 border border-dashed border-[#141f39]"></div>
              <div className="w-[316.21px] h-[0px] left-[-0px] top-[172.74px] absolute opacity-20 border border-dashed border-[#141f39]"></div>
              <div className="w-[316.21px] h-[0px] left-[-0px] top-[201.53px] absolute opacity-20 border border-dashed border-[#141f39]"></div>
            </div>
            <div className="w-[316.21px] h-[118.35px] left-[18.88px] top-[146.78px] absolute"></div>
            <div className="w-[216.63px] h-[11.33px] left-[18.88px] top-[80.23px] absolute">
              <div className="w-[58.05px] h-[11.33px] left-[158.58px] top-0 absolute">
                <div className="w-[38.23px] h-[11.33px] left-[19.82px] top-[-0px] absolute text-[#27d692] text-[9.44px] font-normal font-inter">
                  Molestie
                </div>
                <div className="w-[11.33px] h-[11.33px] left-0 top-0 absolute bg-[#27d692] rounded-[35.40px]" />
              </div>
              <div className="w-[45.78px] h-[11.33px] left-[84.48px] top-0 absolute">
                <div className="w-[25.96px] h-[11.33px] left-[19.82px] top-[-0px] absolute text-[#d4767f] text-[9.44px] font-normal font-inter">
                  Morbi
                </div>
                <div className="w-[11.33px] h-[11.33px] left-0 top-0 absolute bg-[#d4767f] rounded-[35.40px]" />
              </div>
              <div className="w-[55.69px] h-[11.33px] left-0 top-0 absolute">
                <div className="w-[35.87px] h-[11.33px] left-[19.82px] top-[-0px] absolute text-[#4830e2] text-[9.44px] font-normal font-inter">
                  Aliquam
                </div>
                <div className="w-[11.33px] h-[11.33px] left-0 top-0 absolute bg-[#4830e2] rounded-[35.40px]" />
              </div>
            </div>
            <div className="h-[40.88px] left-[18.88px] top-[18.88px] absolute">
              <div className="w-[80.79px] h-[11.33px] left-0 top-[29.55px] absolute opacity-30 text-[#141f39] text-[9.44px] font-normal font-inter">
                Viverra tristique
              </div>
              <div className="w-[134.51px] h-[23.89px] left-0 top-0 absolute text-[#141f39] text-base font-semibold font-['Inter']">
                Data Analysis
              </div>
            </div>
            <div className="absolute mt-[145px] ml-[16px]">
              <Image
                src="/hero/red-line.svg"
                width={320}
                height={106}
                alt="red-line"
              />
            </div>
            <div className="absolute mt-[175px] ml-[16px]">
              <Image
                src="/hero/green-line.svg"
                width={320}
                height={67}
                alt="green-line"
              />
            </div>
            <div className="absolute mt-[196px] ml-[16px]">
              <Image
                src="/hero/blue-line.svg"
                width={320}
                height={70}
                alt="blue-line"
              />
            </div>
          </div>
          <div className="absolute w-[296px] h-[287px] bg-white rounded-[18.13px] shadow-xl mt-[-190px] ml-[100px]">
            <div className="w-[228.43px] h-[14.39px] left-[33.50px] top-[247.15px] absolute">
              <div className="w-[30.75px] h-[11.43px] left-[160.83px] top-[1.25px] absolute opacity-30 text-center text-[#141f39] text-[9.29px] font-normal font-['Inter']">
                Cursus
              </div>
              <div className="w-[17.18px] h-[13px] left-[57.94px] top-[0.47px] absolute opacity-30 text-center text-[#141f39] text-[9.29px] font-normal font-['Inter']">
                Sed
              </div>
              <div className="w-[41.78px] h-[14.39px] left-[97.36px] top-0 absolute text-center text-[#cb5b66] text-[10.21px] font-normal font-['Inter']">
                Molestie
              </div>
              <div className="w-[14.39px] h-[13px] left-[214.04px] top-[0.47px] absolute opacity-30 text-center text-[#141f39] text-[9.29px] font-normal font-['Inter']">
                Elit
              </div>
              <div className="w-[35.75px] h-[13px] left-0 top-[0.47px] absolute opacity-30 text-center text-[#141f39] text-[9.29px] font-normal font-['Inter']">
                Facilisis
              </div>
            </div>
            <div className="w-[228.50px] h-[138.38px] left-[33.50px] top-[80px] absolute">
              <div className="w-[7.88px] h-[118.25px] left-0 top-[20.12px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-2 h-[88px] left-[15.50px] top-[50px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-2 h-[130px] left-[31.50px] top-[8px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-2 h-[107px] left-[47.50px] top-[31px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-[7.88px] h-[118.25px] left-[63.07px] top-[20.12px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-2 h-[77px] left-[78.50px] top-[61px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-2 h-[113px] left-[94.50px] top-[25px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-[8.12px] h-[95.38px] left-[110.37px] top-[43px] absolute">
                <div className="w-2 h-[95px] left-[0.12px] top-0 absolute bg-[#ebebeb] rounded-[18.13px]" />
                <div className="w-[7.88px] h-[56.76px] left-0 top-[38.61px] absolute bg-[#3921f5] rounded-[18.13px]" />
              </div>
              <div className="w-2 h-[68px] left-[126.50px] top-[70px] absolute bg-[#ebebeb] rounded-[18.13px]" />
              <div className="w-2 h-[124.38px] left-[141.50px] top-[14px] absolute">
                <div className="w-2 h-[124px] left-0 top-0 absolute bg-[#ebebeb] rounded-[18.13px]" />
                <div className="w-[7.88px] h-[83.57px] left-0 top-[40.81px] absolute bg-[#3921f5] rounded-[18.13px]" />
              </div>
              <div className="w-[8.06px] h-[101.38px] left-[157.50px] top-[37px] absolute">
                <div className="w-2 h-[101px] left-0 top-0 absolute bg-[#ebebeb] rounded-[18.13px]" />
                <div className="w-[7.88px] h-[61.49px] left-[0.18px] top-[39.88px] absolute bg-[#3921f5] rounded-[18.13px]" />
              </div>
              <div className="w-[8.05px] h-[88.38px] left-[173.44px] top-[50px] absolute">
                <div className="w-2 h-[88px] left-[0.05px] top-0 absolute bg-[#ebebeb] rounded-[18.13px]" />
                <div className="w-[7.88px] h-[38.63px] left-0 top-[49.75px] absolute bg-[#3921f5] rounded-[18.13px]" />
              </div>
              <div className="w-[7.88px] h-[118.26px] left-[189.21px] top-[20.12px] absolute">
                <div className="w-[7.88px] h-[118.25px] left-0 top-0 absolute bg-[#ebebeb] rounded-[18.13px]" />
                <div className="w-[7.88px] h-[83.57px] left-0 top-[34.69px] absolute bg-[#3921f5] rounded-[18.13px]" />
              </div>
              <div className="w-2 h-[138.38px] left-[204.50px] top-0 absolute">
                <div className="w-2 h-[138px] left-0 top-0 absolute bg-[#ebebeb] rounded-[18.13px]" />
                <div className="w-[7.88px] h-[56.76px] left-0 top-[81.61px] absolute bg-[#3921f5] rounded-[18.13px]" />
              </div>
              <div className="w-2 h-[68px] left-[220.50px] top-[70px] absolute bg-[#ebebeb] rounded-[18.13px]" />
            </div>
            <div className="w-[123px] h-[27px] left-[26px] top-[28px] absolute">
              <span
                style={{
                  color: '#3921f5',
                  fontSize: '2xl',
                  fontWeight: 'bold',
                  fontFamily: 'Inter',
                  letterSpacing: 'wide',
                }}
              >
                $
              </span>
              <span
                style={{
                  color: '#141f39',
                  fontSize: '2xl',
                  fontWeight: 'bold',
                  fontFamily: 'Inter',
                  letterSpacing: 'wide',
                }}
              >
                4.8k
              </span>
              <span
                style={{
                  color: '#141f39',
                  fontSize: '2xl',
                  fontWeight: 'bold',
                  fontFamily: 'Inter',
                }}
              >
                &nbsp;
              </span>
              <span
                style={{
                  color: '#4f4f4f',
                  fontSize: 'xs',
                  fontWeight: 'light',
                  fontFamily: 'Inter',
                }}
              >
                / Daily
              </span>
            </div>
            <div className="absolute mt-[615px] ml-[250px]">
              <Image
                src="/hero/purple-vector.svg"
                width={59}
                height={63}
                alt="purple-vector"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="logo-sponsor flex flex-row mt-[287px] ml-[120px]">
        <Image src="/hero/logo1.svg" width={234} height={37} alt="logo1" />
        <div className="ml-[90px]">
          <Image src="/hero/logo2.svg" width={234} height={37} alt="logo2" />
        </div>
        <div className="ml-[90px]">
          <Image src="/hero/logo3.svg" width={234} height={37} alt="logo3" />
        </div>
        <div className="ml-[90px]">
          <Image src="/hero/logo4.svg" width={234} height={37} alt="logo4" />
        </div>
      </div>
    </section>
  )
}
