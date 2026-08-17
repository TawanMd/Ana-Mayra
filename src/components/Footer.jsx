import React from 'react'
import { motion } from 'framer-motion'
import { BrandLockup } from './LogoMonogram'
import { Phone, Mail, Globe, MapPin, ArrowUp, MessageCircle, FileText } from 'lucide-react'

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contato" className="bg-neutral-950 text-white relative overflow-hidden pt-20 pb-12 border-t border-neutral-800">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="rounded-2xl p-8 sm:p-12 bg-neutral-900 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              // PRONTO PARA ESCALAR?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Transforme a performance comercial da sua empresa.
            </h3>
            <p className="text-sm text-neutral-400 mt-2">
              Converse diretamente com a liderança estratégica e receba um diagnóstico personalizado para sua operação.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-lg text-center"
            >
              SOLICITAR CONSULTORIA
            </button>
            <a
              href="https://wa.me/5548991444114"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl border border-neutral-700 bg-neutral-800/80 hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLockup variant="dark" size="md" onClick={scrollToTop} />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed pt-2">
              Assessoria e consultoria comercial estratégica focada em estruturação de processos de vendas, qualificação de leads, capacitação e inteligência de dados.
            </p>
            <div className="text-xs font-mono text-neutral-500 pt-2">
              Ana Mayra Vigânigo • Atendimento SC e Nacional
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços & Pilares</a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">Metodologia 360°</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Consultora</a>
              </li>
              <li>
                <a href="/assets/viganigomartinsanamayra.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Currículo Executivo (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Canais */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Canais Diretos
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href="https://wa.me/5548991444114" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  (48) 99144-4114
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href="mailto:mayviganigomartins@gmail.com" className="hover:underline">
                  mayviganigomartins@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Florianópolis, SC • Atendimento Presencial & Remoto</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Versioning */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} ANA MAYRA Vigânigo • Assessoria & Consultoria Comercial.</span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>v1.2.0 (Build 2026.08)</span>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors group text-xs"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  )
}
