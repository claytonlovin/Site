export default function SocialProof() {
  return (
    <section id="prova-social" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-dark-bg">
          O Valor da Antecipação de Dados
        </h2>
        
        <div className="space-y-10">
          <blockquote className="text-xl italic text-gray-700 p-6 border-l-4 border-primary-orange bg-gray-50 rounded-xl shadow-md">
            <p className="mb-3">"Empresas que conseguem identificar queda de faturamento com antecedência <strong>reduzem churn em até 40%</strong>."</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-dark-bg">HB</div>
              <div className="text-left">
                <div className="text-base font-semibold text-primary-orange">Harvard Business Review</div>
                <div className="text-sm text-gray-600">Fonte</div>
              </div>
            </div>
          </blockquote>

          <blockquote className="text-xl italic text-gray-700 p-6 border-l-4 border-primary-orange bg-gray-50 rounded-xl shadow-md">
            <p className="mb-3">"Negócios <em>data-driven</em> crescem <strong>23% mais rápido</strong> que a concorrência."</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-dark-bg">MC</div>
              <div className="text-left">
                <div className="text-base font-semibold text-primary-orange">McKinsey & Company</div>
                <div className="text-sm text-gray-600">Fonte</div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}