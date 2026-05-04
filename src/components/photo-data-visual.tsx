'use client'

import Image from 'next/image'
import { TrendingUp, TrendingDown, ArrowUpRight, BarChart3, Activity, Gauge, Clock, CheckCircle2, Zap, Target, DollarSign, Users, Globe, Factory, Shield, Smartphone } from 'lucide-react'

// Floating Data Card Component
interface FloatingCardProps {
  value: string
  label: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: React.ReactNode
  iconBgColor?: string
  className?: string
  variant?: 'default' | 'accent' | 'success'
}

export function FloatingCard({ 
  value, 
  label, 
  change, 
  changeType = 'positive',
  icon,
  iconBgColor = '#F97316',
  className = '',
  variant = 'default'
}: FloatingCardProps) {
  const bgColors = {
    default: 'bg-white',
    accent: 'bg-[#F97316] text-white',
    success: 'bg-[#059669] text-white'
  }

  const changeColors = {
    positive: 'text-[#059669]',
    negative: 'text-[#DC2626]',
    neutral: 'text-gray-500'
  }

  return (
    <div className={`${bgColors[variant]} rounded-xl p-3 shadow-xl border border-gray-100 ${className}`}>
      {icon && (
        <div 
          className="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
          style={{ backgroundColor: variant === 'default' ? `${iconBgColor}15` : 'rgba(255,255,255,0.2)' }}
        >
          {icon}
        </div>
      )}
      <div className={`text-xl font-bold ${variant !== 'default' ? 'text-white' : 'text-[#0C0A09]'}`}>
        {value}
      </div>
      <div className={`text-xs ${variant !== 'default' ? 'text-white/80' : 'text-gray-500'} mb-0.5`}>
        {label}
      </div>
      {change && (
        <div className={`flex items-center gap-1 text-xs font-medium ${variant !== 'default' ? 'text-white' : changeColors[changeType]}`}>
          {changeType === 'positive' && <ArrowUpRight className="w-3 h-3" />}
          <span>{change}</span>
        </div>
      )}
    </div>
  )
}

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

// Chart Card Component
interface ChartCardProps {
  title: string
  value: string
  change: string
  changeType?: 'positive' | 'negative'
  data: number[]
  color?: string
  className?: string
}

export function ChartCard({ 
  title, 
  value, 
  change, 
  changeType = 'positive',
  data, 
  color = '#F97316',
  className = '' 
}: ChartCardProps) {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-xl border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">{title}</span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${changeType === 'positive' ? 'bg-[#059669]/10 text-[#059669]' : 'bg-[#DC2626]/10 text-[#DC2626]'}`}>
          {change}
        </span>
      </div>
      <div className="text-xl font-bold text-[#0C0A09] mb-2">{value}</div>
      <MiniLineChartInline data={data} color={color} height={40} />
    </div>
  )
}

// Photo with Data Overlay Component
interface PhotoDataVisualProps {
  imageSrc: string
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
  imagePosition?: 'left' | 'right' | 'center'
  floatingCards?: FloatingCardProps[]
  chartCards?: ChartCardProps[]
  className?: string
  badge?: { text: string; icon?: React.ReactNode }
}

export function PhotoDataVisual({
  imageSrc,
  imageAlt,
  imageWidth = 400,
  imageHeight = 400,
  imagePosition = 'left',
  floatingCards = [],
  chartCards = [],
  className = '',
  badge
}: PhotoDataVisualProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-auto"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Badge on Image */}
        {badge && (
          <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
            {badge.icon}
            <span className="text-xs font-semibold text-[#0C0A09]">{badge.text}</span>
          </div>
        )}
      </div>

      {/* Floating Cards - Left Side */}
      {floatingCards.filter((_, i) => i % 2 === 0).map((card, index) => (
        <FloatingCard
          key={`left-${index}`}
          {...card}
          className={`absolute -left-2 top-[${20 + index * 35}%]`}
        />
      ))}

      {/* Floating Cards - Right Side */}
      {floatingCards.filter((_, i) => i % 2 === 1).map((card, index) => (
        <FloatingCard
          key={`right-${index}`}
          {...card}
          className={`absolute -right-2 top-[${30 + index * 35}%]`}
        />
      ))}

      {/* Chart Cards */}
      {chartCards.map((card, index) => (
        <ChartCard
          key={`chart-${index}`}
          {...card}
          className={`absolute -right-2 bottom-${index === 0 ? '3' : '28'} w-40`}
        />
      ))}
    </div>
  )
}

