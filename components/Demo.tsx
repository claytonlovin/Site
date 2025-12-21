export default function Demo() {
  return (
    <section id="demonstracao" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-dark-bg scroll-animate">
          Painel Intuitivo do WInsight
        </h2>
        <p className="text-xl text-gray-500 text-center mb-12 max-w-3xl mx-auto scroll-animate">
          Visualize alertas, análises e recomendações em um painel intuitivo, projetado para gestores que buscam ação rápida e eficaz.
        </p>

        {/* Imagem do Dashboard */}
        <div className="flex justify-center scroll-animate overflow-hidden">
          <img src="/img/dashboard.png" alt="Dashboard WInsight" className="w-full max-w-4xl h-80 object-cover object-top rounded-t-xl shadow-2xl" />
        </div>
      </div>
    </section>
  )
}