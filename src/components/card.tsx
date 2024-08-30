'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import LoginModal from '@/components/loginModal'
import Regist from '@/components/regist'

export default function Card() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isRegistOpen, setRegistOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const openRegist = () => setRegistOpen(true)
  const closeRegist = () => setRegistOpen(false)

  return (
    <div className="w-full h-full flex flex-row mt-[120px]">
      <div className="left w-[487px] h-[510px] ml-[150px] flex flex-col mt-[109px]">
        <div className="w-[451px] font-space font-bold text-4xl text-blue-dark leading-[48px]">
          Better Security To Better Protection An Experience Of Strength.
        </div>
        <div className="w-[439px] font-inter text-base text-blue-dark opacity-60 leading-relaxed mt-[20px]">
          Class aptent taciti sociosqu ad litora torquent conubia nostrama
          inceptos himenaeos. Donec tristique nibh ipsum dignissim.
        </div>
        <div className="w-[468px] h-[0px] border border-zinc-300 mt-[40px] mb-[40px]"></div>
        <div className="w-full font-space font-bold text-[21px] text-blue-dark leading-[44px]">
          Well Organised User Interface
        </div>
        <div className="w-full font-inter text-lg text-blue-dark opacity-60 leading-loose mb-[24px]">
          Etiam id euismod odio. Ut euismod sem a lacus fringilla.
        </div>
        <div className="w-full font-space font-bold text-[21px] text-blue-dark leading-[44px]">
          Completely Bug Free
        </div>
        <div className="w-full font-inter text-lg text-blue-dark opacity-60 leading-loose">
          Cras eleifend leo ac varius tristique suspendisse.
        </div>
        <Image
          src="/card/Arrow.svg"
          width={62}
          height={114}
          alt="arrow"
          className="absolute ml-[480px] "
        />
      </div>
      <div className="right ml-[70px] w-[655px] h-[728px] relative">
        <div className="aura absolute w-[371px] h-[371px] opacity-40 bg-blue-light rounded-full blur-[300px] mt-[178px] ml-[284px]" />
        <div className="container absolute w-[336.40px] h-[728px] bg-white rounded-[18.11px] shadow ml-[274px]">
          <div className="logo w-full flex justify-center mt-[57.79px]">
            <Image
              src="/card/zaap.svg"
              width={135}
              height={37}
              alt="logo zaap"
            />
          </div>
          <div className="w-[279.47px] h-[288.96px] left-[28.46px] top-[150.06px] absolute">
            <div className="card1 w-[241.62px] h-[151.88px] bg-custom-gradient rounded-lg origin-bottom-left rotate-[44.79deg] absolute">
              <div className="left-[12.43px] top-[124.39px] absolute text-white text-[8.28px] font-medium font-['Inter']">
                School fees
              </div>
              <div className="left-[12.43px] top-[71.42px] absolute justify-start items-start gap-[14.50px] inline-flex">
                <div className="text-white text-xs font-thin font-['Inter']">
                  1234
                </div>
                <div className="text-white text-xs font-thin font-['Inter']">
                  5678
                </div>
                <div className="text-white text-xs font-thin font-['Inter']">
                  9101
                </div>
                <div className="text-white text-xs font-thin font-['Inter']">
                  1121
                </div>
              </div>
              <Image
                src="/card/visa1.svg"
                width={34}
                height={34}
                alt="visa logo"
                className="rotate-[-44.79deg] ml-[10px] mt-[10px]"
              />
              <Image
                src="/card/pay.svg"
                width={22}
                height={22}
                alt="contactless payment"
                className="rotate-[-44.79deg] mt-[-28px] ml-[210px]"
              />
            </div>
            <div className="card2 absolute w-[241.62px] h-[151.88px] bg-custom-gradient2 rounded-lg mt-[-45px] ml-[2px] rotate-[135deg]">
              <div className="left-[12.43px] top-[124.39px] absolute text-white text-[8.28px] font-medium font-inter">
                New Clothes
              </div>
              <div className="left-[12.43px] top-[71.42px] absolute justify-start items-start gap-[14.50px] inline-flex">
                <div className="text-white text-xs font-thin font-inter">
                  1234
                </div>
                <div className="text-white text-xs font-thin font-inter">
                  5678
                </div>
                <div className="text-white text-xs font-thin font-inter">
                  9101
                </div>
                <div className="text-white text-xs font-thin font-inter">
                  1121
                </div>
              </div>
              <Image
                src="/card/visa2.svg"
                width={34}
                height={34}
                alt="visa logo"
                className="rotate-[-130deg] ml-[10px] mt-[3px]"
              />
            </div>
            <div className="card3 absolute w-[241.62px] h-[151.88px] bg-custom-gradient3 rounded-lg mt-[-15px] ml-[10px] rotate-[90.26deg]">
              <div className="left-[12.43px] top-[124.39px] absolute text-white text-[8.28px] font-inter">
                Vacation
              </div>
              <div className="left-[12.43px] top-[71.42px] absolute justify-start items-start gap-[14.50px] inline-flex">
                <div className="text-white text-xs font-thin font-inter">
                  1234
                </div>
                <div className="text-white text-xs font-thin font-inter">
                  5678
                </div>
                <div className="text-white text-xs font-thin font-inter">
                  9101
                </div>
                <div className="text-white text-xs font-thin font-inter">
                  1121
                </div>
              </div>
              <Image
                src="/card/visa3.svg"
                width={16}
                height={29}
                alt="visa logo"
                className="rotate-[-90.26deg] ml-[20px] mt-[6px]"
              />
            </div>
          </div>
          <div className="container2 absolute w-[336.40px] h-[300px] bg-white shadow-inner mt-[310px] flex flex-col items-center justify">
            <div className="text-center text-[#000c20] text-lg font-bold font-inter mt-[48.3px]">
              Maximixe Your Savings
            </div>
            <div className="w-[265.67px] text-center text-[#000e24] text-sm font-medium font-['Inter'] leading-tight mt-[15.23px]">
              Maximize Your Savings with Multiple Accounts for Different
              Occasions
            </div>
            <button
              className="w-[248px] h-[42.8px] px-[13.8px] flex items-center justify-center text-white text-sm font-inter bg-blue-primary mt-[50.48px] rounded-lg hover:bg-[#311CCF] hover:scale-[1.01] ease-in-out"
              onClick={openModal}
            >
              Log In
            </button>
            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
            <button
              className="w-[248px] h-[42.8px] px-[13.8px] flex items-center justify-center text-blue-primary text-sm font-inter border border-blue-primary bg-white mt-[20.09px] rounded-lg hover:scale-[1.01] ease-in-out"
              onClick={openRegist}
            >
              Create Account
            </button>
            <Regist isOpen={isRegistOpen} onClose={closeRegist} />
          </div>
        </div>
        <div className="deals absolute mt-[249px] ml-[5px] w-[280.35px] h-[216.72px] bg-white rounded-sm shadow-lg flex flex-col">
          <div className="flex justify-between">
            <div className="mt-[10.08px] ml-[15.12px] text-blue-dark text-[9.45px] font-medium">
              Deals
            </div>
            <div className="w-[65px] h-[11.34px] mt-[11.97px] text-[7.56px] text-[#6A707E] font-normal font-inter flex flex-col">
              Show:
              <div className="text-[7.56px] text-[#109CF1] font-normal font-inter">
                Monthly
              </div>
            </div>
            <Image
              src="/card/dropdown.svg"
              width={5}
              height={2}
              alt="dropdown"
              className="absolute ml-[265px] mt-[16px]"
            />
          </div>
          <div className="w-[280px] h-[0px] mt-[9.5px] opacity-20 border border-[#D4D4D8]"></div>
          <div className="mt-[12.6px] flex flex-row ml-[15.12px]">
            <Image src="/card/dot.svg" width={6} height={6} alt="dot" />
            <div className="font-inter text-[6.30px] text-[#192A3E] ml-[5.04px]">
              Closed deals
            </div>
          </div>
          <div className="graph flex flex-row">
            <div className="flex flex-col">
              <div className="w-[15.12px] text-[#4c5862] text-[7.56px] font-normal font-inter tracking-tight ml-[15.12px] mt-[14.49px]">
                200
              </div>
              <div className="w-[15.12px] text-[#4c5862] text-[7.56px] font-normal font-inter tracking-tight ml-[15.12px] mt-[15.72px]">
                150
              </div>
              <div className="w-[15.12px] text-[#4c5862] text-[7.56px] font-normal font-inter tracking-tight ml-[15.12px] mt-[15.72px]">
                100
              </div>
            </div>
            <Image
              src="/card/graphic_deals.svg"
              width={231}
              height={111}
              alt="graphic deals"
              className="absolute mt-[18.27px] ml-[35.28px]"
            />
            <div className="absolute graphic-line">
              <div className="w-[231px] h-[0px] mt-[18.27px] ml-[35.28px] opacity-20 border border-dashed border-[#D4D4D8]"></div>
              <div className="w-[231px] h-[0px] mt-[27px] ml-[35.28px] opacity-20 border border-dashed border-[#D4D4D8]"></div>
              <div className="w-[231px] h-[0px] mt-[22px] ml-[35.28px] opacity-20 border border-dashed border-[#D4D4D8]"></div>
              <div className="w-[231px] h-[0px] mt-[27px] ml-[35.28px] opacity-20 border border-dashed border-[#D4D4D8]"></div>
              <div className="w-[231px] h-[0px] mt-[27px] ml-[35.28px] opacity-20 border border-dashed border-[#D4D4D8]"></div>
            </div>
          </div>
          <div className="absolute w-[114px] h-[0px] ml-[93px] mt-[75px] opacity-20 border border-[#D4D4D8] origin-top-right rotate-[-90deg]"></div>
          <Image
            src="/card/cursor.svg"
            width={17}
            height={17}
            alt="cursor"
            className="absolute mt-[113px] ml-[202px]"
          />
          <div className="flex flex-row mt-[50px]">
            <div className="w-[25.20px] text-[#4c5862] text-[7.56px] font-normal font-inter tracking-tight ml-[103.32px] mt-[10px]">
              8 Dec
            </div>
            <div className="w-[25.20px] text-[#4c5862] text-[7.56px] font-normal font-inter tracking-tight ml-[43.47px] mt-[10px]">
              16 Dec
            </div>
            <div className="w-[25.20px] text-[#4c5862] text-[7.56px] font-normal font-inter tracking-tight ml-[43.47px] mt-[10px]">
              31 Dec
            </div>
          </div>
        </div>
        <div
          className="profile w-[135px] h-[110px] p-[11.05px] mt-[390px] ml-[-55px] rounded-lg bg-white absolute shadow-md"
          style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image
                src="/card/checkbox1.svg"
                width={9}
                height={10}
                alt="checkbox"
                className="mr-[12.7px]"
              />
              <Image
                src="/card/img1.svg"
                width={14}
                height={15}
                alt="checkbox"
                className="mr-[6.08px] rounded-full"
              />
              <div className="w-[41.98px] text-[#323c47] text-[8.29px] font-medium font-inter tracking-tight">
                Jane Doe
              </div>
            </div>
            <div className="w-[100px] h-[0px] mt-[10.5px] opacity-20 border border-[#D4D4D8]"></div>
            <div className="flex flex-row mt-[8.84px]">
              <Image
                src="/card/unchecked.svg"
                width={9}
                height={10}
                alt="unchecked box"
                className="mr-[12.7px]"
              />
              <Image
                src="/card/img2.svg"
                width={14}
                height={15}
                alt="checkbox"
                className="mr-[6.08px] rounded-full"
              />
              <div className="w-[53.98px] text-[#323c47] text-[8.29px] font-medium font-inter tracking-tight">
                Jones Dermot
              </div>
            </div>
            <div className="w-[100px] h-[0px] mt-[10.5px] opacity-20 border border-[#D4D4D8]"></div>
            <div className="flex flex-row mt-[8.84px]">
              <Image
                src="/card/unchecked.svg"
                width={9}
                height={10}
                alt="checkbox"
                className="mr-[12.7px]"
              />
              <Image
                src="/card/img3.svg"
                width={14}
                height={15}
                alt="checkbox"
                className="mr-[6.08px] rounded-full"
              />
              <div className="w-[53.98px] text-[#323c47] text-[8.29px] font-medium font-inter tracking-tight">
                Martin Merce
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
