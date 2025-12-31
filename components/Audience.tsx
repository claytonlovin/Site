export default function Audience() {
  return (
    <section id="necessidade" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna da Necessidade */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-dark-bg">
              Quem usa ERP precisa disso?
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              O ERP entrega dados, mas não entrega inteligência antecipatória. O WInsight complementa seu ERP com:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-primary-orange font-bold text-lg mr-2">•</span>
                Visão integrada do comportamento dos clientes
              </li>
              <li className="flex items-center">
                <span className="text-primary-orange font-bold text-lg mr-2">•</span>
                Alertas automáticos 24/7
              </li>
              <li className="flex items-center">
                <span className="text-primary-orange font-bold text-lg mr-2">•</span>
                IA para detectar padrões anormais de forma precoce
              </li>
              <li className="flex items-center">
                <span className="text-primary-orange font-bold text-lg mr-2">•</span>
                Interfaces simples para gestores não técnicos
              </li>
            </ul>
          </div>

          {/* Coluna do Público-Alvo */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-dark-bg">
              O WInsight é para sua empresa?
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Nossa solução é feita sob medida para empresas que usam o ERP e buscam máxima eficiência comercial:
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium">
              <span className="badge badge-1">
                <span className="icon-bg">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Distribuidores atacadistas
              </span>

              <span className="badge badge-2">
                <span className="icon-bg">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Atacado de autosserviço
              </span>

              <span className="badge badge-3">
                <span className="icon-bg">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Food service
              </span>

              <span className="badge badge-4">
                <span className="icon-bg">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Varejo de médio porte
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}