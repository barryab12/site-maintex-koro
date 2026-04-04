'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Download, Mail, CheckCircle, Loader2 } from 'lucide-react'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle: string
  resourceType: 'whitepaper' | 'template' | 'guide'
}

export function LeadCaptureModal({ isOpen, onClose, resourceTitle, resourceType }: LeadCaptureModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setIsSubmitting(true)
    
    // Simulate API call to save lead
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In production, you would:
    // 1. Save to database
    // 2. Send to CRM (HubSpot, Salesforce, etc.)
    // 3. Trigger email with download link
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Auto close after success
    setTimeout(() => {
      setIsSuccess(false)
      setEmail('')
      setName('')
      onClose()
    }, 2000)
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false)
      setEmail('')
      setName('')
      onClose()
    }
  }

  const resourceTypeLabels = {
    whitepaper: 'livre blanc',
    template: 'template',
    guide: 'guide'
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0D1160] mb-2">Merci !</h3>
            <p className="text-[#7A85A8]">
              Votre {resourceTypeLabels[resourceType]} sera téléchargé automatiquement.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-[#0D1160]">
                Télécharger le {resourceTypeLabels[resourceType]}
              </DialogTitle>
              <DialogDescription className="text-[#7A85A8]">
                <strong className="text-[#3B4470]">{resourceTitle}</strong>
                <br />
                Recevez le document directement par email.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="lead-name" className="text-sm font-medium text-[#3B4470]">
                  Prénom et nom *
                </Label>
                <Input
                  id="lead-name"
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full px-4 py-3 border border-[rgba(26,29,181,0.15)] rounded-lg text-sm focus:border-[#2B30D4] focus:ring-2 focus:ring-[#2B30D4]/10"
                />
              </div>
              
              <div>
                <Label htmlFor="lead-email" className="text-sm font-medium text-[#3B4470]">
                  Email professionnel *
                </Label>
                <Input
                  id="lead-email"
                  type="email"
                  required
                  placeholder="jean@entreprise.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full px-4 py-3 border border-[rgba(26,29,181,0.15)] rounded-lg text-sm focus:border-[#2B30D4] focus:ring-2 focus:ring-[#2B30D4]/10"
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-[#7A85A8]">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  En soumettant ce formulaire, vous acceptez de recevoir des communications de MAINTEX.
                  Vos données sont protégées conformément au RGPD.
                </span>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-base bg-[#2B30D4] hover:bg-[#1A1DB5] text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Recevoir le document
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
