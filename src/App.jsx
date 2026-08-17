import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesBento from './components/ServicesBento'
import Methodology from './components/Methodology'
import AboutPersona from './components/AboutPersona'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans selection:bg-black selection:text-white relative">
      
      {/* 1. Loading Screen Video Overlay (Brand Animation) */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Page Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Navigation Bar */}
        <Navbar 
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* Hero Section */}
        <main>
          <Hero 
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />

          {/* Services Bento Grid (4 Pilares) */}
          <ServicesBento 
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />

          {/* Methodology Framework */}
          <Methodology />

          {/* About Persona & Credentials */}
          <AboutPersona 
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer 
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />
      </motion.div>

      {/* Strategic Consultation Request Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

    </div>
  )
}