// Hero Photo Visual with Multiple Data Blocks - Reduced height, edge positioning
interface HeroPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function HeroPhotoVisual({ imageSrc, imageAlt, className = '' }: HeroPhotoVisualProps) {
  const availabilityData = [92, 94, 91, 96, 98, 97, 99, 98, 99, 98, 99, 98]
  const interventionData = [65, 72, 68, 85, 92, 88, 95, 102, 98, 110, 105, 115]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo Container - Reduced height */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={450}
          className="object-cover w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Badge Top Left - On edge */}
      <div className="absolute -top-3 left-2 flex items-center gap-2 px-3 py-2 bg-[#F97316] text-white rounded-full shadow-lg">
        <Zap className="w-4 h-4" />
        <span className="text-xs font-semibold">GMAO Mobile</span>
      </div>

      {/* Floating Card - Top Right - Green background */}
      <div className="absolute -right-2 top-3 w-36 rounded-xl p-3 shadow-xl z-10 bg-[#059669]">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/20">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[10px] text-white/90">Disponibilité</span>
        </div>
        <div className="text-2xl font-bold text-white">98.5%</div>
        <div className="flex items-center gap-0.5 mt-0.5">
          <ArrowUpRight className="w-3 h-3 text-white" />
          <span className="text-xs font-semibold text-white">+2.3%</span>
        </div>
      </div>

      {/* Floating Card - Left Middle - Orange background */}
      <div className="absolute -left-2 top-[35%] w-36 rounded-xl p-3 shadow-xl z-10 bg-[#F97316]">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/20">
            <Clock className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[10px] text-white/90">MTTR</span>
        </div>
        <div className="text-2xl font-bold text-white">2.4h</div>
        <div className="flex items-center gap-0.5 mt-0.5">
          <TrendingDown className="w-3 h-3 text-white" />
          <span className="text-xs font-semibold text-white">-18%</span>
        </div>
      </div>

      {/* Chart Card - Bottom Right - Indigo background */}
      <div className="absolute -right-2 bottom-14 w-40 rounded-xl p-3 shadow-xl z-10 bg-[#1E3A8A]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-white/90">Interventions</span>
          <span className="text-[10px] font-semibold text-white bg-white/20 px-1.5 py-0.5 rounded-full">+20%</span>
        </div>
        <div className="text-lg font-bold text-white mb-1.5">156/mois</div>
        <MiniLineChartInline data={interventionData} color="#ffffff" height={35} />
      </div>

      {/* Accent Badge - Bottom Left - On edge */}
      <div className="absolute left-2 bottom-3 flex items-center gap-2 px-3 py-2.5 bg-[#1E3A8A] text-white rounded-xl shadow-lg">
        <Shield className="w-4 h-4" />
        <div>
          <div className="text-base font-bold">350+</div>
          <div className="text-[10px] text-white/80">Clients</div>
        </div>
      </div>
      
      {/* Success Badge - Middle Right - On edge */}
      <div className="absolute -right-2 top-[60%] flex items-center gap-1.5 px-3 py-2 bg-[#059669] text-white rounded-full shadow-lg z-10">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">ROI 4 mois</span>
      </div>
    </div>
  )
}

// Team Photo Visual - Edge positioning
interface TeamPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function TeamPhotoVisual({ imageSrc, imageAlt, className = '' }: TeamPhotoVisualProps) {
  const performanceData = [78, 82, 85, 88, 92, 95, 89, 94, 96, 98, 97, 99]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={350}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Top Left Badge - On edge */}
      <div className="absolute -top-2 left-2 flex items-center gap-2 px-3 py-2 bg-[#F97316] text-white rounded-full shadow-lg z-10">
        <Users className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">Équipes terrain</span>
      </div>

      {/* Top Right Card - Green background */}
      <div className="absolute top-3 right-2 rounded-xl p-2.5 shadow-lg w-28 z-10 bg-[#059669]">
        <div className="text-[10px] text-white/80 mb-0.5">Performance</div>
        <div className="text-lg font-bold text-white">+89%</div>
        <div className="text-[10px] text-white/90">FTFR</div>
      </div>

      {/* Bottom Left Card - Indigo background */}
      <div className="absolute bottom-3 left-2 rounded-xl p-2.5 shadow-lg w-36 z-10 bg-[#1E3A8A]">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Target className="w-3.5 h-3.5 text-[#F97316]" />
          <span className="text-[10px] text-white/90">Objectifs</span>
        </div>
        <MiniLineChartInline data={performanceData} color="#ffffff" height={25} />
      </div>

      {/* Bottom Right Badge - Green background */}
      <div className="absolute bottom-3 right-2 flex items-center gap-1.5 px-3 py-2 bg-[#059669] text-white rounded-full shadow-lg z-10">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">ROI 4 mois</span>
      </div>
    </div>
  )
}

