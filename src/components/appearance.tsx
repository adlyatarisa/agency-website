import Image from 'next/image'
import React from 'react'

export default function appearance() {
  return (
    <div className="w-[1331px] h-[617px] flex flex-row border border-black mx-[55px] mb-10">
      <div
        className="phone w-[285px] h-full bg-white shadow-md rounded-[20px] flex items-center flex-col overflow-hidden"
        style={{ boxShadow: '0 0 22px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="flex justify-center mt-[17.3px] gap-[171.26px] text-sm mb-[20px] ">
          9:41
          <Image
            src="/performance/wifi.svg"
            width={59}
            height={11}
            alt="wifi battery"
          />
        </div>
        <div className="flex flex-row items-center mb-[26.19px] ">
          <Image src="/appearance/img.svg" width={30} height={30} alt="image" />
          <div className="text-[#141f39] text-[12.84px] font-semibold font-inter ml-2">
            Welcome Jessika!
          </div>
          <Image
            src="/appearance/Notification.svg"
            width={18}
            height={19}
            alt="notification"
            className="ml-[36.04px]"
          />
          <Image
            src="/appearance/Setting.svg"
            width={18}
            height={18}
            alt="settings"
            className="ml-[15px]"
          />
        </div>
        <div className="w-[132.70px] h-[49.98px] flex flex-col justify-center items-center relative">
          <div className="text-[#a0a0a0] text-[7.54px] font-medium font-['Inter']">
            Account Balance
          </div>
          <div className="flex flex-row mt-1">
            <Image
              src="/appearance/currency.svg"
              width={10}
              height={10}
              alt="currency sign"
              className="mt-[-2.5px]"
            />
            <div className="text-[#141f39] text-[24px] font-semibold font-inter">
              25,000
            </div>
            <div className="text-[#141f39] text-[20px] font-normal font-inter mt-[1.5px]">
              .00
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[10.27px] gap-9">
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
        <div className="flex justify-center gap-10 mr-2 mt-1 mb-[36.36px]">
          <div className="text-[#7e7e7e] text-[10.52px] font-medium font-inter">
            Withdraw
          </div>
          <div className="text-[#7e7e7e] text-[10.52px] font-medium font-inter">
            Transfer
          </div>
          <div className="text-[#7e7e7e] text-[10.52px] font-medium font-inter">
            Deposit
          </div>
        </div>
        <div className="w-[343px] h-[89.46px] flex flex-col gap-[9.27px] ml-[105.96px] ">
          <div className="text-[#141f39] text-xs font-medium font-['Inter'] leading-none">
            Targeted Savings{' '}
          </div>
          <div className="flex flex-row gap-2">
            <div className="w-[168px] h-[64.2px] flex flex-col justify-center bg-[#F4F7F9] rounded-[15px] ">
              <div className="flex flex-row gap-[10px]">
                <div className="w-[26.21px] h-[26.21px] flex items-center justify-center ml-2">
                  <div className="absolute text-[#141f39] text-[5.88px] font-medium font-inter">
                    76%
                  </div>
                  <Image
                    src="/promote/Ellipse.svg"
                    width={61}
                    height={61}
                    alt="diagram"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#77787a] text-[7.13px] font-medium font-inter">
                    Summer Vacation
                  </div>
                  <div className="flex flex-row mt-1">
                    <Image
                      src="/appearance/currency.svg"
                      width={8}
                      height={8}
                      alt="currency sign"
                      className="mt-[-5px]"
                    />
                    <div className="text-[#141f39] text-xs font-semibold font-inter">
                      2,000
                    </div>
                    <div className="text-[#141f39] text-[10px] font-normal font-inter mt-[1.5px]">
                      .00
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row ml-[100px]">
                <div className="text-[#77787a] text-[7.13px] font-medium font-['Inter']">
                  Goal:{' '}
                </div>
                <Image
                  src="/appearance/currency.svg"
                  width={6}
                  height={6}
                  alt="currency sign"
                  className="mt-[-2px]"
                />
                <div className="text-[#141f39] text-[7.13px] font-semibold font-inter">
                  3,000
                </div>
                <div className="text-[#141f39] text-[4.28px] font-normal font-inter mt-[1.5px]">
                  .00
                </div>
              </div>
            </div>
            <div className="w-[168px] h-[64.2px] flex flex-col justify-center bg-[#F4F7F9] rounded-[15px] ">
              <div className="flex flex-row gap-[10px]">
                <div className="w-[26.21px] h-[26.21px] flex items-center justify-center ml-2">
                  <div className="absolute text-[#141f39] text-[5.88px] font-medium font-inter">
                    76%
                  </div>
                  <Image
                    src="/promote/Ellipse.svg"
                    width={61}
                    height={61}
                    alt="diagram"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#77787a] text-[7.13px] font-medium font-inter">
                    Summer Vacation
                  </div>
                  <div className="flex flex-row mt-1">
                    <Image
                      src="/appearance/currency.svg"
                      width={8}
                      height={8}
                      alt="currency sign"
                      className="mt-[-5px]"
                    />
                    <div className="text-[#141f39] text-xs font-semibold font-inter">
                      2,000
                    </div>
                    <div className="text-[#141f39] text-[10px] font-normal font-inter mt-[1.5px]">
                      .00
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row ml-[100px]">
                <div className="text-[#77787a] text-[7.13px] font-medium font-['Inter']">
                  Goal:{' '}
                </div>
                <Image
                  src="/appearance/currency.svg"
                  width={6}
                  height={6}
                  alt="currency sign"
                  className="mt-[-2px]"
                />
                <div className="text-[#141f39] text-[7.13px] font-semibold font-inter">
                  3,000
                </div>
                <div className="text-[#141f39] text-[4.28px] font-normal font-inter mt-[1.5px]">
                  .00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[25.63px] gap-[88.43px] items-center">
          <div className="text-[#141f39] text-xs font-bold font-['Inter']">
            Recent Transactions
          </div>
          <div className="text-[#6e6e6e] text-[7.13px] font-semibold font-['Inter'] underline">
            See All
          </div>
        </div>
        <div className="text-[#9e9e9e] text-[9.27px] font-medium font-['Inter'] mt-[8px] ml-[-180px]">
          10-06-2022
        </div>
        <div className="flex flex-col gap-[14.26px] mt-[14.26px]">
          <div className="flex flex-row items-center">
            <Image
              src="/appearance/arrow.svg"
              width={16}
              height={15}
              alt="arrow up"
            />
            <div className="text-[#141f39] text-xs font-medium font-['Inter'] leading-none ml-[7.84px] ">
              Uber Eats
            </div>
            <div className="flex flex-row ml-[128.37px]">
              <Image
                src="/appearance/currency.svg"
                width={8}
                height={8}
                alt="currency sign"
                className="mt-[-5px]"
              />
              <div className="text-[#141f39] text-xs font-semibold font-inter">
                10
              </div>
              <div className="text-[#141f39] text-[10px] font-normal font-inter mt-[-1px]">
                .00
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/appearance/arrow2.svg"
              width={16}
              height={15}
              alt="arrow up"
            />
            <div className="text-[#141f39] text-xs font-medium font-['Inter'] leading-none ml-[7.84px] ">
              Judie Jones
            </div>
            <div className="flex flex-row ml-[115.37px]">
              <Image
                src="/appearance/currency.svg"
                width={8}
                height={8}
                alt="currency sign"
                className="mt-[-5px]"
              />
              <div className="text-[#141f39] text-xs font-semibold font-inter">
                10
              </div>
              <div className="text-[#141f39] text-[10px] font-normal font-inter mt-[-1px]">
                .00
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/appearance/arrow.svg"
              width={16}
              height={15}
              alt="arrow up"
            />
            <div className="text-[#141f39] text-xs font-medium font-['Inter'] leading-none ml-[7.84px] ">
              Uber Eats
            </div>
            <div className="flex flex-row ml-[128.37px]">
              <Image
                src="/appearance/currency.svg"
                width={8}
                height={8}
                alt="currency sign"
                className="mt-[-5px]"
              />
              <div className="text-[#141f39] text-xs font-semibold font-inter">
                10
              </div>
              <div className="text-[#141f39] text-[10px] font-normal font-inter mt-[-1px]">
                .00
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/appearance/arrow2.svg"
              width={16}
              height={15}
              alt="arrow down"
            />
            <div className="text-[#141f39] text-xs font-medium font-['Inter'] leading-none ml-[7.84px] ">
              Judie Jones
            </div>
            <div className="flex flex-row ml-[115.37px]">
              <Image
                src="/appearance/currency.svg"
                width={8}
                height={8}
                alt="currency sign"
                className="mt-[-5px]"
              />
              <div className="text-[#141f39] text-xs font-semibold font-inter">
                10
              </div>
              <div className="text-[#141f39] text-[10px] font-normal font-inter mt-[-1px]">
                .00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[60px] mt-3">
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
      <div
        className="w-[988px] h-full bg-white shadow-xl rounded-[20px] flex flex-row ml-5"
        style={{ boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)' }}
      >
        <div className="w-[54.9px] h-full border-r flex items-center flex-col">
          <Image
            src="/appearance/menu.svg"
            width={15}
            height={15}
            alt="menu"
            className="mt-[27.5px]"
          />
          <Image
            src="/appearance/icon1.svg"
            width={29}
            height={28}
            alt="icon1"
            className="mt-[39.78px]"
          />
          <Image
            src="/appearance/icon2.svg"
            width={29}
            height={28}
            alt="icon2"
            className="mt-[17.83px]"
          />
          <Image
            src="/appearance/icon3.svg"
            width={29}
            height={28}
            alt="icon3"
            className="mt-[17.83px]"
          />
          <div className="w-[27.4px] h-[159px] bg-[#F8F9FE] rounded-[10px] mt-[32.92px] gap-[5.49px] flex flex-col items-center">
            <div className="w-[26px] h-[27.4px] bg-white rounded-[10px] flex items-center justify-center shadow-md ">
              <Image
                src="/appearance/command.svg"
                width={11}
                height={10}
                alt="command"
              />
            </div>
            <div className="w-[26px] h-[27.4px] bg-[#F8F9FE] rounded-[10px] flex items-center justify-center">
              <Image
                src="/appearance/pie-chart.svg"
                width={11}
                height={10}
                alt="pie-chart"
              />
            </div>
            <div className="w-[26px] h-[27.4px] bg-[#F8F9FE] rounded-[10px] flex items-center justify-center">
              <Image
                src="/appearance/clock.svg"
                width={11}
                height={10}
                alt="clock"
              />
            </div>
            <div className="w-[26px] h-[27.4px] bg-[#F8F9FE] rounded-[10px] flex items-center justify-center">
              <Image
                src="/appearance/globe.svg"
                width={11}
                height={10}
                alt="globe"
              />
            </div>
            <div className="w-[26px] h-[27.4px] bg-[#F8F9FE] rounded-[10px] flex items-center justify-center">
              <Image
                src="/appearance/loader.svg"
                width={11}
                height={10}
                alt="loader"
              />
            </div>
          </div>
          <div className="w-[26px] h-[27.4px] bg-[#F8F9FE] rounded-[10px] flex items-center justify-center mt-[184px]">
            <Image
              src="/appearance/message-square.svg"
              width={11}
              height={10}
              alt="loader"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
