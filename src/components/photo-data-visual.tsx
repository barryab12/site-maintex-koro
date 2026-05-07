'use client'

import Image from 'next/image'
import { TrendingUp, TrendingDown, ArrowUpRight, Activity, Gauge, Clock, CheckCircle2, Zap, Target, Users, Factory, Shield, HardHat, Calendar, Wrench } from 'lucide-react'

// Mini Chart Component
interface MiniChartProps {
  data: number[]
  color?: string
  height?: number
  className?: string
}

export function MiniLineChartInline({ data, color = '#F97316', height = 40, className = '' }: MiniChartProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = height - ((value - min) / range) * (height - 10) - 5
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className={`w-full ${className}`} style={{ height }} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} 100,${height}`}
        fill={`url(#gradient-${color.replace('#', '')})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Floating Data Card Component - Style modèle
interface FloatingCardProps {
  value: string
  label: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: React.ReactNode
  iconBgColor?: string
  chart?: number[]
  chartColor?: string
  className?: string
}

export function FloatingCard({ 
  value, 
  label, 
  change, 
  changeType = 'positive',
  icon,
  iconBgColor = '#F97316',
  chart,
  chartColor = '#F97316',
  className = ''
}: FloatingCardProps) {
  const changeColors = {
    positive: 'text-[#059669]',
    negative: 'text-[#DC2626]',
    neutral: 'text-gray-500'
  }

  return (
    <div className={`bg-white rounded-xl p-4 shadow-xl border border-gray-100 ${className}`}>
      {icon && (
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
          style={{ backgroundColor: `${iconBgColor}15` }}
        >
          {icon}
        </div>
      )}
      <div className="text-2xl font-bold text-[#0C0A09]">{value}</div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      {change && (
        <div className={`flex items-center gap-1 text-xs font-semibold ${changeColors[changeType]}`}>
          {changeType === 'positive' && <ArrowUpRight className="w-3 h-3" />}
          <span>{change}</span>
        </div>
      )}
      {chart && (
        <div className="mt-2">
          <MiniLineChartInline data={chart} color={chartColor} height={30} />
        </div>
      )}
    </div>
  )
}

// =====================================================
// HERO PHOTO VISUAL - Max 3 cartes, style modèle
// =====================================================

interface HeroPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function HeroPhotoVisual({ imageSrc, imageAlt, className = '' }: HeroPhotoVisualProps) {
  const mttrData = [4.2, 3.8, 3.5, 3.1, 2.8, 2.5, 2.3, 2.4]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={420}
          className="object-cover w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Card 1 - Top Right - Disponibilité avec graphique */}
      <div className="absolute -right-3 top-4 w-44 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#059669]/10">
            <Gauge className="w-4 h-4 text-[#059669]" />
          </div>
          <span className="text-xs text-gray-500">Disponibilité</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">98.5%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+2.3% ce mois</span>
        </div>
      </div>

      {/* Card 2 - Left Middle - MTTR avec chart */}
      <div className="absolute -left-3 top-[35%] w-44 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#F97316]/10">
            <Clock className="w-4 h-4 text-[#F97316]" />
          </div>
          <span className="text-xs text-gray-500">MTTR</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">2.4h</div>
        <div className="flex items-center gap-1 mt-1">
          <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">-18% vs avant</span>
        </div>
        <MiniLineChartInline data={mttrData} color="#F97316" height={25} className="mt-2" />
      </div>

      {/* Card 3 - Bottom Right - First Time Fix */}
      <div className="absolute -right-3 bottom-4 w-44 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1E3A8A]/10">
            <Wrench className="w-4 h-4 text-[#1E3A8A]" />
          </div>
          <span className="text-xs text-gray-500">First Time Fix</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">89%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+24 pts</span>
        </div>
      </div>
    </div>
  )
}

// =====================================================
// TEAM PHOTO VISUAL - Max 3 cartes
// =====================================================

