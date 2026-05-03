'use client'

import { cn } from '@/lib/utils'
import { CheckCircle2, Clock, AlertTriangle, Activity, TrendingUp, Users, Zap, Gauge } from 'lucide-react'

// Tablet Mockup Component
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

// Mobile Mockup Component
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

// GMAO Dashboard Mockup Content
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
        <MiniChart />
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

// Mini Line Chart Component
export function MiniChart() {
  return (
    <svg viewBox="0 0 200 50" className="w-full h-8">
      {/* Grid lines */}
      <line x1="0" y1="12.5" x2="200" y2="12.5" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="0" y1="25" x2="200" y2="25" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="0" y1="37.5" x2="200" y2="37.5" stroke="#e5e7eb" strokeWidth="0.5" />
      
      {/* Line chart */}
      <polyline
        fill="none"
        stroke="#1E3A8A"
        strokeWidth="2"
        points="0,35 20,30 40,32 60,20 80,25 100,15 120,18 140,12 160,15 180,8 200,5"
      />
      
      {/* Area fill */}
      <polygon
        fill="url(#gradient)"
        points="0,35 20,30 40,32 60,20 80,25 100,15 120,18 140,12 160,15 180,8 200,5 200,50 0,50"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Equipment Detail Mockup
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
          <MiniChart />
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

// Task Management Mockup
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

// Pricing Dashboard Mockup
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
        <MiniChart />
      </div>
    </div>
  )
}

// Mobile Task List Mockup
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
