export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-dark-bg">
          Benefícios e Diferenciais que Geram Resultados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition scroll-animate">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary-orange text-white flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-dark-bg mb-2">Antecipação de Problemas</h3>
                <p className="text-gray-600">Identifique quedas de vendas antes que virem churn, evitando perda de faturamento invisível.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition scroll-animate">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary-orange text-white flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-dark-bg mb-2">Ações Rápidas e Baseadas em Dados</h3>
                <p className="text-gray-600">Recomendações prontas com inteligência artificial para corrigir a rota imediatamente.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition scroll-animate">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary-orange text-white flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-dark-bg mb-2">Feito para Winthor</h3>
                <p className="text-gray-600">Integração nativa com parâmetros e métricas do seu ERP, sem alterações estruturais.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition scroll-animate">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary-orange text-white flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-dark-bg mb-2">Implementação Rápida</h3>
                <p className="text-gray-600">Instalação sem complexidade, preservando a integridade e estabilidade do seu ERP.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}