// Machine Room Visual - Edge positioning
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
          height={350}
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Top Left - Status Badge - Green background */}
      <div className="absolute top-3 left-2 flex items-center gap-1.5 px-3 py-2 bg-[#059669] text-white rounded-full shadow-lg z-10">
        <Activity className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">Opérationnel</span>
      </div>

      {/* Top Right - Availability Card - Indigo background */}
      <div className="absolute top-3 right-2 rounded-xl p-3 shadow-lg w-32 z-10 bg-[#1E3A8A]">
        <div className="flex items-center gap-1.5 mb-1">
          <Gauge className="w-3.5 h-3.5 text-white" />
          <span className="text-[10px] text-white/90">Disponibilité</span>
        </div>
        <div className="text-xl font-bold text-white">99.2%</div>
      </div>

      {/* Bottom Center - Stats Bar - Dark background */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 bg-[#1E3A8A] rounded-xl shadow-lg z-10">
        <div className="text-center">
          <div className="text-base font-bold text-[#F97316]">24</div>
          <div className="text-[10px] text-white/80">OT ouverts</div>
        </div>
        <div className="w-px h-6 bg-white/20" />
        <div className="text-center">
          <div className="text-base font-bold text-white">156</div>
          <div className="text-[10px] text-white/80">Clôturés</div>
        </div>
        <div className="w-px h-6 bg-white/20" />
        <div className="text-center">
          <div className="text-base font-bold text-[#059669]">-38%</div>
          <div className="text-[10px] text-white/80">Arrêts</div>
        </div>
      </div>
    </div>
  )
}

// BTP Team Visual - Équipe techniciens sur chantier BTP - Edge positioning
interface BtpTeamVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function BtpTeamVisual({ imageSrc, imageAlt, className = '' }: BtpTeamVisualProps) {
  const chantierData = [45, 52, 58, 62, 68, 72, 75, 80, 85, 88, 92, 95]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={900}
          height={400}
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Top Left - BTP Badge - Orange background */}
      <div className="absolute -top-2 left-2 flex items-center gap-1.5 px-3 py-2 bg-[#F97316] text-white rounded-full shadow-lg z-10">
        <Factory className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">Chantier BTP</span>
      </div>

      {/* Top Right - Disponibilité Card - Green background */}
      <div className="absolute top-3 right-2 rounded-xl p-3 shadow-lg w-32 z-10 bg-[#059669]">
        <div className="flex items-center gap-1.5 mb-1">
          <Gauge className="w-3.5 h-3.5 text-white" />
          <span className="text-[10px] text-white/90">Disponibilité</span>
        </div>
        <div className="text-xl font-bold text-white">99.5%</div>
        <div className="flex items-center gap-0.5 mt-0.5">
          <ArrowUpRight className="w-3 h-3 text-white" />
          <span className="text-[10px] font-semibold text-white">+3.2%</span>
        </div>
      </div>

      {/* Middle Left - MTTR Card - Orange background */}
      <div className="absolute left-2 top-1/3 rounded-xl p-3 shadow-lg w-32 z-10 bg-[#F97316]">
        <div className="flex items-center gap-1.5 mb-1">
          <Clock className="w-3.5 h-3.5 text-white" />
          <span className="text-[10px] text-white/90">MTTR</span>
        </div>
        <div className="text-lg font-bold text-white">1.8h</div>
        <div className="text-[10px] text-white/80">-40% vs avant</div>
      </div>

      {/* Bottom Left - Chart Card - Indigo background */}
      <div className="absolute bottom-3 left-2 rounded-xl p-3 shadow-lg w-40 z-10 bg-[#1E3A8A]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-white/90">Interventions</span>
          <span className="text-[10px] font-semibold text-white bg-white/20 px-1.5 py-0.5 rounded-full">+45%</span>
        </div>
        <div className="text-base font-bold text-white mb-1.5">89/mois</div>
        <MiniLineChartInline data={chantierData} color="#ffffff" height={30} />
      </div>

      {/* Bottom Right - Stats Badge - Indigo background */}
      <div className="absolute bottom-3 right-2 bg-[#1E3A8A] text-white rounded-xl p-3 shadow-lg z-10">
        <div className="flex items-center gap-1.5 mb-0.5">
          <Target className="w-3.5 h-3.5 text-[#F97316]" />
          <span className="text-[10px] text-white/80">First Time Fix</span>
        </div>
        <div className="text-xl font-bold text-white">92%</div>
        <div className="text-[10px] text-[#F97316]">+28 pts</div>
      </div>

      {/* Middle Right - Success Badge - Green background */}
      <div className="absolute right-2 top-1/2 flex items-center gap-1.5 px-3 py-2 bg-[#059669] text-white rounded-full shadow-lg z-10">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">Zéro panne</span>
      </div>
    </div>
  )
}

// Named exports only - use import { ComponentName } from '@/components/photo-data-visual'
