'use client'

import Image from 'next/image'
import { 
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  Clock, Gauge, Activity, Shield, CheckCircle2, Target,
  Zap, Factory, HardHat, Stethoscope, Truck, Wheat, Pickaxe,
  AlertTriangle, Award, DollarSign, BarChart3, Settings,
  Wrench, Timer, Calendar, Percent, TrendingUpIcon
} from 'lucide-react'
import { MiniLineChartInline } from './photo-data-visual'

// =====================================================
// KPI DATA DEFINITIONS - Extracted from maintenance text
// =====================================================

export const maintenanceKPIs = {
  // Fiabilité & Disponibilité
  mtbf: {
    name: 'MTBF',
    fullName: 'Temps Moyen Entre Pannes',
    description: 'Mesure le temps moyen entre deux pannes',
    target: 'Plus élevé = meilleure fiabilité',
    icon: Activity,
    unit: 'h',
    color: '#1E3A8A'
  },
  mttr: {
    name: 'MTTR',
    fullName: 'Temps Moyen de Réparation',
    description: 'Mesure le temps moyen nécessaire pour réparer une panne',
    target: 'Plus bas = réparations rapides',
    icon: Clock,
    unit: 'h',
    color: '#F97316'
  },
  disponibilite: {
    name: 'Disponibilité',
    fullName: 'Taux de disponibilité',
    description: 'Pourcentage de temps où un actif est opérationnel',
    target: '90%+ recommandé',
    icon: Gauge,
    unit: '%',
    color: '#059669'
  },
  oee: {
    name: 'OEE',
    fullName: 'Efficacité Globale Équipement',
    description: 'Disponibilité × Performance × Qualité',
    target: '77%+ recommandé, 85-99% world-class',
    icon: Target,
    unit: '%',
    color: '#7C3AED'
  },
  tempsArret: {
    name: 'Temps d\'arrêt',
    fullName: 'Downtime',
    description: 'Période d\'indisponibilité d\'un équipement',
    target: '<10% recommandé',
    icon: AlertTriangle,
    unit: '%',
    color: '#DC2626'
  },
  
  // Efficacité
  pmp: {
    name: 'PMP',
    fullName: 'Maintenance Préventive Planifiée',
    description: 'Proportion de maintenance planifiée',
    target: '85%+ recommandé',
    icon: Calendar,
    unit: '%',
    color: '#0891B2'
  },
  pmc: {
    name: 'PMC',
    fullName: 'Conformité Calendrier',
    description: 'Respect du calendrier de maintenance',
    target: '90%+ recommandé',
    icon: CheckCircle2,
    unit: '%',
    color: '#059669'
  },
  ftfr: {
    name: 'FTFR',
    fullName: 'First Time Fix Rate',
    description: 'Taux de résolution au premier déplacement',
    target: '85%+ excellent',
    icon: Wrench,
    unit: '%',
    color: '#F97316'
  },
  backlog: {
    name: 'Backlog',
    fullName: 'Retard de Maintenance',
    description: 'Accumulation des activités en attente',
    target: '2-4 semaines idéal',
    icon: Timer,
    unit: 'j',
    color: '#F97316'
  },
  
  // Coûts
  coutUnitaire: {
    name: 'Coût/Unité',
    fullName: 'Coût de Maintenance par Unité',
    description: 'Efficacité des coûts vs production',
    target: 'Optimiser en continu',
    icon: DollarSign,
    unit: '€',
    color: '#7C3AED'
  },
  roi: {
    name: 'ROI',
    fullName: 'Retour sur Investissement',
    description: 'Délai de rentabilité de la GMAO',
    target: '<6 mois excellent',
    icon: TrendingUp,
    unit: 'mois',
    color: '#059669'
  }
}

// =====================================================
// ZERO BADGES - Vignettes "Zéro"
// =====================================================

export const zeroBadges = [
  { text: 'Zéro indisponibilité', icon: Shield, color: '#059669' },
  { text: 'Zéro retard chantier', icon: Clock, color: '#F97316' },
  { text: 'Zéro arrêt production', icon: Factory, color: '#DC2626' },
  { text: 'Zéro gaspillages', icon: Target, color: '#7C3AED' },
  { text: 'Zéro perte de production', icon: TrendingUp, color: '#1E3A8A' },
  { text: 'Zéro défauts', icon: CheckCircle2, color: '#0891B2' },
  { text: 'Zéro panne', icon: Zap, color: '#059669' },
  { text: 'Zéro surprise', icon: Activity, color: '#F97316' },
]

