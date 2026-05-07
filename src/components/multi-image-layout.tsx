'use client'

import Image from 'next/image'
import { TrendingUp, TrendingDown, ArrowUpRight, Activity, Gauge, Clock, CheckCircle2, Zap, Target, Users, Factory, Shield, HardHat, Calendar, Wrench, Heart, BarChart3 } from 'lucide-react'

// =====================================================
// MINI CHART COMPONENTS
// =====================================================

interface MiniChartProps {
  data: number[]
  color?: string
  height?: number
  className?: string
}

export function MiniLineChart({ data, color = '#F97316', height = 40, className = '' }: MiniChartProps) {
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
        <linearGradient id={`gradient-line-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} 100,${height}`}
        fill={`url(#gradient-line-${color.replace('#', '')})`}
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

export function MiniBarChart({ data, color = '#F97316', height = 40, className = '' }: MiniChartProps) {
  const max = Math.max(...data)
  const barWidth = 100 / data.length

  return (
    <div className={`flex items-end gap-0.5 ${className}`} style={{ height }}>
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

// =====================================================
// DATA CARD COMPONENT - Max info in compact format with SIZE VARIANTS
// =====================================================

interface DataCardProps {
  value: string
  label: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: React.ReactNode
  chart?: 'line' | 'bar'
  chartData?: number[]
  chartColor?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function DataCard({
  value,
  label,
  change,
  changeType = 'positive',
  icon,
  chart,
  chartData,
  chartColor = '#F97316',
  size = 'md',
  className = ''
}: DataCardProps) {
  const changeColors = {
    positive: 'text-[#059669]',
    negative: 'text-[#DC2626]',
    neutral: 'text-gray-500'
  }

  // Size variants
  const sizeStyles = {
    sm: {
      container: 'p-3 rounded-lg',
      icon: 'w-6 h-6 rounded-md',
      iconSize: 'w-3 h-3',
      value: 'text-lg font-bold',
      label: 'text-[10px]',
      change: 'text-[10px]',
      chartHeight: 20
    },
    md: {
      container: 'p-4 rounded-xl',
      icon: 'w-8 h-8 rounded-lg',
      iconSize: 'w-4 h-4',
      value: 'text-2xl font-bold',
      label: 'text-xs',
      change: 'text-xs',
      chartHeight: 30
    },
    lg: {
      container: 'p-5 rounded-xl',
      icon: 'w-10 h-10 rounded-lg',
      iconSize: 'w-5 h-5',
      value: 'text-3xl font-bold',
      label: 'text-sm',
      change: 'text-sm',
      chartHeight: 40
    }
  }

  const styles = sizeStyles[size]

  return (
    <div className={`bg-white shadow-xl border border-gray-100 ${styles.container} ${className}`}>
      {icon && (
        <div className={`${styles.icon} flex items-center justify-center mb-2 bg-gray-50`}>
          {icon}
        </div>
      )}
      <div className={`${styles.value} text-[#0C0A09]`}>{value}</div>
      <div className={`${styles.label} text-gray-500 mb-1`}>{label}</div>
      {change && (
        <div className={`flex items-center gap-1 ${styles.change} font-semibold ${changeColors[changeType]}`}>
          {changeType === 'positive' && <ArrowUpRight className="w-3 h-3" />}
          <span>{change}</span>
        </div>
      )}
      {chart && chartData && (
        <div className="mt-2">
          {chart === 'line' && <MiniLineChart data={chartData} color={chartColor} height={styles.chartHeight} />}
          {chart === 'bar' && <MiniBarChart data={chartData} color={chartColor} height={styles.chartHeight} />}
        </div>
      )}
    </div>
  )
}

// =====================================================
// VIGNETTE BADGE - Small circular badge for images with SIZE VARIANTS
// =====================================================

interface VignetteBadgeProps {
  icon: React.ReactNode
  color?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function VignetteBadge({ icon, color = '#F97316', size = 'md', className = '' }: VignetteBadgeProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center shadow-lg ${className}`}
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
  )
}

// =====================================================
// MULTI IMAGE LAYOUT - 3 images with data cards (Model style)
// =====================================================

interface MultiImageLayoutProps {
  images: Array<{
    src: string
    alt: string
    position: 'top-left' | 'top-right' | 'bottom-center'
    size?: 'sm' | 'md' | 'lg'
    vignette?: { icon: React.ReactNode; color: string }
  }>
  dataCards: Array<{
    value: string
    label: string
    change?: string
    changeType?: 'positive' | 'negative' | 'neutral'
    icon?: React.ReactNode
    chart?: 'line' | 'bar'
    chartData?: number[]
    chartColor?: string
    position: string // CSS classes for positioning
  }>
  className?: string
}

export function MultiImageLayout({ images, dataCards, className = '' }: MultiImageLayoutProps) {
  const sizeClasses = {
    sm: 'w-36 h-36',
    md: 'w-44 h-44',
    lg: 'w-52 h-52'
  }

  return (
    <div className={`relative ${className}`} style={{ minHeight: '500px' }}>
      {/* Images */}
      {images.map((image, index) => {
        const positionClasses: Record<string, string> = {
          'top-left': 'top-0 left-0',
          'top-right': 'top-8 right-0',
          'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2'
        }

        return (
          <div 
            key={index}
            className={`absolute ${positionClasses[image.position]} ${sizeClasses[image.size || 'md']} z-10`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              {image.vignette && (
                <div className="absolute -bottom-2 -right-2">
                  <VignetteBadge icon={image.vignette.icon} color={image.vignette.color} />
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Data Cards */}
      {dataCards.map((card, index) => (
        <div key={`card-${index}`} className={`absolute ${card.position} z-20`}>
          <DataCard
            value={card.value}
            label={card.label}
            change={card.change}
            changeType={card.changeType}
            icon={card.icon}
            chart={card.chart}
            chartData={card.chartData}
            chartColor={card.chartColor}
            className="w-40"
          />
        </div>
      ))}
    </div>
  )
}

// =====================================================
// PRESET: Hero Layout - Large image with 3 data cards of varied sizes
// =====================================================

interface HeroImageLayoutProps {
  imageSrc: string
  imageAlt: string
  vignette?: { icon: React.ReactNode; color: string }
  className?: string
}

export function HeroImageLayout({ imageSrc, imageAlt, vignette, className = '' }: HeroImageLayoutProps) {
  const lineData = [92, 94, 91, 96, 98, 97, 99, 98, 99, 98]
  const barData = [35, 45, 55, 70, 85]

  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={480}
          height={420}
          className="object-cover w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        {vignette && (
          <div className="absolute bottom-4 right-4">
            <VignetteBadge icon={vignette.icon} color={vignette.color} size="md" />
          </div>
        )}
      </div>

      {/* Card 1 - Top Right - Medium with Line Chart */}
      <div className="absolute -right-3 top-4 z-10">
        <DataCard
          value="98.5%"
          label="Disponibilité"
          change="+2.3%"
          icon={<Gauge className="w-4 h-4 text-[#059669]" />}
          chart="line"
          chartData={lineData}
          chartColor="#059669"
          size="md"
        />
      </div>

      {/* Card 2 - Left Middle - Small value card */}
      <div className="absolute -left-3 top-[30%] z-10">
        <DataCard
          value="2.4h"
          label="MTTR"
          change="-18%"
          changeType="positive"
          icon={<Clock className="w-3 h-3 text-[#F97316]" />}
          size="sm"
        />
      </div>

      {/* Card 3 - Bottom Right - Medium with Bar Chart */}
      <div className="absolute -right-3 bottom-4 z-10">
        <DataCard
          value="156"
          label="Interventions/mois"
          change="+20%"
          icon={<Activity className="w-4 h-4 text-[#1E3A8A]" />}
          chart="bar"
          chartData={barData}
          chartColor="#1E3A8A"
          size="md"
        />
      </div>
    </div>
  )
}

// =====================================================
// PRESET: KPI Grid Layout - Multiple small images with cards
// =====================================================

interface KpiGridLayoutProps {
  title: string
  subtitle?: string
  kpis: Array<{
    value: string
    label: string
    change?: string
    icon: React.ReactNode
    color?: string
  }>
  className?: string
}

export function KpiGridLayout({ title, subtitle, kpis, className = '' }: KpiGridLayoutProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}>
      <h3 className="text-lg font-bold text-[#0C0A09] mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="grid grid-cols-2 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${kpi.color || '#F97316'}15` }}
            >
              {kpi.icon}
            </div>
            <div>
              <div className="text-xl font-bold text-[#0C0A09]">{kpi.value}</div>
              <div className="text-xs text-gray-500">{kpi.label}</div>
              {kpi.change && (
                <div className="text-xs font-semibold text-[#059669]">{kpi.change}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// =====================================================
// PRESET: Results Layout - For testimonials/results sections
// =====================================================

interface ResultsLayoutProps {
  results: Array<{
    value: string
    label: string
    description?: string
    icon: React.ReactNode
    color?: string
  }>
  className?: string
}

export function ResultsLayout({ results, className = '' }: ResultsLayoutProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {results.map((result, index) => (
        <div 
          key={index}
          className="flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg"
          style={{ 
            backgroundColor: `${result.color || '#059669'}15`,
            borderLeft: `4px solid ${result.color || '#059669'}`
          }}
        >
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: result.color || '#059669' }}
          >
            {result.icon}
          </div>
          <div>
            <div className="text-2xl font-bold text-[#0C0A09]">{result.value}</div>
            <div className="text-sm text-gray-600">{result.label}</div>
            {result.description && (
              <div className="text-xs text-gray-500">{result.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
