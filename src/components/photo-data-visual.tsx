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
    <div className={`${bgColors[variant]} rounded-2xl p-4 shadow-xl border border-gray-100 ${className}`}>
      {icon && (
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
          style={{ backgroundColor: variant === 'default' ? `${iconBgColor}15` : 'rgba(255,255,255,0.2)' }}
        >
          {icon}
        </div>
      )}
      <div className={`text-2xl font-bold ${variant !== 'default' ? 'text-white' : 'text-[#0C0A09]'}`}>
        {value}
      </div>
      <div className={`text-sm ${variant !== 'default' ? 'text-white/80' : 'text-gray-500'} mb-1`}>
        {label}
      </div>
      {change && (
        <div className={`flex items-center gap-1 text-sm font-medium ${variant !== 'default' ? 'text-white' : changeColors[changeType]}`}>
          {changeType === 'positive' && <ArrowUpRight className="w-4 h-4" />}
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
    <div className={`bg-white rounded-2xl p-5 shadow-xl border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">{title}</span>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${changeType === 'positive' ? 'bg-[#059669]/10 text-[#059669]' : 'bg-[#DC2626]/10 text-[#DC2626]'}`}>
          {change}
        </span>
      </div>
      <div className="text-2xl font-bold text-[#0C0A09] mb-3">{value}</div>
      <MiniLineChartInline data={data} color={color} height={50} />
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
  imageHeight = 500,
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
          <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
            {badge.icon}
            <span className="text-sm font-semibold text-[#0C0A09]">{badge.text}</span>
          </div>
        )}
      </div>

      {/* Floating Cards - Left Side */}
      {floatingCards.filter((_, i) => i % 2 === 0).map((card, index) => (
        <FloatingCard
          key={`left-${index}`}
          {...card}
          className={`absolute -left-4 md:-left-8 top-[${20 + index * 35}%]`}
        />
      ))}

      {/* Floating Cards - Right Side */}
      {floatingCards.filter((_, i) => i % 2 === 1).map((card, index) => (
        <FloatingCard
          key={`right-${index}`}
          {...card}
          className={`absolute -right-4 md:-right-8 top-[${30 + index * 35}%]`}
        />
      ))}

      {/* Chart Cards */}
      {chartCards.map((card, index) => (
        <ChartCard
          key={`chart-${index}`}
          {...card}
          className={`absolute -right-4 md:-right-12 bottom-${index === 0 ? '4' : '36'} w-48 md:w-56`}
        />
      ))}
    </div>
  )
}

// Hero Photo Visual with Multiple Data Blocks
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
      {/* Main Photo Container - Large Portrait */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={750}
          className="object-cover w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Badge Top Left */}
      <div className="absolute -top-3 -left-3 md:top-6 md:left-6 flex items-center gap-2 px-5 py-3 bg-[#F97316] text-white rounded-full shadow-lg">
        <Zap className="w-5 h-5" />
        <span className="text-sm font-semibold">GMAO Mobile</span>
      </div>

      {/* Floating Card - Top Right */}
      <div className="absolute -right-3 top-20 md:right-6 md:top-24 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 w-40 md:w-48">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#059669]" />
          </div>
          <span className="text-xs text-gray-500">Disponibilité</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">98.5%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-4 h-4 text-[#059669]" />
          <span className="text-sm font-semibold text-[#059669]">+2.3%</span>
        </div>
      </div>

      {/* Floating Card - Left Middle */}
      <div className="absolute -left-4 top-[45%] md:left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 w-40 md:w-48">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-[#F97316]" />
          </div>
          <span className="text-xs text-gray-500">MTTR</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">2.4h</div>
        <div className="flex items-center gap-1 mt-1">
          <TrendingDown className="w-4 h-4 text-[#059669]" />
          <span className="text-sm font-semibold text-[#059669]">-18%</span>
        </div>
      </div>

      {/* Chart Card - Bottom Right */}
      <div className="absolute -right-3 bottom-24 md:right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 w-48 md:w-56">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Interventions</span>
          <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">+20%</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09] mb-2">156/mois</div>
        <MiniLineChartInline data={interventionData} color="#1E3A8A" height={45} />
      </div>

      {/* Accent Badge - Bottom Left */}
      <div className="absolute left-0 md:left-6 bottom-6 flex items-center gap-3 px-5 py-4 bg-[#1E3A8A] text-white rounded-xl shadow-lg">
        <Shield className="w-6 h-6" />
        <div>
          <div className="text-xl font-bold">350+</div>
          <div className="text-xs text-white/80">Clients</div>
        </div>
      </div>
      
      {/* Success Badge - Middle Right */}
      <div className="absolute right-0 md:right-6 top-[65%] flex items-center gap-2 px-4 py-2.5 bg-[#059669] text-white rounded-full shadow-lg">
        <CheckCircle2 className="w-4 h-4" />
        <span className="text-sm font-semibold">ROI 4 mois</span>
      </div>
    </div>
  )
}

