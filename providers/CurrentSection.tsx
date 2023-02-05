import React, { useContext, createContext, useState } from 'react'

export interface CurrentSectionProps {
  currentSection: string | null
}

export interface CurrentSectionContextProps {
  currentSection: string | null
  setCurrentSection: (section: string | null) => void
}

const CurrentSectionContext = createContext<CurrentSectionContextProps>({
  currentSection: null,
  setCurrentSection: () => {},
})

export const CurrentSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<CurrentSectionProps | null>(null)

  const onSetCurrentSection = (section: string | null) => {
    setCurrentSection({ currentSection: section })
  }

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection: currentSection?.currentSection || null,
        setCurrentSection: onSetCurrentSection,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  )
}

export const useCurrentSection = () => {
  return useContext(CurrentSectionContext)
}
