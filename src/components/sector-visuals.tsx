'use client'

import Image from 'next/image'
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, BarChart3, Activity, Gauge, Clock, CheckCircle2, Zap, Target, DollarSign, Users, AlertTriangle, Shield, XCircle, AlertCircle, Wrench, Settings, Database, Brain, Smartphone, FileCheck, Building, Factory, Truck, Fuel, Zap as ZapIcon, Wheat, Pickaxe, Car, FlaskConical, HardHat, Server, Stethoscope } from 'lucide-react'

// Sector Hero Visual with Image and Floating KPI Cards - Reduced height, edge positioning
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
  }>
  badge?: { text: string; icon?: React.ReactNode }
  className?: string
}

export function SectorHeroVisual({ 
  imageSrc, 
  imageAlt, 
  stats, 
  badge,
  className = '' 
}: SectorHeroVisualProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main Photo Container - Reduced height */}
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

      {/* Badge Top Left - Outside image on edge */}
      {badge && (
        <div className="absolute -top-3 left-2 flex items-center gap-2 px-3 py-2 bg-[#F97316] text-white rounded-full shadow-lg z-10">
          {badge.icon}
          <span className="text-xs font-semibold">{badge.text}</span>
        </div>
      )}

      {/* Card 1 - Top Right, on edge - Colored background with white text */}
      <div className="absolute -right-2 top-3 w-36 rounded-xl p-3 shadow-xl z-10" style={{ backgroundColor: stats[0]?.iconColor || '#059669' }}>
        {stats[0]?.icon && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/20">
              {stats[0].icon}
            </div>
            <span className="text-[10px] text-white/90">{stats[0].label}</span>
          </div>
        )}
        <div className="text-xl font-bold text-white">{stats[0]?.value}</div>
        {stats[0]?.trend && (
          <div className="flex items-center gap-0.5 mt-0.5 text-white/90">
            {stats[0].trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            <span className="text-[10px] font-semibold">{stats[0].trend}</span>
          </div>
        )}
      </div>

      {/* Card 2 - Left side, middle - Colored background with white text */}
      <div className="absolute -left-2 top-[30%] w-36 rounded-xl p-3 shadow-xl z-10" style={{ backgroundColor: stats[1]?.iconColor || '#1E3A8A' }}>
        {stats[1]?.icon && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/20">
              {stats[1].icon}
            </div>
            <span className="text-[10px] text-white/90">{stats[1].label}</span>
          </div>
        )}
        <div className="text-xl font-bold text-white">{stats[1]?.value}</div>
        {stats[1]?.trend && (
          <div className="flex items-center gap-0.5 mt-0.5 text-white/90">
            {stats[1].trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            <span className="text-[10px] font-semibold">{stats[1].trend}</span>
          </div>
        )}
      </div>

      {/* Card 3 - Right side, lower middle - Colored background with white text */}
      <div className="absolute -right-2 top-[58%] w-36 rounded-xl p-3 shadow-xl z-10" style={{ backgroundColor: stats[2]?.iconColor || '#F97316' }}>
        {stats[2]?.icon && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/20">
              {stats[2].icon}
            </div>
            <span className="text-[10px] text-white/90">{stats[2].label}</span>
          </div>
        )}
        <div className="text-xl font-bold text-white">{stats[2]?.value}</div>
        {stats[2]?.trend && (
          <div className="flex items-center gap-0.5 mt-0.5 text-white/90">
            {stats[2].trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            <span className="text-[10px] font-semibold">{stats[2].trend}</span>
          </div>
        )}
      </div>

      {/* Card 4 - Bottom Left, on edge - Colored background with white text */}
      <div className="absolute -left-2 bottom-3 w-36 rounded-xl p-3 shadow-xl z-10" style={{ backgroundColor: stats[3]?.iconColor || '#7C3AED' }}>
        {stats[3]?.icon && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/20">
              {stats[3].icon}
            </div>
            <span className="text-[10px] text-white/90">{stats[3].label}</span>
          </div>
        )}
        <div className="text-xl font-bold text-white">{stats[3]?.value}</div>
        {stats[3]?.trend && (
          <div className="flex items-center gap-0.5 mt-0.5 text-white/90">
            {stats[3].trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            <span className="text-[10px] font-semibold">{stats[3].trend}</span>
          </div>
        )}
      </div>
    </div>
  )
}

// Sector Enjeux Visual - Shows Challenges with Problem Indicators - Edge positioning
interface SectorEnjeuxVisualProps {
  imageSrc: string
  imageAlt: string
  problems: Array<{
    value: string
    label: string
    description?: string
    icon?: React.ReactNode
  }>
  className?: string
}

