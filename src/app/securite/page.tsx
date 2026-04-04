import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, Shield, Lock, FileCheck, MapPin, Building2, Globe, Award, FileText, Download, Server, Key, Eye, UserCheck, AlertTriangle, RefreshCw, Database, ArrowRight, Clock } from 'lucide-react'

export default function SecuritePage() {
  const certifications = [
    {
      icon: FileCheck,
      title: 'ISO 27001',
      status: 'En cours de certification',
      description: 'Système de management de la sécurité de l\'information',
      target: 'Q4 2026'
    },
    {
      icon: Shield,
      title: 'RGPD Conforme',
      status: 'Conforme',
      description: 'Règlement Général sur la Protection des Données',
      target: 'Depuis 2018'
    },
    {
      icon: Key,
      title: 'SOC 2 Type II',
      status: 'Planifié',
      description: 'Contrôles de sécurité, disponibilité, confidentialité',
      target: '2027'
    }
  ]

  const securityMeasures = [
    {
      category: 'Hébergement & Infrastructure',
      icon: Server,
      items: [
        { title: 'Hébergement en France', desc: 'Datacenters OVH / 3DS Paris, certifiés ISO 27001' },
        { title: 'Redondance multi-sites', desc: 'Bascule automatique en cas d\'incident' },
        { title: 'Backup quotidien', desc: 'Sauvegardes chiffrées, rétention 30 jours' },
        { title: 'Disponibilité 99.9%', desc: 'SLA garanti dans les contrats Enterprise' }
      ]
    },
    {
      category: 'Chiffrement & Accès',
      icon: Lock,
      items: [
        { title: 'Chiffrement AES-256', desc: 'Données au repos chiffrées côté serveur' },
        { title: 'TLS 1.3', desc: 'Toutes les communications chiffrées en transit' },
        { title: 'Authentification forte', desc: 'MFA disponible, SSO SAML 2.0 / OIDC' },
        { title: 'Gestion des rôles', desc: 'Permissions fines par fonction et par site' }
      ]
    },
    {
      category: 'Contrôle & Audit',
      icon: Eye,
      items: [
        { title: 'Logs d\'accès', desc: 'Traçabilité complète de toutes les actions' },
        { title: 'Audit trail', desc: 'Historique immuable des modifications' },
        { title: 'Alertes de sécurité', desc: 'Notification des connexions inhabituelles' },
        { title: 'Exports de conformité', desc: 'Rapports automatisés pour les audits' }
      ]
    }
  ]

  const gdprFeatures = [
    { title: 'Droit d\'accès', desc: 'Export de toutes vos données en 1 clic' },
    { title: 'Droit à l\'effacement', desc: 'Suppression complète sur demande validée' },
    { title: 'Portabilité', desc: 'Export CSV / JSON de vos données' },
    { title: 'Minimisation', desc: 'Collecte limitée aux données nécessaires' },
    { title: 'Consentement', desc: 'Gestion des consentements utilisateurs' },
    { title: 'Sous-traitants', desc: 'Liste complète des sous-traitants disponibles' }
  ]

  const documents = [
    { name: 'Data Processing Agreement (DPA)', type: 'PDF', size: '245 Ko' },
    { name: 'Politique de confidentialité', type: 'PDF', size: '180 Ko' },
    { name: 'Fiche de sécurité', type: 'PDF', size: '320 Ko' },
    { name: 'Attestation RGPD', type: 'PDF', size: '95 Ko' }
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-[70px] pb-16 bg-gradient-to-br from-[#08091A] via-[#0D1160] to-[#1A1DB5] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute w-[900px] h-[900px] top-[-300px] right-[-200px] bg-[radial-gradient(circle,rgba(107,143,255,0.15)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm">Hébergé en France 🇫🇷</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Sécurité & Conformité<br />
            <span className="bg-gradient-to-br from-[#60A5FA] via-[#A5B4FF] to-[#C7D2FE] bg-clip-text text-transparent">
              au cœur de MAINTEX.
            </span>
          </h1>
          <p className="text-lg text-white/60 font-light mb-8 max-w-xl leading-relaxed">
            Vos données hébergées en France, conformité RGPD native, et certifications en cours. 
            Ce que les solutions américaines ne peuvent pas garantir.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0D1160] rounded-xl hover:bg-white/95 transition-all no-underline font-medium">
              Demander le DPA <Download className="w-4 h-4" />
            </Link>
            <Link href="#documents" className="inline-flex items-center gap-2 px-6 py-3 text-white/80 border border-white/25 rounded-xl hover:bg-white/10 transition-all no-underline">
              Télécharger les documents
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: MapPin, label: 'Hébergement France', value: 'OVH / 3DS Paris' },
              { icon: Lock, label: 'Chiffrement', value: 'AES-256 + TLS 1.3' },
              { icon: Shield, label: 'Conformité', value: 'RGPD natif' },
              { icon: Award, label: 'Disponibilité', value: '99.9% SLA' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <item.icon className="w-8 h-8 text-[#2B30D4] mb-2" />
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="font-semibold text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#F4F6FD]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 mb-6">
              <Award className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Certifications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Des standards reconnus
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Nous investissons dans les certifications qui comptent pour vos appels d\'offres
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2B30D4]/10 rounded-xl flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-[#2B30D4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      cert.status === 'Conforme' ? 'bg-green-100 text-green-700' :
                      cert.status === 'En cours de certification' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3">{cert.description}</p>
                <p className="text-xs text-gray-400">Target : {cert.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Mesures de sécurité
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Une infrastructure pensée pour la protection de vos données
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityMeasures.map((category, i) => (
              <div key={i} className="bg-[#F4F6FD] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#2B30D4] rounded-xl flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, j) => (
                    <div key={j} className="bg-white rounded-xl p-4">
                      <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* French Advantage */}
      <section className="py-24 bg-gradient-to-br from-[#0D1160] to-[#2B30D4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_60px,rgba(255,255,255,0.015)_60px,rgba(255,255,255,0.015)_120px)]" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 mb-6">
                <span className="text-2xl">🇫🇷</span>
                <span className="text-sm font-medium">Avantage français</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                Ce que MaintainX<br />
                <span className="text-blue-300">ne peut pas faire.</span>
              </h2>
              <p className="text-lg text-white/50 font-light mb-8 leading-relaxed">
                En tant qu'éditeur français, MAINTEX dispose d'avantages structurels que les solutions américaines ne peuvent pas répliquer.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: MapPin, text: 'Garantir l\'hébergement en France par défaut' },
                  { icon: FileText, text: 'Fournir un DPA conforme au droit français' },
                  { icon: UserCheck, text: 'Former vos techniciens en présentiel en français' },
                  { icon: Building2, text: 'Connaître les réglementations HAS, HACCP, CRE intimement' },
                  { icon: Globe, text: 'Vous offrir un support en timezone France' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-400" />
                Localisation des données
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Production</span>
                    <span className="text-green-400 text-sm">🇫🇷 Paris</span>
                  </div>
                  <p className="text-sm text-white/50">OVH Datacenter Gravelines / Paris</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Backup</span>
                    <span className="text-green-400 text-sm">🇫🇷 Lyon</span>
                  </div>
                  <p className="text-sm text-white/50">Réplication temps réel</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">DRP</span>
                    <span className="text-green-400 text-sm">🇫🇷 Bordeaux</span>
                  </div>
                  <p className="text-sm text-white/50">Plan de reprise activable en 15 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">RGPD</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Conformité RGPD native
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              MAINTEX a été conçu depuis le départ pour respecter le RGPD
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gdprFeatures.map((feature, i) => (
              <div key={i} className="bg-[#F4F6FD] rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Documents */}
      <section id="documents" className="py-24 bg-[#F4F6FD]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Documents téléchargeables
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Pour vos DPO, directions juridiques et appels d\'offres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#2B30D4] hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#2B30D4]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2B30D4] transition-colors">
                  <FileText className="w-6 h-6 text-[#2B30D4] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{doc.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{doc.type}</span>
                  <span>{doc.size}</span>
                </div>
                <button className="mt-4 w-full py-2 text-sm font-medium text-[#2B30D4] border border-[#2B30D4]/20 rounded-lg hover:bg-[#2B30D4] hover:text-white transition-all">
                  Télécharger
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-6 border border-gray-100 text-center">
            <p className="text-gray-600 mb-4">
              Vous avez besoin d\'un document spécifique pour un appel d\'offres ?
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2B30D4] text-white rounded-xl hover:bg-[#1A1DB5] transition-all no-underline">
              Contacter notre équipe conformité <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-6">
                Gestion des incidents<br />
                <span className="text-[#2B30D4]">et continuité de service.</span>
              </h2>
              <p className="text-lg text-gray-500 font-light mb-8 leading-relaxed">
                Nous nous engageons sur des délais de réponse et de résolution pour garantir la continuité de vos opérations de maintenance.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Monitoring 24/7', desc: 'Surveillance automatique de l\'infrastructure', icon: Eye },
                  { title: 'Escalade définie', desc: 'Procédure d\'escalade avec délais garantis', icon: AlertTriangle },
                  { title: 'Communication transparente', desc: 'Notification immédiate des incidents impactants', icon: RefreshCw },
                  { title: 'RTO 4 heures', desc: 'Objectif de retour à la normale en 4h max', icon: Clock }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2B30D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#2B30D4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F4F6FD] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">SLA par plan</h3>
              <div className="space-y-4">
                {[
                  { plan: 'Starter', response: '24h', resolution: '72h', support: 'Email' },
                  { plan: 'Pro', response: '4h', resolution: '24h', support: 'Téléphone prioritaire' },
                  { plan: 'Enterprise', response: '1h', resolution: '4h', support: 'Dédié 24/7' }
                ].map((sla, i) => (
                  <div key={i} className={`bg-white rounded-xl p-4 ${i === 1 ? 'border-2 border-[#2B30D4]' : 'border border-gray-100'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-gray-900">{sla.plan}</span>
                      {i === 1 && <span className="text-xs bg-[#2B30D4] text-white px-2 py-0.5 rounded-full">Populaire</span>}
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Réponse</div>
                        <div className="font-semibold text-gray-900">{sla.response}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Résolution</div>
                        <div className="font-semibold text-gray-900">{sla.resolution}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Support</div>
                        <div className="font-semibold text-gray-900">{sla.support}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0D1160] to-[#2B30D4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_60px,rgba(255,255,255,0.015)_60px,rgba(255,255,255,0.015)_120px)]" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Des questions sur notre sécurité ?
          </h2>
          <p className="text-lg text-white/60 font-light max-w-xl mx-auto mb-10">
            Notre équipe conformité est disponible pour répondre à vos questions et vous accompagner dans vos audits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#0D1160] bg-white rounded-xl hover:bg-white/95 transition-all no-underline">
              Contacter l'équipe conformité
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
