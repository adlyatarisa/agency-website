'use client'

import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const getClassName = (href: string) => {
    return pathname === href ? 'text-blue-primary' : 'text-[#000000]'
  }

  const links = [
    { href: '/', text: 'Home' },
    { href: '/pages', text: 'Pages' },
    { href: '/pricing', text: 'Pricing' },
    { href: '/portfolio', text: 'Portfolio' },
    { href: '/blog', text: 'Blog' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <nav
      className={`flex items-center justify-between p-10 bg-white shadow-md ${className}`}
    >
      <Link
        href={'/'}
        className="flex scale-75 items-center ml-[120px] lg:scale-100"
      >
        <Image src="/navbar/Logo.svg" width={211} height={70} alt="logo" />
      </Link>
      <div className="hidden lg:flex space-x-8 ml-[146px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg ${getClassName(link.href)}`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <Link
        href="/get-started"
        className="hidden lg:flex bg-blue-primary text-white py-3 px-6 rounded-xl mr-[60px]"
      >
        Get Started Free
      </Link>
      <button className="lg:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
        <Image src="/navbar/menu-icon.svg" width={24} height={24} alt="Menu" />
      </button>
      {isOpen && (
        <div className="lg:hidden absolute items-center justify-between top-full left-0 w-full bg-white shadow-lg flex flex-col items-start p-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-semibold ${getClassName(link.href)}`}
            >
              {link.text}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-blue-primary text-white py-3 px-6 rounded-xl w-full text-center"
          >
            Get Started Free
          </Link>
        </div>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}
