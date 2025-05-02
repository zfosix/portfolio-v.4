import React from 'react'
import Marquee from 'react-fast-marquee'

interface MarqueeElementProps {
  direction?: 'left' | 'right'
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export default function MarqueeElement({ 
  children, 
  direction = 'left',
  speed = 25,
  pauseOnHover = false,
  className = ''
}: MarqueeElementProps) {
  return (
    <Marquee 
      direction={direction} 
      speed={speed} 
      pauseOnHover={pauseOnHover}
      gradientWidth={100}
      className={className}
    >
      {children}
    </Marquee>
  )
}
