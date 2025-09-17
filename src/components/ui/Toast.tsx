import React, { useEffect } from 'react'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  isVisible, 
  onClose, 
  duration = 5000 
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 animate-in slide-in-from-right-full duration-300">
      <div 
        className="bg-white text-black px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 md:gap-4 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
        style={{
          border: '1px solid #E5E7EB'
        }}
      >
        <div className="flex-shrink-0">
          <img 
            src="/images/icon.png" 
            alt="Tripy Logo" 
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm md:text-base font-medium text-black leading-tight">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-600 hover:text-black transition-colors p-1 rounded-full hover:bg-gray-100"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Toast
