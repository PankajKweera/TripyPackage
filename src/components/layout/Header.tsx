'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.innerWidth < 768
      const isTablet = window.innerWidth < 1024
      
      // Responsive scroll thresholds
      const topThreshold = isMobile ? 5 : 10
      const hideThreshold = isMobile ? 50 : (isTablet ? 80 : 100)
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)
      
      // Only trigger if scroll difference is significant (performance optimization)
      if (scrollDifference < 5) return
      
      // Show header when at the top of the page
      if (currentScrollY < topThreshold) {
        setIsHeaderVisible(true)
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    // Handle resize events to reset scroll behavior
    const handleResize = () => {
      if (window.scrollY < 10) {
        setIsHeaderVisible(true)
      }
    }
    
    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [lastScrollY])

  const navigation = [
    { name: 'Home', href: '#', scrollTo: 'hero' },
    { name: 'About', href: '#about', scrollTo: 'about' },
    { name: 'Packages', href: '#packages', scrollTo: 'packages' },
    { name: 'Destination', href: '#destinations', scrollTo: 'destinations' },
    { name: 'Blog', href: '#blog', scrollTo: 'blog' },
    { name: 'Contact Us', href: '#footer', scrollTo: 'footer' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className={`bg-gray-100 shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container-responsive px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-2">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span 
                className="text-lg sm:text-xl font-bold text-gray-900"
                style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'Bold',
                  fontSize: '32px',
                  lineHeight: '124%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}
              >
                TripyPackage
              </span>
            </Link>
          </div>


          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.scrollTo)}
                className="nav-link nav-link-text hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <div className="w-8 h-6 flex flex-col justify-center items-center space-y-1.5">
              <div className="h-0.5" style={{width: '24px', backgroundColor: '#1B485A', borderRadius: '3px'}}></div>
              <div className="h-0.5" style={{width: '20px', backgroundColor: '#1B485A', borderRadius: '3px'}}></div>
              <div className="h-0.5" style={{width: '30px', backgroundColor: '#1B485A', borderRadius: '3px'}}></div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 text-gray-700" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 text-gray-700" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.scrollTo)
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left px-3 py-2 nav-link-text text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
