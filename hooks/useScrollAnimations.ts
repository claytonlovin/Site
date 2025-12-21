import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Respect reduced motion: make elements visible
      document.querySelectorAll('.scroll-animate').forEach(el => el.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}