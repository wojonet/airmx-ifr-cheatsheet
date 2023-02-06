import React, { useContext, createContext, useState, useEffect } from 'react'

export interface CurrentSectionProps {
  currentSection: string | null
}

export interface CurrentSectionContextProps {
  currentSection: string | null
  setCurrentSection: (section: string | null) => void
  addViewableSection: (ref: React.RefObject<HTMLDivElement>) => void
}

const CurrentSectionContext = createContext<CurrentSectionContextProps>({
  currentSection: null,
  setCurrentSection: () => {},
  addViewableSection: () => {},
})

export const CurrentSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<CurrentSectionProps | null>(null)
  const [intersectionOberserver, setIntersectionObserver] = useState<IntersectionObserver | null>(null)

  useEffect(() => {
    let viewableSections: string[] = []
    const intObs = new IntersectionObserver(events => {
      events.forEach(event => {
        const secId = event.target.id
        if (event.isIntersecting) {
          viewableSections = [...viewableSections, secId]
        } else {
          viewableSections = viewableSections.filter(section => section !== secId)
        }
        console.log(viewableSections)
      })
      setCurrentSection({ currentSection: viewableSections.length > 0 ? viewableSections[0] : null })
    })
    setIntersectionObserver(intObs)
  }, [])

  const onSetCurrentSection = (section: string | null) => {
    setCurrentSection({ currentSection: section })
  }

  const addViewableSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current && intersectionOberserver) {
      intersectionOberserver.observe(ref.current)
    }
  }

  if (!intersectionOberserver) return null

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection: currentSection?.currentSection || null,
        setCurrentSection: onSetCurrentSection,
        addViewableSection,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  )
}

export const useCurrentSection = () => {
  return useContext(CurrentSectionContext)
}
