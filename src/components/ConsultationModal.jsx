import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building, Phone, Mail, User, MessageCircle } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '6-15 vendedores',
    challenge: 'Estratégia de Vendas',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
      setTimeout(() => {
        setIsSubmitted(false)
      }, 300)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Formatar mensagem completa para o WhatsApp da Ana Mayra
    const messageText = `*Solicitação de Diagnóstico Comercial - Ana Mayra*\n\n👤 *Nome:* ${formData.name}\n🏢 *Empresa:* ${formData.company}\n📧 *E-mail:* ${formData.email}\n📱 *WhatsApp:* ${formData.phone}\n👥 *Time Comercial:* ${formData.teamSize}\n🎯 *Objetivo Principal:* ${formData.challenge}\n\nOlá Ana Mayra, acabei de solicitar um diagnóstico comercial pelo site e gostaria de agendar uma reunião estratégica para avaliarmos nossa operação.`
    
    const targetUrl = `https://wa.me/5548991444114?text=${encodeURIComponent(messageText)}`
    setWhatsappUrl(targetUrl)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      } catch (err) {
        // Fallback
      }

      // Redireciona diretamente para o WhatsApp
      window.open(targetUrl, '_blank')
    }, 700)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                AM
              </div>
              <div>
                <h3 className="text-base font-bold text-black uppercase tracking-tight">
                  Solicitar Diagnóstico Estratégico
                </h3>
                <p className="text-xs text-neutral-500">
                  Assessoria comercial sob medida para sua empresa
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-2">
                  Solicitação Pronta para Envio!
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                  Seus dados foram organizados e o WhatsApp de <strong>Ana Mayra</strong> foi aberto em uma nova aba para agendamento direto.
                </p>

                <div className="space-y-3 max-w-md mx-auto mb-4">
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary rounded-xl py-3.5 text-xs uppercase tracking-wider font-bold shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Abrir WhatsApp Novamente</span>
                    </a>
                  )}

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider text-neutral-700 transition-colors"
                  >
                    Fechar Janela
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="carlos@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      WhatsApp / Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="(48) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Nome da Empresa *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Grupo ND / Jornal ND"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Tamanho do Time Comercial
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-black bg-white transition-colors"
                    >
                      <option value="1-5 vendedores">1 a 5 vendedores</option>
                      <option value="6-15 vendedores">6 a 15 vendedores</option>
                      <option value="16-30 vendedores">16 a 30 vendedores</option>
                      <option value="Mais de 30 vendedores">Mais de 30 vendedores</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Principal Objetivo
                    </label>
                    <select
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-black bg-white transition-colors"
                    >
                      <option value="Estratégia de Vendas & Metas">Estratégia de Vendas & Metas</option>
                      <option value="Gestão de Leads & CRM">Gestão de Leads & CRM</option>
                      <option value="Treinamento Comercial & Playbook">Treinamento Comercial & Playbook</option>
                      <option value="Análise de Mercado & Posicionamento">Análise de Mercado & Posicionamento</option>
                      <option value="Consultoria Integral 360°">Consultoria Integral 360°</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary rounded-xl py-3.5 text-xs uppercase tracking-widest font-bold shadow-xl flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Preparando WhatsApp...
                      </span>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>AGENDAR VIA WHATSAPP</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-2">
                  <ShieldCheck className="w-4 h-4 text-neutral-400" />
                  <span>Seus dados são transmitidos com total sigilo executivo.</span>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
