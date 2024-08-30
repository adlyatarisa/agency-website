import React, { useState } from 'react'
import Image from 'next/image'
import Regist from '@/components/regist'

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  const [isRegistOpen, setRegistOpen] = useState(false)

  const openRegist = () => setRegistOpen(true)
  const closeRegist = () => setRegistOpen(false)

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-1 text-center">Welcome back!</h2>
        <p className="text-gray-700 text-sm mb-4 text-center">
          Please enter your details.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" className="text-blue-primary text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-primary text-white p-2 rounded-lg hover:scale-[1.01] hover:bg-[#311CCF]"
          >
            Log In
          </button>
          <button
            type="submit"
            className="w-full bg-white border border-blue-primary text-blue-primary p-2 rounded-lg hover:scale-[1.01] mt-[20px] flex justify-center gap-[10px]"
          >
            <Image
              src="/card/google.svg"
              width={24}
              height={24}
              alt="Google Logo"
            />
            Log In with Google
          </button>
          <div className="mt-[10px] flex justify-center flex-row gap-[5px] text-blue-dark">
            Don&apos;t have an account?
            <button className="hover:text-blue-primary" onClick={openRegist}>
              Create account
            </button>
            <Regist isOpen={isRegistOpen} onClose={closeRegist} />
          </div>
        </form>
      </div>
    </div>
  )
}