export function SectorEnjeuxVisual({
  imageSrc,
  imageAlt,
  problems,
  className = ''
}: SectorEnjeuxVisualProps) {
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

      {/* Problem Card 1 - Top Right on edge - Dark red background */}
      <div className="absolute -right-2 top-3 w-32 rounded-xl p-2.5 shadow-xl z-10 bg-[#991B1B]">
        {problems[0]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {problems[0].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{problems[0]?.value}</div>
        <div className="text-[10px] text-white/80">{problems[0]?.label}</div>
      </div>

      {/* Problem Card 2 - Left side on edge - Dark red background */}
      <div className="absolute -left-2 top-[28%] w-32 rounded-xl p-2.5 shadow-xl z-10 bg-[#991B1B]">
        {problems[1]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {problems[1].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{problems[1]?.value}</div>
        <div className="text-[10px] text-white/80">{problems[1]?.label}</div>
      </div>

      {/* Problem Card 3 - Right side, lower on edge - Dark red background */}
      <div className="absolute -right-2 top-[52%] w-32 rounded-xl p-2.5 shadow-xl z-10 bg-[#991B1B]">
        {problems[2]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {problems[2].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{problems[2]?.value}</div>
        <div className="text-[10px] text-white/80">{problems[2]?.label}</div>
      </div>

      {/* Problem Card 4 - Left side above banner - Dark red background */}
      <div className="absolute -left-2 bottom-16 w-32 rounded-xl p-2.5 shadow-xl z-10 bg-[#991B1B]">
        {problems[3]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {problems[3].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{problems[3]?.value}</div>
        <div className="text-[10px] text-white/80">{problems[3]?.label}</div>
      </div>

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

// Sector Solutions Visual - Shows Maintex Benefits - Edge positioning
interface SectorSolutionsVisualProps {
  imageSrc: string
  imageAlt: string
  benefits: Array<{
    value: string
    label: string
    icon?: React.ReactNode
  }>
  className?: string
}

export function SectorSolutionsVisual({
  imageSrc,
  imageAlt,
  benefits,
  className = ''
}: SectorSolutionsVisualProps) {
  const colors = ['#059669', '#1E3A8A', '#F97316', '#059669']
  
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

      {/* Benefit Card 1 - Top Right on edge - Colored background */}
      <div className="absolute -right-2 top-3 w-32 rounded-xl p-2.5 shadow-xl z-10" style={{ backgroundColor: colors[0] }}>
        {benefits[0]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {benefits[0].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{benefits[0]?.value}</div>
        <div className="text-[10px] text-white/80">{benefits[0]?.label}</div>
      </div>

      {/* Benefit Card 2 - Left side on edge - Colored background */}
      <div className="absolute -left-2 top-[28%] w-32 rounded-xl p-2.5 shadow-xl z-10" style={{ backgroundColor: colors[1] }}>
        {benefits[1]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {benefits[1].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{benefits[1]?.value}</div>
        <div className="text-[10px] text-white/80">{benefits[1]?.label}</div>
      </div>

      {/* Benefit Card 3 - Right side, lower on edge - Colored background */}
      <div className="absolute -right-2 top-[52%] w-32 rounded-xl p-2.5 shadow-xl z-10" style={{ backgroundColor: colors[2] }}>
        {benefits[2]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {benefits[2].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{benefits[2]?.value}</div>
        <div className="text-[10px] text-white/80">{benefits[2]?.label}</div>
      </div>

      {/* Benefit Card 4 - Left side above banner - Colored background */}
      <div className="absolute -left-2 bottom-16 w-32 rounded-xl p-2.5 shadow-xl z-10" style={{ backgroundColor: colors[3] }}>
        {benefits[3]?.icon && (
          <div className="w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 bg-white/20">
            {benefits[3].icon}
          </div>
        )}
        <div className="text-lg font-bold text-white">{benefits[3]?.value}</div>
        <div className="text-[10px] text-white/80">{benefits[3]?.label}</div>
      </div>

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
      { value: '-38%', label: 'Arrêts', trend: 'vs avant', trendType: 'positive' as const, icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '99.2%', label: 'Disponibilité', trend: '+4.2%', trendType: 'positive' as const, icon: <Gauge className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '+85%', label: 'First Time Fix', trend: 'MTTR réduit', trendType: 'positive' as const, icon: <Target className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' },
      { value: '2x', label: 'Compétence', icon: <Users className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' }
    ],
    enjeuxProblems: [
      { value: '4.2h', label: 'MTTR moyen', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '23%', label: 'Pannes récurrentes', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '+15%', label: 'Coûts imprévus', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" /> },
      { value: '-35%', label: 'Productivité', icon: <TrendingDown className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '-60%', label: 'Arrêts non planifiés', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '2.1h', label: 'MTTR optimisé', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '100%', label: 'Conformité', icon: <Shield className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '+45%', label: 'Préventif', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  automobile: {
    heroStats: [
      { value: '99.5%', label: 'Dispo. lignes', trend: '+2.5%', trendType: 'positive' as const, icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-42%', label: 'Pannes', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '98%', label: 'Traçabilité', icon: <FileCheck className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '+28%', label: 'Productivité', icon: <TrendingUp className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '45min', label: 'Arrêt/ligne/jour', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '12%', label: 'Retards livraison', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35%', label: 'Manque traçabilité', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '2.8h', label: 'Diagnostic moyen', icon: <Wrench className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '99.9%', label: 'Uptime lignes', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '100%', label: 'Traçabilité OK', icon: <FileCheck className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '45min', label: 'Diagnostic IA', icon: <Brain className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '+35%', label: 'OEE amélioré', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  'chimie-pharma': {
    heroStats: [
      { value: '100%', label: 'Conformité GMP', icon: <Shield className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-55%', label: 'Écarts qualité', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '24/7', label: 'Monitoring', icon: <Activity className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '100%', label: 'Traçabilité BPF', icon: <FileCheck className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '18%', label: 'Non-conformités', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '3.2j', label: 'Retards audits', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '45%', label: 'Docs manquants', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '2.1M€', label: 'Risques réglementaires', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité totale', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '0', label: 'Écart audit', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: 'Instant', label: 'Accès documents', icon: <Database className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '-80%', label: 'Temps reporting', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  mines: {
    heroStats: [
      { value: '+25%', label: 'Dispo. engins', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-40%', label: 'Coûts immobil.', icon: <DollarSign className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '98%', label: 'Conformité sécu.', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-50%', label: 'Pannes critiques', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '18h', label: 'Immobilisation/sem', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '35°C', label: 'Conditions extrêmes', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '280km', label: 'Sites dispersés', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '2.5M€', label: 'Coûts immobilisation', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '96%', label: 'Dispo. engins', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Mobile', label: 'Accès hors-ligne', icon: <Smartphone className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-35%', label: 'Coûts maintenance', icon: <DollarSign className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: '+40%', label: 'Parc opérationnel', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  aeronautique: {
    heroStats: [
      { value: '100%', label: 'Traçabilité', icon: <FileCheck className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '0', label: 'Non-conformités', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-65%', label: 'Temps docs', icon: <Clock className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'Conformité EASA', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '45%', label: 'Temps paperwork', icon: <FileCheck className="w-3.5 h-3.5 text-red-500" /> },
      { value: '12j', label: 'Retards docs', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '8%', label: 'Erreurs traçabilité', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '3.5M€', label: 'Risques réglementaires', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Traçabilité complète', icon: <Database className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '-70%', label: 'Temps reporting', icon: <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '0', label: 'Écart réglementaire', icon: <Shield className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Auto', label: 'Génération rapports', icon: <Zap className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  agroalimentaire: {
    heroStats: [
      { value: '+44%', label: 'Préventif', icon: <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'Conformité HACCP', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-50%', label: 'Incidents qualité', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '24/7', label: 'Monitoring temp.', icon: <Activity className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '15%', label: 'Risques HACCP', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '30%', label: 'Manque traçabilité', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '4h', label: 'Nettoyages retardés', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '12%', label: 'Pertes production', icon: <TrendingDown className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité HACCP', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Auto', label: 'Traçabilité nettoyages', icon: <Database className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-45%', label: 'Incidents qualité', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Temps réel', label: 'Alertes température', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" /> }
    ]
  },
  energie: {
    heroStats: [
      { value: '99.9%', label: 'Disponibilité', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '100%', label: 'Conformité CRE', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '-35%', label: 'Incidents réseau', icon: <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '+50%', label: 'Préventif optimisé', icon: <TrendingUp className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: '99.95%', label: 'Exigence uptime', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '450km', label: 'Réseau à surveiller', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '15min', label: 'Coupure max/an', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: '2.8M€', label: 'Pénalités potentielles', icon: <DollarSign className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '99.99%', label: 'Uptime atteint', icon: <Activity className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: 'Centralisé', label: 'Monitoring réseau', icon: <Database className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: '-60%', label: 'Incidents critiques', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'SCADA', label: 'Intégration OK', icon: <Settings className="w-3.5 h-3.5 text-[#059669]" /> }
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
      { value: '100%', label: 'Conformité HAS', icon: <Shield className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '0', label: 'Pannes critiques', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" />, iconColor: '#1E3A8A' },
      { value: '99.9%', label: 'Dispo. équipements', icon: <Gauge className="w-3.5 h-3.5 text-[#059669]" />, iconColor: '#059669' },
      { value: '-50%', label: 'Temps maintenance', icon: <TrendingDown className="w-3.5 h-3.5 text-[#F97316]" />, iconColor: '#F97316' }
    ],
    enjeuxProblems: [
      { value: 'Zéro', label: 'Tolérance panne', icon: <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '18%', label: 'Non-conformités', icon: <XCircle className="w-3.5 h-3.5 text-red-500" /> },
      { value: '2.5h', label: 'Indisponibilité/jour', icon: <Clock className="w-3.5 h-3.5 text-red-500" /> },
      { value: 'Risque patient', label: 'Priorité absolue', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500" /> }
    ],
    solutionsBenefits: [
      { value: '100%', label: 'Conformité HAS', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> },
      { value: '0 panne', label: 'Équip. critiques', icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]" /> },
      { value: 'Prédictif', label: 'Maintenance bioméd.', icon: <Brain className="w-3.5 h-3.5 text-[#F97316]" /> },
      { value: 'Traçabilité', label: 'Complète', icon: <FileCheck className="w-3.5 h-3.5 text-[#059669]" /> }
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
