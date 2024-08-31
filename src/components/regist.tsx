import React from 'react'
import Image from 'next/image'

export default function Regist({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-1 text-center">Welcome!</h2>
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
              className="w-full p-2 border border-gray-300 rounded opacity-50 mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded opacity-50 mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="username"
              className="w-full p-2 border border-gray-300 opacity-50 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded mt-1 opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select className="w-full p-2 border border-gray-300 opacity-50 rounded mt-1">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-primary text-white p-2 rounded-lg hover:scale-[1.01] hover:bg-[#311CCF]"
          >
            Sign up
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
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  )
}
