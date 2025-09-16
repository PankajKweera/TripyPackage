import { useState, useEffect } from 'react'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('sm')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      
      if (width < breakpoints.sm) setBreakpoint('xs')
      else if (width < breakpoints.md) setBreakpoint('sm')
      else if (width < breakpoints.lg) setBreakpoint('md')
      else if (width < breakpoints.xl) setBreakpoint('lg')
      else if (width < breakpoints['2xl']) setBreakpoint('xl')
      else if (width < breakpoints['3xl']) setBreakpoint('2xl')
      else setBreakpoint('3xl')
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint
}

export function useIsMobile(): boolean {
  const breakpoint = useBreakpoint()
  return breakpoint === 'xs' || breakpoint === 'sm'
}

export function useIsTablet(): boolean {
  const breakpoint = useBreakpoint()
  return breakpoint === 'md'
}

export function useIsDesktop(): boolean {
  const breakpoint = useBreakpoint()
  return ['lg', 'xl', '2xl', '3xl'].includes(breakpoint)
}

export function getBreakpointValue(breakpoint: Breakpoint): number {
  return breakpoints[breakpoint]
}

export function isBreakpoint(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= breakpoints[breakpoint]
}

export function isBreakpointDown(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < breakpoints[breakpoint]
}

export function isBreakpointBetween(min: Breakpoint, max: Breakpoint): boolean {
  if (typeof window === 'undefined') return false
  const width = window.innerWidth
  return width >= breakpoints[min] && width < breakpoints[max]
}