// =====================================================
// KPIs PAR SECTEUR
// =====================================================

export const sectorKPIs = {
  industrie: {
    name: 'Industrie',
    icon: Factory,
    kpis: [
      { name: 'OEE', value: '92%', target: '85%+', trend: '+8%' },
      { name: 'MTBF', value: '720h', target: '500h+', trend: '+15%' },
      { name: 'MTTR', value: '2.1h', target: '<3h', trend: '-25%' },
      { name: 'Disponibilité', value: '98.5%', target: '95%+', trend: '+2.3%' }
    ],
    zeroBadges: ['Zéro arrêt production', 'Zéro défauts', 'Zéro gaspillages']
  },
  btp: {
    name: 'BTP',
    icon: HardHat,
    kpis: [
      { name: 'Conformité calendrier', value: '94%', target: '90%+', trend: '+12%' },
      { name: 'Retard chantier', value: '-45%', target: '0%', trend: '-45%' },
      { name: 'Safety events', value: '0', target: '0', trend: 'Stable' },
      { name: 'MTTR engins', value: '1.8h', target: '<2h', trend: '-30%' }
    ],
    zeroBadges: ['Zéro retard chantier', 'Zéro indisponibilité', 'Zéro panne']
  },
  mines: {
    name: 'Mines & Carrières',
    icon: Pickaxe,
    kpis: [
      { name: 'Disponibilité engins', value: '96%', target: '90%+', trend: '+6%' },
      { name: 'MTBF', value: '480h', target: '400h+', trend: '+20%' },
      { name: 'Conso. carburant', value: '-12%', target: '-10%', trend: '-12%' },
      { name: 'PMP', value: '88%', target: '85%+', trend: '+15%' }
    ],
    zeroBadges: ['Zéro panne', 'Zéro gaspillages', 'Zéro perte de production']
  },
  sante: {
    name: 'Santé',
    icon: Stethoscope,
    kpis: [
      { name: 'Dispo. équip. critiques', value: '99.9%', target: '99.5%+', trend: '+0.4%' },
      { name: 'Conformité réglementaire', value: '100%', target: '100%', trend: 'Stable' },
      { name: 'MTTR équip. médicaux', value: '0.5h', target: '<1h', trend: '-50%' },
      { name: 'Traçabilité', value: '100%', target: '100%', trend: 'Stable' }
    ],
    zeroBadges: ['Zéro indisponibilité', 'Zéro défauts', 'Zéro surprise']
  },
  energie: {
    name: 'Énergie',
    icon: Zap,
    kpis: [
      { name: 'PMP', value: '91%', target: '85%+', trend: '+18%' },
      { name: 'MTBF', value: '2160h', target: '2000h+', trend: '+8%' },
      { name: 'Disponibilité', value: '99.2%', target: '98%+', trend: '+1.2%' },
      { name: 'Safety incidents', value: '0', target: '0', trend: 'Stable' }
    ],
    zeroBadges: ['Zéro arrêt production', 'Zéro panne', 'Zéro surprise']
  },
  agroalimentaire: {
    name: 'Agroalimentaire',
    icon: Wheat,
    kpis: [
      { name: 'Conformité HACCP', value: '100%', target: '100%', trend: 'Stable' },
      { name: 'Traçabilité', value: '100%', target: '100%', trend: 'Stable' },
      { name: 'OEE', value: '89%', target: '85%+', trend: '+4%' },
      { name: 'PMP', value: '87%', target: '85%+', trend: '+10%' }
    ],
    zeroBadges: ['Zéro défauts', 'Zéro gaspillages', 'Zéro perte de production']
  },
  logistique: {
    name: 'Logistique',
    icon: Truck,
    kpis: [
      { name: 'Dispo. flotte', value: '97%', target: '95%+', trend: '+2%' },
      { name: 'MTTR véhicules', value: '1.2h', target: '<2h', trend: '-40%' },
      { name: 'OT respectés', value: '95%', target: '90%+', trend: '+5%' },
      { name: 'Cost per mile', value: '-8%', target: '-5%', trend: '-8%' }
    ],
    zeroBadges: ['Zéro indisponibilité', 'Zéro retard', 'Zéro panne']
  }
}

// =====================================================
// ZERO BADGE COMPONENT
// =====================================================

