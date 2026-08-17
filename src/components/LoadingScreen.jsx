import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const duration = 2400 // 2.4s duration for smooth intro
    const intervalTime = 30
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setIsReady(true)
          // slight delay after 100% to finish the visual reveal
          setTimeout(() => {
            onComplete?.()
          }, 450)
          return 100
        }
        return next
      })
    }, intervalTime)

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may need user interaction on some strict configs
      })
    }

    return () => clearInterval(timer)
  }, [onComplete])

  const handleSkip = () => {
    setIsReady(true)
    onComplete?.()
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.02,
        filter: "blur(8px)",
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Background subtle ambient grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      {/* Main Video Box */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center"
        >
          {/* Circular subtle backdrop glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-100 to-neutral-50 border border-neutral-200/60 shadow-inner" />
          
          <video
            ref={videoRef}
            src="/assets/A_clean_motion_graphics_animat.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="relative z-10 w-full h-full object-contain mix-blend-multiply filter contrast-125"
          />
        </motion.div>

        {/* Brand Text Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-4"
        >
          <h2 className="font-serifDisplay text-2xl font-bold tracking-[0.22em] text-black">
            ANA MAYRA
          </h2>
          <p className="text-[10px] tracking-[0.3em] font-semibold text-neutral-500 uppercase mt-1">
            Assessoria & Consultoria Comercial
          </p>
        </motion.div>

        {/* Minimal Progress Bar */}
        <div className="w-48 mt-8 flex flex-col items-center gap-2">
          <div className="w-full h-[2px] bg-neutral-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-black rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between w-full text-[10px] font-mono text-neutral-400 font-medium">
            <span>INICIALIZANDO</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Skip button for immediate access */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleSkip}
          className="mt-6 text-xs text-neutral-400 hover:text-black transition-colors flex items-center gap-1 font-medium tracking-wide uppercase group cursor-pointer"
        >
          <span>Pular introdução</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.button>
      </div>

      {/* Decorative corner markers (21st.dev style) */}
      <div className="absolute top-8 left-8 text-neutral-300 font-mono text-[10px] tracking-widest hidden md:block">
        [ 01 // AM.SYSTEM ]
      </div>
      <div className="absolute top-8 right-8 text-neutral-300 font-mono text-[10px] tracking-widest hidden md:block">
        [ 2026 // EXPANSÃO ]
      </div>
      <div className="absolute bottom-8 left-8 text-neutral-300 font-mono text-[10px] tracking-widest hidden md:block">
        ESTRATÉGIA & GESTÃO
      </div>
      <div className="absolute bottom-8 right-8 text-neutral-300 font-mono text-[10px] tracking-widest hidden md:block">
        ALTO IMPACTO
      </div>
    </motion.div>
  )
}
