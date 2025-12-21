'use client'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="p-4 sm:p-6 fixed top-4 sm:top-6 lg:top-8 xl:top-12 left-4 sm:left-6 lg:left-8 xl:left-12 right-4 sm:right-6 lg:right-8 xl:right-12 bg-transparent z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="transition duration-300">
          <Logo size="md" variant="light" />
        </a>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#problema" className="text-white hover:text-gray-200 transition">O Problema</a>
          <a href="#solucao" className="text-white hover:text-gray-200 transition">A Solução</a>
          <a href="#beneficios" className="text-white hover:text-gray-200 transition">Benefícios</a>
          <a href="#faq" className="text-white hover:text-gray-200 transition">FAQ</a>
        </nav>

        {/* Botões de Ação */}
        <div className="flex items-center space-x-4">
          <a href="#cta-final" className="hidden sm:inline-block bg-white text-primary-orange px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition duration-300">
            Testar WInsight
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <a href="#problema" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-800 hover:text-primary-orange transition">O Problema</a>
          <a href="#solucao" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-800 hover:text-primary-orange transition">A Solução</a>
          <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-800 hover:text-primary-orange transition">Benefícios</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-800 hover:text-primary-orange transition">FAQ</a>
        </nav>
      )}
    </header>
  )
}