interface ZeroBadgeProps {
  text: string
  icon?: React.ElementType
  color?: string
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  className?: string
}

export function ZeroBadge({ 
  text, 
  icon: Icon = CheckCircle2, 
  color = '#059669',
  size = 'md',
  animated = false,
  className = ''
}: ZeroBadgeProps) {
  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-5 py-3 text-base gap-2.5'
  }
  
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }
  
  return (
    <div 
      className={`
        inline-flex items-center ${sizes[size]} rounded-full font-semibold
        ${animated ? 'animate-pulse' : ''}
        ${className}
      `}
      style={{ 
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}30`
      }}
    >
      <Icon className={iconSizes[size]} />
      <span>{text}</span>
    </div>
  )
}

// =====================================================
// KPI CARD COMPONENT - Enhanced with full KPI data
// =====================================================

interface KpiCardProps {
  kpiKey: keyof typeof maintenanceKPIs
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  trend?: 'up' | 'down'
  description?: string
  size?: 'sm' | 'md' | 'lg'
  showChart?: boolean
  chartData?: number[]
  className?: string
}

export function KpiCard({
  kpiKey,
  value,
  change,
  changeType = 'positive',
  trend,
  description,
  size = 'md',
  showChart = false,
  chartData,
  className = ''
}: KpiCardProps) {
  const kpi = maintenanceKPIs[kpiKey]
  const Icon = kpi.icon
  
  const sizes = {
    sm: { card: 'p-3', icon: 'w-8 h-8', value: 'text-xl', label: 'text-xs' },
    md: { card: 'p-4', icon: 'w-10 h-10', value: 'text-2xl', label: 'text-sm' },
    lg: { card: 'p-5', icon: 'w-12 h-12', value: 'text-3xl', label: 'text-base' }
  }
  
  const s = sizes[size]
  
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 ${s.card} ${className}`}>
      <div className="flex items-start gap-3">
        <div 
          className={`${s.icon} rounded-xl flex items-center justify-center`}
          style={{ backgroundColor: `${kpi.color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color: kpi.color }} />
        </div>
        <div className="flex-1">
          <div className="text-xs text-gray-400 uppercase tracking-wide">{kpi.name}</div>
          <div className={`${s.value} font-bold text-[#0C0A09]`}>{value}</div>
          {description && (
            <div className={`${s.label} text-gray-500 mt-0.5`}>{description}</div>
          )}
          {change && (
            <div className={`flex items-center gap-1 mt-1 ${s.label} font-medium ${
              changeType === 'positive' ? 'text-[#059669]' : 
              changeType === 'negative' ? 'text-[#DC2626]' : 'text-gray-500'
            }`}>
              {trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5" />}
              {trend === 'down' && <ArrowDownRight className="w-3.5 h-3.5" />}
              <span>{change}</span>
            </div>
          )}
        </div>
      </div>
      {showChart && chartData && (
        <div className="mt-3">
          <MiniLineChartInline data={chartData} color={kpi.color} height={35} />
        </div>
      )}
    </div>
  )
}

// =====================================================
// ENHANCED HERO PHOTO VISUAL with KPIs
// =====================================================

interface EnhancedHeroPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function EnhancedHeroPhotoVisual({ imageSrc, imageAlt, className = '' }: EnhancedHeroPhotoVisualProps) {
  const mttrData = [4.2, 3.8, 3.5, 3.1, 2.8, 2.5, 2.3, 2.4, 2.2, 2.1, 2.0, 1.9]
  const availabilityData = [92, 94, 91, 96, 98, 97, 99, 98, 99, 98, 99, 98]
  const oeeData = [72, 75, 78, 82, 85, 87, 89, 91, 92, 93, 92, 94]
  
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

      {/* Top Left - MTBF Card */}
      <div className="absolute -top-2 left-0 md:top-6 md:left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-36">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center">
            <Activity className="w-4 h-4 text-[#1E3A8A]" />
          </div>
          <span className="text-xs text-gray-500">MTBF</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09]">720h</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+15%</span>
        </div>
      </div>

      {/* Top Right - Disponibilité Card */}
      <div className="absolute -right-2 top-16 md:right-6 md:top-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-40">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#059669]/10 flex items-center justify-center">
            <Gauge className="w-4 h-4 text-[#059669]" />
          </div>
          <span className="text-xs text-gray-500">Disponibilité</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">98.5%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-4 h-4 text-[#059669]" />
          <span className="text-sm font-semibold text-[#059669]">+2.3%</span>
        </div>
      </div>

      {/* Middle Left - MTTR Card with Chart */}
      <div className="absolute left-0 top-[42%] md:left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-44">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
              <Clock className="w-3.5 h-3.5 text-[#F97316]" />
            </div>
            <span className="text-xs text-gray-500">MTTR</span>
          </div>
          <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-1.5 py-0.5 rounded">-18%</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09]">2.4h</div>
        <MiniLineChartInline data={mttrData} color="#F97316" height={30} />
      </div>

      {/* Middle Right - Zero Badge */}
      <div className="absolute right-0 md:right-6 top-[58%]">
        <ZeroBadge text="Zéro arrêt production" icon={Shield} color="#059669" size="sm" />
      </div>

      {/* Bottom Right - OEE Card with Chart */}
      <div className="absolute -right-2 bottom-28 md:right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-48">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs text-gray-500">OEE</span>
          </div>
          <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">World-class</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09] mb-2">92%</div>
        <MiniLineChartInline data={oeeData} color="#7C3AED" height={40} />
      </div>

      {/* Bottom Left - FTFR Badge */}
      <div className="absolute left-0 md:left-6 bottom-20 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Wrench className="w-4 h-4 text-[#F97316]" />
          <span className="text-xs text-white/80">First Time Fix</span>
        </div>
        <div className="text-2xl font-bold">89%</div>
        <div className="text-xs text-[#F97316]">+24 pts</div>
      </div>

      {/* Bottom - Zero Badge Row */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <ZeroBadge text="Zéro panne" icon={Zap} color="#059669" size="sm" />
        <ZeroBadge text="Zéro surprise" icon={Activity} color="#F97316" size="sm" />
      </div>
    </div>
  )
}

// =====================================================
// ENHANCED BTP PHOTO VISUAL with Sector KPIs
// =====================================================

interface EnhancedBtpPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function EnhancedBtpPhotoVisual({ imageSrc, imageAlt, className = '' }: EnhancedBtpPhotoVisualProps) {
  const chantierData = [45, 52, 58, 62, 68, 72, 75, 80, 85, 88, 92, 95]
  const conformiteData = [78, 82, 85, 88, 91, 93, 94, 95, 94, 96, 95, 97]
  
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
        <HardHat className="w-4 h-4" />
        <span className="text-sm font-semibold">Chantier BTP</span>
      </div>

      {/* Top Right - Conformité Calendrier */}
      <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg w-40">
        <div className="flex items-center gap-2 mb-1">
          <Calendar className="w-4 h-4 text-[#059669]" />
          <span className="text-xs text-gray-500">Conformité calendrier</span>
        </div>
        <div className="text-2xl font-bold text-[#0C0A09]">94%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3 h-3 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+12%</span>
        </div>
      </div>

      {/* Middle Left - MTTR Engins */}
      <div className="absolute left-4 top-1/3 bg-white rounded-xl p-4 shadow-lg w-36">
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-4 h-4 text-[#F97316]" />
          <span className="text-xs text-gray-500">MTTR Engins</span>
        </div>
        <div className="text-xl font-bold text-[#0C0A09]">1.8h</div>
        <div className="text-xs text-[#059669]">-30% vs avant</div>
      </div>

      {/* Middle Right - Zero Badge */}
      <div className="absolute right-4 top-1/2">
        <ZeroBadge text="Zéro retard chantier" icon={Clock} color="#F97316" size="md" />
      </div>

      {/* Bottom Left - Chart Card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg w-52">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Progression chantier</span>
          <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">+45%</span>
        </div>
        <div className="text-lg font-bold text-[#0C0A09] mb-2">95% conforme</div>
        <MiniLineChartInline data={chantierData} color="#F97316" height={35} />
      </div>

      {/* Bottom Center - Zero Badges */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <ZeroBadge text="Zéro indisponibilité" icon={Shield} color="#059669" size="sm" />
        <ZeroBadge text="Zéro panne" icon={Zap} color="#0891B2" size="sm" />
      </div>

      {/* Bottom Right - First Time Fix */}
      <div className="absolute bottom-4 right-4 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-4 h-4 text-[#F97316]" />
          <span className="text-xs text-white/80">First Time Fix</span>
        </div>
        <div className="text-2xl font-bold">92%</div>
        <div className="text-xs text-[#F97316]">+28 pts</div>
      </div>
    </div>
  )
}

// =====================================================
// SECTOR KPI GRID COMPONENT
// =====================================================

interface SectorKpiGridProps {
  sectorKey: keyof typeof sectorKPIs
  className?: string
}

export function SectorKpiGrid({ sectorKey, className = '' }: SectorKpiGridProps) {
  const sector = sectorKPIs[sectorKey]
  const Icon = sector.icon
  
  return (
    <div className={`${className}`}>
      {/* Sector Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#F97316]" />
        </div>
        <h3 className="text-lg font-bold text-[#0C0A09]">{sector.name}</h3>
      </div>
      
      {/* KPI Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {sector.kpis.map((kpi, i) => (
          <div key={i} className="bg-white rounded-xl p-3 shadow border border-gray-100">
            <div className="text-xs text-gray-500 mb-1">{kpi.name}</div>
            <div className="text-xl font-bold text-[#0C0A09]">{kpi.value}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className={`text-xs font-semibold ${
                kpi.trend.includes('-') || kpi.trend.includes('+') ? 'text-[#059669]' : 'text-gray-500'
              }`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Zero Badges */}
      <div className="flex flex-wrap gap-2">
        {sector.zeroBadges.map((badge, i) => (
          <ZeroBadge key={i} text={badge} icon={CheckCircle2} color="#059669" size="sm" />
        ))}
      </div>
    </div>
  )
}

// =====================================================
// FLOATING KPI OVERLAY - For any photo
// =====================================================

interface FloatingKpiOverlayProps {
  children: React.ReactNode
  kpis: Array<{
    name: string
    value: string
    change?: string
    trend?: 'up' | 'down'
    position: 'top-left' | 'top-right' | 'middle-left' | 'middle-right' | 'bottom-left' | 'bottom-right'
  }>
  zeroBadges?: Array<{ text: string; icon?: React.ElementType; color?: string }>
  className?: string
}

export function FloatingKpiOverlay({ 
  children, 
  kpis, 
  zeroBadges = [], 
  className = '' 
}: FloatingKpiOverlayProps) {
  const positionClasses: Record<string, string> = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'middle-left': 'top-1/3 left-4',
    'middle-right': 'top-1/3 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  }
  
  return (
    <div className={`relative ${className}`}>
      {children}
      
      {kpis.map((kpi, i) => (
        <div 
          key={i}
          className={`absolute ${positionClasses[kpi.position]} bg-white rounded-xl p-3 shadow-lg`}
        >
          <div className="text-xs text-gray-500">{kpi.name}</div>
          <div className="text-lg font-bold text-[#0C0A09]">{kpi.value}</div>
          {kpi.change && (
            <div className={`text-xs font-semibold ${
              kpi.trend === 'up' ? 'text-[#059669]' : kpi.trend === 'down' ? 'text-[#DC2626]' : 'text-gray-500'
            }`}>
              {kpi.change}
            </div>
          )}
        </div>
      ))}
      
      {zeroBadges.length > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {zeroBadges.map((badge, i) => (
            <ZeroBadge 
              key={i} 
              text={badge.text} 
              icon={badge.icon} 
              color={badge.color || '#059669'} 
              size="sm" 
            />
          ))}
        </div>
      )}
    </div>
  )
}

// =====================================================
// KPI DASHBOARD SUMMARY - For pages
// =====================================================

interface KpiDashboardProps {
  title?: string
  subtitle?: string
  kpis: Array<{
    key: keyof typeof maintenanceKPIs
    value: string
    change?: string
    trend?: 'up' | 'down'
    description?: string
  }>
  showZeroBadges?: boolean
  className?: string
}

export function KpiDashboard({ 
  title, 
  subtitle, 
  kpis, 
  showZeroBadges = true,
  className = '' 
}: KpiDashboardProps) {
  return (
    <div className={`${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-bold text-[#0C0A09]">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {kpis.map((kpi, i) => (
          <KpiCard
            key={i}
            kpiKey={kpi.key}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            description={kpi.description}
            size="md"
          />
        ))}
      </div>
      
      {showZeroBadges && (
        <div className="flex flex-wrap gap-2">
          {zeroBadges.slice(0, 4).map((badge, i) => (
            <ZeroBadge 
              key={i} 
              text={badge.text} 
              icon={badge.icon} 
              color={badge.color} 
              size="sm" 
            />
          ))}
        </div>
      )}
    </div>
  )
}
