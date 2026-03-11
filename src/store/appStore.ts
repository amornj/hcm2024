import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  diagnosisTab: string
  setDiagnosisTab: (tab: string) => void

  scdRiskTab: string
  setScdRiskTab: (tab: string) => void

  managementTab: string
  setManagementTab: (tab: string) => void

  lifestyleTab: string
  setLifestyleTab: (tab: string) => void

  resetAll: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      diagnosisTab: 'clinical',
      setDiagnosisTab: (tab) => set({ diagnosisTab: tab }),

      scdRiskTab: 'adult',
      setScdRiskTab: (tab) => set({ scdRiskTab: tab }),

      managementTab: 'obstructive-pharm',
      setManagementTab: (tab) => set({ managementTab: tab }),

      lifestyleTab: 'exercise',
      setLifestyleTab: (tab) => set({ lifestyleTab: tab }),

      resetAll: () => set({
        diagnosisTab: 'clinical',
        scdRiskTab: 'adult',
        managementTab: 'obstructive-pharm',
        lifestyleTab: 'exercise',
      }),
    }),
    { name: 'hcm2024-app' }
  )
)
