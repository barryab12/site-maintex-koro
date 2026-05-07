'use client'

import Image from 'next/image'
import { DataCard, VignetteBadge } from './multi-image-layout'
import { Gauge, Clock, Activity, Target, TrendingUp, Users, CheckCircle2, HardHat, Factory, Wrench } from 'lucide-react'

// =====================================================
// IMAGE GRID TYPE 1 - 2x2 Grid with floating cards
// =====================================================

interface ImageGrid2x2Props {
  images: Array<{
    src: string
    alt: string
    size?: 'sm' | 'md' | 'lg'
  }>
  dataCards?: Array<{
    value: string
    label: string
    change?: string
    icon?: React.ReactNode
    chart?: 'line' | 'bar'
    chartData?: number[]
    chartColor?: string
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  }>
  className?: string
}

export function ImageGrid2x2({ images, dataCards = [], className = '' }: ImageGrid2x2Props) {
  const sizeConfig = {
    sm: 'h-40',
    md: 'h-52',
    lg: 'h-64'
  }

  const cardPositions: Record<string, string> = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  }

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-2 gap-3">
        {images.slice(0, 4).map((image, index) => (
          <div 
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-lg ${sizeConfig[image.size || 'md']}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        ))}
      </div>
      
      {/* Floating Data Cards */}
      {dataCards.map((card, index) => (
        <div key={`card-${index}`} className={`absolute ${cardPositions[card.position]} z-20`}>
          <DataCard
            value={card.value}
            label={card.label}
            change={card.change}
            icon={card.icon}
            chart={card.chart}
            chartData={card.chartData}
            chartColor={card.chartColor}
            className="w-36"
          />
        </div>
      ))}
    </div>
  )
}

// =====================================================
// IMAGE GRID TYPE 2 - Asymmetric 3 Image Layout
// =====================================================

interface ImageGridAsymmetricProps {
  mainImage: {
    src: string
    alt: string
  }
  smallImages: Array<{
    src: string
    alt: string
  }>
  dataCards?: Array<{
    value: string
    label: string
    change?: string
    icon?: React.ReactNode
    chart?: 'line' | 'bar'
    chartData?: number[]
    chartColor?: string
    position: string
  }>
  vignette?: { icon: React.ReactNode; color: string }
  className?: string
}

