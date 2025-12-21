export default function Solution() {
  return (
    <section id="solucao" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          {/* Coluna Esquerda: Título, Descrição e Benefícios */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-dark-bg scroll-animate">
              Inteligência Comercial Imediata
            </h2>
            <p className="text-xl text-primary-orange font-medium mb-12 scroll-animate">
              O WInsight conecta-se ao seu Winthor e transforma dados brutos em inteligência comercial imediata.
            </p>

            <div className="space-y-6">
              {/* Benefício 1 */}
              <div className="flex items-start scroll-animate">
                <div className="p-3 rounded-full bg-primary-orange text-white flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.24a2 2 0 010 2.834L11.83 14.83a2 2 0 01-2.828 0l-5.657-5.657a2 2 0 010-2.828l.493-.493a2 2 0 012.828 0L9 10.172l3.89-3.89a2 2 0 012.828 0l.494.493a2 2 0 010 2.828z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-dark-bg">Detecção Precoce de Quedas</h3>
                  <p className="text-gray-600">Detecte quedas de vendas de forma precoce, antes que afetem suas metas.</p>
                </div>
              </div>

              {/* Benefício 2 */}
              <div className="flex items-start scroll-animate">
                <div className="p-3 rounded-full bg-primary-orange text-white flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-dark-bg">Alertas Automáticos Inteligentes</h3>
                  <p className="text-gray-600">Receba alertas automáticos via e-mail ou WhatsApp, focando em clientes e categorias críticas.</p>
                </div>
              </div>

              {/* Benefício 3 */}
              <div className="flex items-start scroll-animate">
                <div className="p-3 rounded-full bg-primary-orange text-white flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-dark-bg">Recomendações Prontas (IA)</h3>
                  <p className="text-gray-600">Corrija a rota com recomendações inteligentes baseadas em IA, sem depender de relatórios complexos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Imagem */}
          <div className="flex justify-center items-center h-full">
            <img src="/img/section-01.svg" alt="Ilustração objetivos" className="h-auto object-contain scroll-animate" style={{maxWidth: '20rem'}} />
          </div>
        </div>
      </div>
    </section>
  )
}