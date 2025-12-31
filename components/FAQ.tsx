'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqItems = [
    {
      question: "O WInsight precisa alterar dados do ERP?",
      answer: "Não. O WInsight conecta-se apenas para leitura de dados, via API segura. Ele não faz alterações ou modificações no seu banco de dados ERP, garantindo total segurança e estabilidade."
    },
    {
      question: "Quem terá acesso aos meus dados de faturamento?",
      answer: "Apenas sua empresa. Garantimos confidencialidade total. Não há compartilhamento de informações comerciais ou estratégicas com terceiros."
    },
    {
      question: "O sistema é difícil de usar para gestores não técnicos?",
      answer: "Absolutamente não. O WInsight foi projetado para gestores, com foco em simplicidade. Você recebe insights e recomendações em linguagem clara, sem precisar ser um especialista em dados."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-dark-bg">
          Perguntas Frequentes (FAQ)
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 cursor-pointer transition-all duration-300 ${openItem === index ? 'shadow-xl border-primary-orange/50' : ''
                }`}
              onClick={() => toggleItem(index)}
            >
              <div className="flex justify-between items-center font-semibold text-lg text-gray-700">
                {item.question}
                <span className="text-primary-orange text-2xl">
                  {openItem === index ? '–' : '+'}
                </span>
              </div>
              {openItem === index && (
                <p className="mt-3 text-gray-600">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
