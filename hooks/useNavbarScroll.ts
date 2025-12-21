import { useEffect } from 'react'

export function useNavbarScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      const heroSection = document.querySelector('#hero')
      
      if (!heroSection || !header) return
      
      // Pega a altura do hero
      const heroHeight = heroSection.offsetTop + heroSection.offsetHeight
      
      // Se o scroll passar da altura do hero, adiciona a classe 'scrolled'
      if (window.scrollY > heroHeight - 100) {
        header.classList.add('scrolled')
        // Muda cor do texto para branco quando tem fundo laranja
        header.classList.remove('text-white')
        // Mantém as margens ao fazer scroll
        header.style.top = 'auto'
      } else {
        header.classList.remove('scrolled')
        header.classList.add('text-white')
        // Remove o style para voltar ao posicionamento responsivo
        header.style.top = ''
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}