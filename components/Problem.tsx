export default function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-dark-bg">
          O Risco Invisível no seu ERP
        </h2>
        <p className="text-xl text-gray-500 mb-12 max-w-4xl mx-auto">
          Todos os dias, empresas que usam ERP perdem faturamento sem perceber. Vendas caem por cliente, região, mix ou vendedor, e o gestor só descobre quando o impacto é inreverseível.
        </p>

        {/* Problemas Típicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-dark-bg text-white p-6 rounded-xl shadow-inner flex flex-col items-center text-center scroll-animate">
            <div className="bg-primary-orange rounded-full p-3 mb-4 inline-flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h8m0 0l-3-3m3 3l-3 3M3 11l8-8m0 0l3 3m-3-3l3-3m0 8l-8 8m0 0l3 3m-3-3l3 3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Queda Silenciosa</h3>
            <p className="text-white/80">Queda silenciosa de compras por clientes importantes e redução do mix de produtos.</p>
          </div>

          <div className="bg-dark-bg text-white p-6 rounded-xl shadow-inner flex flex-col items-center text-center scroll-animate">
            <div className="bg-primary-orange rounded-full p-3 mb-4 inline-flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Demora na Ação</h3>
            <p className="text-white/80">Lentidão para identificar as causas reais, resultando em ações tardias e prejuízo invisível.</p>
          </div>

          <div className="bg-dark-bg text-white p-6 rounded-xl shadow-inner flex flex-col items-center text-center scroll-animate">
            <div className="bg-primary-orange rounded-full p-3 mb-4 inline-flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Falta de Visibilidade</h3>
            <p className="text-white/80">Decisões demoradas por falta de visibilidade atualizada e dependência de relatórios complexos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}