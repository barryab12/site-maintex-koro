'use client'

import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, CheckCircle2, Clock, AlertTriangle, Activity, Zap, Users, Factory, Gauge, DollarSign, BarChart3, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react'

// ============================================
// KPI CARD COMPONENT - Large metric display
// ============================================
interface KPICardProps {
  value: string
  label: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  iconElement?: React.ReactNode
  iconColor?: string
  subtext?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function KPICard({ 
  value, 
  label, 
  change, 
  changeType = 'positive',
  iconElement,
  iconColor = '#F97316',
  subtext,
  className,
  size = 'md'
}: KPICardProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const valueSizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl md:text-5xl'
  }

  return (
    <div className={cn(
      "bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300",
      sizeClasses[size],
      className
    )}>
      {iconElement && (
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          {iconElement}
        </div>
      )}
      <div className={cn(
        "font-bold text-[#1E3A8A] tracking-tight mb-1",
        valueSizeClasses[size]
      )}>
        {value}
      </div>
      <div className="text-sm text-[#64748b] mb-2">{label}</div>
      {change && (
        <div className={cn(
          "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold",
          changeType === 'positive' && "bg-[#059669]/10 text-[#059669]",
          changeType === 'negative' && "bg-[#DC2626]/10 text-[#DC2626]",
          changeType === 'neutral' && "bg-gray-100 text-gray-600"
        )}>
          {changeType === 'positive' && <ArrowUpRight className="w-3 h-3" />}
          {changeType === 'negative' && <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      )}
      {subtext && (
        <div className="text-xs text-[#94a3b8] mt-2">{subtext}</div>
      )}
    </div>
  )
}

// ============================================
// STATS OVERLAY - Floating stat badges
// ============================================
interface StatsOverlayProps {
  value: string
  label?: string
  type?: 'success' | 'warning' | 'info' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function StatsOverlay({ 
  value, 
  label,
  type = 'accent',
  size = 'md',
  className 
}: StatsOverlayProps) {
  const typeClasses = {
    success: 'bg-[#059669] text-white',
    warning: 'bg-[#F97316] text-white',
    info: 'bg-[#1E3A8A] text-white',
    accent: 'bg-[#F97316] text-white'
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg'
  }

  return (
    <div className={cn(
      "rounded-xl font-bold shadow-lg flex items-center gap-2",
      typeClasses[type],
      sizeClasses[size],
      className
    )}>
      <span>{value}</span>
      {label && <span className="font-normal opacity-90">{label}</span>}
    </div>
  )
}

// ============================================
// MINI BAR CHART - Simple bar visualization
// ============================================
interface MiniBarChartProps {
  data: { value: number; label?: string; color?: string }[]
  height?: number
  showLabels?: boolean
  className?: string
}

export function MiniBarChart({ data, height = 80, showLabels = true, className }: MiniBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value))
  
  return (
    <div className={cn("flex items-end gap-2", className)} style={{ height }}>
      {data.map((item, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div 
            className="w-full rounded-t-lg transition-all duration-300 hover:opacity-80"
            style={{ 
              height: `${(item.value / maxValue) * 100}%`,
              backgroundColor: item.color || '#1E3A8A',
              minHeight: 4
            }}
          />
          {showLabels && item.label && (
            <span className="text-[10px] text-[#64748b]">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  )
}

// ============================================
// LINE CHART - Simple line visualization
// ============================================
interface MiniLineChartProps {
  data: number[]
  color?: string
  height?: number
  className?: string
}

export function MiniLineChart({ data, color = '#1E3A8A', height = 60, className }: MiniLineChartProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  
  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return `${x},${y}`
  }).join(' ')

  const areaPoints = `0,100 ${points} 100,100`

  return (
    <svg viewBox="0 0 100 100" className={cn("w-full", className)} style={{ height }}>
      <defs>
        <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        fill={`url(#gradient-${color.replace('#', '')})`}
        points={areaPoints}
      />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ============================================
// DONUT CHART - Circular progress
// ============================================
interface DonutChartProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  color?: string
  label?: string
  className?: string
}

export function DonutChart({ 
  value, 
  max = 100, 
  size = 80, 
  strokeWidth = 8,
  color = '#F97316',
  label,
  className 
}: DonutChartProps) {
  const percentage = (value / max) * 100
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-[#1E3A8A]">{value}%</span>
        {label && <span className="text-[10px] text-[#64748b]">{label}</span>}
      </div>
    </div>
  )
}

// ============================================
// METRICS GRID - Multiple KPIs in a row
// ============================================
interface MetricGridProps {
  metrics: {
    value: string
    label: string
    change?: string
    changeType?: 'positive' | 'negative' | 'neutral'
    iconElement?: React.ReactNode
  }[]
  columns?: 2 | 3 | 4
  className?: string
}

export function MetricGrid({ metrics, columns = 4, className }: MetricGridProps) {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }

  return (
    <div className={cn("grid gap-4", gridClasses[columns], className)}>
      {metrics.map((metric, i) => (
        <KPICard
          key={i}
          value={metric.value}
          label={metric.label}
          change={metric.change}
          changeType={metric.changeType}
          iconElement={metric.iconElement}
          size="sm"
        />
      ))}
    </div>
  )
}

// ============================================
// DASHBOARD STATS ROW - For tablet mockups
// ============================================
interface DashboardStatsRowProps {
  stats: {
    value: string
    label: string
    color?: string
  }[]
  className?: string
}

export function DashboardStatsRow({ stats, className }: DashboardStatsRowProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-2", className)}>
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-2 rounded-lg shadow-sm">
          <div className="text-[8px] text-[#64748b] mb-0.5">{stat.label}</div>
          <div 
            className="text-lg font-bold"
            style={{ color: stat.color || '#1E3A8A' }}
          >
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  )
}

// ============================================
// PROGRESS BAR - Horizontal progress
// ============================================
interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  showLabel?: boolean
  label?: string
  className?: string
}

export function ProgressBar({ 
  value, 
  max = 100, 
  color = '#F97316',
  showLabel = true,
  label,
  className 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={cn("w-full", className)}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-[#44403C]">{label}</span>}
          <span className="text-sm font-semibold" style={{ color }}>{percentage}%</span>
        </div>
      )}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color 
          }}
        />
      </div>
    </div>
  )
}

