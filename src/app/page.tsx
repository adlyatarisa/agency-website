import React from 'react'
import Hero from '@/components/hero'
import Pages from '@/components/pages'
import Card from '@/components/card'
export default function Home() {
  return (
    <main className="bg-white font-Inter">
      <Hero />
      <Pages />
      <Card />
    </main>
  )
}