// Team Photo Visual
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
          height={400}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Top Left Badge */}
      <div className="absolute -top-2 left-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
        <Users className="w-4 h-4 text-[#F97316]" />
        <span className="text-sm font-semibold text-[#0C0A09]">Équipes terrain</span>
      </div>

      {/* Top Right Card */}
      <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg w-32">
        <div className="text-xs text-gray-500 mb-1">Performance</div>
        <div className="text-xl font-bold text-[#0C0A09]">+89%</div>
        <div className="text-xs text-[#059669]">FTFR</div>
      </div>

      {/* Bottom Left Card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg w-40">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4 text-[#F97316]" />
          <span className="text-xs text-gray-500">Objectifs</span>
        </div>
        <MiniLineChartInline data={performanceData} color="#F97316" height={30} />
      </div>

      {/* Bottom Right Badge */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-[#059669] text-white rounded-full shadow-lg">
        <CheckCircle2 className="w-4 h-4" />
        <span className="text-sm font-semibold">ROI 4 mois</span>
      </div>
    </div>
  )
}

// Machine Room Visual
interface MachineRoomVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function MachineRoomVisual({ imageSrc, imageAlt, className = '' }: MachineRoomVisualProps) {
  const uptimeData = [95, 97, 96, 98, 99, 98, 99, 99, 98, 99, 99, 99]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={700}
          height={400}
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Top Left - Status Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-[#059669] text-white rounded-full shadow-lg">
        <Activity className="w-4 h-4" />
        <span className="text-sm font-semibold">Opérationnel</span>
      </div>

      {/* Top Right - Availability Card */}
      <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg w-36">
        <div className="flex items-center gap-2 mb-1">
          <Gauge className="w-4 h-4 text-[#1E3A8A]" />
          <span className="text-xs text-gray-500">Disponibilité</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09]">99.2%</div>
      </div>

      {/* Bottom Center - Stats Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-[#F97316]">24</div>
          <div className="text-xs text-gray-500">OT ouverts</div>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <div className="text-lg font-bold text-[#1E3A8A]">156</div>
          <div className="text-xs text-gray-500">Clôturés</div>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <div className="text-lg font-bold text-[#059669]">-38%</div>
          <div className="text-xs text-gray-500">Arrêts</div>
        </div>
      </div>
    </div>
  )
}

// BTP Team Visual - Équipe techniciens sur chantier BTP
interface BtpTeamVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function BtpTeamVisual({ imageSrc, imageAlt, className = '' }: BtpTeamVisualProps) {
  const performanceData = [78, 82, 85, 88, 92, 95, 89, 94, 96, 98, 97, 99]
  const chantierData = [45, 52, 58, 62, 68, 72, 75, 80, 85, 88, 92, 95]

  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={900}
          height={500}
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Top Left - BTP Badge */}
      <div className="absolute -top-2 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#F97316] text-white rounded-full shadow-lg">
        <Factory className="w-4 h-4" />
        <span className="text-sm font-semibold">Chantier BTP</span>
      </div>

      {/* Top Right - Disponibilité Card */}
      <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg w-40">
        <div className="flex items-center gap-2 mb-1">
          <Gauge className="w-4 h-4 text-[#059669]" />
          <span className="text-xs text-gray-500">Disponibilité</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09]">99.5%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3 h-3 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+3.2%</span>
        </div>
      </div>

      {/* Middle Left - MTTR Card */}
      <div className="absolute left-4 top-1/3 bg-white rounded-xl p-4 shadow-lg w-36">
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-4 h-4 text-[#F97316]" />
          <span className="text-xs text-gray-500">MTTR</span>
        </div>
        <div className="text-xl font-bold text-[#0C0A09]">1.8h</div>
        <div className="text-xs text-[#059669]">-40% vs avant</div>
      </div>

      {/* Bottom Left - Chart Card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg w-48">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Interventions</span>
          <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">+45%</span>
        </div>
        <div className="text-lg font-bold text-[#0C0A09] mb-2">89/mois</div>
        <MiniLineChartInline data={chantierData} color="#F97316" height={35} />
      </div>

      {/* Bottom Right - Stats Badge */}
      <div className="absolute bottom-4 right-4 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-4 h-4 text-[#F97316]" />
          <span className="text-xs text-white/80">First Time Fix</span>
        </div>
        <div className="text-2xl font-bold">92%</div>
        <div className="text-xs text-[#F97316]">+28 pts</div>
      </div>

      {/* Middle Right - Success Badge */}
      <div className="absolute right-4 top-1/2 flex items-center gap-2 px-4 py-2 bg-[#059669] text-white rounded-full shadow-lg">
        <CheckCircle2 className="w-4 h-4" />
        <span className="text-sm font-semibold">Zéro panne</span>
      </div>
    </div>
  )
}

// Named exports only - use import { ComponentName } from '@/components/photo-data-visual'
