'use client'

import Image from 'next/image'
import { 
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  Clock, Gauge, Activity, Shield, CheckCircle2, Target,
  Zap, Factory, HardHat, Stethoscope, Truck, Wheat, Pickaxe,
  AlertTriangle, DollarSign, BarChart3, Settings,
  Wrench, Timer, Calendar, Users
} from 'lucide-react'
import { MiniLineChartInline } from './photo-data-visual'

// =====================================================
// KPI DATA DEFINITIONS
// =====================================================

export const maintenanceKPIs = {
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
// KPI CARD COMPONENT
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
// ENHANCED HERO PHOTO VISUAL - Max 3 cartes, style modèle
// =====================================================

interface EnhancedHeroPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function EnhancedHeroPhotoVisual({ imageSrc, imageAlt, className = '' }: EnhancedHeroPhotoVisualProps) {
  const mttrData = [4.2, 3.8, 3.5, 3.1, 2.8, 2.5, 2.3, 2.4]
  const oeeData = [72, 75, 78, 82, 85, 87, 89, 91, 92, 93]
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo Container */}
      <div className="relative rounded-3xl overflow-visible shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={480}
          height={420}
          className="object-cover w-full h-auto rounded-3xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl" />
      </div>

      {/* Card 1 - Top Right - Disponibilité (style modèle avec graphique) */}
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
      <div className="absolute -left-3 top-[30%] w-44 bg-white rounded-xl p-4 shadow-xl z-10">
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

      {/* Card 3 - Bottom Right - OEE (style modèle avec badge) */}
      <div className="absolute -right-3 bottom-4 w-48 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#7C3AED]/10">
              <Target className="w-4 h-4 text-[#7C3AED]" />
            </div>
            <span className="text-xs text-gray-500">OEE</span>
          </div>
          <span className="text-xs font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-2 py-1 rounded-full">World-class</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">92%</div>
        <MiniLineChartInline data={oeeData} color="#7C3AED" height={25} className="mt-2" />
      </div>
    </div>
  )
}

// =====================================================
// ENHANCED BTP PHOTO VISUAL - Max 3 cartes, style diversifié
// =====================================================

interface EnhancedBtpPhotoVisualProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function EnhancedBtpPhotoVisual({ imageSrc, imageAlt, className = '' }: EnhancedBtpPhotoVisualProps) {
  const chantierData = [45, 52, 58, 62, 68, 72, 75, 80, 85, 88]
  const conformiteData = [78, 82, 85, 88, 91, 93, 94, 95]
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo */}
      <div className="relative rounded-3xl overflow-visible shadow-2xl h-[400px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-3xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
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

      {/* Card 2 - Top Right - Conformité */}
      <div className="absolute -right-3 top-4 w-44 bg-white rounded-xl p-4 shadow-xl z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#059669]/10">
            <Calendar className="w-4 h-4 text-[#059669]" />
          </div>
          <span className="text-xs text-gray-500">Conformité</span>
        </div>
        <div className="text-3xl font-bold text-[#0C0A09]">94%</div>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
          <span className="text-xs font-semibold text-[#059669]">+12%</span>
        </div>
      </div>

      {/* Card 3 - Bottom Right - Progression (style modèle avec chart) */}
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

// =====================================================
// SECTOR KPI GRID COMPONENT
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
    ]
  },
  btp: {
    name: 'BTP',
    icon: HardHat,
    kpis: [
      { name: 'Conformité calendrier', value: '94%', target: '90%+', trend: '+12%' },
      { name: 'Retard chantier', value: '-45%', target: '0%', trend: '-45%' },
      { name: 'Safety events', value: '0', target: '0', trend: 'Stable' },
      { name: 'MTTR engins', value: '1.8h', target: '<2h', trend: '-30%' }
    ]
  },
  mines: {
    name: 'Mines & Carrières',
    icon: Pickaxe,
    kpis: [
      { name: 'Disponibilité engins', value: '96%', target: '90%+', trend: '+6%' },
      { name: 'MTBF', value: '480h', target: '400h+', trend: '+20%' },
      { name: 'Conso. carburant', value: '-12%', target: '-10%', trend: '-12%' },
      { name: 'PMP', value: '88%', target: '85%+', trend: '+15%' }
    ]
  },
  sante: {
    name: 'Santé',
    icon: Stethoscope,
    kpis: [
      { name: 'Dispo. équip. critiques', value: '99.9%', target: '99.5%+', trend: '+0.4%' },
      { name: 'Conformité réglementaire', value: '100%', target: '100%', trend: 'Stable' },
      { name: 'MTTR équip. médicaux', value: '0.5h', target: '<1h', trend: '-50%' },
      { name: 'Traçabilité', value: '100%', target: '100%', trend: 'Stable' }
    ]
  },
  energie: {
    name: 'Énergie',
    icon: Zap,
    kpis: [
      { name: 'PMP', value: '91%', target: '85%+', trend: '+18%' },
      { name: 'MTBF', value: '2160h', target: '2000h+', trend: '+8%' },
      { name: 'Disponibilité', value: '99.2%', target: '98%+', trend: '+1.2%' },
      { name: 'Safety incidents', value: '0', target: '0', trend: 'Stable' }
    ]
  },
  agroalimentaire: {
    name: 'Agroalimentaire',
    icon: Wheat,
    kpis: [
      { name: 'Conformité HACCP', value: '100%', target: '100%', trend: 'Stable' },
      { name: 'Traçabilité', value: '100%', target: '100%', trend: 'Stable' },
      { name: 'OEE', value: '89%', target: '85%+', trend: '+4%' },
      { name: 'PMP', value: '87%', target: '85%+', trend: '+10%' }
    ]
  },
  logistique: {
    name: 'Logistique',
    icon: Truck,
    kpis: [
      { name: 'Dispo. flotte', value: '97%', target: '95%+', trend: '+2%' },
      { name: 'MTTR véhicules', value: '1.2h', target: '<2h', trend: '-40%' },
      { name: 'OT respectés', value: '95%', target: '90%+', trend: '+5%' },
      { name: 'Cost per mile', value: '-8%', target: '-5%', trend: '-8%' }
    ]
  }
}

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
      <div className="grid grid-cols-2 gap-3">
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
    </div>
  )
}

// =====================================================
// KPI DASHBOARD SUMMARY
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
  className?: string
}

export function KpiDashboard({ 
  title, 
  subtitle, 
  kpis, 
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
    </div>
  )
}
