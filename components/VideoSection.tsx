'use client'

import { useState } from 'react'

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section id="video-demo" className="py-32 sm:py-40 relative overflow-hidden">
        {/* Vídeo de background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/img/demo.mp4" type="video/mp4" />
        </video>

        {/* Overlay laranja transparente */}
        <div className="absolute inset-0 bg-dark-bg opacity-70"></div>

        {/* Conteúdo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Veja o WInsight em Ação
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Descubra como transformamos dados do ERP em inteligência comercial
          </p>

          {/* Ícone de vídeo com animação de pulsar */}
          <div className="flex justify-center items-center">
            <button onClick={openModal} className="group cursor-pointer">
              {/* Círculo do botão com animação de pulsar */}
              <div className="play-button-pulse bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                {/* Ícone de play */}
                <svg className="w-10 h-10 text-primary-orange relative z-10" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '3px' }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Modal de Vídeo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            {/* Botão de fechar */}
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white hover:text-primary-orange transition">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Container do vídeo */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <video className="absolute inset-0 w-full h-full" controls autoPlay>
                <source src="/img/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}