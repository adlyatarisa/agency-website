import React from 'react'

export default function Login() {
  return (
    <div className="w-[1260px] h-[681px] flex justify-between items-center flex-row border border-black mx-[95px] my-20 ">
      <div className=" flex flex-col">
        <div className="w-[451px] text-[#141f39] text-4xl font-bold font-space leading-[48px]">
          Ready To Use Our App With No Hidden Malware
        </div>
        <div className="w-[451px] h-[55px] opacity-70 text-[#4f4f4f] text-base font-normal font-inter leading-relaxed mt-4">
          Etiam euismod volutpat lacus fringilla henr. Mauris lobortis purus
          velit quis. Nunc mollis venenatis metus nec aliquet.
        </div>
        <input
          type="email"
          className="w-[526px] h-[65px] bg-white shadow rounded-lg px-4 mt-5 mb-5"
          style={{ boxShadow: '0 0 22px rgba(0, 0, 0, 0.08)' }}
          placeholder="input your email"
        />
        <div className="opacity-60">
          <span
            style={{
              color: '#4f4f4f',
              fontSize: '0.875rem',
              fontWeight: '0',
              fontFamily: 'Plus Jakarta Sans',
              lineHeight: '1.75rem',
            }}
          >
            Already a member?
          </span>
          <span
            style={{
              color: '#4f4f4f',
              fontSize: '0.875rem',
              fontWeight: '400',
              fontFamily: 'Plus Jakarta Sans',
              lineHeight: '1.75rem',
            }}
          >
            {' '}
          </span>
          <span
            style={{
              color: '#4f4f4f',
              fontSize: '0.875rem',
              fontWeight: '700',
              fontFamily: 'Plus Jakarta Sans',
              lineHeight: '1.75rem',
            }}
          >
            Sign In
          </span>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}
