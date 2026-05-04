'use client'

import { useState, useMemo } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { 
  Calculator, TrendingUp, Clock, Euro, CheckCircle, ChevronDown, ChevronUp, 
  AlertTriangle, Wrench, Package, Zap, Users, BarChart3, ArrowRight, Info,
  Settings, Heart, FileText, Calendar, Target, PiggyBank, LineChart,
  ShieldCheck, Timer, Truck, Award
} from 'lucide-react'
import Link from 'next/link'

export default function CalculateurROIPage() {
  const [formData, setFormData] = useState({
    // Équipe
    technicians: 15,
    supervisors: 3,
    managers: 1,
    // Interventions
    annualInterventions: 800,
    avgInterventionDuration: 4,
    avgReturnTrips: 15,
    // Coûts
    hourlyRateTech: 45,
    hourlyRateSupervisor: 65,
    hourlyRateManager: 85,
    avgDowntimePerMonth: 25,
    downtimeCostPerHour: 800,
    // Stocks
    annualPartsBudget: 200000,
    stockObsoleteRate: 15,
    emergencyPurchasePremium: 30,
    // Performance
    preventiveRatio: 25,
    firstTimeFixRate: 60,
    avgResponseTime: 6,
    plannedCompliance: 70,
    // Conformité
    annualAuditCost: 25000,
    complianceScore: 65,
    // Autres
    overtimeHours: 200,
    subcontractingBudget: 50000,
  })
  
  const [showDetails, setShowDetails] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>('team')

  const calculations = useMemo(() => {
    // Coûts actuels
    const laborCost = formData.technicians * 1750 * formData.hourlyRateTech + 
                      formData.supervisors * 1850 * formData.hourlyRateSupervisor +
                      formData.managers * 1900 * formData.hourlyRateManager
    
    const overtimeCost = formData.overtimeHours * formData.hourlyRateTech * 1.5
    
    const downtimeCost = formData.avgDowntimePerMonth * 12 * formData.downtimeCostPerHour
    
    const returnTripCost = formData.annualInterventions * (formData.avgReturnTrips / 100) * 
                           formData.avgInterventionDuration * formData.hourlyRateTech
    
    const emergencyPremium = formData.annualPartsBudget * (formData.emergencyPurchasePremium / 100) * 0.35
    
    const obsoleteStock = formData.annualPartsBudget * (formData.stockObsoleteRate / 100)
    
    const responseTimeCost = formData.annualInterventions * formData.avgResponseTime * 
                             formData.hourlyRateTech * 0.15
    
    const unplannedCost = formData.annualInterventions * ((100 - formData.preventiveRatio) / 100) * 
                          formData.avgInterventionDuration * formData.hourlyRateTech * 0.4
    
    const complianceGap = formData.annualAuditCost * ((100 - formData.complianceScore) / 100) * 0.5
    
    // Économies potentielles avec MAINTEX
    const downtimeSavings = downtimeCost * 0.38
    const firstTimeFixSavings = returnTripCost * 0.7
    const preventiveSavings = unplannedCost * 0.45
    const stockSavings = (obsoleteStock * 0.55) + (emergencyPremium * 0.65)
    const responseTimeSavings = responseTimeCost * 0.55
    const overtimeSavings = overtimeCost * 0.35
    const complianceSavings = complianceGap * 0.6
    const productivitySavings = formData.technicians * 2.5 * 52 * formData.hourlyRateTech * 0.6
    const plannedComplianceSavings = formData.annualInterventions * formData.avgInterventionDuration * 
                                     formData.hourlyRateTech * ((85 - formData.plannedCompliance) / 100) * 0.3
    
    const totalAnnualSavings = downtimeSavings + firstTimeFixSavings + preventiveSavings + 
                               stockSavings + responseTimeSavings + overtimeSavings + 
                               complianceSavings + productivitySavings + plannedComplianceSavings
    
    // Investissement
    const maintexLicenseCost = formData.technicians * 120 * 12
    const maintexImplementationCost = 8000
    
    // ROI
    const roi = ((totalAnnualSavings - maintexLicenseCost) / maintexLicenseCost * 100).toFixed(0)
    const monthlySavings = totalAnnualSavings / 12
    const monthlyCost = maintexLicenseCost / 12
    const paybackMonths = Math.max(1, Math.ceil(maintexImplementationCost / (monthlySavings - monthlyCost)))
    const threeYearBenefit = totalAnnualSavings * 3 - maintexImplementationCost - (maintexLicenseCost * 3)
    const fiveYearBenefit = totalAnnualSavings * 5 - maintexImplementationCost - (maintexLicenseCost * 5)

    return {
      laborCost,
      overtimeCost,
      downtimeCost,
      returnTripCost,
      emergencyPremium,
      obsoleteStock,
      responseTimeCost,
      unplannedCost,
      complianceGap,
      downtimeSavings,
      firstTimeFixSavings,
      preventiveSavings,
      stockSavings,
      responseTimeSavings,
      overtimeSavings,
      complianceSavings,
      productivitySavings,
      plannedComplianceSavings,
      totalAnnualSavings,
      maintexLicenseCost,
      maintexImplementationCost,
      roi,
      paybackMonths,
      threeYearBenefit,
      fiveYearBenefit
    }
  }, [formData])

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const sections = [
    { id: 'team', title: 'Équipe & Effectifs', icon: Users },
    { id: 'interventions', title: 'Interventions', icon: Wrench },
    { id: 'costs', title: 'Coûts & Budgets', icon: Euro },
    { id: 'performance', title: 'Performance', icon: BarChart3 },
    { id: 'compliance', title: 'Conformité', icon: ShieldCheck },
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="pt-[100px] pb-8 px-6 lg:px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <Calculator className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Simulateur gratuit • Sans engagement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculez votre ROI avec MAINTEX
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Estimez les économies potentielles en optimisant votre maintenance. 
              Résultats personnalisés en 3 minutes basés sur les données réelles de nos clients.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { value: '38%', label: 'Réduction des arrêts', icon: Timer },
              { value: '25%', label: 'Gain de productivité', icon: TrendingUp },
              { value: '4 mois', label: 'ROI moyen', icon: Target },
              { value: '89%', label: 'First Time Fix', icon: CheckCircle },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <stat.icon className="w-6 h-6 text-[#0A0A8A] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!showResults ? (
        <section className="py-8 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Section Navigation */}
              <div className="flex flex-wrap gap-2 mb-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSection === section.id 
                        ? 'bg-[#0A0A8A] text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    {section.title}
                  </button>
                ))}
              </div>

              {/* Team Section */}
              {activeSection === 'team' && (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#0A0A8A]" />
                    Équipe & Effectifs
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de techniciens
                      </label>
                      <input
                        type="number"
                        value={formData.technicians}
                        onChange={(e) => setFormData({...formData, technicians: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de superviseurs
                      </label>
                      <input
                        type="number"
                        value={formData.supervisors}
                        onChange={(e) => setFormData({...formData, supervisors: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Managers maintenance
                      </label>
                      <input
                        type="number"
                        value={formData.managers}
                        onChange={(e) => setFormData({...formData, managers: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Interventions Section */}
              {activeSection === 'interventions' && (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-[#0A0A8A]" />
                    Interventions
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interventions par an
                      </label>
                      <input
                        type="number"
                        value={formData.annualInterventions}
                        onChange={(e) => setFormData({...formData, annualInterventions: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Durée moyenne (heures)
                      </label>
                      <input
                        type="number"
                        value={formData.avgInterventionDuration}
                        onChange={(e) => setFormData({...formData, avgInterventionDuration: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        % retours nécessaires
                      </label>
                      <input
                        type="number"
                        max="100"
                        value={formData.avgReturnTrips}
                        onChange={(e) => setFormData({...formData, avgReturnTrips: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">Interventions nécessitant un 2ème déplacement</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Costs Section */}
              {activeSection === 'costs' && (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-[#0A0A8A]" />
                    Coûts & Budgets
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Taux horaire technicien (€)
                      </label>
                      <input
                        type="number"
                        value={formData.hourlyRateTech}
                        onChange={(e) => setFormData({...formData, hourlyRateTech: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Coût d&apos;une heure d&apos;arrêt (€)
                      </label>
                      <input
                        type="number"
                        value={formData.downtimeCostPerHour}
                        onChange={(e) => setFormData({...formData, downtimeCostPerHour: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">Production perdue, pénalités, etc.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heures d&apos;arrêt par mois
                      </label>
                      <input
                        type="number"
                        value={formData.avgDowntimePerMonth}
                        onChange={(e) => setFormData({...formData, avgDowntimePerMonth: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget pièces annuel (€)
                      </label>
                      <input
                        type="number"
                        value={formData.annualPartsBudget}
                        onChange={(e) => setFormData({...formData, annualPartsBudget: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Surcoût achats urgence (%)
                      </label>
                      <input
                        type="number"
                        max="100"
                        value={formData.emergencyPurchasePremium}
                        onChange={(e) => setFormData({...formData, emergencyPurchasePremium: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heures supplémentaires/mois
                      </label>
                      <input
                        type="number"
                        value={formData.overtimeHours}
                        onChange={(e) => setFormData({...formData, overtimeHours: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Section */}
              {activeSection === 'performance' && (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#0A0A8A]" />
                    Performance actuelle
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maintenance préventive (%)
                      </label>
                      <input
                        type="number"
                        max="100"
                        value={formData.preventiveRatio}
                        onChange={(e) => setFormData({...formData, preventiveRatio: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">Moyenne secteur: 25-35%</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Time Fix Rate (%)
                      </label>
                      <input
                        type="number"
                        max="100"
                        value={formData.firstTimeFixRate}
                        onChange={(e) => setFormData({...formData, firstTimeFixRate: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">% résolues au 1er passage</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Temps de réponse moyen (heures)
                      </label>
                      <input
                        type="number"
                        value={formData.avgResponseTime}
                        onChange={(e) => setFormData({...formData, avgResponseTime: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Respect planning préventif (%)
                      </label>
                      <input
                        type="number"
                        max="100"
                        value={formData.plannedCompliance}
                        onChange={(e) => setFormData({...formData, plannedCompliance: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Taux stocks obsolètes (%)
                      </label>
                      <input
                        type="number"
                        max="100"
                        value={formData.stockObsoleteRate}
                        onChange={(e) => setFormData({...formData, stockObsoleteRate: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Compliance Section */}
              {activeSection === 'compliance' && (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#0A0A8A]" />
                    Conformité & Audits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Coût annuel des audits (€)
                      </label>
                      <input
                        type="number"
                        value={formData.annualAuditCost}
                        onChange={(e) => setFormData({...formData, annualAuditCost: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Score conformité actuel (%)
                      </label>
                      <input
                        type="number"
                        max="100"
                        value={formData.complianceScore}
                        onChange={(e) => setFormData({...formData, complianceScore: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget sous-traitance (€)
                      </label>
                      <input
                        type="number"
                        value={formData.subcontractingBudget}
                        onChange={(e) => setFormData({...formData, subcontractingBudget: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0A8A] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Calculate Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#0A0A8A] text-white font-semibold rounded-xl hover:bg-[#0A0A8A]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0A0A8A]/20"
              >
                <TrendingUp className="w-5 h-5" />
                Calculer mon ROI personnalisé
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section className="py-8 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Results Header */}
            <div className="bg-gradient-to-br from-[#0A0A8A] to-[#050560] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-sm text-white/70 mb-2">Votre retour sur investissement potentiel</div>
                  <div className="text-7xl font-bold mb-2">{calculations.roi}%</div>
                  <div className="text-white/70">ROI annuel</div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <PiggyBank className="w-8 h-8 mb-3 text-green-300" />
                    <div className="text-sm text-white/70 mb-1">Économies annuelles</div>
                    <div className="text-2xl font-bold">{Math.round(calculations.totalAnnualSavings).toLocaleString()}€</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <Clock className="w-8 h-8 mb-3 text-blue-300" />
                    <div className="text-sm text-white/70 mb-1">Retour sur invest.</div>
                    <div className="text-2xl font-bold">{calculations.paybackMonths} mois</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <LineChart className="w-8 h-8 mb-3 text-purple-300" />
                    <div className="text-sm text-white/70 mb-1">Bénéfice 3 ans</div>
                    <div className="text-2xl font-bold">{Math.round(calculations.threeYearBenefit).toLocaleString()}€</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <Award className="w-8 h-8 mb-3 text-yellow-300" />
                    <div className="text-sm text-white/70 mb-1">Bénéfice 5 ans</div>
                    <div className="text-2xl font-bold">{Math.round(calculations.fiveYearBenefit).toLocaleString()}€</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between p-6 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#0A0A8A]" />
                  Détail des économies par levier
                </span>
                {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {showDetails && (
                <div className="p-6 pt-0 space-y-3">
                  {[
                    { icon: Timer, label: 'Réduction des temps d\'arrêt', value: calculations.downtimeSavings, detail: '-38% downtime', color: 'red' },
                    { icon: CheckCircle, label: 'Amélioration First Time Fix Rate', value: calculations.firstTimeFixSavings, detail: '-70% retours', color: 'green' },
                    { icon: Calendar, label: 'Optimisation préventif/curatif', value: calculations.preventiveSavings, detail: '+45% préventif', color: 'blue' },
                    { icon: Package, label: 'Optimisation des stocks', value: calculations.stockSavings, detail: '-55% obsolètes', color: 'purple' },
                    { icon: Zap, label: 'Réduction temps de réponse', value: calculations.responseTimeSavings, detail: '-55% délai', color: 'yellow' },
                    { icon: Clock, label: 'Réduction heures supplémentaires', value: calculations.overtimeSavings, detail: '-35% HS', color: 'orange' },
                    { icon: ShieldCheck, label: 'Amélioration conformité', value: calculations.complianceSavings, detail: '+20 points', color: 'teal' },
                    { icon: Users, label: 'Gain de productivité équipe', value: calculations.productivitySavings, detail: '2.5h/semaine/tech', color: 'indigo' },
                    { icon: FileText, label: 'Respect planning préventif', value: calculations.plannedComplianceSavings, detail: '+15 points', color: 'pink' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center`}>
                          <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-500">{item.detail}</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-green-600">
                        +{Math.round(item.value).toLocaleString()}€
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <div className="flex items-center justify-between p-5 bg-[#0A0A8A] rounded-xl text-white">
                      <div className="font-semibold text-lg">Total des économies annuelles</div>
                      <div className="text-3xl font-bold">{Math.round(calculations.totalAnnualSavings).toLocaleString()}€</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Investment */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Euro className="w-5 h-5 text-[#0A0A8A]" />
                Investissement MAINTEX
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Licence annuelle</div>
                  <div className="text-2xl font-bold text-gray-900">{calculations.maintexLicenseCost.toLocaleString()}€</div>
                  <div className="text-xs text-gray-400 mt-1">120€/mois/technicien × {formData.technicians}</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Mise en place</div>
                  <div className="text-2xl font-bold text-gray-900">{calculations.maintexImplementationCost.toLocaleString()}€</div>
                  <div className="text-xs text-gray-400 mt-1">Formation incluse</div>
                </div>
                <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                  <div className="text-sm text-green-600 mb-1">Économies nettes (année 1)</div>
                  <div className="text-2xl font-bold text-green-700">
                    {Math.round(calculations.totalAnnualSavings - calculations.maintexLicenseCost - calculations.maintexImplementationCost).toLocaleString()}€
                  </div>
                  <div className="text-xs text-green-500 mt-1">Après investissement</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#0A0A8A] to-[#0A0A8A]/80 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Prêt à transformer votre maintenance ?
                </h3>
                <p className="text-white/80 mb-6 max-w-lg mx-auto">
                  Demandez une démo personnalisée pour voir comment MAINTEX peut vous aider à réaliser ces économies.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-[#0A0A8A] font-semibold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                  >
                    Demander une démo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setShowResults(false)}
                    className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                  >
                    Modifier mes données
                  </button>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-gray-400">
              * Ces estimations sont basées sur les résultats moyens de nos 15+ Modules. Les résultats réels peuvent varier selon votre contexte spécifique. Les économies calculées sont des projections basées sur les données fournies.
            </p>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  )
}
