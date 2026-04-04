interface DumpTruckIconProps {
  className?: string
}

export function DumpTruckIcon({ className }: DumpTruckIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      {/* Cab */}
      <rect x="1" y="10" width="5" height="5" rx="0.5" />
      <path d="M2 10V8c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Dump bed body (angled up) */}
      <path d="M7 6 L13 3 L21 7 L19 14 L9 16 L7 14 Z" />
      
      {/* Gravel/materials inside the bed */}
      <circle cx="10" cy="6" r="1" opacity="0.8" />
      <circle cx="12" cy="5" r="0.8" opacity="0.8" />
      <circle cx="14" cy="5" r="1" opacity="0.8" />
      <circle cx="16" cy="6" r="0.8" opacity="0.8" />
      <circle cx="11" cy="7" r="0.6" opacity="0.8" />
      <circle cx="13.5" cy="6.5" r="0.7" opacity="0.8" />
      <circle cx="15.5" cy="7" r="0.6" opacity="0.8" />
      
      {/* Chassis/frame */}
      <path d="M6 15h16" stroke="currentColor" strokeWidth="2" />
      
      {/* Rear wheels */}
      <circle cx="6" cy="17.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="17.5" r="1" />
      
      <circle cx="11" cy="17.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="17.5" r="1" />
      
      <circle cx="16" cy="17.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="17.5" r="1" />
      
      <circle cx="20" cy="17.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="17.5" r="1" />
    </svg>
  )
}
