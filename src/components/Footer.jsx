import React from 'react'
import { motion } from 'framer-motion'
import { BrandLockup } from './LogoMonogram'
import { Phone, Mail, Globe, MapPin, ArrowUp, MessageCircle } from 'lucide-react'

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
              Transforme a performance comercial da sua empresa hoje.
            </h3>
            <p className="text-sm text-neutral-400 mt-2">
              Converse diretamente com nossa equipe e receba um direcionamento estratégico personalizado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-lg text-center"
            >
              FALAR COM UM ESPECIALISTA
            </button>
            <a
              href="https://wa.me/551996336668"
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
              Assessoria e consultoria comercial estratégica focada em estruturação de processos de vendas, capacitação de equipes e crescimento sustentável de receita.
            </p>
            <div className="text-xs font-mono text-neutral-500 pt-2">
              CNPJ: Estrutura Comercial Registrada • Atendimento Nacional
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
                <a href="#contato" className="hover:text-white transition-colors">Canais de Contato</a>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors text-left">
                  Solicitar Diagnóstico
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Canais */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Canais de Atendimento
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>(19) 9633-6668 / (10) 9994-5578</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>contato@anamayra.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>www.anamayra.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>São Paulo / SP • Atendimento Remoto & Presencial</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} ANA MAYRA Assessoria & Consultoria Comercial. Todos os direitos reservados.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors group"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  )
}
