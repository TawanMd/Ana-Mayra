import React from 'react'

export const LogoIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Left Outer Leg of A */}
    <path
      d="M48 16L18 84H28L48 37L54 51L61 44L49.5 16H48Z"
      fill={color}
    />
    
    {/* Right Leg of A */}
    <path
      d="M58 58L72 84H82L64 49L58 58Z"
      fill={color}
    />

    {/* Center Growth Arrow path (M + Arrow) */}
    <path
      d="M26 84L40 54L48 68L70 32L71 44H79L79 20L55 20L55 28L67 28L48 57L40 43L21 84H26Z"
      fill={color}
    />
  </svg>
)

export const BrandLockup = ({ 
  variant = "horizontal", 
  size = "md",
  className = "", 
  showSubtitle = true,
  onClick = null
}) => {
  const isDark = variant === "dark"

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-opacity hover:opacity-90 ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <img 
          src="/assets/Logo.jpg" 
          alt="Ana Mayra Monograma" 
          className={`object-contain rounded-sm transition-transform duration-300 group-hover:scale-105 ${
            size === "sm" ? "h-9 w-auto" : size === "lg" ? "h-14 w-auto" : "h-11 w-auto"
          } ${isDark ? "invert" : ""}`}
        />
      </div>

      <div className="flex flex-col">
        <span className={`font-serifDisplay font-bold tracking-[0.18em] leading-none ${
          size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg"
        } ${isDark ? "text-white" : "text-black"}`}>
          ANA MAYRA
        </span>
        {showSubtitle && (
          <span className={`text-[8.5px] font-semibold tracking-[0.22em] uppercase mt-1 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Assessoria & Consultoria Comercial
          </span>
        )}
      </div>
    </div>
  )
}
