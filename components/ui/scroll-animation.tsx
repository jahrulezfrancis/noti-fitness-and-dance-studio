"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in"
  delay?: number
  threshold?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      { threshold },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold, hasAnimated])

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClass} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClass} opacity-0`
        case "slide-left":
          return `${baseClass} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClass} opacity-0 translate-x-8`
        case "scale-in":
          return `${baseClass} opacity-0 scale-95`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
