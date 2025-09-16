'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Calendar, Users, Play, Quote, ChevronLeft, ChevronRight, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useEffect, useRef, Fragment, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  // Disable ScrollTrigger debug markers
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  })
  
  // Hide all ScrollTrigger debug markers
  ScrollTrigger.defaults({
    markers: false
  })
}

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const aboutImagesRef = useRef<HTMLDivElement>(null)
  const aboutContentRef = useRef<HTMLDivElement>(null)
  const packagesRef = useRef<HTMLDivElement>(null)
  const packagesLeftRef = useRef<HTMLDivElement>(null)
  const packagesRightRef = useRef<HTMLDivElement>(null)
  const centerImageRef = useRef<HTMLDivElement>(null)
  const centerTextRef = useRef<HTMLDivElement>(null)
  const centerContactRef = useRef<HTMLDivElement>(null)
  const destinationRef = useRef<HTMLDivElement>(null)
  const destinationCardsRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  
  // Carousel state for first destination card
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const carouselImages = [
    '/images/ic-tripy8.png',
    '/images/ic-tripy9.png', 
    '/images/ic-tripy10.png'
  ]

  // Blog carousel state
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0)
  
 
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  const [selectedSocial, setSelectedSocial] = useState<string | null>(null)
  
  const blogImages = [
    {
      id: 1,
      src: '/images/ic-tripy14.png',
      alt: 'Coastal Market Scene',
      type: 'photo'
    },
    {
      id: 2,
      src: '/images/ic-tripy.png',
      alt: 'Person on Cliff Overlooking Ocean',
      type: 'video'
    },
    {
      id: 3,
      src: '/images/ic-blog3.png',
      alt: 'Couple by Water at Sunset',
      type: 'photo'
    },
    {
      id: 4,
      src: '/images/ic-tripy15.png',
      alt: 'Woman by Turquoise Lake',
      type: 'video'
    },
    {
      id: 5,
      src: '/images/ic-tripy16.png',
      alt: 'Group Walking by Cliffs',
      type: 'photo'
    },
    {
      id: 6,
      src: '/images/ic-blog3.png',
      alt: 'Mountain Adventure',
      type: 'video'
    },
    {
      id: 7,
      src: '/images/ic-tripy16.png',
      alt: 'City Exploration',
      type: 'photo'
    },
    {
      id: 8,
      src: '/images/ic-tripy.png',
      alt: 'Beach Sunset',
      type: 'video'
    }
  ]
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  
  const nextBlogImage = () => {
    setCurrentBlogIndex((prev) => (prev + 1) % (blogImages.length - 4))
  }
  
  const prevBlogImage = () => {
    setCurrentBlogIndex((prev) => (prev - 1 + (blogImages.length - 4)) % (blogImages.length - 4))
  }

  // Newsletter subscription function
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Simple validation and subscription without API
      console.log('Subscribed email:', email)
      setIsSubscribed(true)
      setEmail('')
      // Show success message
      alert('Thank you for subscribing to our newsletter!')
    }
  }

  // Social media selection function
  const handleSocialSelect = (social: string) => {
    setSelectedSocial(selectedSocial === social ? null : social)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Hide any debug elements that might appear
    const hideDebugElements = () => {
      // Hide ScrollTrigger markers
      const markers = document.querySelectorAll('[class*="gsap-scroll-trigger"], [data-gsap-scroll-trigger]')
      markers.forEach(marker => {
        if (marker instanceof HTMLElement) {
          marker.style.display = 'none !important'
          marker.style.visibility = 'hidden'
          marker.style.opacity = '0'
          marker.style.pointerEvents = 'none'
        }
      })
      
      // Hide any blue debug elements
      const blueElements = document.querySelectorAll('[style*="background-color: blue"], [style*="background: blue"], [style*="background-color: #0000ff"]')
      blueElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none !important'
          el.style.visibility = 'hidden'
        }
      })
      
      // Hide elements with N text
      const nElements = document.querySelectorAll('[class*="N"], [id*="N"]')
      nElements.forEach(el => {
        if (el instanceof HTMLElement && el.textContent?.trim() === 'N') {
          el.style.display = 'none !important'
          el.style.visibility = 'hidden'
        }
      })
      
      // Hide any elements with debug-related classes or IDs
      const debugElements = document.querySelectorAll('[class*="debug"], [id*="debug"], [class*="marker"], [id*="marker"]')
      debugElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none !important'
          el.style.visibility = 'hidden'
        }
      })
    }

    // Run immediately and on DOM changes
    hideDebugElements()
    const observer = new MutationObserver(hideDebugElements)
    observer.observe(document.body, { childList: true, subtree: true })
    
    // Also run periodically to catch any elements that might slip through
    const interval = setInterval(hideDebugElements, 100)

    const ctx = gsap.context(() => {

      gsap.fromTo(contentRef.current, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )


      gsap.fromTo(imagesRef.current,
        {
          opacity: 0,
          x: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Search form animation
      gsap.fromTo(searchRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: searchRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Spinner continuous rotation
      gsap.to(".animate-spin-slow", {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1
      })

      // About Us Images Animation - Main container
      gsap.fromTo(aboutImagesRef.current,
        {
          opacity: 0,
          x: -100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutImagesRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // About Us Content Animation
      gsap.fromTo(aboutContentRef.current,
        {
          opacity: 0,
          y: 80,
          x: 50
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutContentRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Individual overlapping images animation with stagger
      const aboutImages = aboutImagesRef.current?.querySelectorAll('div[class*="absolute"]')
      if (aboutImages) {
        gsap.fromTo(aboutImages,
          {
            opacity: 0,
            y: 50,
            scale: 0.7,
            rotation: 5
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.3,
            scrollTrigger: {
              trigger: aboutImagesRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // About Us badge animation
      const aboutBadge = aboutContentRef.current?.querySelector('.travel-badge')
      if (aboutBadge) {
        gsap.fromTo(aboutBadge,
          {
            opacity: 0,
            y: 30,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: aboutContentRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      const aboutHeading = aboutContentRef.current?.querySelector('h2')
      if (aboutHeading) {
        gsap.fromTo(aboutHeading,
          {
            opacity: 0,
            y: 40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutContentRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // About Us paragraphs animation
      const aboutParagraphs = aboutContentRef.current?.querySelectorAll('p')
      if (aboutParagraphs) {
        gsap.fromTo(aboutParagraphs,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: aboutContentRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Spinner animation with special effects
      const aboutSpinner = aboutContentRef.current?.querySelector('.animate-spin-slow')
      if (aboutSpinner) {
        gsap.fromTo(aboutSpinner,
          {
            opacity: 0,
            scale: 0.5,
            rotation: 180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
              trigger: aboutContentRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Packages Section Animation - Main container
      gsap.fromTo(packagesRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: packagesRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Packages Left Side Animation
      gsap.fromTo(packagesLeftRef.current,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: packagesRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )


      gsap.fromTo(packagesRightRef.current,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: packagesRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      const packageItems = packagesRightRef.current?.querySelectorAll('div[class*="flex gap-4"]')
      if (packageItems) {
        gsap.fromTo(packageItems,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: packagesRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      gsap.fromTo(centerImageRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: centerImageRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(centerTextRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: centerImageRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Center Contact Button Animation
      gsap.fromTo(centerContactRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotation: 180
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: centerImageRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Destination Section Animation - Main container
      gsap.fromTo(destinationRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: destinationRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Destination Cards Animation
      gsap.fromTo(destinationCardsRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: destinationCardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Individual Destination Cards Animation with Stagger
      const destinationCards = destinationCardsRef.current?.querySelectorAll('div[class*="relative group cursor-pointer"]')
      if (destinationCards) {
        gsap.fromTo(destinationCards,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotation: 2
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: destinationCardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Destination Badge Animation
      const destinationBadge = destinationRef.current?.querySelector('.travel-badge')
      if (destinationBadge) {
        gsap.fromTo(destinationBadge,
          {
            opacity: 0,
            y: 30,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: destinationRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Destination Heading Animation
      const destinationHeading = destinationRef.current?.querySelector('h2')
      if (destinationHeading) {
        gsap.fromTo(destinationHeading,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: destinationRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Testimonial Section Animation
      gsap.fromTo(testimonialRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Testimonial Cards Animation with Stagger
      const testimonialCards = testimonialRef.current?.querySelectorAll('div[class*="bg-white p-6"]')
      if (testimonialCards) {
        gsap.fromTo(testimonialCards,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotation: 2
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: testimonialRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Blog Section Animation
      gsap.fromTo(blogRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Blog Cards Animation with Stagger
      const blogCards = blogRef.current?.querySelectorAll('div[class*="bg-white"]')
      if (blogCards) {
        gsap.fromTo(blogCards,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: blogRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Footer Section Animation
      gsap.fromTo(footerRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Footer Newsletter Animation
      const newsletterForm = footerRef.current?.querySelector('form')
      if (newsletterForm) {
        gsap.fromTo(newsletterForm,
          {
            opacity: 0,
            x: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Footer Links Animation with Stagger
      const footerLinks = footerRef.current?.querySelectorAll('div[class*="space-y-4"]')
      if (footerLinks) {
        gsap.fromTo(footerLinks,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

    }, heroRef)

    return () => {
      clearInterval(interval)
      observer.disconnect()
      ctx.revert()
    }
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative" style={{
      backgroundImage: "url('/images/ic-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '2075px'
    }}>
      <section className="relative section-padding-lg px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32">

      <div className="container-responsive relative z-10" style={{marginTop: '40px'}}>
<section
>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="text-center lg:text-left">
            <div className="travel-badge mb-4">
              Start Travelling With Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Let&apos;s Enjoy Your <br className="hidden sm:block" /> Desired Trip
              With TripyPackage
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              The traveller where you can select your desired activity and destinations of your choice for vacations.
            </p>
           
          </div>


          <div ref={imagesRef} className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-tl-sm rounded-tr-sm rounded-bl-2xl rounded-br-sm overflow-hidden shadow-lg flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                    <img 
                      src="/images/ic-tripy1.png"
                      alt="Burj Al Arab Hotel - Dubai"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-16 sm:mt-20 lg:mt-24">
                    <img src="/images/ic-playbtn.png" alt="Person on Cliff Overlooking Ocean" className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 ml-4 sm:ml-6" />
                  </div>
                </div>
              
                <div className="absolute -bottom-32 -right-16 sm:-bottom-40 sm:-right-20 md:-bottom-48 md:-right-24 lg:-bottom-60 lg:-right-40 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-tl-sm rounded-tr-2xl rounded-bl-sm rounded-br-sm overflow-hidden shadow-xl z-20">
                <img 
                  src="/images/ic-tripy.png"
                  alt="Person on Cliff Overlooking Ocean"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* See How It Works Spinner - Updated */}
             
            </div>
          </div>
        </div>
        


          {/* About Us Section */}
          <div id="about" className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
              {/* Left Side - Image Collage */}
              <div ref={aboutImagesRef} className="relative order-2 lg:order-1">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]  rounded-2xl p-3 sm:p-4 lg:p-6">
                  {/* Third Image - Bottom Layer (tripy4.png) - Maintains original overlapping design */}
                  <div className="absolute z-10" style={{ 
                    width: 'clamp(200px, 50vw, 414px)', 
                    height: 'clamp(150px, 40vw, 342px)', 
                    top: 'clamp(200px, 50vw, 390px)', 
                    left: 'clamp(10px, 5vw, 20px)' 
                  }}>
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 overflow-hidden shadow-xl" style={{ 
                      borderTopLeftRadius: '0px', 
                      borderTopRightRadius: 'clamp(8px, 2vw, 16px)', 
                      borderBottomLeftRadius: 'clamp(16px, 4vw, 32px)', 
                      borderBottomRightRadius: '0px' 
                    }}>
                      <img 
                        src="/images/ic-tripy4.png"
                        alt="Adventure"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Second Image - Middle Layer (tripy5.png) - Maintains original overlapping design */}
                  <div className="absolute z-20" style={{ 
                    width: 'clamp(250px, 60vw, 435px)', 
                    height: 'clamp(200px, 50vw, 400px)', 
                    top: 'clamp(100px, 30vw, 180.32px)', 
                    left: 'clamp(120px, 30vw, 195px)' 
                  }}>
                    <div className="w-full h-full  overflow-hidden shadow-xl" style={{ 
                      borderTopLeftRadius: '0px', 
                      borderTopRightRadius: 'clamp(18px, 4vw, 35px)', 
                      borderBottomLeftRadius: '0px', 
                      borderBottomRightRadius: '0px' 
                    }}>
                      <img 
                        src="/images/ic-tripy5.png"
                        alt="Travel Destination"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* First Image - Top Layer (tripy3.png) - Maintains original overlapping design */}
                  <div className="absolute z-30" style={{ 
                    width: 'clamp(150px, 35vw, 304px)', 
                    height: 'clamp(120px, 30vw, 315px)', 
                    left: 'clamp(20px, 8vw, 40px)', 
                    top: 'clamp(20px, 8vw, 40px)' 
                  }}>
                    <div className="w-full h-full  overflow-hidden shadow-xl" style={{ 
                      borderTopLeftRadius: 'clamp(18px, 4vw, 35px)', 
                      borderTopRightRadius: '0px', 
                      borderBottomLeftRadius: '0px', 
                      borderBottomRightRadius: '0px' 
                    }}>
                      <img 
                        src="/images/ic-tripy3.png"
                        alt="Travel Experience"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div ref={aboutContentRef} className="space-y-4 sm:space-y-6 order-1 lg:order-2 px-4 sm:px-6 lg:px-0 lg:ml-8 xl:ml-16">
                {/* About Us Badge */}
                <div className="travel-badge text-center lg:text-left">
                  About Us
                </div>
                
                <h2 className="text-gray-900 text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '124%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}>
                  We Are The Best Travel Market
                </h2>
                
                {/* Description */}
                <div className="space-y-4 sm:space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 lg:px-0 lg:ml-[140px]">
                  <p>
                    Venenatis donec sit sit egestas varius. Dictum sit risus scelerisque nulla amet vel mollis sem morbi. Egestas quam scelerisque morbi nisi lacinia nunc.
                  </p>
                  <p>
                    Venenatis donec sit sit egestas varius. Dictum sit risus scelerisque nulla amet vel mollis sem morbi. Egestas quam scelerisque morbi nisi lacinia nunc.
                  </p>
                </div>

                {/* Read More About Us Spinner */}
             
              </div>
            </div>
          </div>
          </section>

          
          {/* Packages Section */}
          <div id="packages" ref={packagesRef} className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Featured Package */}
              <div ref={packagesLeftRef} className="space-y-6">
                <div className="space-y-4">
                <div className="travel-badge text-center lg:text-left">
                  Packages
                </div>
                  <h2 className="text-gray-900 text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '124%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}>
                  Embark On Our Exclusive Package
                </h2>
                </div>
                
          
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden shadow-lg" style={{width: '630px', height: '400px'}}>
                    <img 
                      src="/images/ic-tripy6.png"
                      alt="Island Hopping Paradise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
        
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm" style={{
                    fontFamily: 'Open Sans',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}>
                    <span style={{color: '#0C1F26'}}>24 - 28 July</span>
                    <span style={{color: '#C6D1D6'}}>•</span>
                    <span style={{color: '#0C1F26'}}>4 day 3 Night</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">
                    Island Hopping Paradise
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                      Book Now
                    </button>
                    <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-colors">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>

              <div ref={packagesRightRef} className="space-y-6" style={{marginTop: '185px'}}>
              <div className="flex gap-8 p-8 border-b border-[#000000]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm mb-2" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}>
                      <span style={{color: '#0C1F26'}}>24 - 28 July</span>
                      <span style={{color: '#C6D1D6'}}>•</span>
                      <span style={{color: '#0C1F26'}}>4 day 3 Night</span>
                    </div>
                     <div className="flex-shrink-0 flex items-end" style={{marginTop: '-80px', marginLeft: '220px'}}>
                       <div className="w-24 h-24 overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/images/ic-tripy7.png"
                          alt="Mountain Majesty"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 "
                        />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '124%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  fontSize: '38px'



        
                }}>Mountain Majesty Ex</h4>




<p className="text-sm text-gray-600" style={{
                  fontFamily: 'Open Sans',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '150%',
                  fontSize: '16px',
                  letterSpacing: '0%',
                
                }}>
                Arcu suscipit sapien purus et in non. Pellentesque tempor enim et dignissim diam Cursus egestas eget sed nascetur gravida.
                    </p>
                  </div>
                 
                </div>

                <div className="flex gap-8 p-8 border-b border-[#000000]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm mb-2" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}>
                      <span style={{color: '#0C1F26'}}>24 - 28 July</span>
                      <span style={{color: '#C6D1D6'}}>•</span>
                      <span style={{color: '#0C1F26'}}>4 day 3 Night</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '124%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  fontSize: '38px'
                }}>Epic Road Trip Adventure</h4>
                      <p className="text-sm text-gray-600" style={{
                    fontFamily: 'Open Sans',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '150%',
                    fontSize: '16px',
                    letterSpacing: '0%',
                  
                  }}>
                    Arcu suscipit sapien purus et in non. Pellentesque tempor enim et dignissim diam.<br/>
                    Cursus egestas eget sed nascetur gravida.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/images/ic-tripy3.png"
                        alt="Epic Road Trip"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Package 3 */}
                <div className="flex gap-8 p-8 border-b border-[#000000]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm mb-2" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}>
                      <span style={{color: '#0C1F26'}}>24 - 28 July</span>
                      <span style={{color: '#C6D1D6'}}>•</span>
                      <span style={{color: '#0C1F26'}}>4 day 3 Night</span>
                    </div>  
                    <h4 className="font-bold text-gray-900 mb-2" style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '124%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  fontSize: '38px'
                }}>Cultural Treasures Tour</h4>
                    <p className="text-sm text-gray-600" style={{
                  fontFamily: 'Open Sans',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '150%',
                  fontSize: '16px',
                  letterSpacing: '0%',
                
                }}>
                    Arcu suscipit sapien purus et in non. Pellentesque tempor enim et dignissim diam.<br/>
                    Cursus egestas eget sed nascetur gravida.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/images/ic-tripy4.png"
                        alt="Cultural Treasures"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

         
                <div className="flex gap-8 p-8 border-b border-[#000000]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm mb-2" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}>
                      <span style={{color: '#0C1F26'}}>24 - 28 July</span>
                      <span style={{color: '#C6D1D6'}}>•</span>
                      <span style={{color: '#0C1F26'}}>4 day 3 Night</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '124%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  fontSize: '38px'
                }}>Historical Heritage Journey</h4>
                    <p className="text-sm text-gray-600" style={{
                  fontFamily: 'Open Sans',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '150%',
                  fontSize: '16px',
                  letterSpacing: '0%',
                
                }}>
                   Arcu suscipit sapien purus et in non. Pellentesque tempor enim et dignissim diam.<br/>
                   Cursus egestas eget sed nascetur gravida.
                   </p>
                 </div>
                 <div className="flex-shrink-0">
                   <div className="w-24 h-24 overflow-hidden hover:scale-105 transition-transform duration-300">
                     <img 
                       src="/images/ic-tripy5.png"
                       alt="Historical Heritage"
                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>

   
   
          </div>

         
         </div>

      </section>

          <div ref={centerImageRef} className="relative bg-gray-100 w-full py-12 sm:py-16 md:py-20 mt-8 sm:mt-12 md:mt-16 h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
            <img 
              src="/images/ic-center.png"
              alt="Best Destination"
              className="w-full h-full object-cover"
            />
            
            <div ref={centerTextRef} className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-8 lg:left-24">
              <div className="text-left">
                <h2
                  className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4"
                  style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: '124%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize',
                  }}
                >
                  Start Saving on Your <br />
                  Travel Budget.
                </h2>
                
                </div>
              </div>
              
        
              <div className="absolute bottom-8 right-16 lg:bottom-8 lg:right-16  ">
                <div className="flex items-center space-x-3">
                 
                   <img 
                    src="/images/ic-tripycontactus.png"
                    alt="Contact"
                    className="sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-full hover:scale-110 transition-transform duration-300" style={{width: '78px', height: '78px'}}
                  />
                </div>
              </div>
            </div>

          <div id="destinations" ref={destinationRef} className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-16">
              <div className="travel-badge mb-4">
                Destination
              </div>
              <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{
                fontFamily: 'El Messiri',
                fontWeight: 700,
                fontStyle: 'normal',
                lineHeight: '124%',
                letterSpacing: '0%',
                textTransform: 'capitalize'
              }}>
                Find You Best Destination
              </h2>
            </div>

            <div ref={destinationCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden shadow-lg" style={{borderTopRightRadius: '32px'}}>
                  <img 
                    src={carouselImages[currentImageIndex]}
                    alt="Mountain Range"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" style={{height: '372px'}}
                  />
                  
                  {/* Star Rating */}
                  <div className="absolute top-8 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-red-500">★</span>
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                  
                  {/* Carousel Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-white/90"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-700 rotate-180" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-white/90"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-700" />
                  </button>
                  
                  {/* Pagination Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '38px',
                    lineHeight: '124%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>Mountain Range</h3>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{color: '#5C6666'}} />
                    <p className="text-gray-600" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#5C6666'  
                    }}>East End of Rundle (EEOR) Trail, Canada</p>
                  </div>
                </div>
              </div>


              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden shadow-lg" style={{borderTopRightRadius: '32px'}}>
                  <img 
                    src="/images/ic-boat.png"
                    alt="Stunning Alpine Lake"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"  style={{height: '372px'}}
                  />
                  <div className="absolute top-8 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-red-500">★</span>
                    <span className="text-sm font-medium">5.0</span>
                  </div>
                </div>
                <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '38px',
                    lineHeight: '124%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>Stunning Alpine Lake</h3>
               <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{color: '#5C6666'}} />
                    <p className="text-gray-600" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#5C6666'  
                    }}>Pragser Wildsee, Italy</p>
                  </div>
                </div>
              </div>

              {/* Destination Card 3 - City Of Light with Video Play Button */}
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden shadow-lg" style={{borderTopRightRadius: '32px'}}>
                  <img 
                    src="/images/ic-tripy12.png"
                    alt="City Of Light"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"  style={{height: '372px'}}
                  />
                  <div className="absolute top-8 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-red-500">★</span>
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                  
                  {/* Video Play Button - Always Visible */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-lg">
                      <Play className="w-8 h-8 ml-1" style={{color: '#000000'}} />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '38px',
                    lineHeight: '124%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>City Of Light</h3>
                 <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{color: '#5C6666'}} />
                    <p className="text-gray-600" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#5C6666'  
                    }}>Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Destination Card 4 - Chamonix Town */}
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden shadow-lg" style={{borderTopRightRadius: '32px'}}>
                  <img 
                    src="/images/ic-tripy11.png"
                    alt="Chamonix Town"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"  style={{height: '372px'}}
                  />
                  <div className="absolute top-8 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-red-500">★</span>
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                </div>
                <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '38px',
                    lineHeight: '124%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>Chamonix Town</h3>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{color: '#5C6666'}} />
                    <p className="text-gray-600" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#5C6666'  
                    }}>Chamonix-Mont-Blanc, France</p>
                  </div>
                </div>
              </div>

              {/* Destination Card 5 - Mountain Range with Video Play Button */}
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden shadow-lg" style={{borderTopRightRadius: '32px'}}>
                  <img 
                    src="/images/ic-tripy9.png"
                    alt="Mountain Range"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"  style={{height: '372px'}}
                  />
                  <div className="absolute top-8 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-red-500">★</span>
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                  
                  {/* Video Play Button - Always Visible */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-lg">
                      <Play className="w-8 h-8 ml-1" style={{color: '#000000'}} />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '38px',
                    lineHeight: '124%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>Mountain Range</h3>
                   <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{color: '#5C6666'}} />
                    <p className="text-gray-600" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#5C6666'  
                    }}>Mont Blanc</p>
                  </div>
                </div>
              </div>

              {/* Destination Card 6 - Vibrant Culture */}
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden shadow-lg" style={{borderTopRightRadius: '32px'}}>
                  <img 
                    src="/images/ic-tripy10.png"
                    alt="Vibrant Culture"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"  style={{height: '372px'}}
                  />
                  <div className="absolute top-8 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-red-500">★</span>
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                </div>
                <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '38px',
                    lineHeight: '124%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>Vibrant Culture</h3>
                   <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{color: '#5C6666'}} />
                    <p className="text-gray-600" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#5C6666'  
                    }}>Dal Lake, Srinagar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      <div ref={testimonialRef} className="bg-gray-100 mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40">
          <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="space-y-4 mb-6">
                  <div className="text-orange-500 text-sm font-medium tracking-wide uppercase" 
                  style={{
                    fontFamily: 'Montez',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '28px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>
                    Testimonial
                  </div>
                  <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight" style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize'
                  }}>
                    What Say Our<br />Travelers
                  </h2>
                </div>
                
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8" style={{
                  fontFamily: 'Open Sans',
                  fontWeight: 400,
                  lineHeight: '160%'
                }}>
                  Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera.
                </p>
                
             <div >
               <img src="/images/book-btn.png" alt="Book a Trip" className="object-cover" style={{width:90,height:90}} />
             </div>
              </div>

              {/* Right Side - Testimonial Cards */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Testimonial Card 1 */}
                  <div className="bg-white p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative rounded-none flex flex-col h-80 sm:h-96 md:h-[344px] w-full">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-orange-500" style={{
                          width: '18px',
                          height: '13px',
                          fontSize: '18px',
                          lineHeight: '13px'
                        }}>★</span>
                      ))}
                    </div>
                    <p className="leading-relaxed mb-4 sm:mb-6 flex-grow" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '18px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#0C1F26',
                      verticalAlign: 'middle'
                    }}>
                      At vero eos accusamus iusto odio dignis simos ducimus quiesy blanditiisy prae sentium on voluptatum deleniti atque.
                    </p>
                    {/* Horizontal line with circular quote icon */}
                    <div className="relative flex items-center mb-4 -mx-4 sm:-mx-6">
                      <div className="w-full h-px bg-gray-300"></div>
                      <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center" style={{right: '40px'}}>
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 overflow-hidden flex-shrink-0">
                        <img 
                          src="/images/ic-profile1.png"
                          alt="David D. Bourdeau"
                          className="w-full h-full object-cover"
                         
                         
                        />
                        <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-gray-600 font-semibold text-xs sm:text-sm">DD</span>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate" style={{
                          fontFamily: 'El Messiri',
                          fontWeight: 700,
                          fontStyle: 'normal',
                          fontSize: '20px',
                          lineHeight: '124%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          verticalAlign: 'middle'
                        }}>
                          David D. Bourdeau
                        </div>
                        <div className="truncate" style={{
                          fontFamily: 'Open Sans',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '150%',
                          letterSpacing: '0%',
                          color: '#5C6666',
                          verticalAlign: 'middle'
                        }}>
                          @davidboureau
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 2 */}
                  <div className="bg-white p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative rounded-none flex flex-col h-80 sm:h-96 md:h-[344px] w-full">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-orange-500" style={{
                          width: '18px',
                          height: '13px',
                          fontSize: '18px',
                          lineHeight: '13px'
                        }}>★</span>
                      ))}
                    </div>
                    <p className="leading-relaxed mb-4 sm:mb-6 flex-grow" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '18px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#0C1F26',
                      verticalAlign: 'middle'
                    }}>
                      At vero eos accusamus iusto odio dignis simos ducimus quiesy blanditiisy prae sentium on voluptatum deleniti atque.
                    </p>
                    {/* Horizontal line with circular quote icon */}
                    <div className="relative flex items-center mb-4 -mx-4 sm:-mx-6">
                      <div className="w-full h-px bg-gray-300"></div>
                      <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center" style={{right: '40px'}}>
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 overflow-hidden flex-shrink-0">
                        <img 
                          src="/images/ic-profile2.png" 
                          alt="Sarah M. Johnson"
                          className="w-full h-full object-cover"
                  
                        />
                        <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-gray-600 font-semibold text-xs sm:text-sm">SM</span>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate" style={{
                          fontFamily: 'El Messiri',
                          fontWeight: 700,
                          fontStyle: 'normal',
                          fontSize: '20px',
                          lineHeight: '124%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          verticalAlign: 'middle'
                        }}>
                          Sarah M. Johnson
                        </div>
                        <div className="truncate" style={{
                          fontFamily: 'Open Sans',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '150%',
                          letterSpacing: '0%',
                          color: '#5C6666',
                          verticalAlign: 'middle'
                        }}> 
                          @sarahjohnson
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 3 */}
                  <div className="bg-white p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative rounded-none flex flex-col h-80 sm:h-96 md:h-[344px] w-full">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-orange-500" style={{
                          width: '18px',
                          height: '13px',
                          fontSize: '18px',
                          lineHeight: '13px'
                        }}>★</span>
                      ))}
                    </div>
                    <p className="leading-relaxed mb-4 sm:mb-6 flex-grow" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '18px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#0C1F26',
                      verticalAlign: 'middle'
                    }}>
                      At vero eos accusamus iusto odio dignis simos ducimus quiesy blanditiisy prae sentium on voluptatum deleniti atque.
                    </p>
                    {/* Horizontal line with circular quote icon */}
                    <div className="relative flex items-center mb-4 -mx-4 sm:-mx-6">
                      <div className="w-full h-px bg-gray-300"></div>
                      <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center" style={{right: '40px'}}>
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 overflow-hidden flex-shrink-0">
                        <img 
                          src="/images/ic-profile3.png" 
                          alt="Michael R. Chen"
                          className="w-full h-full object-cover"
                      
                        />
                        <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-gray-600 font-semibold text-xs sm:text-sm">MR</span>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate" style={{
                          fontFamily: 'El Messiri',
                          fontWeight: 700,
                          fontStyle: 'normal',
                          fontSize: '20px',
                          lineHeight: '124%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          verticalAlign: 'middle'
                        }}>
                          Michael R. Chen
                        </div>
                        <div className="truncate" style={{
                          fontFamily: 'Open Sans',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '150%',
                          letterSpacing: '0%',
                          color: '#5C6666',
                          verticalAlign: 'middle'
                        }}>
                          @michaelchen
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 4 */}
                  <div className="bg-white p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative rounded-none flex flex-col h-80 sm:h-96 md:h-[344px] w-full">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-orange-500" style={{
                          width: '18px',
                          height: '13px',
                          fontSize: '18px',
                          lineHeight: '13px'
                        }}>★</span>
                      ))}
                    </div>
                    <p className="leading-relaxed mb-4 sm:mb-6 flex-grow" style={{
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '18px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#0C1F26',
                      verticalAlign: 'middle'
                    }}>
                      At vero eos accusamus iusto odio dignis simos ducimus quiesy blanditiisy prae sentium on voluptatum deleniti atque.
                    </p>
                    {/* Horizontal line with circular quote icon */}
                    <div className="relative flex items-center mb-4 -mx-4 sm:-mx-6">
                      <div className="w-full h-px bg-gray-300"></div>
                      <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center" style={{right: '40px'}}>
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 overflow-hidden flex-shrink-0">
                        <img 
                          src="/images/ic-profile4.png" 
                          alt="Emma W. Davis"
                          className="w-full h-full object-cover"
                       
                        />
                        <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-gray-600 font-semibold text-xs sm:text-sm">EW</span>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate" style={{
                          fontFamily: 'El Messiri',
                          fontWeight: 700,
                          fontStyle: 'normal',
                          fontSize: '20px',
                          lineHeight: '124%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          verticalAlign: 'middle'
                        }}>
                          Emma W. Davis
                        </div>
                        <div className="truncate" style={{
                          fontFamily: 'Open Sans',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '150%',
                          letterSpacing: '0%',
                          color: '#5C6666',
                          verticalAlign: 'middle'
                        }}>
                          @emmadavis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

       
          <section style={{marginTop: '80px',}}>
            <div className="container-responsive">

              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                  {blogImages.slice(currentBlogIndex, currentBlogIndex + 5).map((image, index) => (
                    <div key={image.id} className="relative group cursor-pointer blog-carousel-item">
                      <div className="relative overflow-hidden shadow-lg w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80" style={{borderTopRightRadius: '32px', borderBottomRightRadius: '0px'}}>
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {image.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-lg">
                              <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-1" style={{color: '#000000'}} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={prevBlogImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg z-10"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 rotate-180" />
                </button>
                <button 
                  onClick={nextBlogImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg z-10"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

      
                <div className="flex justify-center mt-6 sm:mt-8 gap-2">
                  {Array.from({ length: blogImages.length - 4 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBlogIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentBlogIndex ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="blog" ref={blogRef} className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
            <div className="container-responsive" >
              {/* Blog & News Heading */}
              <div className="text-left mb-16">
                <div className="text-orange-500 text-sm font-medium tracking-wide uppercase mb-2" style={{
                  fontFamily: 'Montez',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '28px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}>
                  Blog & News
                </div>
                <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight" style={{
                  fontFamily: 'El Messiri',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}>
                  Read Our Latest News & Blog
                </h2>
              </div>

              {/* Blog Post Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Blog Post Card 1 */}
                <div className="bg-white Shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" style={{borderTopRightRadius: '32px'}}>
                  <div className="relative">
                    <img 
                      src="/images/ic-blog1.png"
                      alt="Four men on hillside"
                      className="w-full h-64 object-cover rounded-t-lg"
                      style={{borderTopRightRadius: '32px'}}
                    />
                    {/* Category Tag */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                      Category
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>6 Jun 2023</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      Effective Communication Strategies For Business Success
                    </h3>
                  </div>
                </div>

                {/* Blog Post Card 2 */}
                <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" style={{borderTopRightRadius: '32px'}}>
                  <div className="relative">
                    <img 
                      src="/images/img.png"
                      alt="Person by waterfall"
                      className="w-full h-64 object-cover rounded-t-lg"
                      style={{borderTopRightRadius: '32px'}}
                    />
                    {/* Category Tag */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                      Category
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>6 Jun 2023</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      Effective Communication Strategies For Business Success
                    </h3>
                  </div>
                </div>

                {/* Blog Post Card 3 */}
                <div className="bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" style={{borderTopRightRadius: '32px'}}>
                  <div className="relative">
                    <img 
                      src="/images/ic-blog3.png"
                      alt="Couple at sunset"
                      className="w-full h-64 object-cover rounded-t-lg"
                      style={{borderTopRightRadius: '32px'}}
                    />
                    {/* Category Tag */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                      Category
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>6 Jun 2023</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      Effective Communication Strategies For Business Success
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

        

     
          <footer id="footer" ref={footerRef} className="bg-gray-100 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
            <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
              <div>
                <div className="flex flex-col md:flex-row pt-16 sm:pt-20 md:pt-24 lg:pt-32">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900" style={{fontFamily:'El Messiri',fontWeight:700,fontStyle:'normal',lineHeight:'124%',letterSpacing:'0%',textTransform:'capitalize'}}>Join Our Newsletter</h3>
                  </div>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4 md:mt-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Your Address"
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80 md:w-96 lg:w-[520px]"
                      style={{
                        height: '70px',
                        fontSize: '16px',
                        color: '#0C1F26',
                        fontFamily: 'Open Sans',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        lineHeight: '160%',
                        letterSpacing: '0%',
                        backgroundColor: 'white',
                        border: '1px solid #D1D5DB',
                        borderRadius: '8px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                      }}
                      required
                    />
                      <button
                        type="submit"
                        className="px-6 py-3 transition-colors duration-300 whitespace-nowrap w-full sm:w-32 md:w-36 lg:w-[150px]"
                        style={{
                          height: '56px',
                          color: 'white',
                          fontFamily: 'Open Sans',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          lineHeight: '160%',
                          letterSpacing: '0%',
                          backgroundColor: '#1B485A',
                          paddingLeft: '20px',
                          paddingRight: '20px'
                        }}
                      >
                        Subscribe
                      </button>
                  </form>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-8 mt-12 sm:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-4 sm:mt-6">
                {/* Company Branding */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900" style={{fontFamily: 'El Messiri'}}>
                    TripyPackage
                  </h4>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" style={{fontFamily: 'El Messiri',fontWeight:700,fontStyle:'normal',lineHeight:'124%',letterSpacing:'0%',textTransform:'capitalize',color:"#0C1F26" }}>
                    Extraordinary <br/> Tour Service
                  </p>
                  <div className="flex space-x-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handleSocialSelect('facebook')}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        selectedSocial === 'facebook' 
                          ? 'hover:bg-[#1B485A]' 
                          : 'bg-white border border-gray-300 hover:bg-[#1B485A]'
                      }`}
                      style={{
                        backgroundColor: selectedSocial === 'facebook' ? '#1B485A' : 'white'
                      }}
                    >
                      <Facebook className={`w-5 h-5 ${
                        selectedSocial === 'facebook' ? 'text-white' : 'text-[#1B485A]'
                      }`} style={{
                        color: selectedSocial === 'facebook' ? 'white' : '#1B485A'
                      }} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handleSocialSelect('twitter')}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        selectedSocial === 'twitter' 
                          ? 'hover:bg-[#1B485A]' 
                          : 'bg-white border border-gray-300 hover:bg-[#1B485A]'
                      }`}
                      style={{
                        backgroundColor: selectedSocial === 'twitter' ? '#1B485A' : 'white'
                      }}
                    >
                      <Twitter className={`w-5 h-5 ${
                        selectedSocial === 'twitter' ? 'text-white' : 'text-[#1B485A]'
                      }`} style={{
                        color: selectedSocial === 'twitter' ? 'white' : '#1B485A'
                      }} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/tripypackage/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handleSocialSelect('linkedin')}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        selectedSocial === 'linkedin' 
                          ? 'hover:bg-[#1B485A]' 
                          : 'bg-white border border-gray-300 hover:bg-[#1B485A]'
                      }`}
                      style={{
                        backgroundColor: selectedSocial === 'linkedin' ? '#1B485A' : 'white'
                      }}
                    >
                      <Linkedin className={`w-5 h-5 ${
                        selectedSocial === 'linkedin' ? 'text-white' : 'text-[#1B485A]'
                      }`} style={{
                        color: selectedSocial === 'linkedin' ? 'white' : '#1B485A'
                      }} />
                    </a>
                    <a 
   href="https://www.instagram.com/tripypackage?igsh=ZnRnOTJyMGcyNjhx"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handleSocialSelect('instagram')}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        selectedSocial === 'instagram' 
                          ? 'hover:bg-[#1B485A]' 
                          : 'bg-white border border-gray-300 hover:bg-[#1B485A]'
                      }`}
                      style={{
                        backgroundColor: selectedSocial === 'instagram' ? '#1B485A' : 'white'
                      }}
                    >
                      <Instagram className={`w-5 h-5 ${
                        selectedSocial === 'instagram' ? 'text-white' : 'text-[#1B485A]'
                      }`} style={{
                        color: selectedSocial === 'instagram' ? 'white' : '#1B485A'
                      }} />
                    </a>
                  </div>
                </div>

           
                <div className="space-y-4 pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24">
                  <h5 className="text-lg font-semibold text-gray-900">Contact</h5>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <a href="tel:+919220601807" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        +91 92206 01807
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-600" />
                      <a href="mailto:traveler@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        traveler@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600">New Delhi, India</span>
                    </div>
                  </div>
                  
               
                </div>

                {/* Company Links */}
                <div className="space-y-4 pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24">
                  <h5 className="text-lg font-semibold text-gray-900">Company</h5>
                  <div className="space-y-2">
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-left"
                    >
                      About us
                    </button>
                    <button 
                      onClick={() => scrollToSection('packages')}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-left"
                    >
                      Our Package
                    </button>
                    <button 
                      onClick={() => scrollToSection('destinations')}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-left"
                    >
                      Destination
                    </button>
                    <button 
                      onClick={() => scrollToSection('blog')}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-left"
                    >
                      Blog & News
                    </button>
                    <button 
                      onClick={() => scrollToSection('packages')}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-left"
                    >
                      Pricing Package
                    </button>
                  </div>
                </div>

                {/* Open Trip Links */}
                <div className="space-y-4" style={{paddingLeft:100}}>
                  <h5 className="text-lg font-semibold text-gray-900">Open Trip</h5>
                  <div className="space-y-2">
                    <span className="block text-gray-600">
                      Company History
                    </span>
                    <span className="block text-gray-600">
                      Popular Services
                    </span>
                    <span className="block text-gray-600">
                      Case Studies
                    </span>
                    <span className="block text-gray-600">
                      Expert Team
                    </span>
                    <span className="block text-gray-600">
                      Pricing Package
                    </span>
                  </div>
                </div>
              </div>
              </div>
              <div className="border-t border-gray-300 pt-8" style={{paddingBottom:40,flex:1}}>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" style={{marginTop:20}}>
                  <div className="text-sm" style={{
                    color: '#5C6666',
                    fontFamily: 'Open Sans',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '160%',
                    letterSpacing: '0%'
                  }}>
                    Copyright @2023, <span className="font-semibold">Traveler</span> All Rights Reserved
                  </div>
                  <div className="flex space-x-6 text-sm">
                    <span style={{
                      color: '#5C6666',
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '160%',
                      letterSpacing: '0%'
                    }}>
                      Terms Of Use
                    </span>
                    <span style={{
                      color: '#5C6666',
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '160%',
                      letterSpacing: '0%'
                    }}>
                      Privacy Policy
                    </span>
                    <span style={{
                      color: '#5C6666',
                      fontFamily: 'Open Sans',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '160%',
                      letterSpacing: '0%'
                    }}>
                      FAQs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
           
   
      
            
        </section>
      )
}

export default Hero
