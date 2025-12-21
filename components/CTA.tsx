import { useForm } from '@formspree/react';

export default function CTA() {
  const [state, handleSubmit] = useForm("meejkdgk");

  if (state.succeeded) {
    return (
      <section id="cta-final" className="py-20 sm:py-24 bg-dark-bg rounded-t-3xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Obrigado pelo seu interesse!
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Entraremos em contato em breve para agendar sua demonstração exclusiva.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="cta-final" className="py-20 sm:py-24 bg-dark-bg rounded-t-3xl relative overflow-hidden">
      {/* Polígonos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-orange rounded-full opacity-10"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-400 rounded-full opacity-5"></div>
        <div className="absolute top-1/2 -right-24 w-48 h-48 bg-primary-orange rounded-full opacity-5 transform -translate-y-1/2"></div>
        <div className="absolute top-1/3 -left-28 w-56 h-56 bg-primary-orange rounded-full opacity-5"></div>
        <div className="absolute -top-20 left-1/3 w-40 h-40 bg-primary-orange rounded-full opacity-5"></div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Pronto para ver a queda de faturamento antes que ela aconteça?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Preencha o formulário e solicite uma demonstração exclusiva do WInsight.
        </p>

        {/* Formulário de Contato */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="nome"
            placeholder="Seu Nome Completo" 
            className="w-full p-4 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange transition" 
            required 
          />
          <input 
            type="text" 
            name="empresa"
            placeholder="Nome da Sua Empresa" 
            className="w-full p-4 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange transition" 
            required 
          />
          <input 
            type="text" 
            name="cargo"
            placeholder="Seu Cargo/Função" 
            className="w-full p-4 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange transition" 
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Seu Melhor E-mail" 
            className="w-full p-4 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange transition" 
            required 
          />
          <input 
            type="tel" 
            name="whatsapp"
            placeholder="WhatsApp (DDD + Número)" 
            className="w-full p-4 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange transition" 
            required 
          />
          
          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-primary-orange text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-[1.02] mt-6 disabled:opacity-50"
          >
            {state.submitting ? 'Enviando...' : 'Quero Receber a Demonstração do WInsight'}
          </button>
        </form>
      </div>
    </section>
  )
}
