'use client'

import Image from 'next/image'
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, BarChart3, Activity, Gauge, Clock, CheckCircle2, Zap, Target, DollarSign, Users, AlertTriangle, Shield, XCircle, AlertCircle, Wrench, Settings, Database, Brain, Smartphone, FileCheck, Building, Factory, Truck, Fuel, Zap as ZapIcon, Wheat, Pickaxe, Car, FlaskConical, HardHat, Server, Stethoscope } from 'lucide-react'

// Mini Line Chart Component
function MiniLineChartInline({ data, color = '#F97316', height = 25 }: { data: number[], color?: string, height?: number }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = height - ((value - min) / range) * (height - 8) - 4
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className="w-full" style={{ height }} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-line-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} 100,${height}`}
        fill={`url(#grad-line-${color.replace('#', '')})`}
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

// Mini Bar Chart Component
function MiniBarChartInline({ data, color = '#1E3A8A', height = 25 }: { data: number[], color?: string, height?: number }) {
  const max = Math.max(...data)
  const barWidth = 100 / data.length

  return (
    <div className="flex items-end gap-0.5" style={{ height }}>
      {data.map((value, index) => (
        <div
          key={index}
          className="rounded-t transition-all duration-300"
          style={{
            width: `${barWidth - 4}%`,
            height: `${(value / max) * 100}%`,
            backgroundColor: color,
            opacity: 0.5 + (value / max) * 0.5
          }}
        />
      ))}
    </div>
  )
}

// Size configurations for cards
const cardSizes = {
  sm: { width: 'w-32', padding: 'p-2.5', valueSize: 'text-lg', labelSize: 'text-[9px]' },
  md: { width: 'w-40', padding: 'p-3', valueSize: 'text-xl', labelSize: 'text-[10px]' },
  lg: { width: 'w-48', padding: 'p-4', valueSize: 'text-2xl', labelSize: 'text-xs' }
}

// Helper to get random card count (1-3)
function getRandomCardCount(maxCards: number): number {
  if (typeof window === 'undefined') return maxCards
  return Math.floor(Math.random() * maxCards) + 1
}

// Helper to get random size
function getRandomSize(): 'sm' | 'md' | 'lg' {
  const sizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg']
  return sizes[Math.floor(Math.random() * sizes.length)]
}

// Sector Hero Visual with Image and Floating KPI Cards - Random 1-3 cards with varied sizes
interface SectorHeroVisualProps {
  imageSrc: string
  imageAlt: string
  stats: Array<{
    value: string
    label: string
    trend?: string
    trendType?: 'positive' | 'negative'
    icon?: React.ReactNode
    iconColor?: string
    chartData?: number[]
    chartType?: 'line' | 'bar'
    size?: 'sm' | 'md' | 'lg'
  }>
  badge?: { text: string; icon?: React.ReactNode }
  className?: string
  cardCount?: 1 | 2 | 3 // Force specific count, or random if not specified
}

export function SectorHeroVisual({ 
  imageSrc, 
  imageAlt, 
  stats, 
  badge,
  className = '',
  cardCount
}: SectorHeroVisualProps) {
  // Determine how many cards to show (random if not specified)
  const count = cardCount ?? (typeof window !== 'undefined' ? Math.floor(Math.random() * 3) + 1 : 3)
  const displayStats = stats.slice(0, count)
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo Container */}
      <div className="relative rounded-3xl overflow-visible shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={520}
          height={450}
          className="object-cover w-full h-auto rounded-3xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
      </div>

      {/* Badge Top Left */}
      {badge && (
        <div className="absolute -top-3 left-2 flex items-center gap-2 px-3 py-2 bg-[#F97316] text-white rounded-full shadow-lg z-10">
          {badge.icon}
          <span className="text-xs font-semibold">{badge.text}</span>
        </div>
      )}

      {/* Card 1 - Top Right - Overlapping edge with varied size */}
      {displayStats[0] && (() => {
        const size = displayStats[0].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -right-4 top-4 ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            <div className="flex items-center gap-1.5 mb-1">
              {displayStats[0].icon && (
                <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${displayStats[0].iconColor}15` }}>
                  {displayStats[0].icon}
                </div>
              )}
              <span className={`${sizeConfig.labelSize} text-gray-500`}>{displayStats[0].label}</span>
            </div>
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayStats[0].value}</div>
            {displayStats[0].trend && (
              <div className="flex items-center gap-0.5 mt-0.5 text-[#059669]">
                {displayStats[0].trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span className="text-[10px] font-semibold">{displayStats[0].trend}</span>
              </div>
            )}
            {displayStats[0].chartData && (
              <div className="mt-1.5">
                {displayStats[0].chartType === 'bar' ? (
                  <MiniBarChartInline data={displayStats[0].chartData} color={displayStats[0].iconColor || '#1E3A8A'} height={18} />
                ) : (
                  <MiniLineChartInline data={displayStats[0].chartData} color={displayStats[0].iconColor || '#059669'} height={18} />
                )}
              </div>
            )}
          </div>
        )
      })()}

      {/* Card 2 - Left Middle - Overlapping edge with varied size */}
      {displayStats[1] && (() => {
        const size = displayStats[1].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -left-4 top-[28%] ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            <div className="flex items-center gap-1.5 mb-1">
              {displayStats[1].icon && (
                <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${displayStats[1].iconColor}15` }}>
                  {displayStats[1].icon}
                </div>
              )}
              <span className={`${sizeConfig.labelSize} text-gray-500`}>{displayStats[1].label}</span>
            </div>
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayStats[1].value}</div>
            {displayStats[1].trend && (
              <div className="flex items-center gap-0.5 mt-0.5 text-[#059669]">
                {displayStats[1].trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span className="text-[10px] font-semibold">{displayStats[1].trend}</span>
              </div>
            )}
            {displayStats[1].chartData && (
              <div className="mt-1.5">
                {displayStats[1].chartType === 'bar' ? (
                  <MiniBarChartInline data={displayStats[1].chartData} color={displayStats[1].iconColor || '#F97316'} height={18} />
                ) : (
                  <MiniLineChartInline data={displayStats[1].chartData} color={displayStats[1].iconColor || '#1E3A8A'} height={18} />
                )}
              </div>
            )}
          </div>
        )
      })()}

      {/* Card 3 - Bottom Right - Overlapping edge with varied size */}
      {displayStats[2] && (() => {
        const size = displayStats[2].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -right-4 bottom-6 ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            <div className="flex items-center gap-1.5 mb-1">
              {displayStats[2].icon && (
                <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${displayStats[2].iconColor}15` }}>
                  {displayStats[2].icon}
                </div>
              )}
              <span className={`${sizeConfig.labelSize} text-gray-500`}>{displayStats[2].label}</span>
            </div>
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayStats[2].value}</div>
            {displayStats[2].trend && (
              <div className="flex items-center gap-0.5 mt-0.5 text-[#059669]">
                {displayStats[2].trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span className="text-[10px] font-semibold">{displayStats[2].trend}</span>
              </div>
            )}
            {displayStats[2].chartData && (
              <div className="mt-1.5">
                {displayStats[2].chartType === 'bar' ? (
                  <MiniBarChartInline data={displayStats[2].chartData} color={displayStats[2].iconColor || '#7C3AED'} height={18} />
                ) : (
                  <MiniLineChartInline data={displayStats[2].chartData} color={displayStats[2].iconColor || '#F97316'} height={18} />
                )}
              </div>
            )}
          </div>
        )
      })()}
    </div>
  )
}

// Sector Enjeux Visual - Shows Challenges with Problem Indicators - Random 1-3 cards
interface SectorEnjeuxVisualProps {
  imageSrc: string
  imageAlt: string
  problems: Array<{
    value: string
    label: string
    description?: string
    icon?: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
  }>
  className?: string
  cardCount?: 1 | 2 | 3 // Force specific count, or random if not specified
}

export function SectorEnjeuxVisual({
  imageSrc,
  imageAlt,
  problems,
  className = '',
  cardCount
}: SectorEnjeuxVisualProps) {
  // Determine how many cards to show (random if not specified)
  const count = cardCount ?? (typeof window !== 'undefined' ? Math.floor(Math.random() * 3) + 1 : 3)
  const displayProblems = problems.slice(0, count)
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-visible shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={400}
          className="object-cover w-full h-auto rounded-3xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-3xl" />
      </div>

      {/* Alert Badge - Outside top left on edge */}
      <div className="absolute -top-3 left-2 flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-full shadow-lg z-10">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">Défis du secteur</span>
      </div>

      {/* Problem Card 1 - Top Right - Overlapping with varied size */}
      {displayProblems[0] && (() => {
        const size = displayProblems[0].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -right-4 top-4 ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            {displayProblems[0].icon && (
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1 bg-red-50">
                {displayProblems[0].icon}
              </div>
            )}
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayProblems[0].value}</div>
            <div className={`${sizeConfig.labelSize} text-gray-500`}>{displayProblems[0].label}</div>
          </div>
        )
      })()}

      {/* Problem Card 2 - Left Middle - Overlapping with varied size */}
      {displayProblems[1] && (() => {
        const size = displayProblems[1].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -left-4 top-[28%] ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            {displayProblems[1].icon && (
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1 bg-red-50">
                {displayProblems[1].icon}
              </div>
            )}
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayProblems[1].value}</div>
            <div className={`${sizeConfig.labelSize} text-gray-500`}>{displayProblems[1].label}</div>
          </div>
        )
      })()}

      {/* Problem Card 3 - Bottom Right - Overlapping with varied size */}
      {displayProblems[2] && (() => {
        const size = displayProblems[2].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -right-4 bottom-6 ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            {displayProblems[2].icon && (
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1 bg-red-50">
                {displayProblems[2].icon}
              </div>
            )}
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayProblems[2].value}</div>
            <div className={`${sizeConfig.labelSize} text-gray-500`}>{displayProblems[2].label}</div>
          </div>
        )
      })()}

      {/* Bottom Warning Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900/80 to-transparent p-3 pt-10 rounded-b-3xl">
        <div className="flex items-center gap-2 text-white text-xs">
          <XCircle className="w-3.5 h-3.5" />
          <span>Les coûts cachés impactent votre rentabilité</span>
        </div>
      </div>
    </div>
  )
}

// Sector Solutions Visual - Shows Maintex Benefits - Random 1-3 cards
interface SectorSolutionsVisualProps {
  imageSrc: string
  imageAlt: string
  benefits: Array<{
    value: string
    label: string
    icon?: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
  }>
  className?: string
  cardCount?: 1 | 2 | 3 // Force specific count, or random if not specified
}

export function SectorSolutionsVisual({
  imageSrc,
  imageAlt,
  benefits,
  className = '',
  cardCount
}: SectorSolutionsVisualProps) {
  const colors = ['#059669', '#1E3A8A', '#F97316']
  // Determine how many cards to show (random if not specified)
  const count = cardCount ?? (typeof window !== 'undefined' ? Math.floor(Math.random() * 3) + 1 : 3)
  const displayBenefits = benefits.slice(0, count)
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-visible shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={400}
          className="object-cover w-full h-auto rounded-3xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
      </div>

      {/* Success Badge - Outside top left on edge */}
      <div className="absolute -top-3 left-2 flex items-center gap-2 px-3 py-2 bg-[#059669] text-white rounded-full shadow-lg z-10">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">Avec Maintex</span>
      </div>

      {/* Benefit Card 1 - Top Right - Overlapping with varied size */}
      {displayBenefits[0] && (() => {
        const size = displayBenefits[0].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -right-4 top-4 ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            {displayBenefits[0].icon && (
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1" style={{ backgroundColor: `${colors[0]}15` }}>
                {displayBenefits[0].icon}
              </div>
            )}
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayBenefits[0].value}</div>
            <div className={`${sizeConfig.labelSize} text-gray-500`}>{displayBenefits[0].label}</div>
          </div>
        )
      })()}

      {/* Benefit Card 2 - Left Middle - Overlapping with varied size */}
      {displayBenefits[1] && (() => {
        const size = displayBenefits[1].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -left-4 top-[28%] ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            {displayBenefits[1].icon && (
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1" style={{ backgroundColor: `${colors[1]}15` }}>
                {displayBenefits[1].icon}
              </div>
            )}
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayBenefits[1].value}</div>
            <div className={`${sizeConfig.labelSize} text-gray-500`}>{displayBenefits[1].label}</div>
          </div>
        )
      })()}

      {/* Benefit Card 3 - Bottom Right - Overlapping with varied size */}
      {displayBenefits[2] && (() => {
        const size = displayBenefits[2].size || 'md'
        const sizeConfig = cardSizes[size]
        return (
          <div className={`absolute -right-4 bottom-6 ${sizeConfig.width} bg-white rounded-xl ${sizeConfig.padding} shadow-xl z-10`}>
            {displayBenefits[2].icon && (
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1" style={{ backgroundColor: `${colors[2]}15` }}>
                {displayBenefits[2].icon}
              </div>
            )}
            <div className={`${sizeConfig.valueSize} font-bold text-[#0C0A09]`}>{displayBenefits[2].value}</div>
            <div className={`${sizeConfig.labelSize} text-gray-500`}>{displayBenefits[2].label}</div>
          </div>
        )
      })()}

      {/* Bottom Success Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent p-3 pt-10 rounded-b-3xl">
        <div className="flex items-center gap-2 text-white text-xs">
          <Zap className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Maintex optimise votre maintenance</span>
        </div>
      </div>
    </div>
  )
}

// Helper function to get sector config
export function getSectorConfig(sectorKey: string) {
  return sectorConfigs[sectorKey] || sectorConfigs.industrie
}

// Pre-configured stats for each sector type
export const sectorConfigs = {
  industrie: {
    heroStats: [
      { value: '-38%', label: 'Arrêts', trend: 'vs avant', trendType: 'positive' as const, icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [45, 42, 38, 35, 32, 28, 25, 22, 18, 15], chartType: 'line' as const, size: 'lg' as const },
      { value: '99.2%', label: 'Disponibilité', trend: '+4.2%', trendType: 'positive' as const, icon: <Gauge className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A', chartData: [95, 96, 97, 98, 98.5, 99, 99.2, 99.5], chartType: 'line' as const, size: 'md' as const },
      { value: '+85%', label: 'First Time Fix', trend: 'MTTR réduit', trendType: 'positive' as const, icon: <Target className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316', chartData: [45, 52, 58, 65, 72, 78, 85], chartType: 'bar' as const, size: 'sm' as const }
    ],
    enjeuxProblems: [
      { value: '4.2h', label: 'MTTR moyen', icon: <Clock className="w-3.5 h-3.5 text-red-500" />, size: 'sm' as const },
      { value: '23%', label: 'Pannes récurrentes', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" />, size: 'lg' as const },
      { value: '+15%', label: 'Coûts imprévus', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" />, size: 'md' as const }
    ],
    solutionsBenefits: [
      { value: '-60%', label: 'Arrêts non planifiés', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />, size: 'lg' as const },
      { value: '2.1h', label: 'MTTR optimisé', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" />, size: 'sm' as const },
      { value: '100%', label: 'Conformité', icon: <Shield className="w-3.5 h-3.5 text-[#F97316]" />, size: 'md' as const }
    ]
  },
  automobile: {
    heroStats: [
      { value: '99.5%', label: 'Dispo. lignes', trend: '+2.5%', trendType: 'positive' as const, icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [97, 98, 98.5, 99, 99.2, 99.5], chartType: 'line' as const },
      { value: '-42%', label: 'Pannes', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [65, 55, 48, 42, 38, 35], chartType: 'bar' as const },
      { value: '98%', label: 'Traçabilité', icon: <FileCheck className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' }
    ],
    enjeuxProblems: [
      { value: '45min', label: 'Arrêt/ligne/jour', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '12%', label: 'Retards livraison', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35%', label: 'Manque traçabilité', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '99.9%', label: 'Uptime lignes', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '100%', label: 'Traçabilité OK', icon: <FileCheck className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '45min', label: 'Diagnostic IA', icon: <Brain className="w-3.5 h-3.5 text-[#F97316]" /> }
    ]
  },
  'chimie-pharma': {
    heroStats: [
      { value: '100%', label: 'Conformité GMP', icon: <Shield className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-55%', label: 'Écarts qualité', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [55, 48, 42, 35, 28, 22, 18], chartType: 'bar' as const },
      { value: '24/7', label: 'Monitoring', icon: <Activity className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' }
    ],
    enjeuxProblems: [
      { value: '18%', label: 'Non-conformités', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '3.2j', label: 'Retards audits', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '45%', label: 'Docs manquants', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité totale', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '0', label: 'Écart audit', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: 'Instant', label: 'Accès documents', icon: <Database className="w-3.5 h-3.5 text-[#F97316]" /> }
    ]
  },
  mines: {
    heroStats: [
      { value: '+25%', label: 'Dispo. engins', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [72, 75, 78, 82, 85, 88, 92, 95], chartType: 'line' as const },
      { value: '-40%', label: 'Coûts immobil.', icon: <DollarSign className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [55, 48, 42, 38, 35, 32], chartType: 'bar' as const },
      { value: '98%', label: 'Conformité sécu.', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' }
    ],
    enjeuxProblems: [
      { value: '18h', label: 'Immobilisation/sem', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35°C', label: 'Conditions extrêmes', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '280km', label: 'Sites dispersés', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '96%', label: 'Dispo. engins', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Mobile', label: 'Accès hors-ligne', icon: <Smartphone className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-35%', label: 'Coûts maintenance', icon: <DollarSign className="w-3.5 h-3.5 text-[#F97316]" /> }
    ]
  },
  aeronautique: {
    heroStats: [
      { value: '100%', label: 'Traçabilité', icon: <FileCheck className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '0', label: 'Non-conformités', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-65%', label: 'Temps docs', icon: <Clock className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [65, 55, 45, 38, 32, 28, 22], chartType: 'bar' as const }
    ],
    enjeuxProblems: [
      { value: '45%', label: 'Temps paperwork', icon: <FileCheck className="w-3.5 h-3.5 text-red-500" /> },
      { value: '12j', label: 'Retards docs', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '8%', label: 'Erreurs traçabilité', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Traçabilité complète', icon: <Database className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '-70%', label: 'Temps reporting', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '0', label: 'Écart réglementaire', icon: <Shield className="w-3.5 h-3.5 text-[#F97316]" /> }
    ]
  },
  agroalimentaire: {
    heroStats: [
      { value: '+44%', label: 'Préventif', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [45, 48, 52, 58, 65, 72, 78, 85], chartType: 'line' as const },
      { value: '100%', label: 'Conformité HACCP', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-50%', label: 'Incidents qualité', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [50, 42, 35, 28, 22, 18, 15], chartType: 'bar' as const }
    ],
    enjeuxProblems: [
      { value: '15%', label: 'Risques HACCP', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '30%', label: 'Manque traçabilité', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '4h', label: 'Nettoyages retardés', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité HACCP', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Auto', label: 'Traçabilité nettoyages', icon: <Database className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-45%', label: 'Incidents qualité', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" /> }
    ]
  },
  energie: {
    heroStats: [
      { value: '99.9%', label: 'Disponibilité', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [98.5, 99, 99.2, 99.5, 99.7, 99.8, 99.9], chartType: 'line' as const, size: 'lg' as const },
      { value: '100%', label: 'Conformité CRE', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A', size: 'sm' as const },
      { value: '-35%', label: 'Incidents réseau', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', chartData: [45, 38, 32, 28, 22, 18, 15], chartType: 'bar' as const, size: 'md' as const }
    ],
    enjeuxProblems: [
      { value: '99.95%', label: 'Exigence uptime', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" />, size: 'md' as const },
      { value: '450km', label: 'Réseau à surveiller', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" />, size: 'sm' as const },
      { value: '15min', label: 'Coupure max/an', icon: <Clock className="w-3.5 h-3.5 text-red-500" />, size: 'lg' as const }
    ],
    solutionsBenefits: [
      { value: '99.99%', label: 'Uptime atteint', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" />, size: 'lg' as const },
      { value: 'Centralisé', label: 'Monitoring réseau', icon: <Database className="w-3.5 h-3.5 text-[#1E3A8A]" />, size: 'sm' as const },
      { value: '-60%', label: 'Incidents critiques', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" />, size: 'md' as const }
    ]
  },
  'eau-utilities': {
    heroStats: [
      { value: '24/7', label: 'Service continu', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'Conformité eau', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-40%', label: 'Fuites détectées', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '+35%', label: 'Réactivité', icon: <TrendingUp className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '20%', label: 'Pertes en ligne', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '1200km', label: 'Réseau à maintenir', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '4h', label: 'Délai intervention', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35%', label: 'Équip. vieillissants', icon: <Wrench className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '-45%', label: 'Pertes réseau', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '<1h', label: 'Intervention rapide', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '100%', label: 'Qualité eau', icon: <Shield className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Prédictif', label: 'Maintenance réseau', icon: <Brain className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  'oil-gas': {
    heroStats: [
      { value: '100%', label: 'Sécurité ATEX', icon: <Shield className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '99.8%', label: 'Dispo. sites', icon: <Gauge className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-55%', label: 'Incidents critiques', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '0', label: 'Accidents travail', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: 'Zones ATEX', label: 'Risques explosion', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '450km', label: 'Sites isolés', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '48h', label: 'Délai pièces critiques', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '5.2M€', label: 'Risques HSE', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité sécurité', icon: <Shield className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Mobile', label: 'Accès sites isolés', icon: <Smartphone className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-40%', label: 'Temps intervention', icon: <Clock className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Prédictif', label: 'Détection fuites', icon: <Brain className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  btp: {
    heroStats: [
      { value: '-40%', label: 'Pannes imprévues', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'Conformité VGP', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '+30%', label: 'Utilisation engins', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: 'Centralisé', label: 'Carnet numérique', icon: <Database className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '8 chantiers', label: 'Engins dispersés', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '25%', label: 'Non-conformités VGP', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '3.5h', label: 'Recherche équipements', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '18%', label: 'Pannes immobilisant', icon: <Wrench className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité VGP', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Temps réel', label: 'Localisation engins', icon: <Activity className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-50%', label: 'Temps recherche', icon: <Clock className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Auto', label: 'Carnet numérique', icon: <Database className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  infrastructures: {
    heroStats: [
      { value: '-60%', label: 'Retards inspections', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'Conformité', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-50%', label: 'Déplacements', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'Savoir préservé', icon: <Database className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '45%', label: 'Ouvrages vieillissants', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '280km', label: 'Réseau à inspecter', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35%', label: 'Retards inspections', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '40%', label: 'Départs experts', icon: <Users className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Inspections planifiées', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Mobile', label: 'Accès historique', icon: <Smartphone className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: 'Capitalisé', label: 'Savoir-faire', icon: <Brain className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '-55%', label: 'Déplacements', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  telecoms: {
    heroStats: [
      { value: '99.99%', label: 'Uptime réseau', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-45%', label: 'Incidents réseau', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '<15min', label: 'Détection pannes', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '+60%', label: 'Réactivité', icon: <TrendingUp className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '99.99%', label: 'Exigence SLA', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '850', label: 'Sites dispersés', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '45min', label: 'Détection moyenne', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '12%', label: 'Pannes non détectées', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: 'Temps réel', label: 'Monitoring sites', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '-60%', label: 'Temps détection', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '99.99%', label: 'SLA respecté', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Centralisé', label: 'Gestion multi-sites', icon: <Database className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  logistique: {
    heroStats: [
      { value: '99.5%', label: 'Disponibilité', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-35%', label: 'Temps immobil.', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '+45%', label: 'Productivité', icon: <TrendingUp className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' },
      { value: '100%', label: 'Traçabilité flotte', icon: <FileCheck className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' }
    ],
    enjeuxProblems: [
      { value: '2.5h', label: 'Arrêt moyen/jour', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35%', label: 'Flottes hétérogènes', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '18%', label: 'Retards supply chain', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '4.2M€', label: 'Coûts immobilisation', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '99.8%', label: 'Uptime entrepôts', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '-50%', label: 'Pannes imprévues', icon: <TrendingDown className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: 'Temps réel', label: 'Suivi flottes', icon: <Gauge className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '+38%', label: 'Performance', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  immobilier: {
    heroStats: [
      { value: '-20%', label: 'Conso. énergie', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '+92%', label: 'Satisfaction', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-45%', label: 'Réclamations', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' },
      { value: '100%', label: 'Conformité sécu.', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' }
    ],
    enjeuxProblems: [
      { value: '45 bâtiments', label: 'Multi-sites', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '25%', label: 'Réclamations', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '3.2h', label: 'Délai intervention', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '+15%', label: 'Conso. excessive', icon: <TrendingUp className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '<1h', label: 'Intervention moyenne', icon: <Clock className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '-60%', label: 'Réclamations', icon: <TrendingDown className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: 'Centralisé', label: 'Gestion multi-sites', icon: <Database className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '-25%', label: 'Coûts énergie', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  hotellerie: {
    heroStats: [
      { value: '+35%', label: 'Satisfaction', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '24/7', label: 'Dispo. services', icon: <Activity className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-40%', label: 'Incidents chambres', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '5min', label: 'Réaction alertes', icon: <Clock className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '15%', label: 'Réclamations', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '45min', label: 'Délai réparation', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '8%', label: 'Chambres indispo.', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '3 services', label: 'Coordination', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '<15min', label: 'Intervention rapide', icon: <Clock className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '99%', label: 'Dispo. chambres', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-55%', label: 'Réclamations', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Auto', label: 'Attribution tâches', icon: <Zap className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  sante: {
    heroStats: [
      { value: '100%', label: 'Conformité HAS', icon: <Shield className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', size: 'lg' as const },
      { value: '0', label: 'Pannes critiques', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A', size: 'sm' as const },
      { value: '99.9%', label: 'Dispo. équipements', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669', size: 'md' as const }
    ],
    enjeuxProblems: [
      { value: 'Zéro', label: 'Tolérance panne', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" />, size: 'md' as const },
      { value: '18%', label: 'Non-conformités', icon: <XCircle className="w-3.5 h-3.5 text-red-500" />, size: 'sm' as const },
      { value: '2.5h', label: 'Indisponibilité/jour', icon: <Clock className="w-3.5 h-3.5 text-red-500" />, size: 'lg' as const }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité HAS', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />, size: 'lg' as const },
      { value: '0 panne', label: 'Équip. critiques', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, size: 'sm' as const },
      { value: 'Prédictif', label: 'Maintenance bioméd.', icon: <Brain className="w-3.5 h-3.5 text-[#F97316]" />, size: 'md' as const }
    ]
  },
  retail: {
    heroStats: [
      { value: '-25%', label: 'Réactifs maintenance', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '99.5%', label: 'Dispo. magasins', icon: <Gauge className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '+40%', label: 'Satisfaction clients', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-35%', label: 'Coûts maintenance', icon: <DollarSign className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '120 points', label: 'De vente dispersés', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '2.5h', label: 'Indisponibilité/jour', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '15%', label: 'Pannes récurrentes', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '8%', label: 'Impact ventes', icon: <TrendingDown className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '99.8%', label: 'Uptime magasins', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Centralisé', label: 'Gestion multi-sites', icon: <Database className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-45%', label: 'Temps intervention', icon: <Clock className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '+28%', label: 'Expérience client', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  'services-techniques': {
    heroStats: [
      { value: '+40%', label: 'Productivité', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'SLA respectés', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-30%', label: 'Temps admin', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '+55%', label: 'Clients satisfaits', icon: <Users className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '50%', label: 'Temps paperwork', icon: <FileCheck className="w-3.5 h-3.5 text-red-500" /> },
      { value: '3.5h', label: 'Délai intervention', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35%', label: 'Retards SLA', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '20%', label: 'Clients mécontents', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'SLA respectés', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '<1h', label: 'Intervention moyenne', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: 'Auto', label: 'Attribution tâches', icon: <Zap className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '+55%', label: 'Satisfaction client', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  }
}
