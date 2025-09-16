import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element = elementRef.current
    if (!element) return

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return elementRef
}

export const useScrollAnimation = (animation: (element: HTMLElement) => void) => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element = elementRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      animation(element)
    }, element)

    return () => {
      ctx.revert()
    }
  }, [animation])

  return elementRef
}

export default useGSAP
