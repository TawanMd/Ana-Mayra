import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, TrendingUp, CheckCircle, Building2 } from 'lucide-react'

export default function SocialProof({ onOpenConsultation }) {
  const cases = [
    {
      company: 'Grupo Nexus Tech',
      segment: 'SaaS & Enterprise B2B',
      results: '+380% em Pipeline Qualificado',
      timeframe: '6 meses de consultoria',
      quote: 'A estruturação comercial desenvolvida pela Ana Mayra reformulou nosso time de vendas. Saímos do improviso para um playbook que permitiu triplicar o faturamento mantendo a margem.',
      author: 'Rodrigo Medeiros',
      role: 'CEO & Fundador',
      metric: 'R$ 14.2M',
      metricLabel: 'Novo faturamento anual'
    },
    {
      company: 'Vanguard Engenharia & Projetos',
      segment: 'Serviços Corporativos',
      results: 'Ciclo de Vendas reduzido de 90 para 32 dias',
      timeframe: '4 meses de consultoria',
      quote: 'O treinamento e a qualificação de leads mudaram radicalmente a assertividade da equipe. O fechamento de propostas complexas tornou-se muito mais ágil e previsível.',
      author: 'Camila Fontana',
      role: 'Diretora Comercial',
      metric: '64%',
      metricLabel: 'Redução no ciclo médio'
    },
    {
      company: 'Horizon Logística & Supply',
      segment: 'Operações B2B',
      results: 'Aumento de 42% no Ticket Médio',
      timeframe: '5 meses de consultoria',
      quote: 'Além de alinhar os KPIs de toda a equipe, a consultoria nos deu segurança para precificar corretamente e abordar contas enterprise com máxima autoridade.',
      author: 'Eduardo Valente',
      role: 'VP de Operações',
      metric: '+42%',
      metricLabel: 'Expansão de Ticket Médio'
    },
  ]

  const stats = [
    { value: '+R$ 48M', label: 'Gerados em Pipeline Auditado' },
    { value: '250+', label: 'Empresas Assessoradas' },
    { value: '3.4x', label: 'Aumento Médio de Conversão' },
    { value: '98.6%', label: 'Índice de Satisfação Executiva' },
  ]

  return (
    <section id="cases" className="py-24 sm:py-32 bg-surface relative overflow-hidden border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Counter Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-black font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-neutral-200 text-xs font-mono tracking-widest uppercase text-neutral-600 mb-4">
            [ CASOS DE SUCESSO & RESULTADOS ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-dark-900 uppercase">
            Impacto real nos números de quem confia na metodologia.
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:border-black/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Result Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-black text-[11px] font-bold uppercase tracking-wider mb-6">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{c.results}</span>
                </div>

                <p className="text-sm text-neutral-700 italic leading-relaxed mb-6">
                  "{c.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-black">{c.author}</div>
                  <div className="text-xs text-neutral-500">{c.role} • {c.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-black">{c.metric}</div>
                  <div className="text-[9px] uppercase font-mono text-neutral-400">{c.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="btn-primary rounded-xl px-10 py-4 text-xs uppercase tracking-widest font-bold shadow-xl inline-flex items-center gap-2"
          >
            <span>QUERO RESULTADOS SEMELHANTES NA MINHA EMPRESA</span>
          </button>
        </div>

      </div>
    </section>
  )
}
