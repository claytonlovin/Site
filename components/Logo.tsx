interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', size = 'md', variant = 'light' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-7 sm:h-7',
    lg: 'h-12 sm:h-14'
  }

  // Se você quiser ter versões diferentes da logo para fundo claro/escuro
  const logoSrc = variant === 'dark' ? '/img/logo-dark.png' : '/img/logo.png'

  return (
    <img 
      src={logoSrc}
      alt="WInsight" 
      className={`w-auto ${sizeClasses[size]} ${className}`}
    />
  )
}