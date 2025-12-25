import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white py-12 sm:py-16 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Coluna 1: Logo e Social */}
          <div className="col-span-2 lg:col-span-1">
            <Logo size="md" variant="light" className="mb-2" />
            <p className="text-sm text-gray-400 mt-2">
              Dados que decidem. Vendas que acontecem.
            </p>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#solucao" className="hover:text-primary-orange transition">Funcionalidades</a></li>
              <li><a href="#demonstracao" className="hover:text-primary-orange transition">Demonstração</a></li>
              <li><a href="#beneficios" className="hover:text-primary-orange transition">Vantagens</a></li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-orange transition">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-orange transition">Contato Comercial</a></li>
              <li><a href="#" className="hover:text-primary-orange transition">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Coluna 4: Suporte */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#faq" className="hover:text-primary-orange transition">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-orange transition">Ajuda & Docs</a></li>
              <li><a href="#" className="hover:text-primary-orange transition">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 5: Contato Direto */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Fale Conosco</h4>
            <p className="text-sm text-gray-400 mb-3">
              (41) 9999-9999 <br />
              contato@winsight.com.br
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center space-x-3 mb-4">
              <a
                href="https://youtube.com/@winsightbr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-orange transition duration-300 flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/winsight.ia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-orange transition duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <a href="#cta-final" className="inline-block bg-primary-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 text-sm">
              Agendar Ligação
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; 2024 WInsight. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}