// ============================================
// TABLET MOCKUP - Enhanced with dashboard
// ============================================
interface TabletMockupProps {
  children?: React.ReactNode
  className?: string
}

export function TabletMockup({ children, className }: TabletMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Tablet Frame */}
      <div className="relative bg-gray-900 rounded-[2rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[4/3]">
          {children}
        </div>
        {/* Home Button Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
      </div>
    </div>
  )
}

// ============================================
// MOBILE MOCKUP
// ============================================
interface MobileMockupProps {
  children?: React.ReactNode
  className?: string
}

export function MobileMockup({ children, className }: MobileMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19]">
          {children}
        </div>
      </div>
    </div>
  )
}

// ============================================
// GMAO DASHBOARD MOCKUP - Enhanced version
// ============================================
export function GMAODashboardMockup() {
  return (
    <div className="h-full bg-gray-50 p-3 text-[10px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="font-bold text-gray-900">MAINTEX</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="text-gray-500 text-[8px] mb-1">OT ouverts</div>
          <div className="text-lg font-bold text-[#1E3A8A]">24</div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="text-gray-500 text-[8px] mb-1">En cours</div>
          <div className="text-lg font-bold text-[#F97316]">8</div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="text-gray-500 text-[8px] mb-1">Clôturés</div>
          <div className="text-lg font-bold text-green-600">156</div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="bg-white p-2 rounded-lg shadow-sm mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-700 text-[9px]">Disponibilité</span>
          <span className="text-green-600 font-bold text-[9px]">98.5%</span>
        </div>
        <MiniLineChart data={[35, 42, 38, 55, 48, 62, 58, 72, 65, 78, 82, 85]} color="#1E3A8A" height={40} />
      </div>

      {/* Recent Tasks */}
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <div className="font-semibold text-gray-700 text-[9px] mb-2">Interventions récentes</div>
        <div className="space-y-1.5">
          {[
            { title: 'Pompe P-201', status: 'En cours', priority: 'Haute' },
            { title: 'Convoyeur C-102', status: 'En attente', priority: 'Moyenne' },
            { title: 'Compresseur #3', status: 'Terminé', priority: 'Basse' },
          ].map((task, i) => (
            <div key={i} className="flex items-center justify-between p-1.5 bg-gray-50 rounded">
              <span className="text-[8px] text-gray-700 truncate">{task.title}</span>
              <span className={cn(
                "px-1.5 py-0.5 rounded text-[7px] font-medium",
                task.status === 'En cours' && "bg-blue-100 text-blue-700",
                task.status === 'En attente' && "bg-yellow-100 text-yellow-700",
                task.status === 'Terminé' && "bg-green-100 text-green-700"
              )}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// EQUIPMENT DETAIL MOCKUP
// ============================================
export function EquipmentDetailMockup() {
  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-[#1E3A8A] text-white p-3">
        <div className="text-[8px] text-white/70 mb-1">Équipement #EQ-4521</div>
        <div className="font-bold text-sm">Compresseur CVC</div>
        <div className="text-[8px] text-white/70 flex items-center gap-1 mt-1">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          Bâtiment 40-A
        </div>
      </div>

      <div className="p-3">
        {/* Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <div className="text-[8px] text-red-700">
            <span className="font-medium">Alerte :</span> Maintenance requise
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-white p-2 rounded-lg shadow-sm mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-semibold text-gray-700">Consommation</span>
            <span className="text-sm font-bold text-[#F97316]">302 W</span>
          </div>
          <MiniLineChart data={[280, 295, 310, 302, 285, 290, 305, 298, 302]} color="#F97316" height={30} />
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button className="w-full bg-[#F97316] text-white text-[10px] font-medium py-2 rounded-lg">
            Créer un ordre de travail
          </button>
          <button className="w-full bg-white border border-gray-200 text-gray-700 text-[10px] font-medium py-2 rounded-lg">
            Voir l&apos;historique
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// TASK MANAGEMENT MOCKUP
// ============================================
export function TaskManagementMockup() {
  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[8px] text-gray-500">#831</div>
            <div className="font-bold text-sm text-gray-900">Convoyeur - Réparation</div>
          </div>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[8px] font-medium rounded-full">
            En cours
          </span>
        </div>
      </div>

      {/* Status Flow */}
      <div className="p-3 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          {[
            { label: 'Ouvert', active: false, done: true },
            { label: 'En cours', active: true, done: false },
            { label: 'En attente', active: false, done: false },
            { label: 'Terminé', active: false, done: false },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-medium",
                step.active && "bg-[#F97316] text-white",
                step.done && "bg-green-500 text-white",
                !step.active && !step.done && "bg-gray-200 text-gray-500"
              )}>
                {step.done ? '✓' : i + 1}
              </div>
              <span className="text-[7px] text-gray-500 mt-1">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Assignee */}
        <div className="bg-white p-2 rounded-lg shadow-sm mb-2">
          <div className="text-[8px] text-gray-500 mb-1">Assigné à</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-[9px] font-medium">
              M
            </div>
            <span className="text-[10px] font-medium text-gray-900">Équipe Maintenance</span>
          </div>
        </div>

        {/* Priority */}
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="text-[8px] text-gray-500 mb-1">Priorité</div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-[8px]">
              !
            </span>
            <span className="text-[10px] font-medium text-gray-900">Moyenne</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// PRICING DASHBOARD MOCKUP
// ============================================
export function PricingDashboardMockup() {
  return (
    <div className="h-full bg-gray-50 p-3 text-[10px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-gray-900">Tableau de bord</span>
        <span className="text-[8px] text-gray-500">Janvier 2025</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-1 text-gray-500 text-[8px] mb-1">
            <TrendingUp className="w-2.5 h-2.5" />
            Budget
          </div>
          <div className="text-base font-bold text-[#1E3A8A]">4.2M€</div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-1 text-gray-500 text-[8px] mb-1">
            <Activity className="w-2.5 h-2.5" />
            Engagé
          </div>
          <div className="text-base font-bold text-[#F97316]">2.8M€</div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-1 text-gray-500 text-[8px] mb-1">
            <CheckCircle2 className="w-2.5 h-2.5" />
            Réalisé
          </div>
          <div className="text-base font-bold text-green-600">1.9M€</div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-1 text-gray-500 text-[8px] mb-1">
            <Gauge className="w-2.5 h-2.5" />
            Solde
          </div>
          <div className="text-base font-bold text-green-600">+1.3M€</div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <div className="text-[9px] font-semibold text-gray-700 mb-2">Évolution mensuelle</div>
        <MiniLineChart data={[35, 42, 38, 55, 48, 62, 58, 72, 65, 78, 82, 85]} color="#1E3A8A" height={40} />
      </div>
    </div>
  )
}

// ============================================
// MOBILE TASK LIST MOCKUP
// ============================================
export function MobileTaskListMockup() {
  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-[#1E3A8A] text-white p-3 pt-8">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">Mes interventions</span>
          <div className="w-6 h-6 bg-white/20 rounded-full" />
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-white/20 text-[9px] rounded-full">Aujourd&apos;hui</span>
          <span className="px-2 py-1 bg-[#F97316] text-[9px] rounded-full text-white">3 tâches</span>
        </div>
      </div>

      {/* Task List */}
      <div className="p-3 space-y-2">
        {[
          { title: 'Remplacer jauge température', time: '09:00', status: 'urgent' },
          { title: 'Inspection convoyeur L2', time: '11:30', status: 'normal' },
          { title: 'Maintenance compresseur', time: '14:00', status: 'normal' },
        ].map((task, i) => (
          <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium text-gray-900 text-[11px]">{task.title}</div>
                <div className="text-[9px] text-gray-500 flex items-center gap-1 mt-1">
                  <Clock className="w-2.5 h-2.5" />
                  {task.time}
                </div>
              </div>
              <span className={cn(
                "w-2 h-2 rounded-full",
                task.status === 'urgent' ? "bg-red-500" : "bg-green-500"
              )} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// MINI CHART (for backward compatibility)
// ============================================
export function MiniChart() {
  return (
    <svg viewBox="0 0 200 50" className="w-full h-8">
      <line x1="0" y1="12.5" x2="200" y2="12.5" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="0" y1="25" x2="200" y2="25" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="0" y1="37.5" x2="200" y2="37.5" stroke="#e5e7eb" strokeWidth="0.5" />
      <polyline
        fill="none"
        stroke="#1E3A8A"
        strokeWidth="2"
        points="0,35 20,30 40,32 60,20 80,25 100,15 120,18 140,12 160,15 180,8 200,5"
      />
      <polygon
        fill="url(#gradient)"
        points="0,35 20,30 40,32 60,20 80,25 100,15 120,18 140,12 160,15 180,8 200,5 200,50 0,50"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
