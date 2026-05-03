'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TabNavigationProps {
  tabs: {
    id: string
    label: string
    icon?: ReactNode
  }[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

export function TabNavigation({ tabs, activeTab, onTabChange, className }: TabNavigationProps) {
  return (
    <div className={cn(
      "flex flex-wrap justify-center gap-2 p-2 bg-white rounded-2xl border border-gray-200 shadow-sm",
      className
    )}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
            activeTab === tab.id
              ? "bg-[#1E3A8A] text-white shadow-lg"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          )}
        >
          {tab.icon}
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

interface TabPanelProps {
  children: ReactNode
  isActive: boolean
  className?: string
}

export function TabPanel({ children, isActive, className }: TabPanelProps) {
  if (!isActive) return null
  return (
    <div className={cn("animate-fadeIn", className)}>
      {children}
    </div>
  )
}
