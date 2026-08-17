import React from 'react'
import { motion } from 'framer-motion'
import { Search, Compass, Workflow, LineChart } from 'lucide-react'

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico 360°',
      desc: 'Mapeamos taxas de conversão atuais, gargalos do funil, perfil da equipe e oportunidades imediatas de alavancagem de receita.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Arquitetura Estratégica',
      desc: 'Desenho sob medida do processo comercial, canais de aquisição, esteira de produtos, SLAs e modelagem de metas.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Playbook & Capacitação',
      desc: 'Criação do guia prático de execução e treinamento intensivo da equipe para garantir aplicação de alto nível no dia a dia.',
      icon: Workflow,
    },
    {
      num: '04',
      title: 'Aceleração & Governança',
      desc: 'Rituais de acompanhamento, análise de indicadores (KPIs), refinamento contínuo e escalada sustentável de faturamento.',
      icon: LineChart,
    },
  ]

  return (
    <section id="metodologia" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-xs font-mono tracking-widest uppercase text-neutral-700 mb-4">
            [ METODOLOGIA PROPRIETÁRIA ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-dark-900 uppercase">
            Como transformamos sua operação de vendas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Um processo estruturado em 4 etapas para eliminar o improviso e instaurar previsibilidade comercial.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-2xl p-7 bg-neutral-50/80 border border-neutral-200 hover:bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-neutral-300 group-hover:text-black transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-200/60 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-neutral-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-black ${idx === 0 ? 'w-1/4' : idx === 1 ? 'w-2/4' : idx === 2 ? 'w-3/4' : 'w-full'}`} />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">FASE {step.num}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