export function ImageGridAsymmetric({ 
  mainImage, 
  smallImages, 
  dataCards = [], 
  vignette,
  className = '' 
}: ImageGridAsymmetricProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-12 gap-3">
        {/* Main large image - left */}
        <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-xl h-[380px]">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {vignette && (
            <div className="absolute bottom-4 left-4">
              <VignetteBadge icon={vignette.icon} color={vignette.color} />
            </div>
          )}
        </div>
        
        {/* Small images - right column */}
        <div className="col-span-5 flex flex-col gap-3">
          {smallImages.slice(0, 2).map((image, index) => (
            <div 
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[180px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Data Cards */}
      {dataCards.map((card, index) => (
        <div key={`card-${index}`} className={`absolute ${card.position} z-20`}>
          <DataCard
            value={card.value}
            label={card.label}
            change={card.change}
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
// IMAGE GRID TYPE 3 - L-Shape Layout (3 images)
// =====================================================

interface ImageGridLShapeProps {
  images: Array<{
    src: string
    alt: string
  }>
  dataCards?: Array<{
    value: string
    label: string
    change?: string
    icon?: React.ReactNode
    chart?: 'line' | 'bar'
    chartData?: number[]
    chartColor?: string
    position: string
  }>
  vignette?: { icon: React.ReactNode; color: string }
  className?: string
}

export function ImageGridLShape({ 
  images, 
  dataCards = [], 
  vignette,
  className = '' 
}: ImageGridLShapeProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-12 gap-3">
        {/* Top left - large */}
        <div className="col-span-8 relative rounded-2xl overflow-hidden shadow-xl h-[260px]">
          <Image
            src={images[0]?.src || '/images/team-technicians.jpg'}
            alt={images[0]?.alt || 'Team'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {vignette && (
            <div className="absolute top-4 left-4">
              <VignetteBadge icon={vignette.icon} color={vignette.color} />
            </div>
          )}
        </div>
        
        {/* Top right - small */}
        <div className="col-span-4 relative rounded-2xl overflow-hidden shadow-lg h-[260px]">
          <Image
            src={images[1]?.src || '/images/happy-technician.png'}
            alt={images[1]?.alt || 'Technician'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </div>
        
        {/* Bottom left - medium */}
        <div className="col-span-5 relative rounded-2xl overflow-hidden shadow-lg h-[180px]">
          <Image
            src={images[2]?.src || '/images/business-meeting.png'}
            alt={images[2]?.alt || 'Meeting'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </div>
        
        {/* Bottom right - KPI area */}
        <div className="col-span-7 bg-white rounded-2xl shadow-lg p-5 h-[180px]">
          <div className="grid grid-cols-3 gap-3 h-full">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#059669]/10 mb-2">
                <Gauge className="w-5 h-5 text-[#059669]" />
              </div>
              <div className="text-2xl font-bold text-[#0C0A09]">98.5%</div>
              <div className="text-xs text-gray-500">Disponibilité</div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F97316]/10 mb-2">
                <Clock className="w-5 h-5 text-[#F97316]" />
              </div>
              <div className="text-2xl font-bold text-[#0C0A09]">2.4h</div>
              <div className="text-xs text-gray-500">MTTR</div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E3A8A]/10 mb-2">
                <Wrench className="w-5 h-5 text-[#1E3A8A]" />
              </div>
              <div className="text-2xl font-bold text-[#0C0A09]">89%</div>
              <div className="text-xs text-gray-500">FTFR</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Data Cards */}
      {dataCards.map((card, index) => (
        <div key={`card-${index}`} className={`absolute ${card.position} z-20`}>
          <DataCard
            value={card.value}
            label={card.label}
            change={card.change}
            icon={card.icon}
            chart={card.chart}
            chartData={card.chartData}
            chartColor={card.chartColor}
            className="w-36"
          />
        </div>
      ))}
    </div>
  )
}

// =====================================================
// IMAGE GRID TYPE 4 - Horizontal Strip with Cards
// =====================================================

interface ImageGridStripProps {
  images: Array<{
    src: string
    alt: string
  }>
  dataCards?: Array<{
    value: string
    label: string
    change?: string
    icon?: React.ReactNode
    chart?: 'line' | 'bar'
    chartData?: number[]
    chartColor?: string
  }>
  className?: string
}

export function ImageGridStrip({ images, dataCards = [], className = '' }: ImageGridStripProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex gap-3">
        {images.slice(0, 3).map((image, index) => (
          <div 
            key={index}
            className="relative flex-1 rounded-2xl overflow-hidden shadow-lg h-[280px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            
            {/* Card on each image */}
            {dataCards[index] && (
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    {dataCards[index].icon}
                    <div>
                      <div className="text-lg font-bold text-[#0C0A09]">{dataCards[index].value}</div>
                      <div className="text-xs text-gray-500">{dataCards[index].label}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// =====================================================
// IMAGE GRID TYPE 5 - Masonry Style
// =====================================================

interface ImageGridMasonryProps {
  images: Array<{
    src: string
    alt: string
    size: 'tall' | 'short'
  }>
  dataCards?: Array<{
    value: string
    label: string
    change?: string
    icon?: React.ReactNode
    position: string
  }>
  className?: string
}

export function ImageGridMasonry({ images, dataCards = [], className = '' }: ImageGridMasonryProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-3 gap-3">
        {images.slice(0, 5).map((image, index) => {
          const heights = {
            tall: 'h-[320px]',
            short: 'h-[180px]'
          }
          
          // Column spans for varied layout
          const colSpans = ['', '', 'col-span-2', '', '']
          
          return (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${heights[image.size]} ${colSpans[index] || ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )
        })}
      </div>
      
      {/* Floating Data Cards */}
      {dataCards.map((card, index) => (
        <div key={`card-${index}`} className={`absolute ${card.position} z-20`}>
          <div className="bg-white rounded-xl p-4 shadow-xl">
            <div className="flex items-center gap-2">
              {card.icon}
              <div>
                <div className="text-xl font-bold text-[#0C0A09]">{card.value}</div>
                <div className="text-xs text-gray-500">{card.label}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// =====================================================
// IMAGE GRID TYPE 6 - Triangle Layout (3 images)
// =====================================================

interface ImageGridTriangleProps {
  images: Array<{
    src: string
    alt: string
  }>
  dataCards?: Array<{
    value: string
    label: string
    change?: string
    icon?: React.ReactNode
    chart?: 'line' | 'bar'
    chartData?: number[]
    chartColor?: string
    position: string
  }>
  className?: string
}

export function ImageGridTriangle({ images, dataCards = [], className = '' }: ImageGridTriangleProps) {
  return (
    <div className={`relative ${className}`} style={{ minHeight: '420px' }}>
      {/* Top image - centered */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[200px] rounded-2xl overflow-hidden shadow-xl z-10">
        <Image
          src={images[0]?.src || '/images/team-technicians.jpg'}
          alt={images[0]?.alt || 'Team'}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      {/* Bottom left image */}
      <div className="absolute bottom-0 left-0 w-[45%] h-[200px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={images[1]?.src || '/images/happy-technician.png'}
          alt={images[1]?.alt || 'Technician'}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
      </div>
      
      {/* Bottom right image */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[200px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={images[2]?.src || '/images/business-meeting.png'}
          alt={images[2]?.alt || 'Meeting'}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
      </div>
      
      {/* Floating Data Cards */}
      {dataCards.map((card, index) => (
        <div key={`card-${index}`} className={`absolute ${card.position} z-20`}>
          <DataCard
            value={card.value}
            label={card.label}
            change={card.change}
            icon={card.icon}
            chart={card.chart}
            chartData={card.chartData}
            chartColor={card.chartColor}
            className="w-36"
          />
        </div>
      ))}
    </div>
  )
}

// =====================================================
// TEAM DIVERSE GRID - Specialized for diverse teams
// =====================================================

interface TeamDiverseGridProps {
  className?: string
  variant?: 'european-african' | 'mixed' | 'african-focused'
}

export function TeamDiverseGrid({ className = '', variant = 'european-african' }: TeamDiverseGridProps) {
  // Different image sets based on variant
  const imageSets = {
    'european-african': [
      { src: '/images/team-diverse-european-african-1.png', alt: 'Équipe mixte européene et africaine' },
      { src: '/images/team-diverse-european-african-2.png', alt: 'Techniciens collaborant' },
      { src: '/images/team-diverse-european-african-3.png', alt: 'Managers en réunion' },
    ],
    'mixed': [
      { src: '/images/team-technicians.jpg', alt: 'Techniciens' },
      { src: '/images/business-meeting.png', alt: 'Réunion équipe' },
      { src: '/images/team-meeting.png', alt: 'Collaboration' },
    ],
    'african-focused': [
      { src: '/images/team-african-technicians.png', alt: 'Techniciens africains' },
      { src: '/images/team-african-managers.png', alt: 'Managers africains' },
      { src: '/images/technician-african-action.png', alt: 'Technicien en action' },
    ]
  }

  const images = imageSets[variant]

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-12 gap-3">
        {/* Main image - left */}
        <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-xl h-[380px]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = '/images/team-technicians.jpg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <VignetteBadge 
              icon={<Users className="w-5 h-5 text-white" />} 
              color="#1E3A8A" 
            />
          </div>
        </div>
        
        {/* Right column - 2 images */}
        <div className="col-span-5 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[180px]">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/images/business-meeting.png'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[180px]">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/images/team-meeting.png'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
          </div>
        </div>
      </div>
      
      {/* Floating KPI Card */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
        <DataCard
          value="350+"
          label="Clients satisfaits"
          change="France & Afrique"
          icon={<Users className="w-4 h-4 text-[#F97316]" />}
          className="w-44"
        />
      </div>
    </div>
  )
}

// =====================================================
// PRESET: Maintenance Team Grid - Ready to use
// =====================================================

export function MaintenanceTeamGrid({ className = '' }: { className?: string }) {
  const performanceData = [78, 82, 85, 88, 92, 95]
  
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-12 gap-3">
        {/* Main large image */}
        <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-xl h-[380px]">
          <Image
            src="/images/team-technicians.jpg"
            alt="Équipe de maintenance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <VignetteBadge 
              icon={<Wrench className="w-5 h-5 text-white" />} 
              color="#F97316" 
            />
          </div>
        </div>
        
        {/* Right column */}
        <div className="col-span-5 flex flex-col gap-3">
          {/* Top image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[180px]">
            <Image
              src="/images/happy-technician.png"
              alt="Technicien satisfait"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
          </div>
          
          {/* Bottom - KPI card */}
          <div className="bg-white rounded-2xl shadow-lg p-4 flex-1 min-h-[180px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#059669]/10">
                <TrendingUp className="w-4 h-4 text-[#059669]" />
              </div>
              <span className="text-sm font-semibold text-[#0C0A09]">Performance</span>
            </div>
            <div className="text-3xl font-bold text-[#0C0A09] mb-1">+35%</div>
            <div className="text-xs text-gray-500 mb-2">Productivité équipes</div>
            <div className="h-[50px]">
              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="team-perf-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points="0,50 0,40 17,35 33,32 50,28 67,22 83,18 100,10 100,50"
                  fill="url(#team-perf-gradient)"
                />
                <polyline
                  points="0,40 17,35 33,32 50,28 67,22 83,18 100,10"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