interface TeamPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function TeamPhotoVisual({ imageSrc, imageAlt, className = '' }: TeamPhotoVisualProps) {
  const performanceData = [78, 82, 85, 88, 92, 95, 89, 94]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={380}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Card 1 - Top Right - Performance */}
      <div className="absolute -right-3 top-4 w-40 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#059669]/10">
            <TrendingUp className="w-4 h-4 text-[#059669]" />
          </div>
          <span className="text-xs text-gray-500">Performance</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">+89%</div>
        <div className="text-xs text-[#059669] font-medium mt-1">FTFR amélioré</div>
      </div>

      {/* Card 2 - Bottom Left - ROI */}
      <div className="absolute -left-3 bottom-4 w-40 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#F97316]/10">
            <Target className="w-4 h-4 text-[#F97316]" />
          </div>
          <span className="text-xs text-gray-500">ROI</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">4 mois</div>
        <div className="text-xs text-gray-500 mt-1">Retour investissement</div>
      </div>

      {/* Card 3 - Bottom Right - Progression */}
      <div className="absolute -right-3 bottom-4 w-44 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Progression</span>
          <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-1 rounded">+45%</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09]">95%</div>
        <MiniLineChartInline data={performanceData} color="#1E3A8A" height={25} className="mt-2" />
      </div>
    </div>
  )
}

// =====================================================
// MACHINE ROOM VISUAL - Max 3 cartes
// =====================================================

interface MachineRoomVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function MachineRoomVisual({ imageSrc, imageAlt, className = '' }: MachineRoomVisualProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={700}
          height={380}
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card 1 - Top Left - Disponibilité */}
      <div className="absolute -left-3 top-4 w-40 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#059669]/10">
            <Gauge className="w-4 h-4 text-[#059669]" />
          </div>
          <span className="text-xs text-gray-500">Disponibilité</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">99.2%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+1.2%</span>
        </div>
      </div>

      {/* Card 2 - Top Right - OT Stats */}
      <div className="absolute -right-3 top-4 w-40 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#F97316]/10">
            <Activity className="w-4 h-4 text-[#F97316]" />
          </div>
          <span className="text-xs text-gray-500">Ordres de travail</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-[#0C0A09]">156</span>
          <span className="text-xs text-gray-500">clôturés</span>
        </div>
        <div className="text-xs text-[#059669] font-medium mt-1">24 en cours</div>
      </div>

      {/* Card 3 - Bottom Center - Temps d'arrêt */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-48 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/20">
            <TrendingDown className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs text-white/80">Temps d'arrêt</span>
        </div>
        <div className="text-3xl font-bold">-38%</div>
        <div className="text-xs text-white/70 mt-1">vs. année précédente</div>
      </div>
    </div>
  )
}

// =====================================================
// BTP TEAM VISUAL - Max 3 cartes, style diversifié
// =====================================================

interface BtpTeamVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function BtpTeamVisual({ imageSrc, imageAlt, className = '' }: BtpTeamVisualProps) {
  const chantierData = [45, 52, 58, 62, 68, 72, 75, 80, 85, 88]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={900}
          height={420}
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card 1 - Top Left - Badge style (inspired by model) */}
      <div className="absolute -left-3 top-4 flex items-center gap-3 px-5 py-4 bg-white rounded-xl shadow-xl z-10">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F97316]">
          <HardHat className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-xs text-gray-500">Chantiers actifs</div>
          <div className="text-2xl font-bold text-[#0C0A09]">12</div>
        </div>
      </div>

      {/* Card 2 - Top Right - Disponibilité */}
      <div className="absolute -right-3 top-4 w-44 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#059669]/10">
            <Gauge className="w-4 h-4 text-[#059669]" />
          </div>
          <span className="text-xs text-gray-500">Disponibilité</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">99.5%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+3.2%</span>
        </div>
      </div>

      {/* Card 3 - Bottom Right - Progression avec chart (style modèle) */}
      <div className="absolute -right-3 bottom-4 w-48 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#7C3AED]/10">
              <Target className="w-4 h-4 text-[#7C3AED]" />
            </div>
            <span className="text-xs text-gray-500">Progression</span>
          </div>
          <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-1 rounded">+45%</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">95%</div>
        <MiniLineChartInline data={chantierData} color="#7C3AED" height={30} className="mt-2" />
      </div>
    </div>
  )
}
