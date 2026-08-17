import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowUpRight, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3,
  Layers,
  ArrowDown
} from 'lucide-react'

export default function Hero({ onOpenConsultation }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const scrollToMethodology = () => {
    const element = document.querySelector('#metodologia')
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="inicio" 
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 21st.dev Subtle Geometric Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-neutral-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Strategic Copy & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8"
          >
            {/* 21st.dev Pill Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-sm transition-all hover:bg-neutral-200/60">
                <span className="flex h-2 w-2 rounded-full bg-black animate-pulse" />
                <span className="tracking-wide uppercase text-[11px] font-medium text-neutral-900">
                  Assessoria & Consultoria Comercial
                </span>
                <span className="text-neutral-400">|</span>
                <span className="text-[11px] text-neutral-500 font-normal">Alta Performance</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.08] text-dark-900 font-sans uppercase">
                IMPULSIONE SEUS <br className="hidden sm:inline" />
                <span className="relative inline-block text-black">
                  RESULTADOS
                  <svg className="absolute -bottom-1 left-0 w-full h-[4px] text-neutral-300 fill-current" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0 7C25 1 75 1 100 7L100 8L0 8Z" />
                  </svg>
                </span>{' '}
                <br className="hidden sm:inline" />
                COMERCIAIS.
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl"
            >
              Assessoria e consultoria comercial estratégica para escalar suas vendas e otimizar sua gestão.
            </motion.p>

            {/* Value Proposition Micro Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Diagnóstico Estratégico</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Estruturação de Processos</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Playbook & Treinamento</span>
              </div>
            </motion.div>

            {/* CTAs Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            >
              <button
                onClick={onOpenConsultation}
                className="btn-primary rounded-xl px-8 py-4 text-sm uppercase tracking-wider font-bold shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>SOLICITAR CONSULTORIA</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                onClick={scrollToMethodology}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-sm font-semibold tracking-wide transition-all duration-200 hover:border-black group shadow-sm"
              >
                <span>Conhecer Metodologia</span>
                <ArrowDown className="w-4 h-4 text-neutral-500 transition-transform group-hover:translate-y-0.5" />
              </button>
            </motion.div>

            {/* Focus Statement Strip */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-neutral-100 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-xs text-neutral-500 font-medium">
                Estruturação de ponta a ponta: do diagnóstico ao fechamento de contas de alto valor.
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 21st.dev Premium Corporate Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-neutral-200 via-neutral-100 to-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-neutral-200/80">
                <div className="relative rounded-xl overflow-hidden bg-neutral-900 aspect-[4/4.8] sm:aspect-[4/4.6]">
                  
                  {/* Hero Corporate Image */}
                  <img
                    src="/assets/visual_identity.jpg"
                    alt="Ana Mayra Assessoria Comercial"
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 opacity-90 transition-transform duration-700 hover:scale-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* Top Minimal Pill */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2 shadow-lg">
                    <img src="/assets/Logo.jpg" alt="Logo Icon" className="h-5 w-auto" />
                    <span className="text-[10px] font-bold tracking-widest uppercase font-serifDisplay text-black">
                      CONSULTORIA ESTRATÉGICA
                    </span>
                  </div>

                  {/* Bottom Headline Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                          EFICIÊNCIA & GESTÃO
                        </div>
                        <div className="text-sm font-bold text-black flex items-center gap-1.5 mt-0.5">
                          <TrendingUp className="w-4 h-4 text-black" />
                          <span>Escalabilidade Comercial Previsível</span>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center">
                        <Layers className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 1: Strategic Efficiency (Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-4 sm:-left-8 z-20 glass-card rounded-xl p-3.5 shadow-2xl flex items-center gap-3 bg-white/95 border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center shadow-md">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                    ESTRATÉGIA B2B
                  </div>
                  <div className="text-base font-extrabold text-black tracking-tight">
                    Previsibilidade de Receita
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: Process Execution (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 z-20 glass-card rounded-xl p-3.5 shadow-2xl flex items-center gap-3 bg-white/95 border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 text-black border border-neutral-200 flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                    FUNIL & GESTÃO
                  </div>
                  <div className="text-base font-extrabold text-black tracking-tight">
                    Otimização de Conversão
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
