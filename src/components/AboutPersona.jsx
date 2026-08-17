import React from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  FileText,
  TrendingUp,
  Cpu,
  BarChart,
  UserCheck
} from 'lucide-react'

export default function AboutPersona({ onOpenConsultation }) {
  const education = [
    {
      title: 'Executive MBA em Liderança e Gestão de Equipes de Alta Performance',
      institution: 'Anhanguera Educacional',
      period: '2025 - 2026',
      badge: 'Liderança Estratégica'
    },
    {
      title: 'MBA Executivo em Gestão Comercial (Lato Sensu)',
      institution: 'Anhanguera Educacional',
      period: '2024 - 2025',
      badge: 'Estratégia de Vendas'
    },
    {
      title: 'Tecnólogo em Processos Gerenciais',
      institution: 'UniCesumar',
      period: 'Formação Superior',
      badge: 'Eficiência Operacional'
    },
  ]

  const experiences = [
    {
      role: 'Gestora Comercial',
      company: 'Icetran',
      desc: 'Liderança e mentoria de time comercial para superação de metas, estruturação de processos de vendas consultivas, gestão de performance via CRM/RD Station e modelagem de dados estratégicos.',
      skills: ['Liderança & Mentoria', 'Vendas Consultivas', 'Dashboards Executivos', 'RD Station CRM']
    },
    {
      role: 'Analista SDR Pleno & Inteligência de Funil',
      company: 'HookLab',
      desc: 'Automação de relacionamento e CRM, diagnóstico minucioso de métricas para eliminação de gargalos comerciais e estruturação de cadências de prospecção de alto impacto.',
      skills: ['Gestão de Leads', 'Automação & CRM', 'Diagnóstico de Funil', 'Métricas de Conversão']
    },
    {
      role: 'Especialista em Técnicas de Vendas',
      company: 'Escola Técnica Geração',
      desc: 'Mapeamento de necessidades complexas de clientes, otimização de conversão e monitoramento de metas comerciais.',
      skills: ['Negociação Avançada', 'Alinhamento de Metas', 'Atendimento Consultivo']
    }
  ]

  const competencies = [
    'RD Station & CRM Especialista',
    'Excel Avançado & Modelagem de Dados',
    'Vendas Consultivas B2B',
    'Metodologias Ágeis & Notion',
    'Estruturação de Playbooks de Vendas',
    'Qualificação e Gestão de Leads (SDR)',
  ]

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-neutral-200/80">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-xs font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-sm">
            [ LIDERANÇA & ESPECIALIDADE ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-dark-900 uppercase">
            Sobre a Consultora: Ana Mayra Vigânigo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Gestora comercial especializada em vendas consultivas, liderança de equipes e estruturação de processos de alto rendimento. Aliando rigor analítico, dados e tecnologia para impulsionar a receita empresarial.
          </p>
        </div>

        {/* Persona Profile Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Executive Bio & Contact Profile (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl bg-neutral-50 border border-neutral-200 p-8 shadow-sm"
          >
            {/* Header info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-serifDisplay text-2xl font-bold shadow-md">
                AM
              </div>
              <div>
                <h3 className="text-xl font-bold text-black font-sans">
                  Ana Mayra Vigânigo
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mt-0.5">
                  Gestora Comercial & Consultora
                </p>
                <div className="flex items-center gap-1.5 text-xs text-neutral-600 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Florianópolis, Santa Catarina</span>
                </div>
              </div>
            </div>

            {/* Strategic Summary */}
            <div className="text-sm text-neutral-700 leading-relaxed space-y-3 mb-6 pt-4 border-t border-neutral-200">
              <p>
                Carreira consolidada em liderança de equipes e vendas consultivas, com forte domínio na integração entre <strong>estratégia comercial, inteligência de dados e tecnologia</strong>.
              </p>
              <p>
                Especialista na implementação de rotinas de alta performance via <strong>RD Station, CRM, Excel Avançado para tomada de decisão</strong> e metodologias ágeis com <strong>Notion</strong> para criação de playbooks operacionais escaláveis.
              </p>
            </div>

            {/* Competency Pills */}
            <div className="mb-8 pt-4 border-t border-neutral-200">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Competências & Ferramentas Chave:
              </div>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-medium text-neutral-800 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-black" />
                    <span>{comp}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Connect Actions */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/5548991444114"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary rounded-xl py-3.5 text-xs uppercase tracking-wider font-bold shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Conversar no WhatsApp ((48) 99144-4114)</span>
              </a>

              <a
                href="/assets/viganigomartinsanamayra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <FileText className="w-4 h-4 text-neutral-500" />
                <span>Visualizar Currículo Executivo (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Academic Formation & Professional Track Record (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Academic Background Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-neutral-50 border border-neutral-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black uppercase tracking-tight">
                    Formação Acadêmica & Especializações
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Base executiva sólida em gestão, liderança e processos
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:border-black/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-dark-900">
                        {edu.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 mt-1">
                      <span>{edu.institution}</span>
                      <span className="font-semibold text-black">{edu.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Experience Track Record */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-neutral-50 border border-neutral-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black uppercase tracking-tight">
                    Trajetória & Experiência Prática
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Vivência prática no front de vendas, estruturação de funil e gestão
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {experiences.map((exp, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:border-black/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-bold text-black">
                        {exp.role} <span className="text-neutral-400 font-normal">|</span> <span className="text-neutral-700">{exp.company}</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
