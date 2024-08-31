import Image from 'next/image'
import React from 'react'

export default function Performance() {
  return (
    <div className="w-[1186px] h-[728px] my-[120px] mx-[150px] flex flex-row justify-between">
      <div className="left">
        <div className="aura absolute w-[371px] h-[371px] opacity-40 bg-blue-light rounded-full blur-[300px] mt-[179px]"></div>
        <div className="phone w-[336px] h-full absolute bg-white rounded-[18.11px] shadow ml-[17px] overflow-hidden">
          <div className="flex justify-center mt-[17.3px] gap-[171.26px] text-sm mb-[30.24px] ">
            9:41
            <Image
              src="/performance/wifi.svg"
              width={59}
              height={11}
              alt="wifi battery"
            />
          </div>
          <div className="font-semibold text-center mb-[35.39px]">
            Transaction
            <Image
              src="/performance/arrow.svg"
              width={17}
              height={17}
              alt="left arrow"
              className="absolute ml-[27.68px] mt-[-19px] "
            />
          </div>
          <div className="flex flex-row gap-[4.5px] ml-[-100px] mr-[-100px]">
            <div className="card1 w-[155.69px] h-[97.74px] bg-[#003A6D] rounded-[17.30px] mt-[22.26px]">
              <Image
                src="/performance/payment.svg"
                width={10}
                height={12}
                alt="contactless payment"
                className="absolute mt-[10.664px] ml-[130px]"
              />
              <Image
                src="/performance/chip.svg"
                width={17}
                height={13}
                alt="white chip"
                className="absolute mt-[45.61px] ml-[123px]"
              />
              <div className="text-right text-white text-[5.35px] font-thin font-['Inter'] mt-[45.61px] mr-3.5 mt-20">
                06/23
              </div>
            </div>
            <div className="card2 w-[226.36px] h-[144.65px] bg-blue-dark rounded-[17.30px] flex flex-col">
              <div className="flex justify-center gap-[106.52px] mt-[13.32px] mb-[8.47px]">
                <div className="w-[56.89px] h-[13.92px] text-white text-[9.68px] font-semibold font-inter">
                  Credit Card
                </div>
                <div className="w-[33.89px] h-[7.87px] text-white text-[6.05px] font-semibold font-inter mt-[2.5px]">
                  Bank Name
                </div>
              </div>
              <Image
                src="/performance/chip2.svg"
                width={35}
                height={26}
                alt="white chip"
                className="ml-[12px] mb-[7.6px]"
              />
              <div className="w-[127px] ml-[12px] flex flex-row gap-1.5 mb-[6.05px]">
                <div className="w-[127.10px] h-[14.53px] text-white text-[10.89px] font-bold font-jakarta">
                  5478
                </div>
                <div className="w-[127.10px] h-[14.53px] text-white text-[10.89px] font-bold font-jakarta">
                  65478
                </div>
                <div className="w-[127.10px] h-[14.53px] text-white text-[10.89px] font-bold font-jakarta">
                  8715
                </div>
                <div className="w-[127.10px] h-[14.53px] text-white text-[10.89px] font-bold font-jakarta">
                  4713
                </div>
              </div>
              <div className="flex flex-row ml-[12px] gap-2.5">
                <div className="w-[15.74px] h-[13.32px] text-white text-[4.84px] font-semibold font-['Plus Jakarta Sans']">
                  VALID THRU
                </div>
                <div className="w-[22.39px] h-[9.08px] text-white text-[6.05px] font-semibold font-['Plus Jakarta Sans'] mt-0.5">
                  00/00
                </div>
              </div>
              <div className="flex flex-row gap-14">
                <div className="flex flex-col mt-[4.3px] ml-[12px]">
                  <div className="w-[67.10px] h-[11.29px] text-white text-[6.90px] font-bold font-['Plus Jakarta Sans'] uppercase leading-3 tracking-wide">
                    Jacob Jones
                  </div>
                  <div className="w-[84.66px] h-[11.29px] opacity-50 text-white text-[6.90px] font-bold font-['Plus Jakarta Sans'] uppercase leading-3 tracking-wide">
                    Fintech INC.
                  </div>
                </div>
                <Image
                  src="/performance/visa.svg"
                  width={57}
                  height={19}
                  alt="white chip"
                />
              </div>
            </div>
            <div className="card3 w-[155.69px] h-[97.74px] bg-custom-gradient4 rounded-[17.30px] mt-[22.26px]">
              <div className="text-white text-[13.17px] font-bold font-inter ml-[16.36px] mt-[13.13px] ">
                Clothes
              </div>
              <div className="w-[127px] ml-[16.36px] flex flex-row gap-0.1 mb-[6.05px] mt-[14px] mb-[5px]">
                <div className="w-[127.10px] h-[14.53px] text-white text-[8.03px] font-thin font-jakarta">
                  5478
                </div>
                <div className="w-[127.10px] h-[14.53px] text-white text-[8.03px] font-thin font-jakarta">
                  65478
                </div>
                <div className="w-[127.10px] h-[14.53px] text-white text-[8.03px] font-thin font-jakarta">
                  8715
                </div>
                <div className="w-[127.10px] h-[14.53px] text-white text-[8.03px] font-thin font-jakarta">
                  4713
                </div>
              </div>
              <div className="flex flex-row ml-[15px] gap-1">
                <Image
                  src="/performance/Vector.svg"
                  width={7}
                  height={10}
                  alt="currency sign"
                  className="mt-[-2.5px]"
                />
                <div className="w-[59.54px] text-[#fafcfe] text-base font-bold font-['Inter'] ">
                  3,40.00
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[10.27px] gap-10">
            <Image
              src="/performance/withdraw.svg"
              width={44}
              height={44}
              alt="withdraw icon"
            />
            <Image
              src="/performance/transfer.svg"
              width={44}
              height={44}
              alt="transfer icon"
            />
            <Image
              src="/performance/deposit.svg"
              width={44}
              height={44}
              alt="deposit icon"
            />
          </div>
          <div className="flex justify-center gap-10 mr-2 mt-1">
            <div className="text-[#7e7e7e] text-[10.52px] font-medium font-['Inter']">
              Withdraw
            </div>
            <div className="text-[#7e7e7e] text-[10.52px] font-medium font-['Inter']">
              Transfer
            </div>
            <div className="text-[#7e7e7e] text-[10.52px] font-medium font-['Inter']">
              Deposit
            </div>
          </div>
          <div className="w-[337.32px] h-[0px] border border-[#d0d0d0]/70 mt-[13.81px]"></div>
          <div className="flex justify-center mt-[15.57px] items-center gap-[126px]">
            <div className="text-[#000e24] text-base font-semibold font-['Inter']">
              Analytics
            </div>
            <div className="text-[#919191] text-xs font-medium font-['Inter']">
              January 2023
            </div>
          </div>
          <div className="flex justify-center items-center mt-[19.06px] gap-8">
            <Image
              src="/performance/arrow.svg"
              width={17}
              height={17}
              alt="left arrow"
            />
            <Image
              src="/performance/diagram.svg"
              width={139}
              height={140}
              alt="left arrow"
            />
            <Image
              src="/performance/arrow.svg"
              width={17}
              height={17}
              alt="left arrow"
              className="rotate-[180deg]"
            />
          </div>
          <div className="flex flex-col mt-[11.24px] gap-[12.11px]">
            <div className="flex flex-row justify-between mx-9">
              <div className="flex flex-row gap-[12.11px]">
                <div className="w-[13.84px] h-[13.84px] bg-blue-primary rounded-full"></div>
                <div className="text-[#141f39] text-sm font-medium font-['Inter'] leading-tight">
                  Expenses
                </div>
              </div>
              <div className="text-[#141f39] text-sm font-medium font-['Inter'] leading-tight">
                46%
              </div>
            </div>
            <div className="flex flex-row justify-between mx-9">
              <div className="flex flex-row gap-[12.11px]">
                <div className="w-[13.84px] h-[13.84px] bg-orange-primary rounded-full"></div>
                <div className="text-[#141f39] text-sm font-medium font-['Inter'] leading-tight">
                  Income
                </div>
              </div>
              <div className="text-[#141f39] text-sm font-medium font-['Inter'] leading-tight">
                52%
              </div>
            </div>
            <div className="flex flex-row justify-between mx-9">
              <div className="flex flex-row gap-[12.11px]">
                <div className="w-[13.84px] h-[13.84px] bg-green-primary rounded-full"></div>
                <div className="text-[#141f39] text-sm font-medium font-['Inter'] leading-tight">
                  Savings
                </div>
              </div>
              <div className="text-[#141f39] text-sm font-medium font-['Inter'] leading-tight">
                48%
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[60px] mt-[20px]">
            <Image
              src="/performance/Home.svg"
              width={19}
              height={19}
              alt="home icon"
            />
            <Image
              src="/performance/Swap.svg"
              width={16}
              height={20}
              alt="swap icon"
            />
            <Image
              src="/performance/Wallet.svg"
              width={18}
              height={18}
              alt="wallet icon"
            />
            <Image
              src="/performance/Profile.svg"
              width={18}
              height={18}
              alt="profile icon"
            />
          </div>
          <div className="flex flex-row justify-center gap-[35px] mt-1 ">
            <div className="text-[#606060] text-[10.38px] font-medium font-['Inter'] leading-[14.53px] ml-3">
              Home
            </div>
            <div className="text-[#3921f5] text-[10.38px] font-medium font-['Inter'] leading-[14.53px]">
              Transaction
            </div>
            <div className="text-[#606060] text-[10.38px] font-medium font-['Inter'] leading-[14.53px] mr-3">
              Wallet
            </div>
            <div className="text-[#606060] text-[10.38px] font-medium font-['Inter'] leading-[14.53px] mr-2">
              Profile
            </div>
          </div>
        </div>
        <div className="w-[150px] h-[205px] absolute bg-white shadow-lg flex flex-col py-[20.4px] px-[17px] rounded-lg ml-[371px] mt-[173px]">
          <div className="w-[120.70px] text-[#2d2d3a] text-xs font-normal font-['Inter'] leading-[13.60px] mb-[11.9px] mt-3">
            Total cashback
          </div>
          <div className="w-[120.70px] text-[#2d2d3a] text-[17px] font-semibold font-['Inter'] leading-none mb-[7.65px] ">
            $1,531
          </div>
          <div className="w-[120.70px] text-[#24c948] text-xs font-semibold font-['Inter'] leading-[13.60px] mb-[35px]">
            +5.4%
          </div>
          <div className="flex flex-row">
            <div className="circle1 flex justify-center items-center w-[27.2px] h-[27.2px] bg-[#0062FF] rounded-full z-20">
              <Image
                src="/performance/Gamepad.svg"
                width={15}
                height={15}
                alt="gamepad"
              />
            </div>
            <div className="circle2 flex justify-center items-center w-[27.2px] h-[27.2px] bg-[#FD4438] rounded-full ml-[-7px] z-10">
              <Image
                src="/performance/House.svg"
                width={15}
                height={15}
                alt="house"
              />
            </div>
            <div className="circle3 flex justify-center items-center w-[27.2px] h-[27.2px] bg-[#C2B7CD] rounded-full ml-[-7px]">
              <Image
                src="/performance/Car.svg"
                width={15}
                height={15}
                alt="house"
              />
            </div>
          </div>
          <div className="h-[5.10px] relative mt-[12.75px]">
            <div className="w-[5.10px] h-[120.70px] left-[120.70px] top-0 absolute origin-top-left rotate-90 bg-[#e2e2ea] rounded-[85px]" />
            <div className="w-[5.10px] h-[92.65px] left-[92.65px] top-0 absolute origin-top-left rotate-90 bg-[#a162f7] rounded-[85px]" />
          </div>
        </div>
        <div className="w-[200px] h-[165px] absolute bg-white shadow-lg rounded-lg flex flex-col py-[24.3px] px-[23.3px] ml-[371px] mt-[395px] ">
          <div className="w-[98.83px] h-[48.60px] text-[#1c1c1c] text-[38.88px] font-medium font-['Inter'] leading-[48.60px]">
            $328
          </div>
          <div className="flex flex-row mt-[9.72px] items-center gap-2">
            <div className="w-[105.31px] h-[19.44px] text-[#969696] text-[12px] font-normal font-['Inter'] leading-tight">
              Spent this month
            </div>
            <div className="h-[19.44px] px-[4.86px] py-[5px] bg-[#00ba34]/10 rounded-[4.86px] flex flex-row gap-[3.24px] mt-[-3px]">
              <div className="w-[22.68px] h-[16.20px] text-center text-[#00ba34] text-[10.53px] font-medium font-['Inter'] leading-none">
                56%
              </div>
              <Image
                src="/performance/Icon.svg"
                width={11}
                height={11}
                alt="currency sign"
              />
            </div>
          </div>
          <div className="h-[32.40px] px-[9.72px] py-[6.48px] bg-white rounded-md shadow border border-[#e7e7e7] gap-[6.48px] mt-[10px]">
            <div className="w-[118.27px] h-[19.44px] text-[#1c1c1c] text-[12px] font-medium font-['Inter'] leading-tight">
              All Spent Summary
            </div>
            <div className="w-[16.20px] h-[16.20px] relative" />
          </div>
        </div>
      </div>
      <div className="right flex flex-col mt-[67px]">
        <div className="w-[451px] text-blue-dark text-4xl font-bold font-space leading-[48px]">
          Performance Is The Key To Most People Achieving A Better Future
        </div>
        <div className="w-[393px] opacity-70 text-[#12141d] text-base font-normal font-inter leading-relaxed mt-5">
          Etiam euismod odio euismod lacus fringilla hendrer.
        </div>
        <div className="w-[451px] h-[0px] border border-zinc-300 mt-[40px]"></div>
        <div className="w-[451px] flex flex-row justify-between py-4">
          <div className="text-[21px] text-blue-dark font-bold font-space leading-[44px]">
            Custom Edit Tool Application
          </div>
          <button className="text-[21px] text-blue-primary font-bold font-space leading-[44px]">
            +
          </button>
        </div>
        <div className="w-[451px] h-[0px] border border-zinc-300"></div>
        <div className="w-[451px] flex flex-row justify-between py-4">
          <div className="text-[21px] text-blue-dark font-bold font-space leading-[44px]">
            Built In Safty Chat Mode Enabled
          </div>
          <div className="text-[21px] text-blue-primary font-bold font-space leading-[44px]">
            +
          </div>
        </div>
        <div className="w-[451px] h-[0px] border border-zinc-300"></div>
        <div className="w-[451px] flex flex-row justify-between py-4">
          <div className="text-[21px] text-blue-dark font-bold font-space leading-[44px]">
            User Friendly Interface
          </div>
          <div className="text-[21px] text-blue-primary font-bold font-space leading-[44px]">
            +
          </div>
        </div>
        <div className="w-[451px] h-[0px] border border-zinc-300"></div>
        <div className="w-[451px] flex flex-row justify-between py-4">
          <div className="text-[21px] text-blue-dark font-bold font-space leading-[44px]">
            Active User Analytics
          </div>
          <div className="text-[21px] text-blue-primary font-bold font-space leading-[44px]">
            +
          </div>
        </div>
        <div className="w-[451px] h-[0px] border border-zinc-300"></div>
      </div>
    </div>
  )
}
