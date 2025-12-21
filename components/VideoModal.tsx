'use client'

import { useEffect, useState } from 'react'

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl">
        {/* Botão de fechar */}
        <button 
          onClick={closeModal}
          className="absolute -top-12 right-0 text-white hover:text-primary-orange transition"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        {/* Container do vídeo */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl" style={{paddingBottom: '56.25%'}}>
          <video className="absolute inset-0 w-full h-full" controls autoPlay>
            <source src="/img/demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}