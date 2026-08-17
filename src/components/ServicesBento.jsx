import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Filter, 
  PieChart, 
  GraduationCap, 
  ArrowUpRight, 
  Target, 
  Zap, 
  Layers,
  ChevronRight
} from 'lucide-react'

export default function ServicesBento({ onOpenConsultation }) {
  const services = [
    {
      id: '01',
      title: 'Estratégia de Vendas',
      tagline: 'Mapeamento, metas e táticas de conversão',
      description: 'Estruturação completa do funil de vendas, definição de ICP (Perfil de Cliente Ideal), metas de tração e canais de aquisição de alta rentabilidade.',
      icon: TrendingUp,
      deliverables: ['Desenho do Funil Comercial', 'Estratégia Outbound & Inbound', 'Definição de Comissionamento', 'Matriz de Metas e KPIs'],
      metric: '+45%',
      metricLabel: 'Taxa de Fechamento',
      featured: true,
    },
    {
      id: '02',
      title: 'Gestão de Leads',
      tagline: 'Qualificação, nutrição e SLA de atendimento',
      description: 'Implementação de processos para qualificação rápida, automação de cadências de prospecção e redução drástica do tempo de resposta (lead time).',
      icon: Filter,
      deliverables: ['Implementação e Otimização de CRM', 'Critérios de MQL para SQL', 'Scripts de Abordagem', 'Recuperação de Pipeline'],
      metric: '3.2x',
      metricLabel: 'Velocidade de Contato',
      featured: false,
    },
    {
      id: '03',
      title: 'Análise de Mercado',
      tagline: 'Inteligência competitiva e posicionamento',
      description: 'Estudo aprofundado dos concorrentes, precificação estratégica, gaps de oportunidade e mapeamento de dores latentes do seu público-alvo.',
      icon: PieChart,
      deliverables: ['Benchmarking Competitivo', 'Engenharia de Preços e Ofertas', 'Identificação de Novos Nichos', 'Pesquisa de Percepção'],
      metric: '100%',
      metricLabel: 'Previsibilidade',
      featured: false,
    },
    {
      id: '04',
      title: 'Treinamento Comercial',
      tagline: 'Capacitação, técnicas avançadas e cultura',
      description: 'Capacitação prática para SDRs, Closers e Gerentes de Vendas com simulações de vendas, contorno de objeções e aplicação de playbooks.',
      icon: GraduationCap,
      deliverables: ['Treinamento SPIN Selling & Sandler', 'Roleplays e Análise de Ligações', 'Criação de Playbook Exclusivo', 'Rituais de Gestão (1:1s e Forecast)'],
      metric: '98%',
      metricLabel: 'Adesão da Equipe',
      featured: true,
    },
  ]

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-surface relative overflow-hidden border-t border-b border-neutral-200/70">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-neutral-200 text-xs font-mono tracking-widest uppercase text-neutral-600 mb-4 shadow-sm">
            [ PILARES DE ATUAÇÃO ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-dark-900 uppercase">
            Soluções estratégicas sob medida para seu crescimento.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Metodologia prática e orientada a dados para construir máquinas de vendas consistentes, escaláveis e altamente lucrativas.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const colSpan = service.featured ? 'lg:col-span-7' : 'lg:col-span-5'

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} group relative rounded-2xl bg-white p-7 sm:p-9 border border-neutral-200/90 shadow-sm hover:shadow-21st-hover hover:border-black/30 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {service.id}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-black transition-colors" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-900 tracking-tight mb-2 group-hover:text-black">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-neutral-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Entregáveis Principais:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-400">
                      {service.metricLabel}
                    </div>
                    <div className="text-xl font-extrabold text-black">
                      {service.metric}
                    </div>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-black group-hover:translate-x-1 transition-transform"
                  >
                    <span>Estruturar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">
                Precisa de uma avaliação comercial completa?
              </h4>
              <p className="text-xs text-neutral-400">
                Agende uma sessão diagnóstica sem compromisso com nossa liderança.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-md"
          >
            SOLICITAR DIAGNÓSTICO
          </button>
        </div>

      </div>
    </section>
  )
}
