'use client'

import { cn } from '@/lib/utils'

interface PartnerCarouselProps {
  className?: string
}

const partners = [
  { name: 'ICG', subtitle: 'Institut Cœur de Grâce', icon: 'heart' },
  { name: 'AFRIWARA', subtitle: '', icon: 'lion' },
  { name: 'BACCHUS', subtitle: 'ÉQUIPEMENTS', icon: 'none' },
  { name: 'CHARTRES', subtitle: 'MÉTROPOLE', icon: 'hexagon' },
  { name: 'SFM', subtitle: 'Société Française de Microscopie', icon: 'microscope' },
  { name: 'PFO', subtitle: 'CONSTRUCTION', icon: 'building' },
  { name: 'Régie des Eaux', subtitle: 'Gessiennes', icon: 'water' },
  { name: 'SOIRACO', subtitle: 'Société de Transport', icon: 'transport' },
  { name: 'NESKA', subtitle: 'COCOA PRODUCTS', icon: 'cocoa' },
  { name: 'VAF', subtitle: 'Centre de Contrôle Automobile', icon: 'car' },
]

// Icon components for each partner
const PartnerIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    case 'lion':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none"/>
          <path d="M12 6c-1.5 0-2.5.5-3 1.5-.5 1-.5 2 0 3s1.5 2 3 2 2.5-1 3-2 .5-2 0-3C14.5 6.5 13.5 6 12 6z"/>
        </svg>
      )
    case 'hexagon':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v7.64l-8 4-8-4V8.18l8-4z"/>
        </svg>
      )
    case 'microscope':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      )
    case 'building':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
          <rect x="9" y="6" width="2" height="2" fill="white"/>
          <rect x="13" y="6" width="2" height="2" fill="white"/>
          <rect x="9" y="10" width="2" height="2" fill="white"/>
          <rect x="13" y="10" width="2" height="2" fill="white"/>
          <rect x="9" y="14" width="2" height="2" fill="white"/>
          <rect x="13" y="14" width="2" height="2" fill="white"/>
          <rect x="10" y="18" width="4" height="4" fill="white"/>
        </svg>
      )
    case 'water':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
        </svg>
      )
    case 'transport':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
        </svg>
      )
    case 'cocoa':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <ellipse cx="12" cy="14" rx="6" ry="8"/>
          <path d="M12 2c-1 2-1 4 0 6 1-2 1-4 0-6z"/>
        </svg>
      )
    case 'car':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      )
    default:
      return null
  }
}

function PartnerLogo({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 min-w-[200px]">
      {partner.icon !== 'none' && (
        <div className="text-gray-500">
          <PartnerIcon type={partner.icon} />
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-700 tracking-wide">{partner.name}</span>
        {partner.subtitle && (
          <span className="text-xs text-gray-500 tracking-wide">{partner.subtitle}</span>
        )}
      </div>
    </div>
  )
}

export function PartnerCarousel({ className }: PartnerCarouselProps) {
  return (
    <section className={cn("py-12 bg-white overflow-hidden", className)}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Ils nous font confiance, du grand groupe à l&apos;ETI :
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-100 transition-all duration-300"
                >
                  <PartnerLogo partner={partner} />
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-4">
              {partners.map((partner, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-100 transition-all duration-300"
                >
                  <PartnerLogo partner={partner} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
