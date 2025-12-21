export default function Hero() {
  return (
    <section id="hero" className="relative bg-primary-orange text-white pt-40 pb-32 sm:pt-48 sm:pb-40 overflow-hidden rounded-t-3xl">
      {/* Polígonos decorativos no fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Polígono branco grande (reduzido) - canto inferior esquerdo */}
        <div className="absolute poly-bottom-6 poly-left-3 w-20 h-20 bg-white rounded-full opacity-10"></div>
        
        {/* Polígono azul escuro médio (reduzido) - canto inferior direito */}
        <div className="absolute -bottom-40 -right-20 w-24 h-24 bg-slate-800 rounded-full opacity-15"></div>
        
        {/* Polígono azul escuro pequeno (reduzido) - lado direito */}
        <div className="absolute -bottom-32 right-1/4 w-20 h-20 bg-slate-800 rounded-full opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Título e Subtítulo */}
        <h1 className="text-4xl sm:text-6xl mb-4 leading-tight scroll-animate">
          Pare de descobrir perda de faturamento tarde demais.
        </h1>
        <p className="text-lg sm:text-xl font-light mb-8 max-w-3xl mx-auto scroll-animate">
          O WInsight monitora seu Winthor, detecta quedas críticas de vendas e avisa antes que o prejuízo aconteça — com insights claros e prontos para ação.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#cta-final" className="inline-block bg-dark-bg text-white px-8 py-3 rounded-full shadow-xl hover:bg-gray-100 hover:text-primary-orange transition duration-300 transform hover:scale-105">
            Quero testar o WInsight
          </a>
          <a href="#video-demo" className="inline-flex items-center justify-center bg-transparent border border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-primary-orange transition duration-300 transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 15 7-5-7-5v10z"/>
            </svg>
            Veja mais
          </a>
        </div>
      </div>
    </section>
  )
}