import React from 'react'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface TRouterLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

const RouterLink = ({
  href,
  children,
  className,
  ...rest
}: TRouterLinkProps) => {
  return (
    <Link
      href={href}
      className={`relative inline-block px-3 py-1 rounded-lg transition-colors duration-200 hover:bg-[#3921f5] hover:text-white ${className || ''}`}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default RouterLink
